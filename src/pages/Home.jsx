import "../index.css";
import Type from "./Home/Type";

import NurseSvg from "./Home/Nurse_svg";
import Searchbar from "./Home/Searchbar";
import Page2background from "./Home/Page_2_background";
export default function Home() {
  // const [screenSize, setScreenSize] = useState(getCurrentDimension());

  // function getCurrentDimension() {
  //   return {
  //     width: window.innerWidth,
  //     height: window.innerHeight,
  //   };

  // }
  return (
    <div className="flex flex-wrap content-center w-full ">
      <div className="relative flex justify-between h-80">
        <Type></Type>
        <NurseSvg></NurseSvg>
      </div>

      <div className=" inline-block font-bold static w-full pt-[4rem] pl-4 h-[50vh] text-[40px] bg-violet-1">
        <h1>Book Doctors</h1>
        <h2>According to your location</h2>
        <Searchbar></Searchbar>
      </div>
      <Page2background></Page2background>
    </div>
  );
}
