function ParticipantsNumber({ icon, headcount }) {
  return (
    <div className="group-hover:text-background gap-1 items-center col-end-4 self-end justify-end flex">
      <img src={icon} alt="참가 인원수" />
      <span className="board-joinPeople">{headcount}/10명</span>
    </div>
  );
}

export default ParticipantsNumber;
