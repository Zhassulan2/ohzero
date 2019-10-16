new Vue({
    el: '#app',
    data: {
        message: 'привет Vue!'
    },
    methods: {
        langFunc () {
            localStorage.setItem("lang", "RU");
            this.message = localStorage.getItem("lang");
        }
    },
    mounted() {
        this.langFunc();
    }
})