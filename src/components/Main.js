import React from 'react'
import { Link } from 'react-router-dom'

export default function Main() {
  return (
    <div className="main">
      <div className="card">
        <div className="meta">
          <h1>Powabny narzędziownik</h1>
          <div className="frame">
            <img className="logo" src={`${process.env.PUBLIC_URL}/assets/img/logo.png`} alt="eklerek" />
          </div>
        </div>


        <div className="button-container">
          <Link className="button" to='/dessert' >Jakim deserem jesteś?</Link>
          <Link className="button" to='/stopwatch'><strong>CZAS</strong> na challenge</Link>
        </div>
      </div>
    </div>
  )
}
