import { gnb_data } from "../data/gnb_data.js";

export const GNB = () => {
  const gnb = document.querySelector(".depth1");

  const depth2 = (array) => {
    return array
      .map((item2) => {
        return `
            <li>
                <a href="${item2.depth2Link}">${item2.depth2Title}</a>
            </li>
        `;
      })
      .join("");
  };

  const GNBBind = () => {
    gnb.innerHTML = gnb_data
      .map((item) => {
        return `
            <li>
                <a href="${item.depth1Link}">${item.depth1Title}</a>
                <div class="depth2">
                    ${
                      item.depth2
                        ? `
                        <ul>
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

    depth1s.forEach((depth1) => {
      depth1.addEventListener("mouseenter", (e) => {
        e.currentTarget.classList.add("active");
      });
      depth1.addEventListener("mouseleave", (e) => {
        e.currentTarget.classList.remove("active");
      });
    });
  };
  GnbEvent();
};
