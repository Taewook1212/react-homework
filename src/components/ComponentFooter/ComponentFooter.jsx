import home from '/public/assets/home.svg';
import life from '/public/assets/life.svg';
import fullMap from '/public/assets/fullMap.svg';
import chat from '/public/assets/chat.svg';
import my from '/public/assets/my.svg';

function ComponentFooter() {
  return (
    <nav className="fixed h-[3.75rem] border-t border-t-Contents-contentSecondary bottom-0 w-full px-3 pt-2 pb-2 bg-background">
      <div className="flex justify-around text-sm font-normal">
        <div className="flex-col text-center">
          <a href="/src/pages/story/">
            <img src={home} className="mx-auto mb-1" alt="" />
            <span className>홈</span>
          </a>
        </div>
        <div className="flex-col items-center justify-center">
          <a href="/src/pages/board/">
            <img src={life} className="mx-auto mb-1" alt="" />
            <span>게시판</span>
          </a>
        </div>
        <div className="flex-col items-center justify-center">
          <a href="/src/pages/exchange/">
            <img src={fullMap} className="mx-auto mb-1" alt="" />
            <span>내 근처</span>
          </a>
        </div>
        <div className="flex-col items-center justify-center">
          <img src={chat} className="mx-auto mb-1" alt="" />
          <span>채팅</span>
        </div>
        <div className="flex-col items-center justify-center">
          <a href="/src/pages/profile/">
            <img src={my} className="mx-auto mb-1" alt="" />
            <span>나의 이듬</span>
          </a>
        </div>
      </div>
    </nav>
  );
}

export default ComponentFooter;
