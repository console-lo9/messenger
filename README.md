<h1 align="center"> 메신저 과제 </h1>

<h3 align="center"> 서비스 링크: https://fervent-tereshkova-9b041a.netlify.app/</h3>

<p align="center"><img width="500" src="https://bit.ly/3HyINHE" /></p>

## 프로젝트 소개

## 팀원

|  이름  |                       Github                        | 담당 기능 |
| :----: | :-------------------------------------------------: | :-------- |
| 우종원 | [Ubermensch0608](https://github.com/Ubermensch0608) |           |
| 박중섭 |    [crucial-sub](https://github.com/crucial-sub)    | 구현      |
| 이태림 |       [ttaerrim](https://github.com/ttaerrim)       | 관리      |
| 임수영 |     [penguin311](https://github.com/penguin311)     |           |

## 스택

`React` `javascript` `styled-components` `redux`

## 설치

```
# clone the project
$ git clone https://github.com/console-lo9/README-TEMPLATE.git

# install modules
$ cd README-TEMPLATE
$ npm ci || yarn

# start
$ npm start || yarn start

⠀
⠀  You can now view this project in the browser.
⠀  http://localhost:3000/
⠀
```

## 의존성

```
  "dependencies": {
    "axios": "^0.25.0",
    "react": "^17.0.2",
    "react-dom": "^17.0.2",
    "react-scripts": "5.0.0",
    "styled-components": "^5.3.3",
    "web-vitals": "^2.1.4"
  },
```

## 파일 구조

     ├── public
     └── src
         ├── components
         │   ├── BuyerRecommendImg
         │   ├── Etc
         │   ├── NoticeProductInfo
         │   ├── ProductBenefit
         │   ├── ProductDelivery
         │   ├── ProductInfo
         │   ├── ProductOptions
         │   ├── ProductPeriodSetup
         │   ├── ProductThumbnail
         │   └── UploadImages
         ├── layout
         │   ├── Inputs
         │   └── Section
         ├── pages
         ├── store
         │   └── Contexts
         └── utils
             └── svg

> 작성 후 삭제
> 참고 (https://www.lesstif.com/lpt/linux-tree-54952142.html)
>
> ```
> $ tree -N -L 2 -d -I "node_modules"
> ```
>
> 또는 vscode File-tree-generator extension 사용

## 구현 사항

-   [ ] 입력창
    -   [x] 엔터 키로 전송 가능
    -   [x] 컨텐츠 입력 시 전송 버튼 즉시 활성화
    -   [x] 컨텐츠 미입력 시 전송 불가
    -   [ ] 멀티 라인 입력 가능
-   [ ] 대화 목록
    -   [ ] 과거부터 최신 순으로 정렬
    -   [ ] 메시지를 보낼 때 대화 목록은 항상 가장 아래로 스크롤
    -   [ ] 미리 생성된 데이터로 3명이 5건의 메시지 주고받는 내용 출력
-   [ ] 메시지
    -   [ ] 내가 전송한 메시지의 경우 이름 옆에 \* 문자 출력
    -   [ ] 보낸 날짜의 경우 yyyy-mm-dd hh:MM:ss 포멧으로 출력
    -   [ ] 사용자가 보낸 시간대로 출력
    -   [ ] 답장을 클릭하면 "사용자 이름\n" + "메시지 내용\n" + "(회신)\n" 문자가 입력창에 자동으로 삽입
    -   [ ] 삭제 버튼을 클릭하면 "\*\*\* 메시지를 삭제하시겠습니까?" 메시지 출력되고 응답시 삭제
    -   [ ] \*\*\*는 메시지 내용 중 최대 10자 출력, 나머지는 ... 처리
    -   [ ] hover 시 배경 스타일 변경 & 답장, 삭제 버튼 표시
-   [ ] 로그인
    -   [ ] 간단한 로그인 파이어베이스로 구현
    -   [ ] (2순위: localStorage로 구현)
-   [ ] 레이아웃
    -   [ ] 재사용 가능 Input Component
    -   [ ] 재사용 가능 Button Component (답장, 삭제)
-   [ ] 리덕스를 통한 상태 관리
    -   [ ] 메시지 데이터 모델

## 스크린샷

> 사진 더 넣을 거면 여기에

## 과제 후기
