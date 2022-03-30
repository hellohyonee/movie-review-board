import React from 'react';
import { useLocation } from 'react-router-dom';
import ReactHtmlParser from 'html-react-parser';
import './MovieReview.css'
import { FiX } from "react-icons/fi";

export const MovieReview = () => {
  const location = useLocation();
  const viewContent = location.state;

  const contentViewer = (viewContent) => {
    if (viewContent === null || viewContent.content === undefined) {
      return null;
    }
    
    return (
      <div>
        { ReactHtmlParser(viewContent.content) }
      </div>
    )
  }

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