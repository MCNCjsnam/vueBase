<!-- Community Detail Page -->
<template>
    <div class="community-detail-container">
        <h1>Community Detail Page</h1>
        <p>This is the detail for post ID: {{ $route.params.id }}</p>
    </div>
</template>

<script setup>
import { useRoute } from 'vue-router';
const route = useRoute();
</script>

<style scoped>
.community-detail-container {
    padding: 2rem;
}
</style>