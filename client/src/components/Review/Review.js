import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import './Review.css';

axios.defaults.withCredentials = true;

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

    if (inputTitle === '' || inputTitle === undefined) {
      alert('영화 제목을 써주세요!')
      setInputTitle(titleInput.current.focus())
    }

    await axios
      .get(`http://www.omdbapi.com/?apikey=4cd53ad6&t=${inputTitle}`,
        {
          headers: { 'Content-Type': 'application/json' },
          withCredentials: false
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

  

  // 3. reviewContent 에 title, content 저장, movieInfo 저장 -> DB에 저장하기!
    //? reviewContent의 title이 필요할까?
  // DB에 데이터 저장하고 main 페이지('/')로 보내는 함수
  const saveHandler = async () => {
    const reviewContents = {
      reviewData :  {
        title: reviewContent.title,
        content: reviewContent.content,
      },
      movieInfo : {
        title: movieInfo.title,
        year: movieInfo.year,
        genre: movieInfo.genre,
        runtime: movieInfo.runtime,
        poster: movieInfo.poster
      }
    };

    if (reviewContent.content === '' || reviewContent.content === null) {
      return alert('영화 제목이 없거나 내용이 없습니다!')
    }

    const response = await axios
      .post(`http://localhost:8000/review/2`, // ${userId}  
        {
          headers: { 'Content-Type': 'application/json' },
          data: reviewContents 
        })
      
        console.log(response);

        alert('리뷰 저장!');
        navigate('/');
  };

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
                  data=''
                  
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
