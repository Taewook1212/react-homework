function Preview({ photo }) {
  return (
    <div className="col-end-4 self-center">
      <figure>
        <img
          className="board-thumnail h-[60px] w-[60px]"
          src={photo}
          alt="게시물 미리보기 사진"
        />
        <figcaption
          className="sr-only"
          aria-label={'미리보기 이미지'}
        ></figcaption>
      </figure>
    </div>
  );
}

export default Preview;
