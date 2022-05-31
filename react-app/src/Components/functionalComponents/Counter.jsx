import React, { useState } from 'react';
import CounterStyle from './Counter.module.css';

export default function Counter() {
  const [data, setData] = useState({
    name: "Amaresh",
    count: 0,
  });

  const changeHandller = () =>{
    setData({...data,count:data.count+1})
  }

  return (
    <div>
      <h1>Name: {data.name}</h1>
      <h2>Counter: {data.count}</h2>
      <button className={CounterStyle.countBtn} onClick={changeHandller}>ADD 1</button>
    </div>
  )
}
