import React, { useState } from 'react';
import './Main.css'
import { FiArrowUp } from "react-icons/fi";
import { MovieReview } from './MovieReview';

export const Main = () => {
  const [reviewList, setReveiwList] = useState([]); // DB에서 조회한 데이터를 목록으로 저장하는 상태
  
  // 스크롤 탑 함수
  const scrollTop = () => {
    window.scrollTo(0, 0)
  };

  // 1. DB에서 review 데이터를 조회하는 함수
  const getReview = () => {

  };

  // 2. DB에 저장된 review 출력하는 함수
  const movieReviews = reviewList.map((review) => {
    return (
      <MovieReview />
    )
  });


  return (
    <>
      <section className='list'>
        <div className='inner'>

          {/* {movieReviews} */}
          <MovieReview />
          <MovieReview />
          <MovieReview />

          {reviewList.length === 0 ? '리뷰가 없습니다' : reviewList}
        </div>
      </section>

      <div id='to-top' onClick={scrollTop}>
        <FiArrowUp size='20' />
      </div>
    </>
  )
}
