import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const useLoggedInState = (initialValue) => {
  const [isLoggedIn, setIsLoggedIn] = useState(initialValue);
  const navigateTo = useNavigate();
  // useNavigate 훅을 커스텀 훅 내부에서 가져옴

  // 로컬 스토리지에서 사용자 정보 가져오기
  useEffect(() => {
    const userInfo = localStorage.getItem('isLoggedIn');

    if (userInfo) {
      const loginUserInfo = JSON.parse(userInfo);

      setIsLoggedIn(loginUserInfo);
    }
  }, []);

  const handleLogout = () => {
    // 로컬 스토리지에서 사용자 정보 제거
    localStorage.removeItem('autoLogin');
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('pocketbase_auth');
    setIsLoggedIn(false);
    navigateTo('/login');
  };

  const handleLogin = () => {
    navigateTo('/chatList'); // 자동 로그인이 아닌 경우에만 다음 페이지로
  };

  return [isLoggedIn, handleLogout, handleLogin];
};

export default useLoggedInState;
