import image from '../../img/movieHero.jpg'
class AppHero extends HTMLElement {
    constructor() {
        super();
        this.shadowDOM = this.attachShadow({
            mode: 'open'
        });
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.shadowDOM.innerHTML = `
        <style>

            .hero{
                height: 400px;
                position: relative;
            }

            @media (min-width: 750px) {
                .hero{
                    height: 500px;
                    }
            }

            .hero::after {
                content: '';
                position: absolute;
                top: 0;
                left: 0;
                height: 100%;
                width: 100%;
                background-color: rgba(0, 0, 0, 0.6);
            }

            img{
                width: 100%;
                height: 100%;
                object-fit: cover;
            }

            .text-container {
                z-index: 99;
                position: absolute;
                top: 0;
                margin: 0;
                width: 100%;
                height: 100%;
                display: flex;
                flex-direction: column;
                justify-content: center;
            }

            .text{
                width: 100%;
                max-width: 1400px;
                margin: 0 auto;
            }

            .mini-heading{
                font-weight: 600;
                font-size: 18px;
                text-transform: uppercase;
                color: #c92502;
            }

            @media (min-width: 750px) {
                .mini-heading{
                    font-size:22px;
                }
            }
            
            h1 {
            color: #fff;
            margin-top:22px;
            font-size: 64px;
            font-weight: 200;
            margin-bottom: 8px;
            }

            @media (min-width: 750px) {
                h1{
                    font-size: 84px;
                }
                span {
                    font-weight: 500;
                }
            }

         
            .button {
            font-size: 20px;
            align-self: flex-start;
            }

            .button {
                display: inline-block;
                text-decoration: none;
                color: inherit;
                padding: 8px 16px;
                background-color: #c92502;
                border: none;
                color: #fff;
                border-radius: 4px;
                cursor: pointer;
                transition: 0.3s ease all;
              }

            .button:hover {
                background-color: #891b02;
              }

        </style>
        
        <div class="hero">
                <img src=${image} alt="hero-img" />
                <div class="text-container">
                <div class="text">
                    <span class="mini-heading">Now Streaming</span>
                    <h1><span>Now</span> Streaming</h1>
                    <a href="#movie-grid" class="button">View Movies</a>
                </div>
                </div>
        </div>
        `;
    }
}
customElements.define('app-hero',AppHero)