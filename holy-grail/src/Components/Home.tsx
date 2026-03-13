import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdCloseCircle } from "react-icons/io";
const Home = () => {
  const [showSlideMenu, setShowSlideMenu] = useState<boolean>(false);

  return (
    <div className="h-full w-full flex">
      <div className="h-full w-full flex flex-col p-[5px] gap-[5px] relative">
        <div
          className={`absolute bg-amber-500 h-full h-screen w-[250px] addBorder centerDiv transition-transform ease-in-out -translate-x-full
          ${showSlideMenu ? "translate-x-0" : ""}`}
        >
          <div className="h-full w-full flex flex-col">
            <div
              onClick={() => setShowSlideMenu(false)}
              className="flex justify-end w-[95%] h-[70px]"
            >
              <IoMdCloseCircle className="text-4xl" />
            </div>
            <div className="flex-1 centerDiv">List Of Navigation</div>
          </div>
        </div>
        <nav className="h-[10%] w-full addBorder flex">
          <div className="h-full w-[60px] centerDiv addBorder md:!hidden">
            <GiHamburgerMenu
              onClick={() => setShowSlideMenu(true)}
              className="text-[2rem]"
            />
          </div>
          <div className="addFont flex-1 min-w-0 centerDiv">
            Headers for the navigations
          </div>
        </nav>
        <div className="flex-1 min-h-0 addBorder flex flex-col centerDiv md:flex-row lg:gap-[10px]">
          <aside className="hidden md:flex md:justify-center md:items-center md:h-full md:w-[20%] lg:w-[25%]">
            Left Aside Content
          </aside>
          <main className="flex-1 min-h-0 w-full addBorder centerDiv md:h-full lg:flex-1">
            Main Content
          </main>
          <aside className="h-[100px] w-full addBorder centerDiv md:h-full md:w-[20%] lg:w-[25%]">
            Right Aside content
          </aside>
        </div>
        <footer className="h-[10%] w-full addBorder centerDiv">
          Footer for the page
        </footer>
      </div>
    </div>
  );
};
export default Home;
