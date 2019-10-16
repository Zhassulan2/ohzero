new Vue({
    el: '#app',
    data: {
        message: 'привет Vue!'
    },
    methods: {
        langFunc () {
            window.location.reload(true)
            if(localStorage.getItem("lang") === null){
                console.log(localStorage.getItem("lang"));
                this.message = localStorage.getItem("lang");
            } else{
                console.log(localStorage.getItem("lang"));
                localStorage.setItem("lang", "RU");
                this.message = localStorage.getItem("lang");
            };

        }
    },
    mounted() {
        this.langFunc();
    }
})