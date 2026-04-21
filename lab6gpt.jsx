app.jsx
import { useState } from 'react'
import './App.css'

export default function App() {
  const [data, setData] = useState({name:"",email:"",password:""})
  const [errors, setErrors] = useState({})
  const [show, setShow] = useState(false)
  const [submitted, setSubmitted] = useState(null)
  const validate = () => {
    let err={}
    if(!data.name) err.name="Name is required"
    if(!/^\S+@\S+\.\S+$/.test(data.email)) err.email="Email is invalid"
    if(data.password.length<6) err.password="Password must be at least 6 characters"
    setErrors(err)
    return Object.keys(err).length===0
  }
  const handleChange = (e) => {
    setData({...data, [e.target.name]: e.target.value.trimStart()})
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    if(validate()) {
      setSubmitted(data)
    }}
 return(
  <div className='container'>
    <form onSubmit={handleSubmit}>
      <input name="name" placeholder="name" onChange={handleChange} className={errors.name && "error"} />
      <p>{errors.name}</p>
      <input name="email" placeholder="email" onChange={handleChange} className={errors.email && "error"} />
      <p>{errors.email}</p>
      <input type={show?"text":"password"} name="password"  placeholder="password" onChange={handleChange} className={errors.password && "error"} />
      <p>{errors.password}</p>
      <label><input type='checkbox'onChange={()=>setShow(!show)}/> Show Password </label>
      <button type="submit">Submit</button>
    </form>
    {submitted && (
      <div className='output'>
      <h3>Submitted Data:</h3>
      <p>Name: {submitted.name}</p>
      <p>Email: {submitted.email}</p>
      <p>Password: {submitted.password}</p>
    </div>
 )}
 </div>
  )
}

app.css
form{
  width:250px;
  margin:auto;
  display: flex;
  flex-direction: column;
}
input{
  margin: 5px 0;
  padding: 10px;
}
.error{
  border: 2px solid red;
}
p{
  color: red;
  font-size: 12px;
  margin:0;
}
