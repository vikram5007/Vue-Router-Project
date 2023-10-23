<template>
 <RouterView></RouterView>
</template> 
<script >
import Login from './components/Login.vue'
export default{
  components:{Login},
  data(){
  return{
  Credentials:[{
  id:1,
  username:'vikram',
  password:'vikram@5007',
  role:'STUDENT'
  },
  {
  id:2,
  username:'Hari',
  password:'hari',
  role:'TEACHER'
  },
  {
  id:3,
  username:'AdminSA',
  password:'Sa@123',
  role:'ADMIN'
  },{
  id:4,
  username:'test',
  password:'test123',
  role:'STUDENT'
  },
  ],
  questions :[
  {
    question: "Which planet is known as the 'Red Planet'?",
    choices: ["Venus", "Mars", "Jupiter", "Saturn"],
    correctAnswer: "Mars"
  },
  {
    question: "Who is the author of the novel 'To Kill a Mockingbird'?",
    choices: ["Charles Dickens", "J.K. Rowling", "Harper Lee", "F. Scott Fitzgerald"],
    correctAnswer: "Harper Lee"
  },
  {
    question: "What is the chemical symbol for gold?",
    choices: ["Go", "Gd", "Au", "Ag"],
    correctAnswer: "Au"
  },
  {
    question: "What is the largest mammal in the world?",
    choices: ["Elephant", "Blue Whale", "Giraffe", "Polar Bear"],
    correctAnswer: "Blue Whale"
  },
  {
    question: "In which year did Christopher Columbus first voyage to the Americas?",
    choices: ["1492", "1620", "1776", "1865"],
    correctAnswer: "1492"
  }
  ], 
  }
  },
  provide(){
    return{
    Credentials:this.Credentials,
    Questions:this.questions
    }
  }
}
</script>

<style >
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@600&display=swap');

html{
  font-family: 'Poppins', sans-serif;
}
</style>
