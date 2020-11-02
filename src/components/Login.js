import React, { useState, useRef, useEffect } from 'react'
import { useAuth } from '../context/AuthContext'
import { Link } from 'react-router-dom'
import { useHistory } from 'react-router-dom'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const { login } = useAuth();

  const emailRef = useRef();
  const passwordRef = useRef();
  const history = useHistory();
  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError('')
      setLoading(true)
      await login(emailRef.current.value, passwordRef.current.value)
      history.push('/')
    } catch (error) {
      setError('Nie udało się zalogować na podane konto')
      console.log(error)
    }

    setLoading(false);
  }

  useEffect(() => {
    emailRef.current.focus();
  }, [])
  return (
    <div className='container'>
      <div className="card">
        <h1>Zaloguj się</h1>
        <form action="submit" onSubmit={handleSubmit}>
          <label>
            <h3>Email</h3>
            <input
              required
              type="email"
              value={email}
              ref={emailRef}
              onChange={(e) => setEmail(e.currentTarget.value)} />
          </label>
          <label>
            <h3>Password</h3>
            <input
              required
              type="password"
              value={password}
              ref={passwordRef}
              onChange={(e) => setPassword(e.currentTarget.value)} />

          </label>

          <button disabled={loading} type="submit">Zaloguj się</button>
        </form>
        <div className='container-forgot'>Zapomniałeś hasło? <Link to="/forgetpassword">Odzyskaj je</Link></div>

      </div>
    </div>
  )
}
