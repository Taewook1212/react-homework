import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import useLoggedInState from '../../../hook/useLoggedInState';
import { pb, currentUser } from '../lib/pocketbase';
import {
  usePasswordState,
  useEmailState,
} from '../../../hook/usePasswordEmailState';

const LoginScreen = () => {
  const [password, handlePasswordChange] = usePasswordState('');
  const [email, handleEmailChange] = useEmailState('');
  const [isLoggedIn, handleLogout, handleLogin] = useLoggedInState(false);
  const [autoLogin, setAutoLogin] = useState(false);
  const navigateTo = useNavigate();

  useEffect(() => {
    if (autoLogin) {
      navigateTo('/chatList'); // 자동 로그인 후 다음 페이지로 이동
    }
    return;
  }, [navigateTo]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const userData = { email, password };

      await pb
        .collection('users')
        .authWithPassword(userData.email, userData.password);
      //서버의 인증처리 후 token 발송

      const userInfo = { isLoggedIn: true, autoLogin };
      sessionStorage.setItem('userInfo', JSON.stringify(userInfo));

      //        // currentUser 값 설정
      // currentUser = { id: 'your_user_id' };

      handleLogin(); //로그인 인증 후 화면이동
    } catch (error) {
      console.error('Authentication failed: ', error);

      alert('로그인에 실패했습니다. 이메일과 비밀번호를 확인해주세요.');
    }
  };

  const handleAutoLogin = () => {
    setAutoLogin(!autoLogin); // 자동 로그인 버튼 클릭 시 자동 로그인 활성화
  };

  return (
    <div className="flex flex-col  items-center h-screen min-h-screen bg-yellow-400  ">
      <h1 className="sr-only">로그인 화면</h1>
      <div className="w-1/2 relative min-h-full">
        {isLoggedIn ? (
          <button
            className="bg-yellow-950 text-white  p-3 rounded-xl"
            onClick={handleLogout}
          >
            로그아웃
          </button>
        ) : (
          <div>
            <form onSubmit={handleSubmit} className="flex flex-col  gap-5">
              <div className="flex flex-col gap-3 mt-[100px]">
                <input
                  type="email"
                  value={email}
                  placeholder="이메일을 입력해주세요"
                  className="p-3 rounded-xl whitespace-nowrap"
                  onChange={handleEmailChange}
                />
                <input
                  type="password"
                  value={password}
                  placeholder="비밀번호를 입력해주세요"
                  className="p-3 rounded-xl whitespace-nowrap"
                  onChange={handlePasswordChange}
                />
              </div>
              <button
                type="submit"
                className="bg-yellow-950 text-white  p-3 rounded-xl"
              >
                Login
              </button>

              <label htmlFor="RememberButton">
                <input
                  id="RememberButton"
                  type="checkbox"
                  checked={autoLogin}
                  onChange={handleAutoLogin}
                  className="w-5 h-5"
                />
                자동 로그인
              </label>
            </form>

            <a
              href="#"
              className="p-3 rounded-xl bg-white w-full text-center absolute bottom-20"
            >
              Create Account
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default LoginScreen;
