// import React, { Fragment, useState } from "react";
// import CartonMovies from "../Page/Catton-Film/CattonMovies";
// import MultiCarousel from "react-multi-carousel";
// import Carousel from "react-multi-carousel";
// const responsive = {
//   superLargeDesktop: {
//     breakpoint: { max: 4000, min: 3000 },
//     items: 10,
//   },
//   desktop: {
//     breakpoint: { max: 3000, min: 1200 },
//     items: 7,
//   },
//   tablet: {
//     breakpoint: { max: 1200, min: 600 },
//     items: 3,
//   },
//   mobile: {
//     breakpoint: { max: 600, min: 0 },
//     items: 2,
//   },
// };

// const MovieCarousel = () => {
//   const [cartonCarousel, setCartonCarousel] = useState([cartonMovie]);
// //   const selecMoviecarton = cartonCarousel.slice(0, 10);
//   console.log("mmm", selecMoviecarton);
//   return (
//     <Fragment>
//       <div className="wrap">
//         <div className="list-carousel bg-cover bg-no-repeat bg-center w-[200px] h-[300px] relative hover:scale-110 transition-transform duration-500 ease-in-out cursor-pointer bg-white">
//           <Carousel responsive={responsive} autoPlay>
//             {selecMoviecarton.map((movie) => (
//               <CartonMovies movie={movie} />
//             ))}
//           </Carousel>
//         </div>
//       </div>
//     </Fragment>
//   );
// };

// export default MovieCarousel;
