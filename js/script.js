var app = new Vue({
    el: '#root',
    data: {
        result:[]
    },
    methods: {

    },
    mounted(){
        axios
            .get('https://api.themoviedb.org/3/search/movie?api_key=08103b63752bfcc4876a0aec5cc20e97&query=rambo')
            .then((response)=>{
                console.log(response.data);
                let list = response.data;
                this.result = list.results;
                console.log(this.result);
            })
    },
})