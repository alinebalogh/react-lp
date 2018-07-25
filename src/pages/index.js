import React, {Component} from 'react'
import Hero from '../components/Hero'
import background from '../static/img/background.jpg'

class IndexPage extends Component{
    render() {
        return (
            
            <div>
                <Hero
                    title="What a life"
                    backgroundImg={background}
                    minimumheight='80vh' />    
            </div>
        )
    }
}

export default IndexPage