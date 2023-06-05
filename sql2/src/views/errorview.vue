<template>
  <div class="error-page">
    <h2>Please log in and try again.</h2>
    <router-link to="/login" class="router">Go to Login</router-link>
  </div>
</template>

<style scoped>
.error-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 705px;
  background-color: #f5f5f5;
}

h2 {
  font-size: 24px;
  margin-bottom: 20px;
}

.router {
  color: white;
  background-color: #adadad;
  padding: 10px 20px;
  border-radius: 5px;
  text-decoration: none;
}

.router:hover {
  background-color: #adaadd;
}
</style>
