const ipRequestTimestamps = new Map();

export function rateLimit(ip, windowMs = 30 * 1000) {
  const now = Date.now();
  const lastTime = ipRequestTimestamps.get(ip) || 0;

  if (now - lastTime < windowMs) {
    return false; // Per dažnai
  }

  ipRequestTimestamps.set(ip, now);
  return true; // OK
}
