<template>
    <form @submit.prevent="handleSubmit">
        <label>Email:</label>
        <input type="email" required v-model="email">
        <label>Password:</label>
        <input type="password" required v-model="password">
        <div class="error">{{ passwordError }}</div>

        <label>Role:</label>
        <select v-model="role">
            <option value="developer">Web developer</option>
            <option value="designer">Web designer</option>
        </select>

        <label>Skils</label>
        <input type="text" v-model="tempSkill" @keyup.alt="addSkill">
        <div v-for="skill in skills" :key="skill" class="pill" @click="removeSkill">
          {{ skill }}
        </div>

        <div class="terms">
          <input type="checkbox" v-model="terms" required>
          <label>Accept terms and conditions</label>
        </div>
        
        <div class="submit">
          <button>Create account</button>
        </div>

    </form>
    <h2>Info</h2>
    <p>Email: {{email }}</p>
    <p>Password: {{ password }}</p>
    <p>Role: {{role}}</p>
    <p>Accepted terms: {{ terms }}</p>
</template>

<script>
export default {
    name:'SignUpForm',
    data() {
    return {
      email: '',
      password: '',
      role: 'developer',
      terms: false,
      tempSkill: '',
      skills: [],
      passwordError: ''
    }
  },
  methods: {
      addSkill(e){
        if (e.key === ',' && this.tempSkill){
          if (!this.skills.includes(this.tempSkill)){
            this.skills.push(this.tempSkill)
            this.tempSkill = ''
          }
        }
      },
      removeSkill(e){
        let index = this.skills.indexOf(e.srcElement.textContent)
        this.skills.splice(index, 1)
      },
      handleSubmit(){
        // validate pasword (check if pw is longer than 5 chars)
        this.passwordError = this.password.length > 5 ? '' 
        : 'Password needs to be at least 6 chars long'

        if(!this.passwordError){
          console.log(this.email)
          console.log(this.password)
          console.log(this.role)
          console.log(this.terms)
          console.log(this.skills)
        }
      }
    }      
}
</script>

<style>
  form {
    max-width: 420px;
    margin: 30px auto;
    background: white;
    text-align: left;
    padding: 40px;
    border-radius: 10px;
  }
  label {
    color: #aaa;
    display: inline-block;
    margin: 25px 0 15px;
    font-size: 0.6em;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-weight: bold;
  }
  input, select {
    display: block;
    padding: 10px 6px;
    width: 100%;
    box-sizing: border-box;
    border: none;
    border-bottom: 1px solid #ddd;
    color: #555;
  }
  input[type="checkbox"] {
    display: inline-block;
    width: 16px;
    margin: 0 10px 0 0;
    position: relative;
    top: 2px;
  }
  .pill{
    display: inline-block;
    margin: 20px 10px 0 0;
    padding: 6px 12px;
    background: #eee;
    border-radius: 20px;
    font-size: 12px;
    letter-spacing: 1px;
    font-weight: bold;
    color: #777;
    cursor: pointer;
  }
  button{
    background: #0b6dff;
    border: 0;
    padding: 10px 20px;
    margin-top: 20px;
    color: white;
    border-radius: 20px;
    cursor: pointer;
  }
  .submit{
    text-align: center;
  }
  .error{
    color: #ff0062;
    margin-top: 10px;
    font-size: 0.8em;
    font-weight: bold;
  }
</style>