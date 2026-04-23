import { basicNavbars } from "./basicNavbars";

const generateSnippets = (navData) => {
  const snippets = {};

  navData.forEach((navbarObj, index) => {
    navbarObj.category.forEach(nav => {
      // HTML snippet logic for the specific navbar
      const html = `<nav class="${nav.style}">
  <input type="checkbox" id="${nav.id}-checkbox" class="hidden peer" />
  <div class="${nav.logoStyle}">Logo</div>
  <ul class="${nav.listContainerStyle}">
${nav.children.map(child => `    <li><a href="${child.href}"><span class="${nav.childrenStyle}">${child.text}</span></a></li>`).join("\\n")}
  </ul>
  <div class="relative flex items-center justify-center w-12 h-12 cursor-pointer">
    <label htmlFor="${nav.id}-checkbox" class="${nav.labelStyle}"></label>
  </div>
</nav>`;

      // React Snippet logic
      const react = `import React from 'react';

export default function Navbar() {
  return (
    <nav className="${nav.style}">
      <input type="checkbox" id="${nav.id}-checkbox" className="hidden peer" />
      <div className="${nav.logoStyle}">Logo</div>
      <ul className="${nav.listContainerStyle}">
${nav.children.map(child => `        <li><a href="${child.href}"><span className="${nav.childrenStyle}">${child.text}</span></a></li>`).join("\\n")}
      </ul>
      <div className="relative flex items-center justify-center w-12 h-12 cursor-pointer">
        <label htmlFor="${nav.id}-checkbox" className="${nav.labelStyle}"></label>
      </div>
    </nav>
  );
}`;

      snippets[nav.id] = {
        name: \`Variant \${index + 1}\`,
        html,
        react,
        nextjs: react
      };
    });
  });

  return snippets;
};

export const NavbarsSnippets = generateSnippets(basicNavbars);
