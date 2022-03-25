import React from 'react';
import '@toast-ui/editor/dist/toastui-editor.css';
import { Editor } from '@toast-ui/react-editor';
import './Review.css'

export const Review = () => {

  return (
    <>
      <div className='form'>
        <div className='inner' >
            <h1>Movie Review</h1>
            <div className='write'>

              <input className='title-input' type='text' placeholder='Title' />
              <div className='editor'>
                <Editor
                  initialValue="Write Now!"
                  previewStyle="vertical"
                  height="500px"
                  initialEditType="markdown"
                  useCommandShortcut={true}
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
