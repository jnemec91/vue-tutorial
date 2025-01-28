<template>
    <form>
        <label>Email:</label>
        <input type="email" required v-model="email">
        <label>Password:</label>
        <input type="password" required v-model="password">

        <label>Role:</label>
        <select v-model="role">
            <option value="developer">Web developer</option>
            <option value="designer">Web designer</option>
        </select>

        <h2>Checkboxes</h2>
        <div class="terms">
          <input type="checkbox" v-model="terms" required>
          <label>Accept terms and conditions</label>
        </div>
        
        <h2>Grouping v-models</h2>
        <div>
          <input type="checkbox" value="Jarda" v-model="names">
          <label>Jarda</label>
        </div>

        <div>
          <input type="checkbox" value="Pepa" v-model="names">
          <label>Pepa</label>
        </div>        

        <div>
          <input type="checkbox" value="Honza" v-model="names">
          <label>Honza</label>
        </div>  

    </form>
    <p>Email: {{email }}</p>
    <p>Password: {{ password }}</p>
    <p>Role: {{role}}</p>
    <p>Accepted terms: {{ terms }}</p>
    <p>Selected names: {{ names }}</p>
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
      names: []
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
</style>