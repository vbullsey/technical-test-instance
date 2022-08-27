import { useEffect } from "react";
import Link from "next/link";
import { motion, useAnimation } from "framer-motion";
import { useTypedSelector } from "@/redux/hooks";
import { RootState } from "@/redux/store";
import { data } from "./data";

const SideBar = () => {
  const controls = useAnimation();
  const controlText = useAnimation();
  const controlTitleText = useAnimation();

  const { isOpen } = useTypedSelector((state: RootState) => state.sidebar);

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
  };

  const showLess = () => {
    controls.start({
      width: "0px",
      transition: { duration: 0.001 },
    });

    controlText.start({
      opacity: 0,
      display: "none",
    });

    controlTitleText.start({
      opacity: 0,
    });
  };

  useEffect(() => {
    isOpen ? showMore() : showLess();
  }, [isOpen]);

  return (
    <motion.div
      animate={controls}
      className="max-w-[250px] w-[250px] bg-secondary animate duration-300 border-r sticky top-0 flex flex-col py-10 h-full min-h-screen group"
    >
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
                  <item.icon className="text-lg" />
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
