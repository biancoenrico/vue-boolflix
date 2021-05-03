var app = new Vue({
    el: '#root',
    data: {
        // ricerca tramite searchbar
        resultMulti:[],
        search:'',
        // fine ricerca tramite searchbar

        // ricerca tramite genere
        genreArray:[],
        genreSelect:[''],
        selectedGen:'',
        // fine ricerca tramite genere
        
    },
    methods: {

        // ricerca serie tv/film tramite searchbar
        searchMulti(){
            axios
            .get('https://api.themoviedb.org/3/search/multi?',
            {
                params:{
                    api_key:'08103b63752bfcc4876a0aec5cc20e97',
                    query: this.search,
                    genre_ids: this.selectedGen[this.genreArray]
                }
            })

            .then((response)=>{
                let list = response.data;
                this.resultMulti = list.results;
                this.search = '';
            })   
        }, 
        // fine ricerca serie tv/film tramite searchbar

        // funzione per prendere i generi dei film
        gen(){
            axios
                .get('https://api.themoviedb.org/3/genre/movie/list?',
                {
                    params:{
                        api_key:'08103b63752bfcc4876a0aec5cc20e97',
                        
                    }
                })
                .then((response)=>{
                    let list = response.data;
                    this.genreArray = list.genres;
                })
        },
        // fine funzione per prendere i generi dei film

        // test
        searchAll(){
            this.gen();
            this.searchMulti();
        },
        // fine test

        // funzione per cambiare il voto in intero da 1 a 5
        getVote(vote){
            const stars = Math.ceil(vote / 2);
            return stars;
        },
        // fine funzione per cambiare il voto in intero da 1 a 5
    },
    
    mounted(){
        // per mostrare i film piu popolari appena aperta la pagina
        axios
            .get('https://api.themoviedb.org/3/movie/popular?',
            {
                params:{
                    api_key:'08103b63752bfcc4876a0aec5cc20e97',
                }
            })

            .then((response)=>{
                let list = response.data;
                this.resultMulti = list.results;

            this.search = '';
        }) 
        axios
            // per mostrare la select appena caricata la pagina
            .get('https://api.themoviedb.org/3/genre/movie/list?',
            {
                params:{
                    api_key:'08103b63752bfcc4876a0aec5cc20e97',
                    query: this.genreSelect,
                }
            })
            .then((response)=>{
                let list = response.data;
                this.genreArray = list.genres;
            });
                
    },

})