<template>
    <div class="home-container">
        <h1>Welcome to the Home Page</h1>
        <div class="language-switcher">
            <button @click="$i18n.locale = 'ko'" class="switch-button">한국어로 바꾸기</button>
            <h2 class="language-info">다국어 처리 (선택된 다국어: {{ $i18n.locale }})</h2>
            <h3 class="translation-output">=> {{ $t('Test') }}</h3>
        </div>
        <nav>
            <router-link to="/community">Community</router-link>
        </nav>
    </div>
</template>

<script setup>
// Home Page script setup if needed
</script>

<style scoped>
.home-container {
    text-align: center;
    padding: 2rem;
}

.language-switcher {
    margin-top: 1.5rem;
    padding: 1rem;
    background-color: #f9f9f9;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.switch-button {
    padding: 0.5rem 1rem;
    font-size: 1rem;
    color: #fff;
    background-color: #28a745;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

.switch-button:hover {
    background-color: #218838;
}

.language-info {
    margin-top: 1rem;
    font-size: 1.2rem;
    color: #333;
    font-weight: bold;
}

.translation-output {
    margin-top: 0.5rem;
    font-size: 1rem;
    color: #666;
    font-style: italic;
}

nav {
    margin-top: 1rem;
}

nav a {
    color: #007bff;
    text-decoration: none;
    font-size: 1.2rem;
    margin: 0 1rem;
}

nav a:hover {
    text-decoration: underline;
}
</style>
