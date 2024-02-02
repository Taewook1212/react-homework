import { boardData } from '../../../data/boardData2';
import { Preview, BoardContent, ParticipantsNumber } from '../../../components';
import { Fragment } from 'react';

function Board() {
  const fullpeopleSvg = '/assets/fullpeople.svg';
  const calenderSvg = '/assets/calender.svg';
  const pika = '/assets/pika.gif';

  return (
    <Fragment>
      {boardData.map((item) => {
        return (
          <div
            key={item.id}
            className="group hover:bg-tertiary board-container text-bluegray-400 text-sm border-t-[1px] p-3 grid grid-cols-2"
          >
            <BoardContent
              fullpeopleSvg={fullpeopleSvg}
              calenderSvg={calenderSvg}
              {...item}
            />
            <Preview photo={pika} />
            <ParticipantsNumber
              icon={fullpeopleSvg}
              headcount={item.headcount}
            />
          </div>
        );
      })}
    </Fragment>
  );
}

export default Board;
