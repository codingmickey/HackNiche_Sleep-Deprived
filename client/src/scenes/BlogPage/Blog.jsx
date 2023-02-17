import React from 'react';
import MDEditor from '@uiw/react-md-editor';
import ReactMarkdown from 'react-markdown';

export const Blog = () => {
  const [value, setValue] = React.useState('**Hello world!!!**');
  // console.log(value);

  return (
    <>
      {/* <ReactMarkdown source={input} /> */}
      <div className="w-[75%] mx-auto">
        <div className="container my-20">
          <div className="text-lg mb-2">Post your personalised blogs here</div>
          <MDEditor value={value} onChange={setValue} />
          <MDEditor.Markdown
            source={value}
            style={{ whiteSpace: 'pre-wrap' }}
          />
        </div>
      </div>
    </>
  );
};
