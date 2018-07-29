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
        stroke: #fff
    `
    const magnifier = css`
        margin-top: 30px;
        width: 300px;
    `

class Hero extends Component{

    constructor(){
        super()    
        this.state = {
            searchOpen: false,
            searchColor: ''
        }
        this.toggleSearch = this.toggleSearch.bind(this)
    }
    

    toggleSearch() {
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
                    <div onClick={this.toggleSearch} >
                        <svg className={magnifier} viewBox="0 0 300 40">
                            <circle       
                            style={{fill:searchColor}}
                            className={stroke} 
                            cx="12.1" cy="12.1" r="11.6" />
                            <line  className={stroke} x1="20.5" y1="20" x2="33.1" y2="32.6" />
                        </svg>
                    </div>
                </div>
                
            </HeroWrap>
        )
    }
}


export default Hero