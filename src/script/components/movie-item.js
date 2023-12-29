class MovieItem extends HTMLElement {
    constructor(){
        super();
        this.shadowDOM = this.attachShadow({mode: 'open'});
    }
    set movie(movie){
        this._movie = movie;
        this.render();
    }

    render(){
        this.shadowDOM.innerHTML = 
        `
        <style>
            *{
                margin:0;
                padding:0;
                box-sizing:border-box;
            }
            :host{
                display:flex;
                flex-direction:column;
            }
            .container-movie{
                overflow:hidden;
                position:relative;
            }

            .container-movie img{
                display: block;
                width:100%;
                height:100%;
            }

            .container-movie:hover  .overview{
                transform: translateY(0);
            }

            .review{
                position:absolute;
                background-color: #c92502;
                top:0;
                color: #fff;
                padding: 5px 10px;
                border-top-left-radius:0;
                border-bottom-left-radius:0;
                border-bottom-right-radius:5px;
            }

            .overview{
                line-height: 1.5;
                position: absolute;
                bottom: 0;
                background-color: rgba(201, 38, 2, 0.9);
                padding: 12px;
                color: #fff;
                transform: translateY(100%);
                transition: 0.3s ease-in-out all;
            }
            
            .title{
                text-align:center;
                position: relative;
                font-size: 20px;
                margin-top:20px;
                color: #FFF;
            }
            .title span{
                display: inline-block;
                width:300px;
                white-space: nowrap;
                overflow: hidden !important;
                text-overflow: ellipsis;
            }
        </style>

        <div class="container-movie">
            <img  src="https://image.tmdb.org/t/p/w500/${this._movie.poster_path}" />
            <p class="review">${this._movie.vote_average}</p>
            <p class="overview">${this._movie.overview}</p>
        </div>
        <div class="info">
        <p class="title">
        <span>
        ${this._movie.title} 
        </span>
        </p>
        </div>
        `
    }
}

customElements.define('movie-item',MovieItem);