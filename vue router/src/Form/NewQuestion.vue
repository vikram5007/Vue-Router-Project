<template>
    <div class="popup-background">
      <div class="popup">
        <h2>Add New Question</h2>
        <form @submit.prevent="addQuestion">
          <div class="form-group">
            <label for="newQuestion">Question:</label><br>
            <input type="text" id="newQuestion" v-model="newQuestion" required>
          </div>
          <div class="form-group">
            <label for="newChoices">Choices (comma-separated):</label><br>
            <input type="text" id="newChoices" v-model="newChoices" required>
          </div>
          <div class="form-group">
            <label for="newCorrectAnswer">Correct Answer:</label><br>
            <input type="text" id="newCorrectAnswer" v-model="newCorrectAnswer" required>
          </div>
          <div class="form-actions"><br>
            <base-button type="sumbit">Add Question</base-button>
            <base-button @click="closePopup">Cancel</base-button>
          </div>
        </form>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        showPopup: true,
        newQuestion: "",
        newChoices: "",
        newCorrectAnswer: "",
      };
    },
    methods: {
      closePopup() {
        this.$emit("close")
      },
      addQuestion() {
        // Process and validate the data, then emit an event to add the new question.
        const choicesArray = this.newChoices.split(",").map(choice => choice.trim());
        this.$emit("addQuestion", {
          question: this.newQuestion,
          choices: choicesArray,
          correctAnswer: this.newCorrectAnswer,
        });
  
        // Clear the form fields
        this.newQuestion = "";
        this.newChoices = "";
        this.newCorrectAnswer = "";
  
        // Close the popup
        this.showPopup = false;
      },
    },
  };
  </script>
  
  <style scoped>

  h2{
    text-align: center;
  }
  .popup-background {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.7);
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .popup {
    background: white;
    padding: 20px;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  }
  
  .form-group {
    margin: 10px 0;
    font-family: 'Poppins', sans-serif;
    text-align: center;
  }
  
  .form-actions {
    margin-top: 20px;
    text-align: right;
  }
  
  button {
    margin-left: 10px;
  }
  </style>
  