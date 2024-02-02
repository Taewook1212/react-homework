import { boardData } from '../../../data/boardData';

import fullpeopleSvg from '/public/assets/fullpeople.svg';
import calenderSvg from '/public/assets/calender.svg';
import pika from '/public/assets/pika.gif';
import { timeAgo, formattedDateShort } from '/src/lib';

function board() {
  return (
    <div>
      {boardData.map((item) => {
        return (
          <div
            key={item.id}
            className="group hover:bg-tertiary board-container text-bluegray-400 text-sm border-t-[1px] p-3 grid grid-cols-2"
          >
            <div className="col-start-1 row-start-1 row-end-3 col-end-3">
              <a href="/src/pages/boardContent/index.html#${item.id}">
                <span className="group-hover:text-background group-hover:bg-Blue-700 board-keyword p-1 border  rounded-default   text-Contents-contentPrimary">
                  {item.category}
                </span>
                <strong className="board-title block my-1 text-base whitespace-nowrap text-ellipsis overflow-hidden text-Contents-contentPrimary">
                  {item.title}
                </strong>
                <div className="my-1 flex gap-1 ">
                  <img src={fullpeopleSvg} alt="참여인원 수" />
                  <span className="group-hover:text-background board-people ">
                    {item.age}
                  </span>
                </div>
                <div className="my-1 flex gap-1">
                  <img src={calenderSvg} alt="날짜" />
                  <span className="group-hover:text-background board-when">
                    {formattedDateShort(item.date)}
                  </span>
                  <span className="group-hover:text-background board-time">
                    {item.time}
                  </span>
                </div>
                <div className="my-1">
                  <span className="group-hover:text-background board-location">
                    {item.locationSecond}
                  </span>
                  <span className="group-hover:text-background">·</span>
                  <span className="group-hover:text-background board-writeTime">
                    {timeAgo(item.created)}
                  </span>
                </div>
              </a>
            </div>
            <div className="col-end-4 self-center">
              <img
                className="board-thumnail h-[60px] w-[60px]"
                // src={getPbImageURL(item)}
                src={pika}
                alt="게시물 미리보기 사진"
                onerror="this.style.display='none';"
              />
            </div>
            <div className="group-hover:text-background gap-1 items-center col-end-4 self-end justify-end flex">
              <img src={fullpeopleSvg} alt="참가 인원수" />
              <span className="board-joinPeople">{item.headcount}/10명</span>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default board;
