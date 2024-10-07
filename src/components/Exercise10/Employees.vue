<template>
    <div>
        <div v-for="em in employees" :key="em.id">
            <p>ID: {{ em.id }}</p>
            <p>EmployeeName: {{ em.name }}</p>
            <p>Position: {{ em.position }}</p>
            <button @click="goToUser(em.id)">View Details</button>
        </div>
    </div>
</template>

<script setup>
import { useRouter } from 'vue-router';

    const employees = [
  {
    id: 1,
    name: "Nguyễn Văn A",
    position: "Developer",
    projects: ["Dự án X", "Dự án Y"],
    contact: {
      email: "nguyenvana@example.com",
      phone: "0123456789"
    }
  },
  {
    id: 2,
    name: "Trần Thị B",
    position: "Designer",
    projects: ["Dự án Z"],
    contact: {
      email: "tranthib@example.com",
      phone: "0987654321"
    }
  },
  {
    id: 3,
    name: "Lê Văn C",
    position: "Project Manager",
    projects: ["Dự án X", "Dự án Z"],
    contact: {
      email: "levanc@example.com",
      phone: "0369852147"
    }
  },
  {
    id: 4,
    name: "Phạm Thị D",
    position: "Tester",
    projects: ["Dự án Y"],
    contact: {
      email: "phamthid@example.com",
      phone: "0741852963"
    }
  },
  {
    id: 5,
    name: "Hoàng Văn E",
    position: "Business Analyst",
    projects: ["Dự án X", "Dự án Y", "Dự án Z"],
    contact: {
      email: "hoangvane@example.com",
      phone: "0159753684"
    }
  }
];
localStorage.setItem("employees",JSON.stringify(employees));
const router = useRouter();
const goToUser = (id) => {
    router.push(`/employees/${id}`)
} 
</script>
<style>

</style>