export function getPbImageURL(item, fileName = 'images') {
  return `${import.meta.env.VITE_PB_URL}/api/files/${item.collectionId}/${
    item.id
  }/${item[fileName]}`;
  // 이미지 주소를 복사해서 보면
  // https://aaaa8229.pockethost.io/api/files/vty3umpsi6uv8ra/xrn77rbl91rn1ng/45832575955b45598c72077488795f02_20210928171913_qwznZTd2Ro.jpg?thumb=100x100&token= 이렇게 생김, 이거에 맞추기 위해서 사용
  // 그리고 데이터베이스에 get으로 조회해서 나온 respanse.data.items 들어가서 확인하면 이해 됨.
}
