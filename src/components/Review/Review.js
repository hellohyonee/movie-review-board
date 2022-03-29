import React, { useState } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import './Review.css'

export const Review = () => {
  const [reviewContent, setReviewContent] = useState({ title: '', content: '' });

  const getValue = (e) => {
    const { name, value } = e.target;
    setReviewContent({
      ...reviewContent,
      [name]: value
    })
    console.log(reviewContent);
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
                  onReady={ editor => {
                      console.log( 'Editor is ready to use!', editor );
                  } }
                  onChange={ ( event, editor ) => {
                      const data = editor.getData();
                      console.log( { event, editor, data } );
                      setReviewContent({
                        ...reviewContent,
                        content: data
                      })
                      console.log(reviewContent)
                  } }
                />
              </div>

            </div>
            <div className='btn-group'>
              <div className='btn save'>저장</div>
              <div className='btn btn--reverse cancel'>취소</div>
            </div>
        </div>
      </div>
    </>
  )
}
