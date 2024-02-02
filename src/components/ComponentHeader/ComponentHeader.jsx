import alramBell from '/public/assets/alramBell.svg';
import direction from '/public/assets/direction.svg';
import search from '/public/assets/search.svg';
import hamburger from '/public/assets/hamburger.svg';

function ComponentHeader() {
  return (
    <header className="region-nav sticky top-0 bg-background h-[2.8125rem]">
      <div className="region-nav__wrapper flex justify-between w-full px-5 py-2">
        <div className="flex flex-shrink-0 select-wrapper">
          <select className="w-32 text-lg font-semibold appearance-none">
            <option value="">남가좌제2동</option>
            <option value="">호원2동</option>
          </select>
          <img
            src={direction}
            className="w-4 h-4 translate-y-1 pointer-events-none -translate-x-7"
            alt=""
          />
        </div>
        <div className="flex items-center gap-4">
          <a href="/src/pages/search/" className="flex-shrink-0">
            <img
              src={search}
              className="w-[1.625rem] h-[1.625rem]"
              alt="검색"
            />
          </a>
          <a href="/src/pages/story/" className="flex-shrink-0">
            <img src={hamburger} alt="메뉴" />
          </a>
          <a href="#none" className="flex-shrink-0">
            <img
              src={alramBell}
              className="w-[1.25rem] h-[1.25rem]"
              alt="알림"
            />
          </a>
        </div>
      </div>
    </header>
  );
}

export default ComponentHeader;
