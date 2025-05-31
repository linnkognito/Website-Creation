'use client';

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { nightOwl } from 'react-syntax-highlighter/dist/esm/styles/prism';

function CodeSnippet() {
  const codeString = `
  function Cube({ children, className = '' }) {
    return (
      <div
        className={\`aspect-square p-5
        border-10 border-white rounded-2xl
        shadow-subtle hover:shadow-indigo-700/50
        \${className}\`}
      >
        {children}
      </div>
    );
  }
  
  export default Cube;
  `;

  return (
    <div className='w-full max-w-full max-h-[400px] rounded-2xl overflow-hidden shadow-glow-ind'>
      <SyntaxHighlighter
        language='javascript'
        style={nightOwl}
        wrapLines={true}
        customStyle={{
          maxHeight: '450px',
          overflow: 'hidden',
          borderRadius: '1rem',
          margin: 0,
        }}
      >
        {codeString}
      </SyntaxHighlighter>
    </div>
  );
}

export default CodeSnippet;
