import React from 'react';
import './Main.css'
import { FiArrowUp } from "react-icons/fi";
import { MovieReview } from './MovieReview';

export const Main = () => {
  

  const scrollTop = () => {
    window.scrollTo(0, 0)
  }

  return (
    <>
      <section className='list'>
        <div className='inner'>

          <MovieReview />
          <MovieReview />
          <MovieReview />

        </div>
      </section>

      <div id='to-top' onClick={scrollTop}>
        <FiArrowUp size='20' />
      </div>
    </>
  )
}
