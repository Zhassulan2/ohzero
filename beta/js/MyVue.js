new Vue({
    el: '#app',
    data: {
        message: 'привет Vue!'
    },
    methods: {

        langFunc () {
            if(localStorage.getItem("lang") === null){
                localStorage.setItem("lang", "RU");
                this.message = localStorage.getItem("lang");
                console.log(localStorage.getItem("lang"));
            } else{
                this.message = localStorage.getItem("lang");
                console.log(localStorage.getItem("lang"));
            };
        }
    },
    mounted() {
        this.langFunc();
    }
})