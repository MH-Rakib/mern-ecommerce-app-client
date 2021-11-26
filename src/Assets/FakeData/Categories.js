import one from "../../Assets/Images/Categories/01.png";
import two from "../../Assets/Images/Categories/02.png";
import three from "../../Assets/Images/Categories/03.png";

const catagories = [
  {
    name: "Leather Bags",
    parentCategory: "bags",
    image: one,
    subCategory: ["boot", "elevetor", "formal", "lofer"],
  },
  {
    name: "Leather Shoes",
    parentCategory: "shoes",
    image: two,
    subCategory: ["backpack", "barrel", "brifcase", "satchel"],
  },
  {
    name: "Customizable T-Shirt",
    parentCategory: "tShirts",
    image: three,
    subCategory: ["men", "women"],
  },
];
export default catagories;
