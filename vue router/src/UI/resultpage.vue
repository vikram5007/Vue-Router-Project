<template>
    <div>
      <!-- Button to open the result popup -->
      <base-button @click="openResultPopup">Submit Answers</base-button>
  
      <!-- Custom popup for displaying the result -->
      <div v-if="showResultPopup" class="result-popup">
        <div class="result-content">
          <h2>Results:</h2>
          <p>Correct Answers: {{ correctCount }}</p>
          <p>Total Questions: {{ totalQuestions }}</p>
          <p>Percentage: {{ calculatePercentage() }}%</p>
          <base-button  @click="closeResultPopup">Close</base-button >
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        showResultPopup: false,
        correctCount: 0,
        totalQuestions: 0,
      };
    },
    methods: {
      openResultPopup() {
        this.calculateResults();
        this.showResultPopup = true;
      },
      closeResultPopup() {
        this.showResultPopup = false;
        this.$emit('closer');
      },
      calculateResults() {
        // Calculate the count of correct answers
        this.correctCount = this.questions.reduce((count, question, index) => {
          return count + (this.selectedAnswers[index] === question.correctAnswer ? 1 : 0);
        }, 0);
  
        // Calculate the total number of questions
        this.totalQuestions = this.questions.length;
      },
      calculatePercentage() {
      if (this.totalQuestions === 0) {
        return 0;
      }
      return ((this.correctCount / this.totalQuestions) * 100).toFixed(2);
      },
    },
    props: {
      questions: Array, // Array of questions
      selectedAnswers: Array, // Array of selected answers
    },
  };
  </script>
  
  <style scoped>
  .result-popup {
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
  
  .result-content {
    background: white;
    padding: 20px;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
    text-align: center;
  }
  
  button {
    margin-top: 10px;
  }
  </style>
  