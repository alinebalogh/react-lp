import React, {Component} from 'react'
import {Stylesheet, css} from 'aphrodite'

class Hero extends Component{
    render(){
        
        const {
            classes,
            title,
            subtitle,
            backgroungImg,
            minimumheight
        } = this.props

        return (
            <div className="wrap-hero hero-image">
                <div >
                    <p className="text">{title}<br /> </p>
                </div>
            </div>
        )
    }
}

// const styles = StyleSheet.create({

// })

export default Hero