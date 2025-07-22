import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import deloitteCert from "@/assets/certificates/deloitte.png";
import oracleFundamentals from "@/assets/certificates/oraclef.png";
import oracleTraining from "@/assets/certificates/oraclet.png";
import simplilearnWebDev from "@/assets/certificates/simplilearnwebdevbeg.png";


const certificates = [
  { img: deloitteCert },
  { img: oracleFundamentals },
  { img: oracleTraining },
  { img: simplilearnWebDev },
];

const CertificateSliderSwiper = () => {
  return (
    <div className="w-full py-10 ">
      <div
        className='skills-title flex gap-2.5 w-full mt-[10vw] items-center uppercase font-["bebas"] px-5 text-[18vw] text-transparent leading-10 md:mb-10'
      >
        <span className="bg-green-500 w-3 h-3 rounded-3xl"></span>
        <span>Certificates</span>
      </div>
      <Swiper
        modules={[Autoplay, EffectCoverflow]}
        effect="coverflow"
        centeredSlides={true}
        loop={true}
        slidesPerView={"auto"}
        speed={3000}
        grabCursor={true}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 400,
          modifier: 2.5,
          slideShadows: false,
        }}
        className="w-full max-w-full "
      >
        {certificates.map((cert, index) => (
          <SwiperSlide
            key={index}
            className="flex justify-center items-center"
            style={{ width: "65vw", maxWidth: "700px" }}
          >
            <img
              src={cert.img}
              alt={`Certificate ${index + 1}`}
              className="rounded-xl shadow-lg w-full h-auto object-contain"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CertificateSliderSwiper;
