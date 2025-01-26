
const app = Vue.createApp({
    // template: '<h2>Im the template</h2>'
    data() {
        return {
            showBooks: false,
            title: 'The Lord of the Rings',
            author: 'J.R.R. Tolkien',
            nationality: 'UK',
            price: 1
        }
    },
    methods: {
        changeTitle(value) {
            this.title = value
        },
        toggleBooks() {
            this.showBooks = !this.showBooks
        }
    }
})

app.mount('#app')