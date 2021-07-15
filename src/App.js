import React, { useState } from "react";

function App() {
  return <div>
    <Folder name="Desktop">
      <Folder name="Music" >
        <File name="all_star.mp4"/>
        <File name="express_file.mp4"/>
      </Folder>
      <File name="dogs.jpeg" />
      <File name="cats.png" />
    </Folder>
    <Folder name="Applications">
      <File name="vscode" />
    </Folder>
  </div>
}

const Folder = (props) => {
  //console.log(props);
  const { name, children } = props;
  const [ isOpen, setIsOpen ] = useState(true);
  const direction = isOpen ? 'down' : 'right';
  
  const handleClick = () => setIsOpen(!isOpen);
  
  return <div>
    <span onClick={handleClick}>
      <i className="blue folder icon"></i>
      <i className={`caret ${direction} icon`}></i>
      </span>
    {name}
    <div style={{ marginLeft: '17px' }}>
      {isOpen ? children : null}
    </div>
  </div>
};

const File = (props) => {
  const { name } = props;
  const fileExtension = name.split('.')[1]; // grabs file extenstion assuming the extension is always in the second position
  const fileIcons = {
    mp4: 'headphones',
    jpeg: 'file image',
    png: 'file image ouotline',
  };

  return <div>
    <i className={`caret ${fileIcons[fileExtension]} icon`}></i>
    {name}
  </div>
}

export default App;
