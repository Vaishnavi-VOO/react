app.jsx

import React,{ useState } from 'react'
import './index.css'

export default function App() {
  const [tasks, set] = useState([])
  const [filter, setF] = useState("all")
  const [f,setForm] = useState({name:"",date:"",desc:""})

  const add=(e)=>{
    e.preventDefault()
    if(f.name && f.date) set([...tasks,{...f,done:false}])
    setForm({name:"",date:"",desc:""})
  }
  const toggle=(i)=>
    set(tasks.map((t,j)=>j===i?{...t,done:!t.done}:t))
  return(
    <div className='app'>
      <h1>Reminder app</h1>
      <form onSubmit={add}>
        {["name","date","desc"].map(k=>(
          <input key={k} type={k==="date"?"date":"text"}  placeholder={k} value={f[k]} 
          onChange={e=>setForm({...f,[k]:e.target.value})}/>
       ) )}
       <button>Add</button></form>
      <div className='filters'>
        {["all","done","notdone"].map(v=>(
          <button key={v} onClick={()=>setF(v)}>{v}</button>
        ))}
        </div>
        <ul>
          {tasks.filter(t=>filter==="all"||(filter==="done")===t.done).map((t,i)=>(
            <li key={i} onClick={()=>toggle(i)} className={t.done?"done":""}>
              <b>{t.name}</b> - {t.date} {t.desc&&`(${t.desc})`}
            </li>
          ))}
        </ul>
    </div>
  )
} 

index.css


body{
  font-family: sans-serif;
  background: #f4f4f4;
}

.app{
  max-width: 400px;
  margin: 50px auto;
  padding: 20px;
  background: #fff;
}

input,button{
  width:100%;
  margin: 5px 0;
  padding: 6px;
}

ul{
  list-style: none;
  padding: 0; 
}

li{
  padding: 10px;
  border-bottom: 1px solid #ddd;
  cursor: pointer;
}

.done{
  text-decoration: line-through;
  color: gray;
}
