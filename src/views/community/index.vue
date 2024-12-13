<!-- Community Page -->
<template>
    <div class="community-container">
        <h1>Community Page</h1>
        <ul>
            <li><router-link to="/community/detail/1">Post 1</router-link></li>
            <li><router-link to="/community/detail/2">Post 2</router-link></li>
        </ul>
    </div>
</template>

<script setup>
// Community Page script setup if needed
</script>

<style scoped>
.community-container {
    padding: 2rem;
}

ul {
    list-style: none;
    padding: 0;
}

li {
    margin: 0.5rem 0;
}

li a {
    color: #007bff;
    text-decoration: none;
}

li a:hover {
    text-decoration: underline;
}
</style>