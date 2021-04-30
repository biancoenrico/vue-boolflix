var app = new Vue({
    el: '#root',
    data: {
        resultMulti:[],
        search:'ciao',
    },
    methods: {
        
        getVote(vote){
            const stars = Math.ceil(vote / 2);
            return stars;
        },
        searchMulti(){
        
            axios
            .get('https://api.themoviedb.org/3/search/multi?',
            {
                params:{
                    api_key:'08103b63752bfcc4876a0aec5cc20e97',
                    query: this.search,
                }
            })

            .then((response)=>{
                let list = response.data;
                this.resultMulti = list.results;
            this.search = '';
        })  
        }, 
    },
    mounted(){
       
        axios
            .get('https://api.themoviedb.org/3/search/multi?',
            {
                params:{
                    api_key:'08103b63752bfcc4876a0aec5cc20e97',
                    query: this.search,
                }
            })

            .then((response)=>{
                let list = response.data;
                this.resultMulti = list.results;
                getVote(this.resultMulti.vote_average)

                
            this.search = '';
        })     
    },
})