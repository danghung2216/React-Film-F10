// import PropTypes from "prop-types";

// interface IMovieList {
//   title: string;
//   data: IMovieList[];
// }

// const MovieList: React.FC<IMovieList[]> = ({ title, data }) => {
//   return (
//     <div className="my-10 px-10 max-w-full ">
//       <h2 className="text-xl uppercase mb-4">{title}</h2>

//       {data?.map((movie) => (
//         <div
//           key={movie.id}
//           className="bg-cover bg-no-repeat bg-center w-[200px] h-[300px] relative hover:scale-110 transition-transform duration-500 ease-in-out cursor-pointer"
//           style={{
//             backgroundImage: `url(${import.meta.env.VITE_IMG_URL}${
//               movie.poster_path
//             })`,
//           }}
//         >
//           <div className="bg-black w-full h-full opacity-40 absolute top-0 left-0 z-0" />
//           <div className="relative  p-4 flex flex-col items-center justify-end h-full">
//             <h3 className="text-md uppercase">
//               {movie.name || movie.title || movie.original_title}
//             </h3>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };
// // MovieList.propTypes = {
// //   title: PropTypes.string.isRequired,
// //   data: PropTypes.array,
// // };

// export default MovieList;
