import './App.css';
import { useState } from 'react';

function App() {

  const [list,setList] = useState([]);
  
  const handleClick = (event) =>{
    const newDot = {
      x: event.clientX,
      y: event.clientY
    }

    setList(prev => [...prev, newDot]);
  }

  return (
    <div id="page" onClick={handleClick}>
      {list.map(element => <span style={{left:element.x-10,top:element.y-10}} className='dot'></span>)}
     <button onClick={e=>{e.stopPropagation(); setList([])}}>Limpar</button>
     
    </div>
  );
}

export default App;
