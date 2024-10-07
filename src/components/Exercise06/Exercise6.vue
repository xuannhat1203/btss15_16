<template>
    <div>
      <button :class="{ 'active-link': $route.path === '/bt6' }">
        <router-link to="/bt6">Home</router-link>
      </button>
      <button :class="{ 'active-link': $route.path === '/bt6/about' }">
        <router-link to="/bt6/about">About</router-link>
      </button>
      <button :class="{ 'active-link': $route.path === '/bt6/contact' }">
        <router-link to="/bt6/contact">Contact</router-link>
      </button>
    </div>
  </template>
  
  <script>
  export default {
    
  }
  </script>
  
  <style>
  .active-link {
    background-color: blue;
    color: white;
  }
  </style>
  