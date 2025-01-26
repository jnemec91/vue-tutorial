
const app = Vue.createApp({
    // template: '<h2>Im the template</h2>'
    data() {
        return {
            title: 'The Lord of the Rings',
            author: 'J.R.R. Tolkien',
            nationality: 'UK'
        }
    }
})

app.mount('#app')