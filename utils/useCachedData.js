// =============================
// useCachedData.js (hook)
// =============================
import { useState, useEffect } from "react";

/**
 * Universal localStorage-based cache hook.
 *
 * @param {string} key              – unique cache key.
 * @param {() => Promise<any>} fn   – async function returning fresh data.
 * @param {Array<any>} deps         – extra deps that force refetch (e.g. originCategory).
 * @param {number} ttlMs            – time-to-live in ms (default 6 h).
 */
export function useCachedData(key, fn, deps = [], ttlMs = 21_600_000) {
  const [data, setData] = useState(null);
  const [loading, setLoad] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let mounted = true;
    async function load() {
      try {
        setLoad(true);
        setError(null);

        const cached = localStorage.getItem(key);
        const cachedTs = Number(localStorage.getItem(`${key}-ts`));
        const freshNeeded = !cached || Date.now() - cachedTs > ttlMs;

        if (!freshNeeded) {
          setData(JSON.parse(cached));
          setLoad(false);
          return;
        }

        const fresh = await fn();
        if (!mounted) return;
        setData(fresh);
        localStorage.setItem(key, JSON.stringify(fresh));
        localStorage.setItem(`${key}-ts`, Date.now().toString());
      } catch (e) {
        if (mounted) setError(e);
      } finally {
        if (mounted) setLoad(false);
      }
    }
    load();

    return () => {
      mounted = false;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps); // deps + key kept stable by caller

  return { data, loading, error };
}
