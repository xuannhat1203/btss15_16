<template>
    <div>
       <p>ID: {{ userDetail.id }}</p>
       <p>UserName: {{ userDetail.name }}</p>
       <p>Email: {{ userDetail.email }}</p>
       <p>Address: {{ userDetail.address }}</p>
    </div>
</template>

<script setup>
import { useRoute } from 'vue-router';

    const router = useRoute();
    const {id} = router.params;
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
    const userDetail = users.find((user)=>user.id === +id);
</script>

<style>

</style>