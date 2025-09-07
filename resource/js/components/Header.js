import { GNB } from "./GNB.js";
import { IncludeHTML } from "./IncludeHTML.js";

export const Header = () => {
  IncludeHTML("../../components/header.html", ".header").then(() => {
    GNB();
  });
};
