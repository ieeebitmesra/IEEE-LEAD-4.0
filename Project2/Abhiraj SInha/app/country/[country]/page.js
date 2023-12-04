import Link from "next/link";


export default async function Article({params}) {
  const country=params.country;

  const apiResponse = await fetch(
    `https://newsapi.org/v2/top-headlines?country=${country}&pageSize=5&pageNumber=1`,
    {
        headers: {
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_NEWS_KEY}`,
        },
    },
  );
  const json = await apiResponse.json();
  const articles= json ?? {};
//   console.log(country, articles.articles)
  return (
    <>
      <div className="flex flex-col items-center justify-center w-full pt-8 gap-8 z-0">
        {articles.articles.map((article, index) => (
          <div key={index} className="mb-8 pb-8 w-full md:w-1/2">
            {!!article.title && !!article.description && !!article.urlToImage && !!article &&
            <Link href = {article.url} className="cursor-pointer relative">
              {!!article.urlToImage && <img src={article.urlToImage} className="w-full opacity-75 hue-rotate-15"/>}
              <div className="flex flex-col items-start justify-start absolute left-2 top-4 overflow-hidden z-0 p-2">
                <h1 className="text-lg font-bold">{article.title}</h1>
                <h2 className="text-md ">Source: {article.source.name}</h2>
                <p className="my-4 hidden lg:block">{article.description}</p>
              </div>
              
            </Link>
            }
          </div>
        ))}
      </div>
    </>
  );
}
