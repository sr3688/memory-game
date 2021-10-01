import { contributorsData } from "./contributorsData.js";
import { createContributorsCard } from "./contributorSection.js";
let container = document.querySelector(".container");

contributorsData.forEach((item) => {
  createContributorsCard(item, container);
});
