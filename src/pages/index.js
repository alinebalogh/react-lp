import React, {Component} from 'react'
import Hero from '../components/Hero'
import background from '../static/img/bacon_background.jpg'

class IndexPage extends Component{
    render() {
        return (
            
            <div>
                <Hero
                    title="Bacon is life"
                    subtitle="Find the nearest bacon store"
                    backgroundImg={background}
                    minimumheight='80vh' />    
            </div>
        )
    }
}

export default IndexPage