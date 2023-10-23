<template>
    <base-header>Admin Page</base-header>
    <div class="container">
        <base-card v-for="a in Credentials" :key="a.id">
            <template v-slot:h1>
                {{ a.username }}
            </template>
            <template v-slot:p>
                {{ a.role }}
            </template>
        </base-card>
    </div>
    <div id="btn">
    <base-button @click="showUserFormModal">Add User</base-button>
    </div>
    <div id="form">
    <user-form-modal v-if="showUserForm" @user-added="handleUserAdded"></user-form-modal>
    </div>
</template>

<script>
import UserForm from '../Form/UserForm.vue';
export default {
    components: {
        'user-form-modal': UserForm,
    },
    inject: ['Credentials'],
    data() {
        return {
        showUserForm: false,
        }
    },
    methods: {
    showUserFormModal() {
      this.showUserForm = !this.showUserForm;
    },
    handleUserAdded(newUser) {
      // Add the new user to your Credentials array
      this.Credentials.push({
        id: this.Credentials.length + 1, // You may want to assign a proper ID
        ...newUser,
      });

      // Close the modal
      this.showUserForm = false;
    },
  },
}

</script>

<style scoped>
.container {
    display: flex;
    justify-content: space-around;
    margin-top: 50px;
}
#btn{
    display: flex;
    justify-content: center;
    margin-top:70px;
}
#form{
    display: flex;
    justify-content: center;
}
</style>