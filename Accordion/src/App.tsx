import "./App.css";
import type { AccordionItem } from "./Types/accordion";
import Accordian from "./Components/Accordion";

function App() {
  const data: AccordionItem[] = [
    {
      id: 1,
      title: "What is React?",
      content:
        "ReactJS is a component-based JavaScript library used to build dynamic and interactive user interfaces. It simplifies the creation of single-page applications (SPAs) with a focus on performance and maintainability.",
    },
    {
      id: 2,
      title: "What is TypeScript?",
      content:
        "TypeScript is a powerful, open-source programming language developed and maintained by Microsoft. It is a syntactical superset of JavaScript, which means that any valid JavaScript code is also valid TypeScript code. TypeScript extends JavaScript by adding static type definitions, classes, interfaces, and other features that facilitate building and managing large-scale applications ",
    },
    {
      id: 3,
      title: "What is Tailwind CSS?",
      content:
        "Tailwind CSS is utility-first CSS framework that lets you build custom designs directly in your HTML. Unlike traditional frameworks like Bootstrap, it doesn't give you pre-designed components (like buttons or cards) instead, it gives you low-level utility classes that you mix and match to build whatever you want",
    },
  ];

  return (
    <div className="h-[100vh] w-[100vw] bg-white centerDiv addBorder">
      <Accordian items={data} />
    </div>
  );
}

export default App;
