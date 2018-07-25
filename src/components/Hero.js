import React, {Component} from 'react'
import { css} from 'emotion'
import styled, {keyframes} from 'react-emotion'

class Hero extends Component{

    render(){
        const {
            classes,
            title,
            subtitle,
            backgroundImg,
            minimumheight
        } = this.props

        const HeroWrap = styled('div')`
            display:flex;
            justify-content: center;
            align-items: center;
        `
        const Background = styled('div')`
            background-color: rgba(36, 28, 28, 0.51);
            background-image: url('${(props)=> backgroundImg}');  
            height: ${(props)=> minimumheight};
            width:100%;
            background-position: 50% 75%;
            background-repeat: no-repeat;
            background-size: cover;
            background-attachment: fixed;
            background-blend-mode: multiply;
            position: relative;
            z-index:-1;
        `
        const type = keyframes`
            from { width: 0;}
        `
        const Text = styled('p')`
            text-align: center;
            color: #e3dbdb;
            font-size: 58px;
            z-index: 10;
            text-shadow: 0 4px 4px rgba(0, 0, 0, 0.4),
                        0 4px 14px rgba(0, 0, 0, 0.1),
                        0 0 24px rgba(0, 0, 0, 0.1);
            :after{
                display: block;
                content: "What a time";
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

        return (
            <HeroWrap >
                <Background >
                    <Text>{title}<br /> </Text>
                </Background>
            </HeroWrap>
        )
    }
}

// const styles = StyleSheet.create({

// })

export default Hero