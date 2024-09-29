/*import React from 'react';
import Counter from './counter.js';
function App() {
  return (
    <div>
      <Counter />
    </div>
  );
}
export default App;*/
/*import React from 'react';
import Header from './Header';
function App() {
  return (
    <div>
      <Header title="Hi everyone!" />
    </div>
  );
}
export default App;*/
/*import React, { useState } from 'react';
function TextInput() {
  const [text, setText] = useState('');
  const handleChange = (e) => {
    setText(e.target.value);
  };
  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={handleChange}
        placeholder="Enetr data"
      />
      <p>You entered: {text}</p>
    </div>
  );
}
export default TextInput;*/
/*import React, { useState } from 'react';
function Toggle() {
  const [isOn, setIsOn] = useState(false);
  const toggleState = () => {
    setIsOn(!isOn);
  };
  return (
    <div>
      <h1>{isOn ? "ON" : "OFF"}</h1>
      <button onClick={toggleState}>
        Toggle
      </button>
    </div>
  );
}
export default Toggle;*/
/*import React from 'react';
const List = ({ items }) => {
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
};
const App = () => {
  const items = ['bhavya', 'niha', 'maggie'];
  return (
    <div>
      <h1>Names</h1>
      <List items={items} />
    </div>
  );
};
export default App;*/
/*import React, { useState } from 'react';
const Child = ({ name }) => {
  return <h2>Hello, {name}!</h2>;
};
const Parent = () => {
  const [name, setName] = useState('Balla');
  const changeName = () => {
    setName('bhavyasri');
  };
  return (
    <div>
      <Child name={name} />
      <button onClick={changeName}>Change Name</button>
    </div>
  );
};
export default Parent;*/
//import React, { useState } from 'react';
/*const Child = ({ message }) => {
  return <h2>Message: {message}</h2>;
};
const Parent = ({ message }) => {
  return (
    <div>
      <Child message={message} />
    </div>
  );
};
const GrandParent = () => {
  const [message, setMessage] = useState('Hello from GrandParent!');
  return (
    <div>
      <Parent message={message} />
    </div>
  );
};
export default GrandParent;*/
import React, { useState } from 'react';
const ParentComponent = () => {
  const [color, setColor] = useState('blue');
  const changeColor = () => {
    setColor(prevColor => (prevColor === 'pink' ? 'red' : 'blue'));
  };
  return (
    <div>
      <h1 style={{ color }}>This is the Parent Component</h1>
      <ChildComponent changeColor={changeColor} />
    </div>
  );
};
const ChildComponent = ({ changeColor }) => {
  return (
    <button onClick={changeColor}>Change Parent Color</button>
  );
};
export default ParentComponent;





