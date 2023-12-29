class Searchbar extends HTMLElement {
    constructor(){
        super();
        this.shadowDOM = this.attachShadow({mode: 'open'});
    }
    connectedCallback(){
        this.render();
    }

    set clickEvent(event){
        this._clickEvent = event;
        this.render();
    }

    get value(){
        return this.shadowDOM.querySelector('#searchElement').value;
    }

    render(){
        this.shadowDOM.innerHTML = `
        <style>
            .search-container{
              margin: 20px 10px;
              display:flex;
            }
            .search-container input{
                max-width: 350px;
                width: 100%;
                padding: 12px 6px;
                font-size: 14px;
                border: none;
            }

            .search-container input:focus{
                outline:none;
            }

            .search-container button{
                border:none;
                padding: 8px 16px;
                background-color: #c92502;
                color:#FFF;
                cursor:pointer;
                transition: 0.3s ease all;
            }

            .search-container button:hover{
                background-color: #891b02;
              
            }

        </style>
        <div class="search-container">
            <input placeholder="Search Movies" id="searchElement" type="search">
            <button id="searchButtonElement" type="submit">Search</button>
      </div>
        `;

        this.shadowDOM.querySelector('#searchButtonElement').addEventListener('click',this._clickEvent);
    }
}

customElements.define('search-bar',Searchbar);