<template>
    <button class="pill-button"><slot></slot></button>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@600&display=swap');
/* Style for the pill-shaped button */
.pill-button {
    display: inline-block;
    background-color: #007BFF;
    /* Background color of the button */
    color: #fff;
    /* Text color */
    padding: 10px 20px;
    /* Add padding for spacing */
    border: none;
    border-radius: 30px;
    /* Round the corners to create a pill shape */
    cursor: pointer;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    font-family: 'Poppins', sans-serif;
}</style>