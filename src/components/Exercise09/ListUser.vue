<template>
    <div>
        <div v-for="user in users" :key="user.id">
            <p>ID: {{ user.id }}</p>
            <p>UserName: {{ user.name }}</p>
            <p>Email: {{ user.email }}</p>
            <p>Address: {{ user.address }}</p>
        </div>
    </div>
</template>

<script setup>
const users = [
    {
        id: 1,
        name: "Xuân Nhất",
        email: "xuannhatvn211@gmail.com",
        address: "Hải Dương"
    },
    {
        id: 2,
        name: "Nguyễn Văn B",
        email: "nguyenvanb@gmail.com",
        address: "Hà Nội"
    },
    {
        id: 3,
        name: "Trần Thị C",
        email: "tranthic@gmail.com",
        address: "Hồ Chí Minh"
    }
]
</script>

<style>
</style>
