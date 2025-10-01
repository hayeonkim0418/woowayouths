import { gnb_data } from "../data/gnb_data.js";

export const GNB = () => {
  const gnb = document.querySelector(".depth1");

  if (!gnb) return;

  const depth2 = (array) => {
    return array
      .map((item2) => {
        return `
            <li role="none">
                <a role="menuitem" href="${item2.depth2Link}">${item2.depth2Title}</a>
            </li>
        `;
      })
      .join("");
  };

  const GNBBind = () => {
    gnb.innerHTML = gnb_data
      .map((item) => {
        return `
            <li role="none">
                <a href="${item.depth1Link}">${item.depth1Title}</a>
                <div class="depth2" role="menu">
                    ${
                      item.depth2
                        ? `
                        <ul role="none">
                            ${depth2(item.depth2)}
                        </ul>
                        `
                        : ""
                    }
                </div>
            </li>
        `;
      })
      .join("");
  };
  GNBBind();

  const GnbEvent = () => {
    const depth1s = document.querySelectorAll(".depth1> li");

    if (!depth1s) return;

    depth1s.forEach((depth1) => {
      const depth1Link = depth1.querySelector("li");
      const subLink = depth1.querySelector(".depth2");

      const openMenu = () => {
        depth1.classList.add("active");
      };
      const closeMenu = () => {
        depth1.classList.remove("active");
      };

      depth1.addEventListener("mouseenter", openMenu);
      depth1.addEventListener("mouseleave", closeMenu);
      depth1.addEventListener("focusin", openMenu);
      subLink.addEventListener("focusout", (e) => {
        if (!subLink.contains(e.relatedTarget)) {
          closeMenu();
        }
      });
    });
  };
  GnbEvent();
};
