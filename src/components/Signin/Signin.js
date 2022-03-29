import React, { useState } from 'react';
import './Signin.css'

export const Signin = () => {
  const idEl = document.querySelector('#id');
  const pwEl = document.querySelector('#pw');
  // const btnEl = document.querySelector('#btn');
  const labelEl = document.querySelector('label');

  // const warningHandler = (e) => {
  //   console.log('click');
  //   if (idEl.val() === '') {
  //     idEl.next('label').addClass('warning');
  //     setTimeout(() => {
  //       labelEl.removeClass('warning');
  //     }, 1500);
  //   }
  //   else if (pwEl.val() === '') {
  //     pwEl.next('label').addClass('warning');
  //   }
  // }

  const [loginInfo, setLoginInfo] = useState({ userId: '', password: '' });
  const [addWarning, setAddWarning] = useState(false);

  const getInputId = (e) => {
    console.log('ID: ',e.target.value)
    setLoginInfo({
      userId: e.target.value,
      password: loginInfo.password
    });
  }
  const getInputPW = (e) => {
    console.log('PW: ',e.target.value)
    setLoginInfo({
      userId: loginInfo.userId,
      password: e.target.value
    });
  }

  const warningHandler = (e) => {
    console.log('click');
    const { userId, password } = loginInfo;
    // if (userId === '') {
    //   setAddWarning(
    //     idEl.next('label').addClass('warning')
    //     .setTimeout(() => {
    //       labelEl.remveClass('warning')
    //     }, 1500)
    //   )
    // }
    // else if (password === '') {
    //   pwEl.next('label').addClass('warning');
    // }
    if (userId === ''|| password === '') {
      setAddWarning(!addWarning)
    }
  }


  return (
    <>
      <section className='signin-form'>

          <h1>Movie Review</h1>
          <form action=''>
            <div className='input-area'>
              <input type='text' className='id' id='id' 
              autoComplete='off' required
              onChange={getInputId}
              />
              <label className={addWarning? 'warning' : ''} for='id'>User Name</label>
            </div>
            <div className='input-area'>
              <input type='password' className='pw' id='pw' 
              autoComplete='off' required
              onChange={getInputPW}
              />
              <label className={addWarning? 'warning' : ''} for='pw'>Password</label>
            </div>

            <div className='btn-area'>
              <button id='btn' type='submit' onClick={warningHandler}>Sign In</button>
            </div>
          </form>

      </section>
    </>
  )
}
