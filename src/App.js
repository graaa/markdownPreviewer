import './App.css';
import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';

function App(){
  const [text, setText] = useState("Difficulties increase the nearer we get to the goal.");
  const handleChange = (event) => {
    setText(event.target.value);
  };
  return(
    <div>
      <div className='editorWrap'>
        <div className='toolbar'>
          <i class="fa-regular fa-keyboard"></i>
          <span>Editor</span>
          <i class="fa fa-arrows-alt"></i>
        </div>
        <textarea id='editor' onChange={handleChange}></textarea>
      </div>
      <div className='previewWrap'>
        <div className='toolbar'>
          <i class="fa-regular fa-keyboard"></i>
          <span>Previewer</span>
          <i class="fa fa-arrows-alt"></i>
        </div>
        <div id='previewer'><ReactMarkdown id='reactmarkdown'>{text}</ReactMarkdown>
        </div>
      </div>
    </div>
    
  );
}

export default App;
