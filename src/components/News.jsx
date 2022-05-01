// import React, { useContext } from "react";
// import ValorantApiContext from "./context/ValorantApiContext";
// const News = () => {
//   const { news } = useContext(ValorantApiContext);

//   return (
//     <>
//       <div className="bg-gradient-to-r from-purple-200 grid grid-cols-1 mg:grid-cols-2 lg:grid-cols-3 gap-2 mx-auto">
//         {news?.map((article) => {
//           console.log(article);
//           return (
//             <div class="grid h-screen place-items-center bg-gray-400 antialiased text-gray-900 p-6">
//               <div>
//                 <img
//                   src={article.banner_url}
//                   alt="random imgee"
//                   class="w-full object-cover object-center rounded-lg shadow-md"
//                 />

//                 <div class="relative px-4 -mt-16  ">
//                   <div class="bg-white-900 p-6 rounded-lg shadow-lg">
//                     <div class="flex items-baseline">
//                       <span class="bg-teal-200 text-teal-800 text-xs px-2 inline-block rounded-full  uppercase font-semibold tracking-wide">
//                         Category:
//                       </span>
//                       <div class="ml-2 text-gray-600 uppercase text-xs font-semibold tracking-wider">
//                         {article.category}
//                       </div>
//                     </div>
//                     <a href={article.url} target="_blank" rel="noreferrer">
//                       <h4 class="mt-1 text-xl font-semibold uppercase leading-tight truncate">
//                         {article.title}
//                       </h4>
//                     </a>
//                     <div class="mt-4">
//                       <span class="text-teal-600 text-md font-semibold">
//                         {article.date.toLocaleString()}
//                       </span>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           );
//         })}
//       </div>
//     </>
//   );
// };

// export default News;
