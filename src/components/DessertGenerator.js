import React, { useState, useEffect } from 'react'
import CountUp from 'react-countup';
import { fetchtTableLength, fetchDessert } from '../utils/fetchData'

export default function DessertGenerator() {

  const [dessert, setDessert] = useState({
    recordId: '',
    number: '',
    name: '',
    img: '',
    meta: '',
  })

  const [showDessert, setShowDessert] = useState(false);
  const [tabLength, setTabLength] = useState();
  const DURATION = 4000;

  useEffect(() => {
    getTableLength();
  }, [])

  const getTableLength = async () => {
    const data = await fetchtTableLength();
    setTabLength(data);
  }

  const getRandomDessert = async () => {
    // Reset previous state values
    setDessert({});
    setShowDessert(false);

    // Draw a random number
    const randomNumber = Math.floor(Math.random() * (tabLength - 1 + 1)) + 2;


    const dessert = await fetchDessert(randomNumber);
    setDessert(dessert);
    // Set Timeout to show dessert information after the countup is finished
    setTimeout(() => {
      setShowDessert(true);
    }, DURATION);
  }

  return (
    <main className="main-dessert">
      <div className="card">
        <h1>Jakim deserem dziś jesteś?</h1>
        {dessert.name && <CountUp className="countup-dessert" end={dessert.number} duration={DURATION / 1000} />}
        <button onClick={getRandomDessert}>Losuj</button>
      </div>
      {showDessert
        && (
          <div className="card">
            <h1>{dessert.name}</h1>
            <img className="img-dessert" src={dessert.img} alt={dessert.name} />
            <p className='meta-dessert' dangerouslySetInnerHTML={{ __html: dessert.meta }} />
            <a className="button" href={`https://en.wikipedia.org/wiki/${dessert.name}`} target='_blank' rel="noreferrer">Read More</a>
          </div>
        )}
    </main>
  )
}

