<template>
<base-header>Teacher Page</base-header>

<div>
    <h1>Multiple Choice Questions with Correct Answers</h1><div id="btn">
<base-button @click="openPopup" >Add Questions </base-button>
</div>
<custom-popup @addQuestion="addNewQuestion" @close="openPopup" v-if="showPopup" ></custom-popup>
    <ol class="questions-and-answers">
      <li v-for="question in Questions" :key="question">
        <p>{{ question.question }}</p>
        <ul type="none">
          <li v-for="(choice, choiceIndex) in question.choices" :key="choiceIndex">
            {{ String.fromCharCode(65 + choiceIndex)}}) {{ choice }}
          </li>
        </ul>
        <p><strong>Correct Answer:</strong> {{ question.correctAnswer }}</p>
      </li>
    </ol>
  </div>
</template>


<script>
import CustomPopup from "../Form/NewQuestion.vue"
export default{
    inject:['Questions'],
    components:
    {'custom-popup':CustomPopup},
    data(){
    return{
    showPopup: false,
    }
    },
    methods:{
    openPopup(){
    this.showPopup = !this.showPopup;  
    },
    addNewQuestion(newQuestion) {
      // Add the new question to your questions array
      this.Questions.push(newQuestion);
      this.openPopup();
    },
    }
}

</script>
<style scoped>
h1{
    text-align: center;
}

#btn{
display: flex;
justify-content: center;
margin-top: 25px;
}


</style>