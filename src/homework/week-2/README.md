# React week-2 과제

## 목표 : 바닐라프로젝트의 board 게시판 JSON 데이터를 불러와 마크업에 연결하여 UI를 구현 필요한 경우, 리스트 렌더링을 활용해보세요.

---

## 목차

1. [환경](#환경)
2. [netilfy 배포](#netilfy-배포)
3. [과정 Process](#과정-process)
4. [마크업 구조](#마크업-구조)
5. [디렉토리 구조](#디렉토리-구조)
6. [jsx파일](#jsx파일)
7. [과제 issues 트러블 슈팅](#과제-issues-트러블-슈팅)
8. [느낀점](#느낀점)

---

### 환경

1. css : tawilwindcss
2. 빌드도구+컴파일 : vite
3. 리액트, jsx 사용
4. pnpm 사용

---

### netilfy 배포

https://react-week-2.netlify.app/

---

## 과정 Process

- week-1 에서 했던 코드를 사용했다.
- pocketBase에 있는 데이터를 받아서 data폴더에 .json 파일로 직접 넣었습니다.
- board.jsx에 있던 코드을, 최대한 아토믹으로 컴포넌트를 구분 boardConent부분, 미리보기, 참가인원
- 데이터를 받아와 list를 map으로 동적으로 랜더링 할 때, 해당 컴포넌트에 key값을 데이터의 id값으로 할당
- 컴포넌트에 인수와 인자를 받을 때 객체구조분해를 사용
- 컴포넌트가 많아짐에 따라 각 컴포넌트의 entry point로 /components/index.js를 만들었다.

---

### 마크업 구조

<img src="https://github.com/Taewook1212/react-homework/assets/147236247/243b2fd2-91e2-4263-a162-22e473cb051e" weight="200xp" height="600px"/>

---

### 디렉토리 구조

<img src='https://github.com/Taewook1212/react-homework/assets/147236247/39741604-178f-45d8-9511-96fde85f522f' weight="200xp" height="600px"/>

## jsx파일

### main.jsx

<img src='https://github.com/Taewook1212/react-homework/assets/147236247/5d71cba3-43ca-47e5-9419-4464a7387a15' weight="200xp" height="600px"/>

### boardData2.json

<img src='https://github.com/Taewook1212/react-homework/assets/147236247/4dbbac38-df6c-462c-9bf2-42cd18ba4da0' weight="200xp" height="600px"/>

### App.jsx

<img src='https://github.com/Taewook1212/react-homework/assets/147236247/94f742c1-af1e-49cf-a88d-df20dc1eee5c' weight="200xp" height="600px"/>

### board.jsx

<img src='https://github.com/Taewook1212/react-homework/assets/147236247/611188ff-55fc-4827-9b1a-7d3a5c75bc8f' weight="200xp" height="600px"/>

### BoardContent.jsx

<img src="https://github.com/Taewook1212/react-homework/assets/147236247/44a0993d-3f01-4d0d-8ebc-01fa31d806b2" weight="200xp" height="600px"/>

### Preview.jsx (이미지)

<img src='https://github.com/Taewook1212/react-homework/assets/147236247/46ca6b69-2894-479f-a91b-2c5bfb536a48' weight="200xp" height="600px"/>

### ParticipantsNumber (참가인원)

<img src='https://github.com/Taewook1212/react-homework/assets/147236247/73661292-8920-4880-a0f7-cf25b05b21a0' weight="200xp" height="600px"/>

### ComponentHeader (헤더부분)

<img src='https://github.com/Taewook1212/react-homework/assets/147236247/abb44cdc-da96-4563-acb2-86101c0d0732' weight="200xp" height="600px"/>

### ComponentFooter (하단부분)

<img src='https://github.com/Taewook1212/react-homework/assets/147236247/80c34b4e-99b8-467a-81cd-89915cd47fa3' weight="200xp" height="600px"/>

---

## 과제 issues 트러블 슈팅

### 1. React jsx 환경에서 컴포넌트에 객체를 인수로 던질 때 컴포넌트함수에서 인자로 { } 를 받아야한다.

1. 아래 오류 발견
   <img src='https://github.com/Taewook1212/react-homework/assets/147236247/9302a43a-c46e-4392-a78b-40c422ef0ff4' weight="200xp" height="600px"/>

링크를 들어가 보니, 리엑트 사이트로 들어와
Minified React error #31 라는 에러를 알려주고있다.
<img src='https://github.com/Taewook1212/react-homework/assets/147236247/b0071dbc-523f-4de0-b8b2-908b87dfb9f0' weight="200xp" height="600px"/>

빨간 글씨를 검색한 결과

```
React에서는 객체를 직접적으로 렌더링할 수 없습니다.
인자로 객체나 배열로 받을 때는 중괄호로{obj}를 받고 객체 내부의 특정 속성을 추출하여 렌더링 하거나 {obj.property}
다른방법은 객체구조분해로 인자로 받을때 {property} 바로 받아서 쓸 수있다.

```

수정부분 :

2. 아래 function PartipantsNumber(icon, headcount)를 function PartipantsNumber({icon, headcount}) 이렇게 중괄호를 넣어줬다. 객체이기 때문에

   <img src='https://github.com/Taewook1212/react-homework/assets/147236247/a90b2966-feeb-42eb-b168-d9669c829924' weight="200xp" height="600px"/>

### 2. Component 폴더,파일 이름으로 Footer 또는 Header 로 만들면, local에서는 build와 preivew 둘다 에러없이 작동이 가능하지만, netlify로 배포 시 에러가 나온다.

Could not resolve "../components/Header/Header" from "src/app/App.jsx"

netlify의 build 과정에서 위 같은 에러가 나온다.

확인 결과, 연결된 저장소에 Footer와 Header 폴더의 이름이 대문자로 변경되 있지 않고, 소문자로 들어가 있기 때문이었다.
예약어이었기 때문이지 확실하지 않지만,
폴더 이름을 변경 후 다시 build하고 배포한 결과 정상적으로 배포하게 되었습니다.

---

## 느낀점

1. 구조분해에서 살짝 햇갈렸다.
2. 배포하는데 공식문서에도 없었고, 검색해도 나오질 않아서, 한참을 해매다 찾았다.. 값진 경험이다.
3. if문을 줘서 조건 렌더링 하려 했지만, 지금 고른 UI에는 적용되지 않았다..(사실 힘들다. 다음에는 해야지)
4. 처음 화면을 띄우는데 속도가 느린것 같다...
5. pocketBase에서 받아오는 것은 상태관리 useEffect훅을 사용해야 좋다는데, 아직 몰라요..
   데이터가 받아오는 시간과 컴포넌트 렌더링 시점이 동기적으로 맞아야 하는 상태관리 라이브러리나, 훅을 사용하여 구현하거나, 컴포넌트의 생명주기 메서드를 활용하여 처리할 수 있어 추후에 배우로 적용하고 싶습니다.
6. 리드미.. 쓰는게 어렵네요
