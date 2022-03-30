import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import './Review.css'

export const Review = () => {
  const [reviewContent, setReviewContent] = useState({ title: '', content: '' });
  const navigate = useNavigate();
  const [inputTitle, setInputTitle] = useState('');
  
  // title을 api에 조회하는 함수 (타이틀 작성 후, 에디터에 focus on이 될 경우 데이터 조회)
  const searchMovie = async () => {
    // 1. inputTitle 에 value 가 들어있는지 확인
    // 1-1 value가 없으면 => 입력하도록 유도
    // 2. 데이터 조회
    // 2-1 데이터 조회했으나 영화를 찾지못하면 다시 입력하도록 유도
    // 3. reviewContent 에 저장
    const data = await axios
      .get(`http://www.omdbapi.com/?apikey=4cd53ad6&t=${inputTitle}`)
      .then(res => res.data)
    console.log(data);
  }
  
  // 저장해서  main 페이지('/')로 보내는 함수 // DB로 데이터 보내고 페이지 이동!!!
  const saveHandler = () => {
    // 

    // navigate(
    //   '/'
    //   // { state: {...reviewContent} }  // -> DB로 가면 삭제
    // )
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
                onChange={e => setInputTitle(e.target.value)}
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
                  onFocus={searchMovie}
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
