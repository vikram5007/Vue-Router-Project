<template>
<base-header>Student Page</base-header>
  <div>
    <h1>Quiz for Students</h1>

    <!-- Display existing questions with radio options -->
    <div v-for="(question, index) in Questions" :key="index">
      <p><strong>Question {{ index + 1 }}:</strong> {{ question.question }}</p>
      <div class="choices">
        <label v-for="(choice, choiceIndex) in question.choices" :key="choiceIndex">
          <input
            type="radio"
            :name="'question-' + index"
            :value="choice"
            v-model="selectedAnswers[index]"
          />
          {{ String.fromCharCode(65 + choiceIndex)}}) {{ choice }}
        </label>
      </div>
    </div>
    <result :questions="Questions" :selectedAnswers="selectedAnswers" @closer="Reset"></result>
  </div>
</template>

<script>
import Result from '../UI/resultpage.vue'
export default {
inject:['Questions'],
  data() {
    return {
      questions: [], 
      selectedAnswers: [], // Initialize with your questions
    };
  },
  components:{
  'result':Result
  },
  methods: {
    Reset(){
    this.selectedAnswers=[];
    }
  },
};
</script>

<style scoped>
h1{
text-align: center;
}
.choices {
  margin: 10px 0;
}
</style>

