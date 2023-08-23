import './App.css';
import { SlEnvolopeLetter } from 'react-icons/sl'
import { AiTwotoneLock } from 'react-icons/ai'
import { useState } from 'react';
function App() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [remember, setRemember] = useState(false)
  const [errEmail, setErrEmail] = useState(false)
  const [errPassword, setErrPassword] = useState(false)
  const [errLengthPassword, setErrLengthPassword] = useState(false)
  const handleSubmit = (e) => {
    e.preventDefault()
    const dataLogin = {
      email,
      password
    }
    if (!email || !password) {
      if (!email) {
        setErrEmail(true)
      }

      if (!password) {
        setErrPassword(true)
      } else {
        if (password.length < 8) {
          setErrLengthPassword(true)
        }
      }

    } else {
      if (password.length < 8) {
        setErrLengthPassword(true)
      } else {
        console.log(dataLogin, remember);
      }
    }

  }

  const handleChangeInput = (e) => {
    const { name, value } = e.target
    switch (name) {
      case "email":
        setErrEmail(false)
        setEmail(value)
        break;
      case "password":
        if (value.length > 7) {
          setErrLengthPassword(false)
        }
        setErrPassword(false)
        setPassword(value)
        break;
    }
  }

  return (
    <div className='app' style={{ backgroundImage: "url('./wallpaperflare.com_wallpaper (1).jpg')", backgroundRepeat: 'no-repeat', minHeight: "100vh" }}>
      <div className='form'>
        <h3 className='title'>Login</h3>
        <form className='form-group' onSubmit={handleSubmit}>
          <div className="input-group">
            {/* <label className='label-input' htmlFor="email">Email</label> */}
            <input type="email" id='email' placeholder='Email' name='email' value={email} onChange={handleChangeInput} />
            <SlEnvolopeLetter className='icon' />
            {errEmail && <span className='err-msg'>Email is required</span>}
          </div>
          <div className="input-group">
            {/* <label className='label-input' htmlFor="password">Password</label> */}
            <input type="password" id='password' placeholder='Password' name='password' value={password} onChange={handleChangeInput} />
            <AiTwotoneLock className='icon' />
            {errPassword && <span className='err-msg'>Password is required</span>}
            {errLengthPassword && <span className='err-msg'>Minimum 8 characters required</span>}
          </div>
          <div className="checkbox-group">
            <input className='checkbox-btn' type="checkbox" value={remember} onClick={() => setRemember(!remember)} />
            <span className='remember'>Remember Me Forget Password</span>
          </div>
          <button className='btn-submit' type='submit'>Log in</button>
          <p className='register'>Don't have an account ? <a href="" className='register-btn'>Register</a></p>
        </form>
      </div>
    </div>
  );
}

export default App;
