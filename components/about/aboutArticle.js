export default function AboutArticle({className, highlightedWord, title, body }){
    return(
      <article className={`${className} py-5`}>
          <header>
            <h2 className="">
              <span className="text-outrageous-orange-400 font-display">{highlightedWord}</span> {title}
            </h2>
          </header>
          <p className="mt-4 leading-normal xl:leading-[29px]">
            {body}
          </p>

        </article>
    );
}