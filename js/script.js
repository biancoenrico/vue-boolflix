var app = new Vue({
    el: '#root',
    data: {
        resultMulti:[],
        search:'back to the future',
        vote: 0,
    },
    methods: {
        
        
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
                    
                    this.resultMulti.forEach((element)=>{
                        element.vote_average = Math.ceil(element.vote_average / 2).toFixed();
                        
                    })
            })  
            this.search = '';
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
                
                this.resultMulti.forEach((element)=>{
                element.vote_average = Math.ceil(element.vote_average / 2).toFixed();
                
                })

        })
        this.search = '';
    },
})