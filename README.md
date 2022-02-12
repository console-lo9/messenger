<h1 align="center"> 메신저 과제 </h1>

<h3 align="center"> 서비스 링크: https://console-lo9-messenger.herokuapp.com</h3>

<p align="center"><img width="800" src="https://user-images.githubusercontent.com/93258739/153689576-dd79fe3d-2f67-4657-848e-937f8c231880.jpg" /></p>

# 👏 프로젝트 소개

> json-server 로 만든 가상의 서버에서 대화 목록을 가져와 대화 목록을 화면에 출력한 후
> 대화에 참여한 사용자가 메시지를 전송할 수 있도록 하는 페이지 제작.

<br/><br/>

## 🙋‍♀️🙋‍♂️ 팀원

<table>
<thead>
<tr>
<td>프로필</td>
<td>이름</td>
<td>Github</td>
<td>담당 기능</td>
</tr>
</thead>

<tbody>
<tr>
<td>
<a href="https://github.com/Ubermensch0608"
><img
src="https://avatars.githubusercontent.com/Ubermensch0608"
width="100px;"
alt=""
/></a>
</td>
<td><b>우종원</b></sub></td>
<td><a href="https://github.com/Ubermensch0608" >Ubermensch0608</a></td>
<td>메시지 데이터 동적 관리, 메시지 입력 기능, 전역상태 관리</td>
</tr>

<tr>
<td>
<a href="https://github.com/crucial-sub"
><img
src="https://avatars.githubusercontent.com/crucial-sub"
width="100px;"
alt=""
/></a>
</td>
<td><b>박중섭</b></td>
  <td><a href="https://github.com/crucial-sub" >crucial-sub</a></td>
<td>메시지 삭제 기능, 메인 페이지 해더 및 좌측네브바</td>
</tr>

<tr>
<td>
<a href="https://github.com/ttaerrim"
><img
src="https://avatars.githubusercontent.com/ttaerrim"
width="100px;"
alt=""
/></a
></td>
<td align="center"><sub><b>이태림</b></sub></td>
  <td><a href="https://github.com/ttaerrim" >ttaerrim</a></td>
<td>메시지 답장 기능, 전역 상태 관리</td>
</tr>

<tr>
<td align="center">
<a href="https://github.com/penguin311"
><img
src="https://avatars.githubusercontent.com/penguin311"
width="100px;"
alt=""
/><br /><sub><b>임수영</b></sub></a
></td>
<td>임수영</td>
<td><a href="https://github.com/penguin311" >penguin311</a></td>
<td>로그인&아웃, 유저 모델, 메인 페이지 스타일링</td>
</tr>
</tbody>
</table>  
  
<!--   
  <tr>
        </td>
      <td align="center">
      <a href="https://github.com/Ubermensch0608"
        ><img
          src="https://avatars.githubusercontent.com/Ubermensch0608"
          width="100px;"
          alt=""
        /><br /><sub><b>우종원</b></sub></a>
    <br />
    </td>
    <td align="center">
      <a href="https://github.com/crucial-sub"
        ><img
          src="https://avatars.githubusercontent.com/crucial-sub"
          width="100px;"
          alt=""
        /><br /><sub><b>박중섭</b></sub></a
      ><br />
    </td>
    <td align="center">
      <a href="https://github.com/ttaerrim"
        ><img
          src="https://avatars.githubusercontent.com/ttaerrim"
          width="100px;"
          alt=""
        /><br /><sub><b>이태림</b></sub></a
      ><br />
    </td>
    <td align="center">
      <a href="https://github.com/penguin311"
        ><img
          src="https://avatars.githubusercontent.com/penguin311"
          width="100px;"
          alt=""
        /><br /><sub><b>임수영</b></sub></a
      ><br />
  </tr>
</table> -->

