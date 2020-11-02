import React, { useState, useRef, useEffect } from 'react'
import { useAuth } from '../context/AuthContext'
import { Link } from 'react-router-dom'
import { useHistory } from 'react-router-dom'

export default function Login() {
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)
  const { resetPassword } = useAuth();

  const emailRef = useRef();
  const history = useHistory();
  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setLoading(true)
      await resetPassword(emailRef.current.value)
      history.push('/')
    } catch (error) {
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
        <h1>Zresetuj istniejące hasło</h1>
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
          <button disabled={loading} type="submit">Zresetuj</button>
        </form>
        <div className='container-forgot'><Link className='button-logout' to="/login">Zaloguj się</Link></div>

      </div>
    </div>
  )
}
