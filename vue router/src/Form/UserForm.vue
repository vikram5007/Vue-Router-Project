<template>
    <div class="card">
      <h2>Add User</h2>
      <form @submit.prevent="addUser">
        <div class="form-group">
          <label for="username">Username</label><br>
          <input type="text" id="username" v-model="newUser.username" required >
        </div>
        <div class="form-group">
          <label for="password">Password</label><br>
          <input type="password" id="password" v-model="newUser.password" required>
        </div>
        <div class="form-group">
          <label for="role">Role</label><br>
          <select id="role" v-model="newUser.role" required>
            <option value="ADMIN">Admin</option>
            <option value="STUDENT">Student</option>
            <option value="TEACHER">Teacher</option>
          </select>
        </div>
        <base-button @click="addUser">Add User</base-button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        newUser: {
          username: '',
          password: '',
          role: 'Student',
        },
      };
    },
    methods: {
      addUser() {
        // Add the new user to your data or send it to a server, e.g., using an API call
        this.$emit('user-added', this.newUser);
  
        // Reset the form
        this.newUser = {
          username: '',
          password: '',
          role: 'Student',
        };
      },
    },
  };
  </script>
  
  <style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@600&display=swap');
  .card {
    width:50%;
    background-color: #fff;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    border-radius: 8px;
    padding: 20px;
    font-family: 'Poppins', sans-serif;
    text-align: center;
    margin-top:30px;
  }
  
  .form-group {
    font-family: 'Poppins', sans-serif;
    margin-bottom: 20px;
  }
  
  /* Add your other CSS styles here */
  </style>
  