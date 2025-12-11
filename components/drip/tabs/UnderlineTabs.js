import { forwardRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { tabs } from "./HorizontalTabs";

export const UnderlineTabs = forwardRef((props, ref) => {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <div
      ref={ref}
      className="w-fit bg-gray-100 rounded-lg flex items-center gap-1 md:gap-2 p-2 md:px-2 md:py-2 overflow-x-auto"
    >
      {tabs.map((tab, index) => {
        const isActive = index === activeTab;

        return (
          <div
            key={index}
            className={`relative flex items-center justify-center gap-2 py-2 px-6 sm:px-10 md:py-2 group cursor-pointer transition-all duration-300 ease-in-out`}
            onClick={() => setActiveTab(index)}
          >
            <AnimatePresence>
              {isActive && (
                <motion.div
                  layoutId="underline"
                  className="absolute bottom-0 left-0 h-[2px] w-full bg-gray-700"
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 28,
                  }}
                />
              )}
            </AnimatePresence>

            <i
              className={`${
                tab.icon
              } text-lg md:text-xl transition-all duration-300 ${
                isActive ? "text-gray-900" : "text-gray-600"
              }`}
            ></i>

            <p
              className={`text-base md:text-lg font-Cursive transition-all duration-300 ${
                isActive
                  ? "font-bold text-gray-900"
                  : "font-medium text-gray-900 group-hover:text-gray-700"
              }`}
            >
              {tab.title}
            </p>
          </div>
        );
      })}
    </div>
  );
});
