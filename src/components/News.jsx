import React, { useContext } from "react";
import ValorantApiContext from "./context/ValorantApiContext";
const News = () => {
  const { news } = useContext(ValorantApiContext);
  let id = 0;
  return (
    <>
      <div
        className={`bg-gradient-to-r from-purple-200 flex justify-around items-center flex-wrap mx-auto`}
      >
        {news?.slice(0, 3).map((article) => {
          const date = article.date.split("T");
          id++;
          return (
            <div
              className="grid place-items-center bg-gray-400 antialiased text-gray-900 p-6"
              key={id}
            >
              <div>
                <img
                  src={article.banner_url}
                  alt="random imgee"
                  className="max-w-[340px] md:max-w-[505px] lg:max-w-[550px] object-cover object-center rounded-lg shadow-md"
                />

                <div className="relative px-4 -mt-16 w-full max-w-[340px] md:max-w-[505px] lg:max-w-[550px]">
                  <div className="bg-white-900 p-6 rounded-lg shadow-lg">
                    <div className="flex items-baseline">
                      <span className="bg-teal-200 text-teal-800 text-xs px-2 inline-block rounded-full  uppercase font-semibold tracking-wide">
                        Category:
                      </span>
                      <div className="ml-2 text-gray-600 uppercase text-xs font-semibold tracking-wider">
                        {article.category}
                      </div>
                    </div>
                    <a href={article.url} target="_blank" rel="noreferrer">
                      <h4 className="mt-1 text-xl font-semibold uppercase leading-tight truncate">
                        {article.title}
                      </h4>
                    </a>
                    <div className="mt-4">
                      <span className="text-teal-600 text-md font-semibold">
                        {date[0]}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default News;
