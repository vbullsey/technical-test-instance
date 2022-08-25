import { useState, useEffect } from "react";
import Link from "next/link";
import {
  BsFillArrowLeftSquareFill,
  BsFillArrowRightSquareFill,
} from "react-icons/bs";

import { motion, useAnimation } from "framer-motion";
import { data } from "./data";

const SideBar = () => {
  const [active, setActive] = useState(false);
  const controls = useAnimation();
  const controlText = useAnimation();
  const controlTitleText = useAnimation();

  const showMore = () => {
    controls.start({
      width: "250px",
      transition: { duration: 0.001 },
    });
    controlText.start({
      opacity: 1,
      display: "block",
      transition: { delay: 0.3 },
    });
    controlTitleText.start({
      opacity: 1,
      display: "block",

      transition: { delay: 0.3 },
    });

    setActive(true);
  };

  const showLess = () => {
    controls.start({
      width: "55px",
      transition: { duration: 0.001 },
    });

    controlText.start({
      opacity: 0,
      display: "none",
    });

    controlTitleText.start({
      opacity: 0,
    });

    setActive(false);
  };

  useEffect(() => {
    showMore();
  }, []);

  return (
    <motion.div
      animate={controls}
      className="max-w-[250px] bg-secondary animate duration-300 border-r relative flex flex-col py-10 min-h-screen group"
    >
      {active && (
        <BsFillArrowLeftSquareFill
          onClick={showLess}
          className="absolute hidden z-40 text-2xl cursor-pointer -right-4 top-10 group-hover:block "
        />
      )}
      {!active && (
        <BsFillArrowRightSquareFill
          onClick={showMore}
          className="absolute text-2xl z-40 cursor-pointer -right-4 top-10"
        />
      )}

      <div className="grow">
        {data.map((group, index) => (
          <div key={index} className="my-2">
            <motion.p
              animate={controlTitleText}
              className="mb-4 ml-4 text-sm font-bold text-gray-400"
            >
              {group.name}
            </motion.p>

            {group.items.map((item, index2) => (
              <Link key={index2} href={item.url}>
                <div
                  className={
                    "flex px-4 py-4 hover:bg-primary hover:text-white  text-gray-400 cursor-pointer"
                  }
                >
                  <item.icon className="text-lg  " />
                  <motion.p
                    animate={controlText}
                    className="ml-4 text-sm font-semibold "
                  >
                    {item.title}
                  </motion.p>
                </div>
              </Link>
            ))}
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default SideBar;
