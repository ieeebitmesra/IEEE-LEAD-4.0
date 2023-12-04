import Link from "next/link";


export default async function Article({params}) {
  const category=params.cat;

  const apiResponse = await fetch(
    `https://newsapi.org/v2/top-headlines?country=us&pageSize=5&pageNumber=1&category=${category}`,
    {
        headers: {
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_NEWS_KEY}`,
        },
    },
  );
  const json = await apiResponse.json();
  const { articles } = json ?? {};

  return (
    <>
      <div className="flex flex-col items-center justify-center w-full mt-8 gap-8">
        {articles.map((article, index) => (
          <div key={index} className="mb-8 pb-8 w-full md:w-1/2 border-black">
            {!!article.title && !!article.description && !!article.urlToImage && !!article &&
            <Link href = {article.url} className="cursor-pointer relative">
              {!!article.urlToImage && <img src={article.urlToImage} className="w-full  opacity-75 hue-rotate-15"/>}
              <div className="flex flex-col items-start justify-start absolute left-2 top-4 overflow-hidden p-2">
                <h1 className="text-lg font-bold">{article.title}</h1>
                <h2 className="text-md ">Source: {article.source.name}</h2>
                <p className="my-4 hidden lg:block">{article.description}</p>
              </div>
            </Link>
            }
          </div>
        ))}
      </div>

      {/* Paginator */}
      {/* <div className="w-full flex justify-center">
        <Link
          className={parseFloat(pageNumber) === 1 ? "cursor-not-allowed text-slate-400 m-8" : "cursor-pointer m-8"}
          href={pageNumber>1 ? `/feed/${pageNumber-1}`: '/feed/1'}
        >
          Previous Page
        </Link>
        <div className="m-8">#{pageNumber}</div>
        <Link
          className={parseFloat(pageNumber) === 5 ? "cursor-not-allowed text-slate-400 m-8" : "cursor-pointer< m-8" }
          href={parseFloat(pageNumber)<5 ? `/feed/${(parseFloat(pageNumber)+parseFloat(1))}`:'/feed/1'}
        >
          Next Page
        </Link>
      </div> */}
    </>
  );
}
