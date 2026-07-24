import { useState } from "react";
import { z } from "zod";

function Signup() {
  const [username, setusername] = useState('');
  const [password, setpassword] = useState('');
  const [email, setemail] = useState('');
  const [role, setrole] = useState('');

  // schema
  let usernameschema = z.string().min(6, "username must be atleast 6 characters")
  let emailschema = z.string().email("invalid email format")
  let passwordschema = z.string().min(8, "password must be atleast 8 character")

  
  function validate(schema, value) {
    if (!value) {
      return "";
    }
    let result = schema.safeParse(value)
    if (result.success) {
      return "valid"; 
    }
    return result.error.issues[0].message;
  }

let onsubmit = async (event) => {
  event.preventDefault();

  let userdetails = {
    username,
    password,
    email,
    role,
  };

  try {
    let result = await fetch("https://mernbackend-uaq6.onrender.com", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userdetails),
    });

    let finalresponse = await result.json();
    alert(finalresponse.msg);
  } catch (error) {
    console.error(error);
    alert("Registration failed");
  }
};
  
  return (
    <>
      <div style={{ maxWidth: '400px', margin: '50px auto', padding: '30px', border: '1px solid #ccc', borderRadius: '8px', textAlign: "center" }} className="login-container">
        <form onSubmit={onsubmit}>
          <h2>Create your account</h2>
          
          <p style={{ marginBottom: '25px' }}>Welcome! Please fill in the details to get started.</p>
          
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
            <p>{validate(usernameschema,username)}</p>
          </div>

          <div style={{ marginBottom: '20px', textAlign: 'left' }}>
            <label style={{ display: 'block', marginBottom: '6px', fontWeight: '500' }}>Email</label>
            <input 
              value={email}
              onChange={(e) => setemail(e.target.value)}     
              type="email" 
              placeholder="Email" 
              style={{ width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #ccc', boxSizing: 'border-box' }}
              required
            />
            {/* Fixed: Wrapped inside the validate function correctly */}
            <p>{validate(emailschema, email)}</p> 
          </div>

          <div style={{ marginBottom: '20px', textAlign: 'left' }}>
            <label style={{ display: 'block', marginBottom: '6px', fontWeight: '500' }}>Password</label>
            <input 
              value={password}
              onChange={(e) => setpassword(e.target.value)} 
              type="password" 
              placeholder="Password" 
              style={{ width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #ccc', boxSizing: 'border-box' }}
              required
            />
            <p>{validate(passwordschema,password)}</p>
          </div>

          <div style={{ marginBottom: '25px', textAlign: 'left' }}>
            <label style={{ display: 'block', marginBottom: '6px', fontWeight: '500' }}>Role</label>
            <input 
              value={role}
              onChange={(e) => setrole(e.target.value)}    
              type="text" 
              placeholder="Role" 
              style={{ width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #ccc', boxSizing: 'border-box' }}
              required
            />

          </div>

          <button type="submit" style={{ width: '100%', padding: '12px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer', fontSize: '16px', fontWeight: 'bold' }}>
            Register
          </button>
        </form>
      </div>
    </>
  );
}

export default Signup;
