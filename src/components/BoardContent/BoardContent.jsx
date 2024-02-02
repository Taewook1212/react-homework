import { formattedDateShort, timeAgo } from '../../lib';
function BoardContent({fullpeopleSvg,calenderSvg,category,title,age,date,time,locationSecond,created,
}) {
  return (
    <div className="col-start-1 row-start-1 row-end-3 col-end-3">
      <a href="/src/pages/boardContent/index.html#${item.id}">
        <span className="group-hover:text-background group-hover:bg-Blue-700 board-keyword p-1 border  rounded-default   text-Contents-contentPrimary">
          {category}
        </span>
        <strong className="board-title block my-1 text-base whitespace-nowrap text-ellipsis overflow-hidden text-Contents-contentPrimary">
          {title}
        </strong>
        <div className="my-1 flex gap-1 ">
          <img src={fullpeopleSvg} alt="참여인원 수" />
          <span className="group-hover:text-background board-people ">
            {age}
          </span>
        </div>
        <div className="my-1 flex gap-1">
          <img src={calenderSvg} alt="날짜" />
          <span className="group-hover:text-background board-when">
            {formattedDateShort(date)}
          </span>
          <span className="group-hover:text-background board-time">{time}</span>
        </div>
        <div className="my-1">
          <span className="group-hover:text-background board-location">
            {locationSecond}
          </span>
          <span className="group-hover:text-background">·</span>
          <span className="group-hover:text-background board-writeTime">
            {timeAgo(created)}
          </span>
        </div>
      </a>
    </div>
  );
}

export default BoardContent;
