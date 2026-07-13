import { useState } from "react"
function Login() {
  //username password
  
  const [username,setusername]=useState('')
  const [password,setpassword]=useState('')

  //send these credentials(username,password) to the backend   to an endpoint   auth/login
  let senddetails=async (event)=>{
   event.preventDefault();  //stops reloading the page when we submit the form
   //post request

  try {

   let token= localStorage.getItem("token")
    
    let response=await fetch('http://localhost:3500/auth/login',{
       method:'POST',
       headers:{
         "Content-Type": "application/json",
         Authorization:`Bearer ${token}`
        },
        body:JSON.stringify({username,password})
      })
      let data=await response.json()
      alert(data.msg);
   
  } catch (error) {
    console.log(error);
    alert("something went wrong")
  }

  }
  return (
   <>
  
     <div style={{ maxWidth: '400px', margin: '50px auto', padding: '30px', border: '1px solid #ccc', borderRadius: '8px', textAlign: "center" }} className="login-container">
   <form onSubmit={senddetails}  >
   <h2>Login</h2>
  <p style={{ marginBottom: '25px' }}>Welcome back!</p>

  <div style={{ marginBottom: '20px', textAlign: 'left' }}>
          <label style={{ display: 'block', marginBottom: '6px', fontWeight: '500' }}>Username</label>
    <input 
            value={username}
            onChange={(e) => setusername(e.target.value)} 
            type="text" 
            placeholder="Username" 
            style={{ width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #ccc', boxSizing: 'border-box' }}
            required
          />
        </div>
  <div style={{ marginBottom: '25px', textAlign: 'left' }}>
          <label style={{ display: 'block', marginBottom: '6px', fontWeight: '500' }}>Password</label>
  
      <input 
            value={password}
            onChange={(e) => setpassword(e.target.value)} 
            type="password" 
            placeholder="Password" 
            style={{ width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #ccc', boxSizing: 'border-box' }}
            required
          />
        </div>
   
          <button type="submit" style={{ width: '100%', padding: '12px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer', fontSize: '16px', fontWeight: 'bold' }}>
          Login
        </button>

  
   </form>
   </div>
  </>
  )
}

export default Login