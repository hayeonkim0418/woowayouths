import Swiper from "https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs";
import { swiper_data } from "../data/swiper_data.js";

export const SlideSwiper = () => {
  const SwiperBind = () => {
    const swiperWrapper = document.querySelector(".swiper-wrapper");

    if (!swiperWrapper) return;

    swiperWrapper.innerHTML = swiper_data
      .map((item) => {
        return `
            <div class="swiper-slide">
                <img src="${item.imageUrl}" alt="${item.alt}"/>
            </div>
            `;
      })
      .join("");
  };
  SwiperBind();
  const swiper = new Swiper(".swiper", {
    // direction: "vertical",
    loop: true,
    autoplay: {
      delay: 4000,
    },

    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
};
