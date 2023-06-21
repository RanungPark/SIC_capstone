 import React from 'react';
 import { FiUser, FiLock } from 'react-icons/fi';
 
 export default function LoginForm() {
  return (
    <form method='post'>
      <ul className='panel_wrap'>
        <li className='panel_item'>
          <div className='id_pw_wrap'>
            <div className='imput_row'>
              <span className='icon_cell'><FiUser /></span>
              <input type="email" name='email' title='이메일' className='input_text' placeholder='이메일'/>
            </div>
            <div className='input_row'>
              <span className='icon_cell'><FiLock /></span>
              <input type="password" name='pw' title='비밀번호' className='input_text' placeholder='비밀번호'/>
            </div>
          </div>
          <div className='btn_login_wrap'>
            <button type='submit' className='btn_login'>
              <span btm_text>로그인</span>
            </button>
          </div>
        </li>
      </ul>
    </form>
  );
 }
 
 