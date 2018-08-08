import React, {Component} from 'react'
import { css} from 'emotion'
import styled, {keyframes} from 'react-emotion'
import fetch from 'isomorphic-fetch'

// Styled components 

    const stroke = css`
        fill: none;
        stroke: #fff;
        transition: 0.25s all cubic-bezier(0.55, 0.085, 0.68, 0.53);
    `
    const magnifier = css`
        margin-top: 5px;
        width: 300px;
        position: absolute;
    `
    const wrapAnima = css`
        position: relative;
        width: 300px;
        margin: 10px auto;
    `
    const searchInput = css` 
        position: absolute;
        background: none;
        border: none;
        font-size: 30px;
        font-weight: 300;
        width:300px;
        padding-left: 30px;
        color: #FFF;

        &:focus,&:active{
            border: none;
            outline: none;
        }
    `
    const xIcon = css`
        position: absolute;
        width: 6px;
        stroke-linecap: round;
        stroke-width: 5px;
        margin: 8px 3px 0;
        
        line{
        
        stroke:white;
        transition: 0.45s all cubic-bezier(0.55, 0.085, 0.68, 0.53);
        }
    `
    const lineOpen = css`
        transform: translatey(17px) rotate(-2.5deg);
    `
    const circleOpen = css`
        transform: scale(.5);
    `

class Search extends Component{

    constructor(){
        super()    
        this.state = {
            data: [],
            searchValue: "",
            searchOpen: false
        }
        

        this.toggleSearch = this.toggleSearch.bind(this)
        this.getValue = this.getValue.bind(this)
    }

    componentDidMount(){
        const endpoint = 'https://servicodados.ibge.gov.br/api/v1/localidades/estados';
        fetch(endpoint)
            .then(function(response) {
                if (response.status >= 400) {
                    throw new Error("Bad response from server");
                }
                return response.json();
            })
            .then(data=> {
                this.setState({data})
            });        
    }

    toggleSearch(e) {
        this.setState({
            searchOpen: !this.state.searchOpen                        
        })
    }

    getValue(e){
        console.log(e.target.value)
        this.setState({searchValue: e.target.value})
        console.log(this.state.searchValue)
    }
    
    render(){
        
       
        const { searchOpen } = this.state

        return (
                <div className={wrapAnima} onClick={this.toggleSearch} >
                    <svg className={magnifier} viewBox="0 0 300 40">
                        <circle       
                        className={css`${stroke} ${searchOpen? circleOpen : ''}`}
                        cx="12.1" cy="12.1" r="11.6" />
                        <line  
                        className={css`${stroke} ${searchOpen? lineOpen : ''}`}
                        x1="20.5" y1="20" 
                        x2={searchOpen? 300 : 33.1} 
                        y2="32.6" />
                    </svg>
                    <input className={searchInput} onChange={this.getValue} value={this.state.searchValue}/> 
                    <ul className="suggestions">
                    </ul>
                    <svg className={xIcon}  viewBox="0 0 29.3 29.3">    
                        <line className={css` ${searchOpen? 'opacity: 1 ;' : 'opacity: 0;'}` } x1="0.5" y1="0.5" x2="28.8" y2="28.8"/>
                        <line className={css` ${searchOpen? 'opacity: 1 ;' : 'opacity: 0;'}` } x1="0.5" y1="28.8" x2="28.8" y2="0.5"/>
                    </svg>
                </div>
        )
    }
}


export default Search