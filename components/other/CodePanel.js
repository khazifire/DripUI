import React, { useState, useEffect, useContext } from 'react';
import Editor from '@monaco-editor/react';
import sdk from '@stackblitz/sdk';

export const ActiveVariantContext = React.createContext();

export function CodeVariant({ id, children }) {
  const { activeVariant, setActiveVariant, copyVariant } = useContext(ActiveVariantContext);
  
  const isSelected = activeVariant === id;
  
  return (
    <div 
      onClick={(e) => { e.stopPropagation(); setActiveVariant(id); }}
      onDoubleClick={(e) => { e.stopPropagation(); copyVariant(id); }}
      className={`transition-all duration-200 cursor-pointer rounded-md p-1 border-2 ${isSelected ? 'border-blue-400 bg-blue-50/20 ring-4 ring-blue-400/20' : 'border-transparent hover:border-gray-300 hover:bg-gray-50'}`}
    >
      {children}
    </div>
  );
}

export default function CodePanel({ children, snippets, title }) {
  const [activeTab, setActiveTab] = useState('html');
  const [copied, setCopied] = useState(false);
  
  // Use the first snippet key as the default active variant if snippets exist
  const variantKeys = Object.keys(snippets);
  const defaultVariant = variantKeys.length > 0 ? variantKeys[0] : null;
  const [activeVariant, setActiveVariant] = useState(defaultVariant);

  const currentSnippetGroup = snippets[activeVariant] || snippets[defaultVariant] || {};
  const currentCode = currentSnippetGroup[activeTab] || '';

  const handleCopy = async (overrideCode = null) => {
    try {
      await navigator.clipboard.writeText(overrideCode || currentCode);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy', err);
    }
  };

  const copyVariant = (id) => {
    setActiveVariant(id);
    const codeToCopy = snippets[id] && snippets[id][activeTab];
    if (codeToCopy) {
      handleCopy(codeToCopy);
    }
  };

  const openStackBlitz = () => {
    const isReact = activeTab === 'react' || activeTab === 'nextjs';
    sdk.openProject({
      title: title || 'DripUI Component',
      description: 'DripUI Component Code Sandbox',
      template: isReact ? 'create-react-app' : 'html-css',
      files: isReact
        ? {
            'src/App.js': currentCode,
            'src/index.js': `import React from "react";\\nimport { createRoot } from "react-dom/client";\\nimport App from "./App";\\n\\nconst rootElement = document.getElementById("root");\\nconst root = createRoot(rootElement);\\n\\nroot.render(<App />);`,
            'public/index.html': `<div id="root"></div>`,
          }
        : {
            'index.html': currentCode,
            'index.js': `// Add your JavaScript here`,
          },
      settings: {
        compile: { trigger: 'auto', clearConsole: false },
      },
    });
  };

  const openCodeSandbox = () => {
    const isReact = activeTab === 'react' || activeTab === 'nextjs';
    let files = {};
    if (isReact) {
      files = {
        'package.json': {
          content: {
            dependencies: { react: 'latest', 'react-dom': 'latest' },
          },
        },
        'src/App.js': { content: currentCode },
        'src/index.js': {
          content: `import React from "react";\\nimport { createRoot } from "react-dom/client";\\nimport App from "./App";\\n\\nconst rootElement = document.getElementById("root");\\nconst root = createRoot(rootElement);\\n\\nroot.render(<App />);`,
        },
        'public/index.html': { content: `<div id="root"></div>` },
      };
    } else {
      files = {
        'package.json': { content: { dependencies: {} } },
        'index.html': { content: currentCode },
      };
    }
    
    const parameters = btoa(JSON.stringify({ files }));
    const form = document.createElement('form');
    form.method = 'POST';
    form.action = 'https://codesandbox.io/api/v1/sandboxes/define';
    form.target = '_blank';
    
    const input = document.createElement('input');
    input.type = 'hidden';
    input.name = 'parameters';
    input.value = parameters;
    
    form.appendChild(input);
    document.body.appendChild(form);
    form.submit();
    form.remove();
  };

  const activeName = currentSnippetGroup.name || activeVariant;

  return (
    <ActiveVariantContext.Provider value={{ activeVariant, setActiveVariant, copyVariant }}>
      <div className="flex flex-col border border-gray-200 rounded-lg overflow-hidden my-8 shadow-sm">
        <div className="p-2 border-b border-gray-100 bg-white">
          <p className="text-xs text-center text-gray-500 bg-gray-50 p-1 rounded">Click to select a variant. Double click to quickly copy.</p>
        </div>
        <div className="p-6 bg-gray-50 border-b border-gray-200 flex items-center justify-center">
          {children}
        </div>
        
        <div className="flex flex-col bg-white">
          <div className="flex flex-row items-center justify-between border-b border-gray-200 px-4 py-2 bg-gray-50">
            <div className="flex items-center space-x-4">
              <div className="flex space-x-2">
                {['html', 'react', 'nextjs'].map((tab) => (
                  currentSnippetGroup[tab] && (
                    <button
                      key={tab}
                      className={`px-3 py-1.5 text-sm font-medium rounded-md transition-colors ${
                        activeTab === tab 
                          ? 'bg-blue-100 text-blue-700' 
                          : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                      }`}
                      onClick={() => setActiveTab(tab)}
                    >
                      {tab.toUpperCase()}
                    </button>
                  )
                ))}
              </div>
              {activeName && (
                <span className="bg-gray-200 text-gray-700 text-xs px-2 py-1 rounded border border-gray-300 shadow-sm font-mono">
                  {activeName}
                </span>
              )}
            </div>
            <div className="flex space-x-2">
              <button
                onClick={() => handleCopy()}
                className="inline-flex items-center gap-1 px-3 py-1.5 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                <i className={copied ? "ri-check-line" : "ri-clipboard-line"}></i>
                {copied ? 'Copied!' : 'Copy'}
              </button>
              <button
                onClick={openStackBlitz}
                className="inline-flex items-center gap-1 px-3 py-1.5 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                <i className="ri-flashlight-line"></i> StackBlitz
              </button>
              <button
                onClick={openCodeSandbox}
                className="inline-flex items-center gap-1 px-3 py-1.5 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                <i className="ri-code-box-line"></i> CodeSandbox
              </button>
            </div>
          </div>
          <div className="h-64 relative">
            <Editor
              height="100%"
              language={activeTab === 'html' ? 'html' : 'javascript'}
              theme="vs-dark"
              value={currentCode}
              options={{
                readOnly: true,
                minimap: { enabled: false },
                fontSize: 14,
                wordWrap: 'on',
                scrollBeyondLastLine: false,
                padding: { top: 16, bottom: 16 }
              }}
            />
          </div>
        </div>
      </div>
    </ActiveVariantContext.Provider>
  );
}
