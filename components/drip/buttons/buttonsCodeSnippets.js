import { BasicBtns } from "./basicBtsns";
import { ColoredShadowBtns } from "./coloredShadowBtns";

const generateSnippets = (btnGroup, isIcon) => {
  const snippets = {};

  btnGroup.category.forEach(c => {
    // Generate HTML
    let html = '';
    if (!isIcon) {
      html = `<button class="text-sm px-5 py-3 ${c.style}">
  Get Started
</button>`;
    } else {
      html = `<button class="text-sm px-4 py-3 group inline-flex items-center ${c.style}">
  Get Started
  <svg class="flex-shrink-0 w-4 h-4 ml-3 ${c.icon || ''} ${c.iconHover || ''} group-hover:translate-x-1 transition-transform duration-500 ease-in" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M13.172 12l-4.95-4.95 1.414-1.414L16 12l-6.364 6.364-1.414-1.414z" />
  </svg>
</button>`;
    }

    // Generate React
    let react = '';
    const componentName = `${c.name.charAt(0).toUpperCase() + c.name.slice(1)}Button`;
    
    if (!isIcon) {
      react = `import React from 'react';

export default function ${componentName}() {
  return (
    <button className="text-sm px-5 py-3 ${c.style}">
      Get Started
    </button>
  );
}`;
    } else {
      react = `import React from 'react';

export default function ${componentName}Icon() {
  return (
    <button className="text-sm px-4 py-3 group inline-flex items-center ${c.style}">
      Get Started
      <svg className="flex-shrink-0 w-4 h-4 ml-3 ${c.icon || ''} ${c.iconHover || ''} group-hover:translate-x-1 transition-transform duration-500 ease-in" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
        <path fill="none" d="M0 0h24v24H0z" />
        <path d="M13.172 12l-4.95-4.95 1.414-1.414L16 12l-6.364 6.364-1.414-1.414z" />
      </svg>
    </button>
  );
}`;
    }

    snippets[c.id] = {
      name: c.name,
      html,
      react,
      nextjs: react
    };
  });

  return snippets;
};

export const BasicBtnsSnippets = generateSnippets(BasicBtns[0], false);
export const BasicIconsBtnsSnippets = generateSnippets(BasicBtns[0], true);
export const ColoredShadowBtnsSnippets = generateSnippets(ColoredShadowBtns[0], false);
