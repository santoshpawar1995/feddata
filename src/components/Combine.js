import React from 'react'
import Navpage from './Navpage'
import Navmain from './Navmain'
import MiddlePage from './MiddlePage'
import Footer from './Footer'

const Combine = () => {
    return (
        <>
            <Navpage />
            <Navmain />
            <div className='container-fliud Middle-Page' style={{
                background: '#6a7c94',
                position: 'relative'
            }}>
                <MiddlePage />
                <Footer />
            </div>
        </>
    )
}

export default Combine
