<template>
        <div>
            <p>ID: {{ em.id }}</p>
            <p>EmployeeName: {{ em.name }}</p>
            <p>Position: {{ em.position }}</p>
        </div>
</template>

<script setup>
import { useRoute } from 'vue-router';
    const route = useRoute();
    const {id} = route.params;
    const data = JSON.parse(localStorage.getItem("employees")) || [];
    const em = data.find((user) => user.id === Number(id)); 
</script>

<style>

</style>