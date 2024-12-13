# base-vue

이 프로젝트는 기본적인 Vue 프로젝트 설정입니다.  
**수정날짜:** 2024-12-13

# Directory

    project/
    ├── .vscode/
    │   └── extensions.json        # VSCode 확장 설정 파일
    ├── public/
    │   └── vite.svg               # Vite 로고 파일
    ├── src/
    │   ├── assets/
    │   │   ├── img/               # 이미지 폴더
    │   │   └── style/             # 스타일 폴더
    │   ├── components/
    │   │   └── HelloWorld.vue     # 기본 컴포넌트
    │   ├── locales/
    │   │   ├── ar.json            # 아랍어 번역 파일
    │   │   ├── en.json            # 영어 번역 파일
    │   │   ├── fr.json            # 프랑스어 번역 파일
    │   │   ├── ko.json            # 한국어 번역 파일
    │   │   └── zh.json            # 중국어 번역 파일
    │   │   └── index.ts           # 번역 관련 초기화 파일
    │   ├── router/
    │   │   ├── routes/
    │   │   │   ├── Community.ts   # 커뮤니티 라우트 설정
    │   │   │   ├── ErrorRoutes.ts # 에러 페이지 라우트
    │   │   │   ├── HomeRoutes.ts  # 홈 라우트 설정
    │   │   │   └── LoginRoutes.ts # 로그인 라우트 설정
    │   │   └── index.ts           # 라우터 초기화 파일
    │   ├── shared/
    │   │   └── util.ts            # 공유 유틸리티 함수
    │   ├── store/
    │   │   └── userStore.ts       # 유저 상태 관리
    │   ├── types/
    │   │   ├── store.ts           # 스토어 관련 타입 정의
    │   │   └── util.ts            # 유틸리티 관련 타입 정의
    │   ├── views/
    │   │   ├── community/
    │   │   ├── error/
    │   │   ├── home/
    │   │   └── login/
    │   │       └── index.vue      # 로그인 뷰 컴포넌트
    │   ├── App.vue                # 메인 앱 컴포넌트
    │   ├── main.ts                # 애플리케이션 엔트리 포인트
    │   ├── style.css              # 전역 스타일 파일
    │   └── vite-env.d.ts          # Vite 관련 TypeScript 정의
    ├── .gitignore                 # Git 제외 파일 설정

# Create

    1) npm create vite@latest

    2) Project Name 입력
        - vueBase

    3) Package Name 입력
        - vueBase

    4) Framework 선택
        -vue

    5) Variant 선택
        - TypeScript

# Start & Build

    - npm run dev
    - npm run build

# Install npm

    Axios (서버 통신)
        - npm install axios

    Pinia (상태 관리)
        - npm install pinia

    Vue Router (라우터)
        - npm install vue-router

    Vue I18n (다국어)
        - npm install vue-i18n

    eslint, prettier
        - npm i -D eslint prettier eslint-plugin-vue eslint-config-prettier eslint-plugin-prettier @typescript-eslint/eslint-plugin @typescript-eslint/parser
