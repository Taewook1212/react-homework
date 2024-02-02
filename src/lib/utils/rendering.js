import { getNodes, getPbImageURL } from '/src/lib';

export function rendering(className, obj) {
  const renderBoxs = Array.from(getNodes(className));
  renderBoxs.forEach((item) => {
    let keyName = item.dataset.field;
    try {
      if (obj[keyName] !== '') {
        item.textContent = obj[keyName];
      }
    } catch {
      throw new Error(
        'rendering 함수의 인수는 문자 타입이어야 합니다, 두번째 인수는 객체여야 합니다'
      );
    }
  });
}
export function renderingPhoto(className, obj) {
  const renderBoxs = Array.from(getNodes(className));
  renderBoxs.forEach((item) => {
    let keyName = item.dataset.field;
    try {
      if (obj[keyName] !== '') {
        item.src = getPbImageURL(obj, `${keyName}`);
      }
    } catch {
      throw new Error(
        'rendering 함수의 인수는 문자 타입이어야 합니다, 두번째 인수는 객체여야 합니다'
      );
    }
  });
}
