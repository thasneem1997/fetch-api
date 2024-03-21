import logo from './logo.svg';
import './App.css';
import './style.css'
import { useState } from 'react';
import { useEffect } from 'react';

function App() {
  const [posts,setpost]=useState([])
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(posts =>setpost(posts.splice(0,10)))},[])
  


  
  return (
    <div className="App">
      <h1>Fetch api data</h1>
  {  
  posts.map((post)=>
 <div> <h1>{post.title}</h1>
  <p>{post.body}</p></div>)
      }
    </div>
  );
}

export default App;
