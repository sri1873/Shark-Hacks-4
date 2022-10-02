import React from "react";

const Nav = () => {
    return (
        <nav className="navbar sticky-top navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="#Blahajkitchen">
                <img src="https://media.discordapp.net/attachments/1025403393927290950/1025722294598893598/34689b31-2ec9-427c-95cf-61f871be6642.jpeg" width="30" height="30" className="d-inline-block align-top" alt=""/>
                <span style={{paddingLeft:'12px',fontFamily: 'Merriweather' }}>Vegan JAWS</span> 
            </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav" style={{ marginLeft: '50vw',alignItems:'center' }}>
                    <img src='https://i.pinimg.com/originals/8e/ec/10/8eec10c9f560961cd98c4aa613de28a5.gif' width='120px' alt="" />
                    <a className="nav-item nav-link" style={{ paddingRight: '50px' }} href="#Recipes">Recipes</a>
                    <a className="nav-item nav-link" href="#Aboutus">About us</a>
                </div>
            </div>
        </nav>
    );
}



export default Nav