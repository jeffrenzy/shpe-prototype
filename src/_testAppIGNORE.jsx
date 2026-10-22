import { useState } from 'react'
import './App.css'




// Random useless data
const POOP_LINK = "https://as2.ftcdn.net/v2/jpg/01/24/16/05/1000_F_124160594_YPRXLrqBxulFtIqD8DQCHAxhaJdWaWky.jpg";
const USER = {
  name: "FartBoi47",
  poopCount: 6,
  products: [
    { title: 'Cabbage', id: 1 },
    { title: 'Garlic', id: 2 },
    { title: 'Apple', id: 3 },
  ]
};



// Simple button component with some props that take in stuff from the useState hook
function MyButton({count, setCount}) { // count and setCount are "props" for this Button
  const onClick = () => {
    setCount(count+1); 
  };

  return (
    <button className='cool-button' onClick={onClick}>Clickz: {count}</button>
  ); 
}

function App() {
  // this usecase of the map func turns a list of objs to a list of JSX <li> stuff
  const listItems = USER.products.map(entry => <li>
    Title: {entry.title} | Id: {entry.id}
  </li>);

  // useState hook
  const [count, setCount] = useState(0); // parameter for useState is the initial value of text


  return (
    // this is JSX for da app - more strict than html, and we can only return 1 element (but with a lotta children)
    <>
      <h1>Poopbook</h1> 
      <h2>Greetings, {USER.name}</h2>
      <p>Foods eaten:</p>
      <ul>
        {listItems}
      </ul>
      <p>User has this many poops: {USER.poopCount}</p>
      
      <MyButton count={count} setCount={setCount}/> 
      <img className='poop-img' src={POOP_LINK} alt="poop picture here" />
    </>
  );
}

export default App








/* NOTE: This was just test css. i know its messy to put this here but its just for reference. ignore it. */
/* * {
  
}

body {
  padding: 10px 60px;
}

.cool-button { 
  background-color: black;
  color: aliceblue;
  border-radius: 15%;
  border: 0px;
}

.poop-img {
  width: 20%;
  display: block;
} */