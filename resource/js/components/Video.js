import { video_data } from "../data/video_data.js";

export const Video = () => {
  const videoList = document.querySelector(".video-list");

  if (!videoList) return;

  const VideoBind = () => {
    videoList.innerHTML = video_data
      .map((item) => {
        return `
            <li>
            <a class="video-box" href="#" title="${item.title}">
              <video src="${item.videoUrl}" loop="" muted="" playsinline="" poster="${item.videoImg}" autoplay=""></video>
            </a>
            <a class="video-txt" href="#">
              <p>${item.title}</p>
              <span>${item.content}</span>
            </a>
          </li>
        `;
      })
      .join("");
  };
  VideoBind();
};
