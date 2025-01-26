
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
                {
                    id:1,
                    title:'Metro 2033',
                    author:'Dmitrij Gluchovskij',
                    image:'./assets/1.jpg',
                    isFav: true,
                },
                {
                    id:2,
                    title:'The Witcher', 
                    author:'Andrzej Sapkowski', 
                    image:'./assets/2.jpg',
                    isFav: false,                    
                }, 
                {
                    id:3,
                    title:'The Martian', 
                    author:'Andy Weir', 
                    image:'./assets/3.jpg',
                    isFav: false,                    
                },
            ],
            url: 'https://jnemec91.github.io',
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
        handleMouseMove(e) {
            this.x = e.offsetX
            this.y = e.offsetY
        },
        toggleFav(book) {
            book.isFav = !book.isFav
        }
    }
})

app.mount('#app')