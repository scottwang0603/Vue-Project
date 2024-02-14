const app = Vue.createApp({
    data() {
        return {
            showBooks: true,
            books: [
                { title: 'The Name of the Wind', author: 'Patrick Rothfuss', img: 'assets/1.jpg', isFav: true},
                { title: 'The WAY OF THE KINGS', author: 'Brandon Sanderson', img: 'assets/2.jpg', isFav: true},
                { title: 'THE FINAL EMPIRE', author: 'Brandon Sanderson', img: 'assets/3.jpg', isFav: false}
            ],
        }
    },
    methods: {
        toggleShowBooks() {
            this.showBooks = !this.showBooks
        },
        toggleFav(book) {
            book.isFav = !book.isFav;
        },
    },
    computed: {
        filteredBooks() {
            return this.books.filter(book => book.isFav)
        }
    }
})

app.mount('#app')