import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import './Review.css'

export const Review = () => {
  const [reviewContent, setReviewContent] = useState({ title: '', content: '' });
  const navigate = useNavigate();
  
  // input value 받는 함수 (컨텐츠가 변하는 것을 받는 함수)
  const getValue = (e) => {
    const { name, value } = e.target;
    setReviewContent({
      ...reviewContent,
      [name]: value
    })
    console.log(reviewContent);
  }
  
  // 저장해서  main 페이지('/')로 보내는 함수
  const saveHandler = () => {
    console.log('click')
    navigate(
      '/',
      { state: {...reviewContent} }
    )
  }


  return (
    <>
      <div className='form'>
        <div className='inner' >
            <h1>Movie Review</h1>
            <div className='write'>

              <input 
                className='title-input' 
                type='text'
                placeholder='Title'
                onChange={getValue}
                name='title'
                />
              <div className='editor'>

                <CKEditor 
                  editor={ ClassicEditor }
                  data="<p>Write Now!</p>"
                  
                  onChange={ ( event, editor ) => {
                      const data = editor.getData();
                      console.log( { event, editor, data } );
                      setReviewContent({
                        ...reviewContent,
                        content: data
                      })
                  } }
                />
              </div>

            </div>
            <div className='btn-group'>
              <div className='btn save' onClick={saveHandler}>저장</div>
              <div className='btn btn--reverse cancel'>취소</div>
            </div>
        </div>
      </div>
    </>
  )
}