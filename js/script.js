var app = new Vue({
    el: '#root',
    data: {
        resultMulti: [],
        resultSeries: [],
        resultMovie: [],
        search: '',
        id_search: [],
        genres: '',
        genreSelect: '',
    },
    methods: {
        getVote(vote) {
            const stars = Math.ceil(vote / 2);
            return stars;
        },

        searchFilms() {
            axios
                .get('https://api.themoviedb.org/3/search/movie', {
                    params: {
                        api_key: '08103b63752bfcc4876a0aec5cc20e97',
                        query: this.search,
                    },
                })

                .then((response) => {
                    this.resultMulti = [];
                    const resultMovie = response.data.results;
                    this.search = '';

                    resultMovie.forEach((element) => {
                        axios
                            .get(
                                'https://api.themoviedb.org/3/movie/' +
                                    element.id,
                                {
                                    params: {
                                        api_key:
                                            'a21d6a53ae3ba4432e6ec0b5967e1ce3',
                                        append_to_response: 'credits',
                                    },
                                }
                            )
                            .then((response) => {
                                element.genre = response.data.genres.slice(
                                    0,
                                    2
                                );
                                element.cast = response.data.credits.cast.slice(
                                    0,
                                    5
                                );
                                Vue.set(
                                    element,
                                    'genre',
                                    response.data.genres.slice(0, 2)
                                );

                                Vue.set(
                                    element,
                                    'cast',
                                    response.data.credits.cast.slice(0, 5)
                                );

                                this.resultMovie.push(element);
                                console.log(this.resultMovie);
                            });
                        this.resultMovie = [];
                    });
                });

            axios;
            axios
                .get('https://api.themoviedb.org/3/search/tv', {
                    params: {
                        api_key: '08103b63752bfcc4876a0aec5cc20e97',
                        query: this.search,
                    },
                })

                .then((response) => {
                    this.resultMulti = [];
                    const resultTv = response.data.results;
                    this.search = '';

                    resultTv.forEach((element) => {
                        axios
                            .get(
                                'https://api.themoviedb.org/3/tv/' + element.id,
                                {
                                    params: {
                                        api_key:
                                            'a21d6a53ae3ba4432e6ec0b5967e1ce3',
                                        append_to_response: 'credits',
                                    },
                                }
                            )
                            .then((response) => {
                                element.genre = response.data.genres.slice(
                                    0,
                                    2
                                );
                                element.cast = response.data.credits.cast.slice(
                                    0,
                                    5
                                );
                                Vue.set(
                                    element,
                                    'genre',
                                    response.data.genres.slice(0, 2)
                                );

                                Vue.set(
                                    element,
                                    'cast',
                                    response.data.credits.cast.slice(0, 5)
                                );

                                this.resultSeries.push(element);
                                console.log(this.resultSeries);
                            });
                        this.resultSeries = [];
                    });
                });
        },

        showGen() {            
            
        },
    },

    mounted() {
        // per mostrare i film piu popolari appena aperta la pagina
        axios
            .get('https://api.themoviedb.org/3/movie/popular?', {
                params: {
                    api_key: '08103b63752bfcc4876a0aec5cc20e97',
                },
            })

            .then((response) => {
                this.resultMulti = response.data.results;

                this.search = '';
            });

        axios
            // per mostrare la select appena caricata la pagina
            .get('https://api.themoviedb.org/3/genre/movie/list?', {
                params: {
                    api_key: '08103b63752bfcc4876a0aec5cc20e97',
                },
            })

            .then((response) => {
                this.genres = response.data.genres;
                console.log(this.genres);
            });

        axios
            .get('https://api.themoviedb.org/3/genre/tv/list?', {
                params: {
                    api_key: '08103b63752bfcc4876a0aec5cc20e97',
                },
            })

            .then((response) => {
                this.genres.push(response.data.genres);
                console.log(this.genres);
            });
    },
});