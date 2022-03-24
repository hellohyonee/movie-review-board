import React from 'react';
import './MovieReview.css'
import { FiX } from "react-icons/fi";

export const MovieReview = () => {

  return (
    <section className='card'>
      <div className='card-line'>

        <div className='image'>
          <img src='' alt='' width='187' height='269' />
        </div>
        <div className='info'>
          <h2 className='title'>Spider-Man: No Way Home</h2>
          <p className='year'>Year: 2021</p>
          <p className='genre'>Genre: Action, Adventure, Fantasy</p>
          <p className='review'>
          앤드게임이 10년 마블 케릭터 대장정의 마침표였다면,<br />
          이건 20년 스파이더맨 시리즈의 완벽한 마침표.
          </p>
        </div>
        <div className='delete'>
          <FiX color='grey' size='25' />
        </div>

      </div>


      
    </section>
  )
}