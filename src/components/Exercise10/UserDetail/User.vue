<template>
    <div>
        <h2>UserName: {{ userDetail?.name }}</h2>
        <button @click="goToProfile">Thông tin cá nhân</button>
        <button @click="goToProject">Dự án</button>
        <button @click="goToContact">Liên hệ</button>
    </div>
</template>

<script setup>
import { useRoute, useRouter } from 'vue-router';

const data = JSON.parse(localStorage.getItem("employees")) || [];
const route = useRoute();
const router = useRouter();
const { id } = route.params;  
const userDetail = data.find((user) => user.id === Number(id)); 
const goToProfile = () => {
    router.push(`/employees/${id}/profile`)
}
const goToProject = () => {
    router.push(`/employees/${id}/project`)
}
const goToContact = () => {
    router.push(`/employees/${id}/contact`)
}
</script>

<style>
</style>
