import Link from "next/link";
import { useState, useEffect } from "react";

const ComponentListing = ({ featured = 0 }) => {
  const [list, setList] = useState(undefined);
  const components = [
    {
      name: "buttons",
      count: 3,
      icon: "ri-toggle-line",
      featured: true,
    },
    {
      name: "cards",
      count: 4,
      icon: "ri-refund-line",
      featured: true,
    },
    {
      name: "headers",
      count: 2,
      icon: "ri-layout-top-line",
      featured: true,
    },
    {
      name: "footers",
      count: 2,
      icon: "ri-layout-bottom-line",
      featured: true,
    },
    {
      name: "alerts",
      count: 3,
      icon: "ri-alert-fill",
      featured: true,
    },
    {
      name: "signin",
      count: 2,
      icon: "ri-login-box-line",
      featured: true,
    },
  ];

  useEffect(() => {
    if (featured !== 0) {
      setList([...components.slice(0, featured)]);
    }
  }, [featured]);

  return (
    <div className="p-6 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
      {(list || components)?.map((component) => (
        <Link
          key={component.name}
          href={`/docs/${component.count ? component.name : "#"}`}
        >
          <a
            className={`relative group p-6 bg-white shadow-md rounded-xl hover:shadow-lg transition-transform transform hover:-translate-y-1 ${
              !component.count ? "opacity-60 pointer-events-none" : ""
            }`}
          >
            <div className="flex flex-col items-center text-center space-y-4">
              {/* Icon */}
              <i
                className={`${component.icon} text-4xl text-blue-500 group-hover:scale-110 transition-transform`}
              ></i>
              {/* Component Name */}
              <h3 className="text-lg font-semibold capitalize text-gray-800 group-hover:text-blue-600">
                {component.name}
              </h3>
              {/* Count */}
              <span className="text-sm text-gray-600">
                {component.count > 1
                  ? `${component.count} Components`
                  : component.count
                  ? `${component.count} Component`
                  : "Coming Soon"}
              </span>
            </div>
            {/* External Link Icon */}
            <i className="ri-external-link-line absolute top-3 right-3 text-gray-400 group-hover:text-blue-500 group-hover:animate-spin"></i>
          </a>
        </Link>
      ))}
    </div>
  );
};
export default ComponentListing;
