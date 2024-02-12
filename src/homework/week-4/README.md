# React week-4 과제 채팅

## 목표

- 4주차 과제를 확인한 후, 과제를 제출하세요. (마크업 구현 ✅ / 기능 구현 ✅)
  - [x] 4주차 과제는 채팅 앱 화면을 구현하는 것입니다.
        사용자가 입력한 내용을 데이터베이스에 저장하고, 사용자 화면에 업데이트 해봅니다.
  - [x] 커스텀 훅 함수를 1개 이상 작성해 여러 곳에서 재사용 해봅니다.
  - [ ] 리액트 컨텍스트 API를 활용해 앱 상태를 관리해보세요.
  - [x] PocketBase 인증, 리얼 타임 데이터베이스 등을 활용하세요.
  - [x] React Router 라이브러리를 활용해 라우팅하세요. (옵션)
  - [ ] 가능한 경우, Storybook을 활용해보세요. (옵션)

---

## GIF

<img src="https://github.com/Taewook1212/react-homework/assets/147236247/d0c520cf-cbc9-46f4-b410-031bb16bb97c" weight="200xp" height="600px"/>

## 목차

[React week-4 과제](#react-week-4-과제)
[GIF](#gif)
[목차](#목차)
[환경](#환경)
[netilfy 배포](#netilfy-배포)
[과정 Process](#과정-process)
[pocketbase database 구조](#pocketbase-database-구조)
[커스텀 훅 함수](#커스텀-훅-함수)
[디렉토리 구조](#디렉토리-구조)
[과제 issues 트러블 슈팅](#과제-issues-트러블-슈팅)
[느낀점](#느낀점)
[블로그 작업기록 트러블슈팅 등등](#블로그-작업기록-트러블슈팅-등등)

---

### 환경

1. css : tawilwindcss
2. 빌드도구+컴파일 : vite
3. 리액트, jsx 사용
4. npm 사용

---

### netilfy 배포

사용법 : 한 쪽은 이 주소로 열고, 다른 쪽은 시크릿모드로 주소 사용.
로그인 후 chatList 채팅 목록이 나오는 화면이 있는데,
리스트가 안나온다면 새로고침을 해야합니다! (미해결)

https://kakaochat-taewook.netlify.app

---

## 과정 Process

- 라우터로 화면간이동 로직
- pocketbase realtime 구현
- chatScreen.jsx 파일 한곳에 모든 화면 작성 후 각 component로 분할
- 커스텀 hook 만들기
- 아토믹 component 만들어보기. ChatCard, MessageCard 등

## pocketbase database 구조

<img src="https://github.com/Taewook1212/react-homework/assets/147236247/4d522ddb-39e9-43a7-b209-fdb6f8d113e7" weight="200xp" height="200px"/>
<img src="https://github.com/Taewook1212/react-homework/assets/147236247/e079bad7-990e-4aec-b305-989b85bd706a" weight="200xp" height="200px"/>
<img src="https://github.com/Taewook1212/react-homework/assets/147236247/c4f9a480-2b8b-4e8f-a07d-4252be37eace" weight="200xp" height="200px"/>

---

### 커스텀 훅 함수

<img src="https://github.com/Taewook1212/react-homework/assets/147236247/faf273d0-692c-4d67-a6ac-70796cccba68" weight="200xp" height="200px"/>

#### 1.useLoggedInState.js

<img src="https://github.com/Taewook1212/react-homework/assets/147236247/6d85e76f-d946-42c7-95aa-72aea9febc86" weight="200xp" height="600px"/>

handleLogout,handleLogin 두개의 기능이 있습니다.
로그인여부를 확인하여 로그인, 로그아웃 기능을 합니다.
Login 화면과, chatList 화면에 사용되고 있습니다.

#### 2.usePasswordEmailState.js

## <img src="https://github.com/Taewook1212/react-homework/assets/147236247/6d85e76f-d946-42c7-95aa-72aea9febc86" weight="200xp" height="600px" weight="200xp" height="600px"/>

usePasswordState
useEmailState
두개의 상태값을 두개의 함수로 나누었습니다.
한개의 상태구조로 두개를 담당할 수 없기떄문에.

아직은 Login 화면에만 사용중이지만, 로그인이 필요한 부분에 사용될것으로 예상합니다.

### 디렉토리 구조

<img src='https://github.com/Taewook1212/react-homework/assets/147236247/594778a2-81cf-4f4d-9873-1368e984968a' weight="200xp" height="600px"/>

SpriteScreen - LoginScreen - ChatLsit - ChatScreenRoom 화면으로 구성

부모 컴포넌트로 chatScreen.jsx 파일에 화면들을 컴포넌트로 각 구성

lib파일 : timeAgo, pocketbase

components : MessageCard, ChatCard 컴포넌트로 나눔

## 과제 issues 트러블 슈팅

📌 React - Netlify, Redirection 에러

리액트 서버를 netlify를 통해 정상 배포했다.
이 때 새로고침이나 다른 화면으로 이동 중 아래와 같은 에러메시지가 나타난다.
<img src='https://github.com/Taewook1212/react-homework/assets/147236247/af910931-97b8-41fc-956b-52c6804c2e27' weight="200xp" height="200px"/>

page not found 는 404 에러로, 현재 url 에서 찾고자 하는 자원을 못찾았을 때 발생한다.
이전 까진 정상적으로 보이던 화면이 왜 새로고침 이후엔 보이지 않을까?

✏️ 원인
내 설정에서 리액트가 최초 접속할 때의 url 은 / 이다.
그리고 이 때 index.html 을 읽는다. 즉 해당 url 에 대한 자원은 index.html 로 정해져 있다.

하지만 화면을 넘기면서 라우팅된 url 이 예를 들어 /a 혹은 /b 가 됐을 땐, 각 url 에 맞는 자원이 존재하는가? 그렇지 않다.

index.html 처럼 정해진 자원이 없다. (react 는 single page application 이기 때문이다)

즉 /a , /b 라는 url 에서 새로고침을 하면, / 와 달리 곧바로 내려줄 자원이 존재하지 않기 때문에 404 에러가 발생하는 것이다.

🍋 해결

그렇다면 각 /a, /b 이란 url 에 곧바로 접근하더라도, 보여줄 자원만 있으면 404 에러를 피할 수 있다.

바로 index.html 을 보여주면 된다.

우선 public 폴더 내부에 \_redirects 파일을 생성한다. 확장자는 따로 없다.

<img src='https://github.com/Taewook1212/react-homework/assets/147236247/e909fe37-451d-4c5d-a395-bba9d6b7de71' weight="200xp" height="200px"/>

😥 미해결 에러
📌첫번쨰
<img src='https://github.com/Taewook1212/react-homework/assets/147236247/d793c131-3783-45e8-802e-08fdb4e54373' weight="200xp" height="200px"/>

CORS 정책 수정: 서버 측에서 CORS 헤더를 수정하여 요청을 허용하도록 설정합니다. 이를 위해 서버의 설정을 변경해야 합니다. 이 설정은 서버에서 다른 출처에서의 요청을 허용하도록 해주는 Access-Control-Allow-Origin 헤더를 포함해야 합니다

이런 말이 나오는데, 흑흑

그냥 무시해도 되더라구요... 흑

📌두번쨰
<img src='https://github.com/Taewook1212/react-homework/assets/147236247/41df6f3f-75a5-4570-abc6-6b7708dd565d' weight="200xp" height="200px"/>

새로 고침을 해야 리스트가 나옵니다.
<img src='https://github.com/Taewook1212/react-homework/assets/147236247/b1461029-ec2d-46e5-a005-d2e72adb0126' weight="200xp" height="200px"/>

이렇게 데이터를 첫화면에 useEffect로 안에 데이터를 가져오는 getChatWithUsers()를
썼지만 새로고침을해야 나옵니다.ㅠㅠ

---

## 느낀점

1. storybook을 못한점.
2. 채팅쪽 검색기능, 프로필이미지, 1:다 채팅기능을 못한점
3. 리액트 컨텍스트 API를 활용해 앱 상태를 잘 모르겠습니다.
4. 커스텀 훅을 더 못 만든점.
5. 한번 쉬다 보니 쭉 쉬게 되버려서..
6. 라우터를 구글링 + chatgpt 이용해서 사용. 이후에 나오는 끝없는 에러들...
7. useState 를 자주 사용하다보니 이제는 조금 익숙해진것같습니다.
8. storybook을 어떻게 이용해야할지 조금 궁금합니다.
9. 배포하고 배포한 주소로 A쪽에서 열고, 시크릿모드로 B부분으로 열어야 다른 token으로 로그인이 된다는 점.. 이게 맞을까요..? 배포한 주소로 두개 창 열면 동일 로그인 되버려서.

## 블로그 작업기록 트러블슈팅 등등

https://velog.io/@aaaa8229/React-%EC%B1%84%ED%8C%85%EA%B3%BC%EC%A0%9C-%EC%A4%80%EB%B9%84
