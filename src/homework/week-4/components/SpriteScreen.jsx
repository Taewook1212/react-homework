import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const SpriteScreen = () => {
  const navigateTo = useNavigate();

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      navigateTo('/login');
    }, 3000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [navigateTo]);

  return (
    <div className="flex justify-center items-center h-screen bg-yellow-400">
      <h1 className="sr-only">스프라이트 화면</h1>
      <img
        src="/assets/pika.gif"
        className="rounded-full w-fit animate-wiggle-more animate-twice"
        alt="로고화면"
      />
    </div>
  );
};

export default SpriteScreen;
