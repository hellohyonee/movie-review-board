import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import './Review.css'

export const Review = () => {
  const [reviewContent, setReviewContent] = useState({ title: '', content: '' });
  const navigate = useNavigate();
  const [inputTitle, setInputTitle] = useState('');
  const titleInput = useRef();
  const [movieInfo, setMovieInfo] = useState({
    title: '',
    year: '',
    genre: '',
    runtime: '',
    poster: ''
  })
  
  // title을 api에 조회하는 함수 (타이틀 작성 후, 에디터에 focus on이 될 경우 데이터 조회)
  const searchMovie = async () => {
    // 1. inputTitle 에 value 가 들어있는지 확인
    // 1-1 value가 없으면 => 입력하도록 유도
    // 2. 데이터 조회
    // 2-1 데이터 조회했으나 영화를 찾지못하면 다시 입력하도록 유도
    // 3. reviewContent 에 저장

    if (inputTitle === '' || inputTitle === undefined) {
      alert('영화 제목을 써주세요!')
      setInputTitle(titleInput.current.focus())
    }

    await axios
      .get(`http://www.omdbapi.com/?apikey=4cd53ad6&t=${inputTitle}`,
        {
          headers: { 'Content-Type': 'application/json' }
        })
      .then((res) => {
        // console.log(res.data)
        if (res.data.Response === 'False') {
          alert(`${res.data.Error}\n영화 제목을 다시 검색해주세요!`)
          setInputTitle(titleInput.current.focus())
        }
        // res.data의 내용을 상태로 저장하기
        setMovieInfo({
          title: res.data.Title,
          year: res.data.Year,
          genre: res.data.Genre,
          runtime: res.data.Runtime,
          poster: res.data.Poster
        })
      })
      .catch(e => console.log(e))
  };

  console.log('상태 저장된 정보: ',movieInfo)
  // 저장해서  main 페이지('/')로 보내는 함수 // DB로 데이터 보내고 페이지 이동!!!
  // 데이터에 테이블을 생성
  const saveHandler = () => {
    

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
                placeholder='Title: Please Search the title in English!'
                onChange={e => setInputTitle(e.target.value)}
                name='title'
                ref={titleInput}
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
