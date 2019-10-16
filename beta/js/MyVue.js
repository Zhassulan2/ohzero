new Vue({
    el: '#app',
    data: {
        message: 'привет Vue!'
    },
    methods: {
        langFunc () {
            if(localStorage.getItem("lang") === null){
                this.message = localStorage.getItem("lang");
            } else{
                localStorage.setItem("lang", "RU");
                this.message = localStorage.getItem("lang");
            };

        }
    },
    mounted() {
        this.langFunc();
    }
})