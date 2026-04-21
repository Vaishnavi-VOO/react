app.jsx
import { useState } from 'react'
import './index.css'
import sampleimage from './assets/sampleimage.png'

const ProfileCard = ({name,bio,initialBg}) => {
  const[bg,setBg] = useState(initialBg)
  return (
    <div className="card" style={{background:bg}}
    onMouseEnter={() => setBg("linear-gradient(135deg, #ffd700, #fda7a)")}
    onMouseLeave={() => setBg(initialBg)}
    >
      <img src={sampleimage} alt={name} className='pic'/>
      <h2>{name}</h2>
      <p>{bio}</p>
    </div>
  )
}
export default function App() {
  return (
    <div className="container">
      <ProfileCard name="steve jobs" bio="Co-founder and former CEO of Apple Inc." initialBg="linear-gradient(135deg, #add8e6, #e6e6FA)"/>
    </div>
  )
}

index.css
.container{
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
}

.card{
  padding:15px;
  border:1px solid #ccc;
  text-align: center;
}

.pic{
  width: 80px;
  height: 80px;
  border-radius: 50%;
}
