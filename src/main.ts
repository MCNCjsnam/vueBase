import { createApp } from 'vue';
import { createPinia } from 'pinia';
import './style.css';
import App from './App.vue';
import router from './router'; // 라우터 설정 파일에서 가져오기

const pinia = createPinia();

// Pinia와 Router를 플러그인으로 등록
createApp(App).use(router).use(pinia).mount('#app');
