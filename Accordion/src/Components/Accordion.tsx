import { useState } from "react";
import type { AccordionItem } from "../Types/accordion";
import {
  IoIosArrowDropdownCircle,
  IoIosArrowDropupCircle,
} from "react-icons/io";

type AccordianProps = {
  items: AccordionItem[];
};

const Accordion = ({ items }: AccordianProps) => {
  const [listFlag, setListFlag] = useState<boolean[]>(
    new Array(items.length).fill(false),
  );

  const handleToggle = (index: number) => {
    setListFlag((prev) =>
      prev.map((flag, arrayIndex) => {
        if (arrayIndex == index) return !flag;
        else return flag;
      }),
    );
  };

  return (
    <div className="h-auto w-[300px] flex flex-col centerDiv gap-[2px] addFont sm:w-[95%] md:w-[90%] lg:w-[80%]">
      <div className="mb-[10px] addHeadingCss addFont font-bold text-[3rem] sm:text-[4rem] md:text-[5rem] lg:text-[6rem] ">
        Accordion
      </div>

      {items.map((item, index) => (
        <div
          key={`accordionList-${index}`}
          className="h-auto w-full flex flex-col addShadow mt-[5px]"
        >
          <div
            onClick={() => handleToggle(index)}
            className="h-[50px] w-full flex"
          >
            <span className="h-full w-[80%] flex items-center pl-[10px] font-bold text-[1.2rem]">
              {item.title}
            </span>
            <span className="h-full w-[20%] centerDiv">
              {listFlag[index] ? (
                <IoIosArrowDropupCircle className="text-[1.6rem]" />
              ) : (
                <IoIosArrowDropdownCircle className="text-[1.6rem]" />
              )}
            </span>
          </div>
          <div
            className={`h-auto w-full pl-[10px] pr-[10px] pb-[5px] overflow-hidden transition-all duration-500 ease-in-out ${listFlag[index] ? `max-h-[100px] opacity-100 overflow-scroll` : `max-h-[0px] opacity-0`}`}
          >
            {listFlag[index] && (
              <div className="h-auto w-full text-left">{item.content}</div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};
export default Accordion;
