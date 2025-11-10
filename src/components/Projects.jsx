// import { content } from "../Content";
// // Import Swiper React components
// import { Swiper, SwiperSlide } from "swiper/react";

// // Import Swiper styles
// import "swiper/css";
// import "swiper/css/pagination";


// import { Pagination } from "swiper";

// const Projects = () => {
//   const { Projects } = content;
//   return (
//     <section className="bg-bg_light_primary" id="projects">
//       <div className="md:container px-5 pt-14 min-h-screen flex flex-col justify-between">
//         <div>
//           <h2 className="title" data-aos="fade-down">
//             {Projects.title}
//           </h2>
//           <h4 className="subtitle" data-aos="fade-down">
//             {Projects.subtitle}
//           </h4>
//           <br />
//         </div>
//         <div className="flex items-center lg:flex-row flex-col-reverse gap-5">
//           <img
//             src={Projects.image}
//             alt="..."
//             data-aos="fade-right"
//             className="max-w-[45vw] min-w-[22rem]"
//           />
//          {/* <Swiper
//   pagination={{ clickable: true }}
//   data-aos="fade-left"
//   spaceBetween={20}
//   modules={[Pagination]}
//   className="rounded-3xl pb-16 max-w-xs drop-shadow-primary self-start"
// >
//   {Projects.project_content.map((content, i) => (
//     <SwiperSlide
//       key={i}
//       className="bg-white rounded-3xl p-5 border-b-8 border-[#FAF9FD] h-fit"
//     >
//       <a
//         href={content.link}
//         target="_blank"
//         rel="noopener noreferrer"
//         className="block"
//       >
//         <img
//           src={content.image}
//           alt={content.title}
//           className="w-full h-48 object-cover rounded-2xl"
//         />
//       </a>
//       <div className="flex flex-col gap-1 mt-2">
//         <h5 className="font-bold font-Poppins">{content.title}</h5>
//         <a
//           href={content.link}
//           target="_blank"
//           rel="noopener noreferrer"
//           className="font-bold text-gray self-end"
//         >
//           Visiter
//         </a>
//       </div>
//     </SwiperSlide>
//   ))}
// </Swiper> */}
// <Swiper
//   pagination={{ clickable: true }}
//   data-aos="fade-left"
//   spaceBetween={20}
//   modules={[Pagination]}
//   className="rounded-3xl pb-16 max-w-xs drop-shadow-primary self-start"
// >
//   {Projects.project_content.map((content, i) => (
//     <SwiperSlide
//       key={i}
//       className="bg-white rounded-3xl p-5 border-b-8 border-[#FAF9FD] h-fit"
//     >
//       {/* Image sans lien */}
//       <img
//         src={content.image}
//         alt={content.title}
//         className="w-full h-64 md:h-72 object-cover rounded-2xl"
//       />
//       <div className="flex flex-col gap-1 mt-2">
//         <h5 className="font-bold font-Poppins">{content.title}</h5>
//         {/* Bouton "Voir" sans lien */}
//         <span className="font-bold text-gray self-end cursor-default">Voir</span>
//       </div>
//     </SwiperSlide>
//   ))}
// </Swiper>



//         </div>
//       </div>
//     </section>
//   );
// };

// export default Projects;
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import { content } from "../Content";

const Projects = () => {
  const { Projects } = content;
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section className="bg-bg_light_primary" id="projects">
      <div className="md:container px-5 pt-14 min-h-screen flex flex-col justify-between">
        <div>
          <h2 className="title" data-aos="fade-down">{Projects.title}</h2>
          <h4 className="subtitle" data-aos="fade-down">{Projects.subtitle}</h4>
          <br />
        </div>
        <div className="flex items-center lg:flex-row flex-col-reverse gap-5">
          <img
            src={Projects.image}
            alt="..."
            data-aos="fade-right"
            className="max-w-[45vw] min-w-[22rem]"
          />
          <Swiper
            pagination={{ clickable: true }}
            data-aos="fade-left"
            spaceBetween={20}
            modules={[Pagination]}
            className="rounded-3xl pb-16 max-w-xs drop-shadow-primary self-start"
          >
            {Projects.project_content.map((content, i) => (
              <SwiperSlide
                key={i}
                className="bg-white rounded-3xl p-5 border-b-8 border-[#FAF9FD] h-fit"
              >
                {/* Clique pour ouvrir le modal */}
                <img
                  src={content.image}
                  alt={content.title}
                  className="w-full h-64 md:h-72 object-cover rounded-2xl cursor-pointer"
                  onClick={() => setSelectedImage(content.image)}
                />
                <div className="flex flex-col gap-1 mt-2">
                  <h5 className="font-bold font-Poppins">{content.title}</h5>
                  <span className="font-bold text-gray self-end cursor-default">Voir</span>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      {/* Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
          onClick={() => setSelectedImage(null)}
        >
          <img
            src={selectedImage}
            alt="Agrandie"
            className="max-h-[90vh] max-w-[90vw] rounded-xl shadow-lg"
          />
        </div>
      )}
    </section>
  );
};

export default Projects;