|  이름  |                       Github                        | 담당 기능         |
| :----: | :-------------------------------------------------: | :---------------- |
| 우종원 | [Ubermensch0608](https://github.com/Ubermensch0608) | 메시지 데이터 동적 관리, 메시지 입력 기능, 전역상태 관리 |
| 박중섭 |    [crucial-sub](https://github.com/crucial-sub)    | 메시지 삭제 기능, 메인 페이지 해더 및 좌측네브 |
| 이태림 |       [ttaerrim](https://github.com/ttaerrim)       | 메시지 답장 기능, 전역 상태 관리 |
| 임수영 |     [penguin311](https://github.com/penguin311)     | 로그인&아웃, 유저 모델, 메인 페이지 스타일링 |

<br/>


## ⚙ 설치

```
# clone the project
$ git clone https://github.com/console-lo9/messenger.git

# install modules
$ cd messenger
$ npm ci || yarn

# start
$ npm start || yarn start

⠀
⠀  You can now view this project in the browser.
⠀  http://localhost:3000/
⠀
```

<br/>

## 🔗 의존성

```
"dependencies": {
    "@reduxjs/toolkit": "^1.7.2",
    "@testing-library/jest-dom": "^5.16.2",
    "@testing-library/react": "^12.1.2",
    "@testing-library/user-event": "^13.5.0",
    "concurrently": "^7.0.0",
    "json-server": "^0.17.0",
    "nanoid": "^3.2.0",
    "polished": "^4.1.4",
    "react": "^17.0.2",
    "react-dom": "^17.0.2",
    "react-icons": "^4.3.1",
    "react-redux": "^7.2.6",
    "react-router-dom": "^6.2.1",
    "react-scripts": "5.0.0",
    "styled-components": "^5.3.3",
    "web-vitals": "^2.1.4"
}
```

<br/>

## 📂 파일 구조

    ├── public
    └── src
        ├── assets
        ├── components
        │   ├── Login
        │   ├── Messages
        │   ├── Modal
        │   └── NewMessage
        ├── hooks
        ├── layout
        ├── models
        ├── pages
        ├── store
        │   ├── action
        │   └── reducer
        └── utils
        ├── App.js
        ├── GlobalStyle.js
        └── index.js

<br/>

## ✨ 구현 사항

-   [x] 입력창
    -   [x] 엔터 키로 전송 가능
    -   [x] 컨텐츠 입력 시 전송 버튼 즉시 활성화
    -   [x] 컨텐츠 미입력 시 전송 불가
    -   [x] 멀티 라인 입력 가능
-   [x] 대화 목록
    -   [x] 과거부터 최신 순으로 정렬
    -   [x] 메시지를 보낼 때 대화 목록은 항상 가장 아래로 스크롤
    -   [x] 미리 생성된 데이터로 3명이 5건의 메시지 주고받는 내용 출력
-   [x] 메시지
    -   [x] 내가 전송한 메시지의 경우 이름 옆에 \* 문자 출력
    -   [x] 보낸 날짜의 경우 yyyy-mm-dd hh:MM:ss 포멧으로 출력
    -   [x] 사용자가 보낸 시간대로 출력
    -   [x] 답장을 클릭하면 "사용자 이름\n" + "메시지 내용\n" + "(회신)\n" 문자가 입력창에 자동으로 삽입
    -   [x] 삭제 버튼을 클릭하면 "\*\*\* 메시지를 삭제하시겠습니까?" 메시지 출력되고 응답시 삭제
    -   [x] \*\*\*는 메시지 내용 중 최대 10자 출력, 나머지는 ... 처리
    -   [x] hover 시 배경 스타일 변경 & 답장, 삭제 버튼 표시
-   [x] 로그인
    -   [x] 간단한 로그인 localStorage로 구현
-   [x] 레이아웃
    -   [x] 재사용 가능 Button Component
-   [x] **리덕스**를 통한 상태 관리
    -   [x] 메시지 데이터 모델, 현재 유저, 답장 input, 모달 창

<br/>


## 🗺 한 눈으로 보는 구현 기능
1. 로그인 및 사용자 인식 기능
<img src='https://user-images.githubusercontent.com/93258739/153690714-76369c95-2cd7-481a-9389-a3e0f5f3b674.gif' alt="gif" />

2. 메세지 답장 기능
<img src='https://user-images.githubusercontent.com/93258739/153690928-27c0cc72-14f5-41ee-9dd6-217544ceabb0.gif' alt="gif" />

3. 메세지 삭제 기능 
<img src='https://user-images.githubusercontent.com/93258739/153691138-ae9da50d-ad2b-46bb-afdd-efe0debc3717.gif' alt="gif" />

> 

## 🚀 스택

<br/>

<img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black">
<img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black">
<img src="https://img.shields.io/badge/redux-764ABC?style=for-the-badge&logo=redux&logoColor=black">
<img src="https://img.shields.io/badge/styled-compontents-DB7093?style=for-the-badge&logo=styled-components&logoColor=white">

<br/><br/>

## 💡 과제 후기

### **우종원** 🍀

이번 프로젝트에서 느낀 점은 크게 두 가지입니다.😊

첫째, **개인의 효율성과 생산성**을 높인 것입니다. 기능 구현에서 막히는 부분은 서칭을 통해 학습, 새로운 기술의 적용은 효율성과 생산성을 높여 목표 완수에 필요한 시간을 크게 단축시켰습니다.  

둘째, **좋은 협업**이 무엇인지 느꼈습니다. 최신 이슈를 공유하는 등 소통을 기본으로 하여 효율적인 업무 분담에 성공했습니다. 또, 혼자서는 해결하기 힘들었던 기능 및 오류를 팀원끼리 합심해 해결해나갔던 경험을 통해 팀플레이, 그리고 좋은 협업이란 무엇인지를 느낄 수 있었습니다.


### **박중섭** ✨

### **이태림** 🐯

### **임수영** 🐧
