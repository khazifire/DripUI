import { forwardRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const tabs = [
  {
    title: "Home",
    icon: "ri-home-4-line",
  },
  {
    title: "Profile",
    icon: "ri-profile-line",
  },
  {
    title: "Settings",
    icon: "ri-settings-2-line",
  },
];

export const HorizontalTabs = forwardRef((props, ref) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div
      ref={ref}
      className="w-fit bg-gray-100 rounded-lg flex items-center gap-1 md:gap-2 p-2 md:px-2 overflow-x-auto"
    >
      {tabs.map((tab, index) => {
        const isTabActive = index === activeTab;

        return (
          <div
            className={`relative flex items-center justify-center rounded-md gap-2 py-2 px-6 sm:px-10 md:py-2 group cursor-pointer`}
            key={index}
            onClick={() => setActiveTab(index)}
          >
            <AnimatePresence>
              {isTabActive && (
                <motion.div
                  layoutId="activeTabBg"
                  className="absolute inset-0 bg-white rounded-md shadow-lg"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
            </AnimatePresence>

            <i
              className={`${tab.icon} z-10 text-lg md:text-xl transition-all duration-300`}
            ></i>

            <p
              className={`text-base md:text-lg z-10 transition-all duration-300 font-Cursive ${
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
