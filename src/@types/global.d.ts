declare module '*.css' {
  const styleObject: { [key: string]: string };
  export default styleObject;
}

declare module '*.jpg';
declare module '*.png';
declare module '*.jpeg';
declare module '*.gif';
declare module '*.svg';
declare module '*.webp';
declare module '*.avif';
/*TypeScript가 CSS 모듈을 이해할 수 있도록 사용자 정의 타입 선언을 작성 */
