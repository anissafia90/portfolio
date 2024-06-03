import { useState } from "react";
import "./main.css";
import { myProjects } from "./myProjects";

const Main = () => {
  const [currentActive, setcurrentActive] = useState("all");
  const [arr, setArr] = useState(myProjects);

  const handleClick = (buttonCategory) => {
    setcurrentActive(buttonCategory);

    const newArr = myProjects.filter((item) => {
      const ZZZ = item.category.find((myItem) => {
        return myItem === buttonCategory;
      });

      return ZZZ === buttonCategory;
    });

    setArr(newArr);
  };

  return (
    <main className="">
      <section className="flex  left-section">
        <button
          onClick={() => {
            setcurrentActive("all");
            setArr(myProjects);
          }}
          className={currentActive === "all" ? "active" : null}
        >
          all projects
        </button>

        <button
          onClick={() => {
            handleClick("HTML & CSS");
          }}
          className={currentActive === "HTML & CSS" ? "active" : null}
        >
          HTML & CSS
        </button>

        <button
          onClick={() => {
            handleClick("js");
          }}
          className={currentActive === "js" ? "active" : null}
        >
          JavaScript
        </button>
        <button
          onClick={() => {
            handleClick("react");
          }}
          className={currentActive === "react" ? "active" : null}
        >
          React
        </button>
        <button
          onClick={() => {
            handleClick("wordpress");
          }}
          className={currentActive === "wordpress" ? "active" : null}
        >
          wordpress
        </button>
      </section>

      <section className="flex right-section">
          {arr.map((item) => {
            return (
              <article key={item.id} className="card" >
                <img width={266} src={item.imgPath} alt="" />

                <div style={{ width: "266px" }} className="box">
                  <h1 className="title">{item.projectTitle}</h1>
                  

                  <div className="flex icons">
                    <div style={{ gap: "11px" }} className="flex">
                      <a href={item.link} className="icon-link"></a>
                      <a href={item.github}className="icon-github"></a>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
      </section>
    </main>
  );
};

export default Main;
