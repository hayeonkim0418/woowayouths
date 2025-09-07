import { IncludeHTML } from "./IncludeHTML.js";

export const Footer = () => {
  IncludeHTML("../components/footer.html", ".footer").then(() => {
    const siteEvent = () => {
      const siteBtn = document.querySelector(".site-btn");
      const siteList = document.querySelector(".site-list");

      if (!siteBtn && !siteList) return;

      siteBtn.addEventListener("click", (e) => {
        e.currentTarget.classList.toggle("on");
        siteList.classList.toggle("on");
      });
    };
    siteEvent();
  });
};
