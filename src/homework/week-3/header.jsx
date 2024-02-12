function SearchHeader({ type, label, placeholder, onChange }) {
  return (
    <div className="flex text-base text-Contents-contentTertiary items-center mt-3 mb-4">
      <button type="button" className="search-back mx-4">
        <img src="/public/assets/directionL.svg" alt="뒤로가기" />
      </button>

      <label htmlFor="searchInput" className="sr-only">
        검색창
      </label>
      <input
        label={label}
        type={type}
        id="searchInput"
        placeholder={placeholder}
        aria-label="검색할 품목을 입력해주세요"
        className="search-input bg-gray-100 rounded-2xl w-3/4 h-[1.875rem] pl-[0.625rem] text-Contents-contentPrimary pr-[0.625rem]"
        onChange={onChange}
      />
    </div>
  );
}

export default SearchHeader;
