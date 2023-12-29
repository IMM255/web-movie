import './movie-item.js';
class MovieList extends HTMLElement {
    constructor(){
        super();
        this.shadowDOM = this.attachShadow({mode: 'open'});
        
    }
    set movies(movies) {
        this.loading = true;
        this._movies = [];
        this.render();

        setTimeout(() => {
            this._movies = movies;
            this.loading = false; // Set loading to false when data is loaded
            this.render(); // Re-render after data is loaded
        }, 1000);

    } 
    render(){
        this.shadowDOM.innerHTML = `
        <style>
            :host {
                width:100%;
                padding: 32px 16px;
                display: grid;
                column-gap: 32px;
                row-gap: 64px;
                grid-template-columns: 1fr;
            }
            @media (min-width: 500px) {
                :host{
                    grid-template-columns: repeat(2, 1fr);
                }
              }
              @media (min-width: 750px) {
                :host{
                    grid-template-columns: repeat(2, 1fr);
                }
              }
              @media (min-width: 1100px) {
                :host{
                    grid-template-columns: repeat(4, 1fr);
                }
              }

              .loader {
                border: 8px solid #f3f3f3;
                border-top: 8px solid #3498db;
                border-radius: 50%;
                width: 50px;
                height: 50px;
                animation: spin 1200ms linear infinite;
                color : #fff;

              
                position: absolute;
                top: 80%;
                left: 50%;
                transform: translate(-50%, -50%);
            }



            @keyframes spin {
                0% { transform: rotate(0deg); }
                100% { transform: rotate(360deg); }
            }

        </style>
        ${this.loading ? '<div class="loader"></div>' : ''}
        `;
        this._movies.forEach(movie => {
            const MovieItemElement = document.createElement('movie-item');
            MovieItemElement.movie = movie;
            this.shadowDOM.appendChild(MovieItemElement);
        });
    }

    renderError(message) {
        this.shadowDOM.innerHTML = '';
        this.shadowDOM.innerHTML=`
        <style>
        .placeholder{
            width:100%;
            margin: 0 auto;
            text-align:center;
            font-size: 28px;
            color: #c92502;
        }
        </style>
        <h2 class ="placeholder">${message}</h2>
        `;
    }
}

customElements.define('movie-list',MovieList);