<template>
    <div>
        <p v-for="e in em.projects" :key="e.id">ProjectName: {{ e }}</p>
    </div>
</template>

<script setup>
import { useRoute } from 'vue-router';

const route = useRoute();
const { id } = route.params;
const data = JSON.parse(localStorage.getItem("employees")) || [];
const em = data.find((user) => user.id === Number(id)); 
</script>

<style>
</style>
