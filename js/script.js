var app = new Vue({
    el: '#root',
    data: {
        result:[],
        search:''
    },
    methods: {
        searchFilm(){
            axios
                .get('https://api.themoviedb.org/3/search/movie?api_key=08103b63752bfcc4876a0aec5cc20e97',
                {
                    params:{
                        query: this.search,
                        // backdrop_path: this.result.backdrop_path
                    }

                })
                
                .then((response)=>{
                    list = response.data;
                    this.result = list.results;
                })
        }
        
    },
    mounted(){
        axios
            .get('https://api.themoviedb.org/3/search/movie?api_key=08103b63752bfcc4876a0aec5cc20e97')
            .then((response)=>{
                console.log(response.data);
                let list = response.data;
                this.result = list.results;
                console.log(this.result);
            })
    },
})