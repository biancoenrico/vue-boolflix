var app = new Vue({
    el: '#root',
    data: {
        resultfilm:[],
        resultSeries:[],
        search:''
    },
    methods: {
        find(){
            this.searchFilm(),
            this.searchTv()
        },
        searchFilm(){
        
            axios
                .get('https://api.themoviedb.org/3/search/movie?',
                
                {
                    params:{
                        api_key: '08103b63752bfcc4876a0aec5cc20e97',
                        query: this.search,
                    }

                })
                
                
                
                .then((response)=>{
                    list = response.data;
                    this.resultfilm = list.results;
                })  

        },
        searchTv(){
        

            axios
                .get('https://api.themoviedb.org/3/search/tv?',
                
                {
                    params:{
                        api_key: '08103b63752bfcc4876a0aec5cc20e97',
                        query: this.search,
                    }

                })
                
                
                
                .then((response)=>{
                    list = response.data;
                    this.resultSeries = list.results;
                }) 
        }
        
        
    },
    mounted(){
        axios
            .get('https://api.themoviedb.org/3/search/movie?',
                'https://api.themoviedb.org/3/search/tv?',
            {
                params:{
                    api_key: '08103b63752bfcc4876a0aec5cc20e97',
                }
            })
            .then((response)=>{
                console.log(response.data);
                let list = response.data;
                this.result = list.results;
                console.log(this.result);
            })
    },
})