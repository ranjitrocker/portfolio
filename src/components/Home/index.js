import React from 'react'
import Header from '../header/index'
import Footer from '../footer/index'
import Body from '../body/index'
import "./home.css"


function Home() {
    return (
        <div className = "home">
            <div>
                <Header/>
            </div>
            <div>
                <Footer/>
            </div>
            <div>
                <Body/>
            </div>
            
        </div>
    )
}

export default Home