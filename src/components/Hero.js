import React, {Component} from 'react'
import { css} from 'emotion'
import styled, {keyframes} from 'react-emotion'
import global from './Global'

// Styled components 

    const HeroWrap = styled('div')`
        display:flex;
        justify-content: center;
        align-items: center;
        background-color: rgba(36, 28, 28, 1);
        background-image: url('${(props)=> props.backgroundImg}');  
        height: ${(props)=> props.minimumheight};
        width:100%;
        background-position: 50% 75%;
        background-repeat: no-repeat;
        background-size: cover;
        background-attachment: fixed;
        background-blend-mode: multiply;
        position: relative;
    `
    const type = keyframes`
        from { width: 0;}
    `
    const Text = styled('p')`
        text-align: center;
        color: #e3dbdb;
        font-size: 58px;
        font-family:'Boogaloo', cursive;
        text-shadow: 0 4px 4px rgba(0, 0, 0, 0.4),
                    0 4px 14px rgba(0, 0, 0, 0.1),
                    0 0 24px rgba(0, 0, 0, 0.1);
        &:after{
            display: block;
            content: '${(props)=>props.subtitle}';
            padding: 0;
            margin:0;
            text-align: center;
            white-space: nowrap;
            overflow: hidden;
            font-size: 36px;
            width: 100%;
            animation-timing-function: ease-in-out;
            animation: ${type} 5000ms steps(60, end);
        }

    `
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

class Hero extends Component{

    constructor(){
        super()    
        this.state = {
            searchOpen: false,
            searchColor: ''
        }

        // My Refs
        this.circle = React.createRef();
        this.line = React.createRef();

        this.toggleSearch = this.toggleSearch.bind(this)
    }
    

    toggleSearch(e) {
        this.setState({
            searchColor: this.state.searchOpen? 'red' : 'white',
            searchOpen: !this.state.searchOpen                        
        })
    }
    
    render(){
        
        const {
            classes,
            title,
            subtitle,
            backgroundImg,
            minimumheight
        } = this.props
        
        const { searchOpen, searchColor } = this.state

        return (
            <HeroWrap 
                backgroundImg={backgroundImg}
                minimumheight={minimumheight} >
                <div >
                    <Text subtitle={subtitle} >{title}<br /> </Text>
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
                        <input className={searchInput} /> 
                        <svg className={xIcon}  viewBox="0 0 29.3 29.3">    
                            <line className={css` ${searchOpen? 'opacity: 1 ;' : 'opacity: 0;'}` } x1="0.5" y1="0.5" x2="28.8" y2="28.8"/>
                            <line className={css` ${searchOpen? 'opacity: 1 ;' : 'opacity: 0;'}` } x1="0.5" y1="28.8" x2="28.8" y2="0.5"/>
                        </svg>
                    </div>
                </div>
                
            </HeroWrap>
        )
    }
}


export default Hero