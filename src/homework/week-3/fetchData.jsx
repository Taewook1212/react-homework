const API = import.meta.env.VITE_PB_API;

async function fetchProducts(page, perPage, setIsLoading) {
  try {
    setIsLoading(true); // 데이터 요청 시작 시 로딩 상태를 true로 설정
    const response = await fetch(
      `${API}/api/collections/community/records?page=${1}&perPage=${50}`
    );
    const data = await response.json();
    setIsLoading(false); // 데이터 요청 완료 시 로딩 상태를 false로 설정
    return data;
  } catch (error) {
    if (!(error instanceof DOMException)) {
      throw new Error(error);
    }
  }
}

export default fetchProducts;
