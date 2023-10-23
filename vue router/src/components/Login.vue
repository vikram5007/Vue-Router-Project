
<template>
    <div id="center">
        <div class="login-container">
            <h2>User <br>Login</h2>
            <form @submit.prevent="Loginprocess">
                <input type="text" name="username" placeholder="Username" required v-model="Username">
                <input type="password" name="password" placeholder="Password" required v-model="Password">
                <button type="submit">Login</button>
            </form>
        </div>
    </div>
</template>

<script >
import Swal from 'sweetalert2';
export default {

    inject: ['Credentials'],
    data() {
        return {
            Username: '',
            Password: '',
            LoginFlag: false
        }
    },
    methods: {
        Loginprocess() {
            const foundCredentials = this.Credentials.find(
                cred => cred.username === this.Username && cred.password === this.Password
            );
            if (foundCredentials) {
                // Credentials match, set LoginFlag to true or perform your login logic
                this.LoginFlag = true;
                Swal.fire({
                    title: 'Welcome!',
                    text: `Hello, ${foundCredentials.username}! You have successfully logged in.`,
                    icon: 'success',
                }).then((result) => {
                    if (result.isConfirmed) {
                        this.initiateRoute(foundCredentials);
                    }
                });
            } else {
                // Credentials do not match
                this.LoginFlag = false;
                Swal.fire({
                    title: 'Login Failed',
                    text: 'Invalid username or password. Please try again.',
                    icon: 'error',
                });
            }
            this.Username = ""
            this.Password = ""
        },
        initiateRoute(foundCredentials) {
            if (foundCredentials.role === 'STUDENT') {
                this.$router.push('/student'); // Route to the Student component
            } else if (foundCredentials.role === 'TEACHER') {
                this.$router.push('/teacher'); // Route to the Teacher component
            } else {
                this.$router.push('/admin'); // Route to the Admin component
            }
        }
    },
}

</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@600&display=swap');

body {
    font-family: 'Poppins', sans-serif;
    background-color: #f4f4f4;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
}

#center {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
}

.login-container {
    background: #fff;
    border-radius: 5px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    padding: 50px;
    text-align: center;
    width: 400px;
}

.login-container h2 {
    margin: 0;
    padding: 0;
    font-family: 'Poppins', sans-serif;
}

.login-container input {
    width: 100%;
    padding: 10px;
    margin: 10px 0;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-family: 'Poppins', sans-serif;
}

.login-container button {
    width: 250px;
    padding: 10px;
    background: #007BFF;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-family: 'Poppins', sans-serif;
}

.login-container button:hover {
    background: #0056b3;
}
</style>