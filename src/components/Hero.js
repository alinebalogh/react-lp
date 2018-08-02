import React, {Component} from 'react'
import { css} from 'emotion'
import styled, {keyframes} from 'react-emotion'
import global from './Global'
import Search from './Search'

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
    

class Hero extends Component{

    constructor(){
        super()    
    }
    
    render(){
        
        const {
            classes,
            title,
            subtitle,
            backgroundImg,
            minimumheight
        } = this.props
        

        return (
            <HeroWrap 
                backgroundImg={backgroundImg}
                minimumheight={minimumheight} >
                <div >
                    <Text subtitle={subtitle} >{title}<br /> </Text>
                    <Search/>
                </div>
                
            </HeroWrap>
        )
    }
}


export default Hero