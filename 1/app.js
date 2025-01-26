
const app = Vue.createApp({
    // template: '<h2>Im the template</h2>'
    data() {
        return {
            showBooks: false,
            title: 'The Lord of the Rings',
            author: 'J.R.R. Tolkien',
            nationality: 'UK',
            price: 1,
            x: 0,
            y: 0,
            books: [
                {title:'Metro 2033', author:'Dmitrij Gluchovskij'},
                {title:'Witcher', author:'Andrzej Sapkowski'},
                {title:'The Martian', author:'Andy Weir'},
            ]
        }
    },
    methods: {
        changeTitle(value) {
            this.title = value
        },
        toggleBooks() {
            this.showBooks = !this.showBooks
        },
        handleEvents(e) {
            console.log(e)
            console.log(e.type)
            switch (e.type){
                case 'mouseover':
                    e.srcElement.style.background = 'red'
                    break                
                case 'mouseleave':
                    e.srcElement.style.background = 'orangered'
                    break
                case 'dblclick':
                    e.srcElement.style.background = 'green'
                    break
            }
        },
        handleMouseMove(e){
            this.x = e.offsetX
            this.y = e.offsetY
        }
    }
})

app.mount('#app')