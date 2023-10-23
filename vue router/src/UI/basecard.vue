<template>
    <div class="card">
        <h1 class="name">
            <slot name="h1"></slot>
        </h1>
        <p class="role">
            <slot name="p"></slot>
        </p>
    </div>
</template>

<style scoped>
.card {
    width: 200px;
    /* Set the width of the card */
    background-color: #a3004c;
    /* Background color of the card */
    box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.1);
    /* Add a subtle box shadow */
    border-radius: 8px;
    /* Rounded corners */
    padding: 20px;
    /* Add padding for spacing */
    text-align: center;
    /* Center-align the content */
}

/* Style for the name */
.name {
    font-size: 24px;
    /* Set the font size for the name */
    margin: 0;
    color: #fff;
    /* Remove margin for spacing */
}

/* Style for the role */
.role {
    color: #ffffff;
    /* Text color for the role */
    background-color: #00aaff;
    /* Background color for the pill-like shape */
    border-radius: 16px;
    /* Create a pill-like shape */
    display: inline-block;
    /* Make it inline */
    padding: 4px 8px;
    /* Add padding for spacing within the pill */
}

</style>