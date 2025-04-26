export default function AboutArticle({ className, highlightedWord, title, body }) {
  // Daliname title į dvi dalis aplink paryškinamą žodį
  const highlightTitle = () => {
    const parts = title.split(new RegExp(`(${highlightedWord})`, "gi"));
    return parts.map((part, i) =>
      part.toLowerCase() === highlightedWord.toLowerCase() ? (
        <span key={i} className="text-outrageous-orange-400 font-display">
          {part}
        </span>
      ) : (
        <span key={i}>{part}</span>
      )
    );
  };

  return (
    <article className={`${className} py-5`}>
      <header>
        <h2>{highlightTitle()}</h2>
      </header>
      <p className="mt-4 leading-normal xl:leading-[29px]">{body}</p>
    </article>
  );
}
