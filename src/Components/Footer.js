import React from 'react';

import './Footer.css'; 
import 'tachyons'; 

class Footer extends React.Component{
    render(){
        return(
            <>
            <div className="containerFooter">
                <h1 className="textFooter tc">Hello World, This is Footer</h1>
            </div>
            </>
        )
    }
}

export default Footer;