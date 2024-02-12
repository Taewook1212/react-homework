import { debounce } from '../../lib/utils';
import { useState, useEffect, useRef } from 'react';
import SearchHeader from '../week-3/header';
import fetchProducts from './fetchData';

function Exercise() {
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(4);
  const titleColor = useRef(null);
  const titleColor2 = useRef(null);

  console.log('titleColor', titleColor.current);

  return (
    <div className="flex flex-col m-3">
      <CountUpDown
        page={page}
        setPage={setPage}
        perPage={perPage}
        setPerPage={setPerPage}
      />
      <h2 ref={titleColor2}>검색 폼</h2>
      <SearchForm
        page={page}
        perPage={perPage}
        myRef={titleColor}
        myRef2={titleColor2}
      />
    </div>
  );
}

const COUNT_KEY = 'count';

const getLocalStorageCount = () => {
  const count = JSON.parse(localStorage.getItem(COUNT_KEY));
  return count ?? 0;
};

function SearchForm({ page, perPage, myRef, myRef2 }) {
  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState('');
  const [isListVisible, setIsListVisible] = useState(false);
  const [databaseData, setDatabaseData] = useState([]);

  useEffect(() => {
    const controller = new AbortController();

    fetchProducts(page, perPage, setIsLoading).then((data) => {
      setDatabaseData(data?.items);
      setIsLoading(false);
    });

    // 여기서 myRef에 연결된 DOM 요소를 가져올 때, 조건문으로 확인하고 액세스합니다.
    // 옵셔널 체이닝을 사용하여 속성에 안전하게 액세스

    if (!myRef) {
      return (
        <div role="alert" ref={myRef}>
          데이터 로딩 중...
        </div>
      );
    }

    const element = myRef.current;
    const element2 = myRef2.current;
    console.log('myRef   ', myRef);

    // 이벤트 리스너를 추가하기 전에 요소가 있는지 확인
    if (element && element2) {
      element.addEventListener('mouseenter', handleMouseEnter);
      element.addEventListener('mouseleave', handleMouseLeave);
      element2.addEventListener('mouseenter', handleMouseEnter2);
      element2.addEventListener('mouseleave', handleMouseLeave2);
    }

    return () => {
      controller.abort();
      //이벤트 삭제 추가해

      element.removeEventListener('mouseenter', handleMouseEnter);
      element.removeEventListener('mouseleave', handleMouseLeave);
      element2.removeEventListener('mouseenter', handleMouseEnter2);
      element2.removeEventListener('mouseleave', handleMouseLeave2);
    };
  }, [myRef, myRef2, page, perPage]);

  const handleMouseEnter = (e) => {
    e.target.classList.add('border-2', 'border-rose-500');
  };
  const handleMouseLeave = (e) => {
    e.target.classList.remove('border-2', 'border-rose-500');
  };
  const handleMouseEnter2 = (e) => {
    e.target.classList.add('border-2', 'bg-rose-500');
  };
  const handleMouseLeave2 = (e) => {
    e.target.classList.remove('border-2', 'bg-rose-500');
  };

  const handleQuery = (e) => {
    console.log('ddd');
    setQuery(e.target.value);
    setIsListVisible(true);
  };

  const keyWords = databaseData.map((item) => {
    return item.activity || item.category;
  });

  const filteredKeywords = keyWords.filter((keyword) =>
    keyword.includes(query)
  );

  return (
    <div className="flex flex-col gap-3 ">
      <form ref={myRef}>
        <SearchHeader
          value={query}
          onChange={debounce(handleQuery)}
          type="search"
          label="학습 주제"
          placeholder="학습 주제 입력"
        ></SearchHeader>
      </form>
      {isListVisible && query && (
        <ul className="flex flex-col mt-4 px-3">
          {filteredKeywords.map((keyword, index) => (
            <li
              key={index}
              style={{ fontSize: 14 }}
              className="flex border-b gap-2 mb-2"
            >
              {keyword}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

function CountUpDown({ page, setPage, perPage, setPerPage }) {
  const [count, setCount] = useState(getLocalStorageCount);

  const handleInc = () => {
    const nextCount = count + 1;
    localStorage.setItem(COUNT_KEY, JSON.stringify(nextCount));
    setCount(nextCount);
    // setPerPage(perPage + 1);
  };

  const handleDec = () => {
    const nextCount = count - 1;
    localStorage.setItem(COUNT_KEY, JSON.stringify(nextCount));
    setCount(nextCount);
    // setPerPage(perPage - 1);
  };

  const buttonStyle = 'px-4 py-1 bg-sky-800 text-white rounded-md';

  return (
    <div className="flex gap-2">
      <button
        className={buttonStyle}
        type="button"
        onClick={handleDec}
        aria-label="1 감소"
      >
        -
      </button>
      <output className="text-2xl font-bold">{count}</output>
      <button
        className={buttonStyle}
        type="button"
        onClick={handleInc}
        aria-label="1 증가"
      >
        +
      </button>
    </div>
  );
}

export default Exercise;
