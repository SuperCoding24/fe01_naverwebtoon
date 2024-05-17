# NAVER Webtoon Clone Coding
fe01 1차 프로젝트_네이버 웹툰 클론코딩
>super coding 1차 프로젝트 자주 사용하는 서비스 clone coding [배포 URL](https://naver-webtoon.vercel.app/)
https://github.com/SuperCoding24/fe01_naverwebtoon/assets/101804857/9f459e2e-0942-426c-92ce-804e4d892188


<br/>

## ✍🏻 Description
네이버 웹툰 페이지의 웹툰 탭의 페이지를 클론 코딩한 서비스입니다.

- 월 ~ 일 요일에 맞게 연재되는 웹툰을 볼 수 있습니다.
- 인기순/최신업로드순/휴재 필터 기능을 사용해 정렬된 리스트를 볼 수 있습니다.
- 제목/작가를 검색해서 관련 웹툰을 볼 수 있습니다.
- 다크모드/라이트모드를 사용할 수 있습니다.

<br/>

## 🧑‍💻 Member

| **김영욱** | **이영호** | **최미영** | **홍유진** |
| :------: |  :------: | :------: | :------: |
| [<img src="" height=150 width=150> <br/> @kywu9232](https://github.com/kywu9232) | [<img src="" height=150 width=150> <br/> @zeroho931](https://github.com/zeroho931) | [<img src="" height=150 width=150> <br/> @meeyoungchoi](https://github.com/meeyoungchoi-front-dev) | [<img src="" height=150 width=150> <br/> @ujeans](https://github.com/ujeans) |


<br/>

## 🌳 개발 환경

- Front : HTML, React, styled-components, Context API
- Back-end : 제공된 [웹툰 API](https://github.com/HyeokjaeLee/korea-webtoon-api) 활용
- 버전 및 이슈관리 : Github, Github Project
- 협업 툴 : Discord, Notion
- 서비스 배포 환경 : Vercel
- 커밋 컨벤션

| Type 키워드 | 사용 시점 |
| --- | --- |
| feat | 새로운 기능 추가 |
| fix | 버그 수정 |
| docs | 문서 수정 |
| style | 코드 스타일 변경 (코드 포매팅, 세미콜론 누락 등)기능 수정이 없는 경우 |
| design | 사용자 UI 디자인 변경 (CSS 등) |
| test | 테스트 코드, 리팩토링 테스트 코드 추가 |
| refactor | 코드 리팩토링 |
| build | 빌드 파일 수정 |
| ci | CI 설정 파일 수정 |
| perf | 성능 개선 |
| chore | 빌드 업무 수정, 패키지 매니저 수정 (gitignore 수정 등) |
| rename | 파일 혹은 폴더명을 수정만 한 경우 |
| remove | 파일을 삭제만 한 경우 |

<br/>

## 🔎 채택한 개발 기술과 브랜치 전략
<img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=black"> <img src="https://img.shields.io/badge/styled-component-DB7093?style=for-the-badge&logo=styled-component&logoColor=white">

- React
  - 컴포넌트화를 통해 추후 유지보수와 재사용성을 고려했습니다.
  - 유저 배너, 상단과 하단 배너 등 중복되어 사용되는 부분이 많아 컴포넌트화를 통해 리소스 절약이 가능했습니다.
- styled-component
  - props를 이용한 조건부 스타일링을 활용하여 상황에 알맞은 스타일을 적용시킬 수 있었습니다.
  - 빌드될 때 고유한 클래스 이름이 부여되어 네이밍 컨벤션을 정하는 비용을 절약할 수 있었습니다.
- Context API
  - 다크모드 테마 상태관리를 위해 필요한 기능으로는 redux, context api 등을 고려해보았습니다.
  - 'dark' 또는 'light' 두개의 value로 스타일이 바뀌기 때문에 굳이 redux & recoil를 쓸 필요없이 전역적 상태관리를 도와주는 context api를 사용하였습니다.
- eslint, prettier
  - 정해진 규칙에 따라 자동적으로 코드 스타일을 정리해 코드의 일관성을 유지하고자 했습니다.
  - 코드 품질 관리는 eslint에, 코드 포맷팅은 prettier에 일임해 사용했습니다.
- 브랜치 전략
  - Git-flow 전략을 기반으로 main, feature 보조 브랜치를 운용했습니다. 프로젝트 규모가 작았기 때문에 따로 develop 브랜치를 만들지 않았습니다.
  - main 브랜치는 배포 단계에서만 사용하는 브랜치입니다.
  - feature 브랜치는 기능 단위로 독립적인 개발 환경을 위하여 사용하였습니다.

<br/>

## 🚀 Quick Start
애플리케이션 설치

```bash
$> npm i
```

애플리케이션 실행

```bash
$> npm start
```

<br/>

## 🛠 Project Structure
```text
src
├── assets ───────────────  avg 파일
│   └── svg
│
├── components ───────────  view 컴포넌트
│   ├── footer
│   ├── monthNewWebtoon
│   ├── header
|   ├── webtoonList
│   └── webtoonSearch
│
├── context ──────────────  darkmode context api
│   └── themeProvider
│
├── hooks ────────────────  custom hooks
│   └── useFetchData
│
├── UI ────────────────  UI 디렉토리
│   ├── theme ────────────────  다크모드 테마, 토글 버튼 디렉토리
|   |   ├── GlobalStyles
│   |   └── theme
│   ├── Layout
│   └── Toggle ────────────────  다크모드 토글 버튼
│
├── App.js ───────────────  Route 처리 및 Theme Context 적용
├── index.css ────────────  공통 css
└── index.js ─────────────  애플리케이션 엔트리 포인트
```
