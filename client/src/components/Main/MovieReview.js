import React from 'react';
import { useLocation } from 'react-router-dom';
import ReactHtmlParser from 'html-react-parser';
import './MovieReview.css'
import { FiX } from "react-icons/fi";

export const MovieReview = () => {
  const location = useLocation();
  const viewContent = location.state;

  // 1. DB에 저장된 review 정보를 조회하는 함수

  // 2. review content(내용) 불러오는 함수 (useNavigate를 사용하여 useLocation으로 value를 가져옴)
  // -> DB에서 데이터를 가져오는데 이게 필요할까?
  const contentViewer = (viewContent) => {
    if (viewContent === null || viewContent.content === undefined) {
      return null;
    }
    
    return (
      <div>
        { ReactHtmlParser(viewContent.content) }
      </div>
    )
  };

  

  return (
    <section className='card'>
      <div className='card-line'>

        <div className='poster'>
          <img src='' alt='' width='187' height='269' />
        </div>
        <div className='info'>
          <h2 className='title'>Spider-Man: No Way Home</h2>
          <p className='year'>Year: 2021</p>
          <p className='genre'>Genre: Action, Adventure, Fantasy</p>
          <p className='runtime'>Runtime: 148 min</p>
          {
            contentViewer(viewContent)
          }
        </div>
        <div className='delete'>
          <FiX color='grey' size='25' />
        </div>

      </div>


      
    </section>
  )
}