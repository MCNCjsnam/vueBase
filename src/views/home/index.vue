<!-- Home Page -->
<template>
    <div class="home-container">
        <h1>Welcome to the Home Page</h1>
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