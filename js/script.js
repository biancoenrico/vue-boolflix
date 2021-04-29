var app = new Vue({
    el: '#root',
    data: {
        resultMulti:[],
        search:'back to the future',
        stars:4,
        coloredStars:[]
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
                        this.stars = element.vote_average
                        console.log(this.stars);
                    })

                    for(let i = 0; i == this.stars; i++){
                        this.coloredStars.push('star')
                    }
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
                console.log(this.stars);
                for(let i = 0; i <= this.stars; i++){
                    this.coloredStars.push(i)
                    console.log(this.coloredStars);
                }

        })
        this.search = '';
    },
})