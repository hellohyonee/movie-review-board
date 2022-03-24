import React from 'react';
import './Main.css'
import { FiArrowUp } from "react-icons/fi";
import { MovieReview } from './MovieReview';

export const Main = () => {

  return (
    <>
      <section className='list'>
        <div className='inner'>

          <MovieReview />
          <MovieReview />
          <MovieReview />

        </div>
      </section>

      <div id='to-top'>
        <FiArrowUp size='20' />
      </div>
    </>
  )
}
