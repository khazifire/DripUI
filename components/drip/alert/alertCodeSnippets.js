import { SoftColor, SolidAlert, RoundBorder, IconAlert } from "./alertData";

const generateSnippets = (dataArray, arrayName, componentType) => {
  const snippets = {};
  
  dataArray.forEach(item => {
    // Determine the HTML string
    let html = '';
    if (componentType === 'icon') {
      html = `<div class="${item.style} flex flex-row items-center gap-2" role="alert">
  <i class="${item.icon} text-sm font-bold"></i>
  <span class="font-bold">${item.span}</span> ${item.text.replace('alert!', '')}
</div>`;
    } else {
      html = `<div class="${item.style}" role="alert">
  <span class="font-bold">${item.span}</span> ${item.text.replace('alert!', '')}
</div>`;
    }

    // Determine the React string
    let react = '';
    if (componentType === 'icon') {
       react = `import React from 'react';

export default function ${item.span}${arrayName}() {
  return (
    <div className="${item.style} flex flex-row items-center gap-2" role="alert">
      <i className="${item.icon} text-sm font-bold"></i>
      <span className="font-bold">${item.span}</span> ${item.text.replace('alert!', '')}
    </div>
  );
}`;
    } else {
       react = `import React from 'react';

export default function ${item.span}${arrayName}() {
  return (
    <div className="${item.style}" role="alert">
      <span className="font-bold">${item.span}</span> ${item.text.replace('alert!', '')}
    </div>
  );
}`;
    }

    snippets[item.id] = {
      name: item.name,
      html,
      react,
      nextjs: react
    };
  });

  return snippets;
};

export const SolidAlertSnippets = generateSnippets(SolidAlert, 'SolidAlert', 'standard');
export const SoftColorSnippets = generateSnippets(SoftColor, 'SoftAlert', 'standard');
export const RoundBorderSnippets = generateSnippets(RoundBorder, 'RoundAlert', 'standard');
export const IconAlertSnippets = generateSnippets(IconAlert, 'IconAlert', 'icon');
