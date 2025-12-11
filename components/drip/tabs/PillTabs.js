import { forwardRef, useState } from "react";
import { tabs } from "./HorizontalTabs";
import { AnimatePresence, motion } from "motion/react";

export const PillTabs = forwardRef((props, ref) => {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <div
      ref={ref}
      className="w-fit bg-gray-100 rounded-md flex items-center gap-1 md:gap-2 p-2 md:p-2 overflow-x-auto"
    >
      {tabs.map((tab, index) => {
        const isTabActive = index === activeTab;
        return (
          <div
            className={`relative flex items-center justify-center gap-2 py-2 px-6 sm:px-10 md:py-2 group cursor-pointer`}
            key={index}
            onClick={() => setActiveTab(index)}
          >
            <AnimatePresence>
              {isTabActive && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute inset-0 bg-white rounded-full shadow-lg"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
            </AnimatePresence>
            <i
              className={`${tab.icon} text-lg z-10 md:text-xl transition-all duration-300`}
            ></i>
            <p
              className={`text-base z-10 md:text-lg transition-all duration-300 font-Cursive ${
                isTabActive
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
