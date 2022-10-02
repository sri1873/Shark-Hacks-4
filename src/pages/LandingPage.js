import React, { useState } from "react";
import Recipes from "./Recipes";
import WhyVegan from "./WhyVegan";


const LandingPage = () => {
    const [keyword,setKeyword]=useState('')
    const [toggle,setToggle]=useState(false)

    const submit = e => {
        e.preventDefault()
        setToggle(!toggle)
        window.location.href = "#Search"
    }

    return (
        <>
            <div id="Blahajkitchen" className="Landingpage">
                <h1 className='title'>Blahaj Loves <span style={{ fontFamily:'Righteous'}}>Vegan</span></h1>
            <form onSubmit={e=>submit(e)}>
                <input type='text' placeholder="Search Recipes" required onChange={e => setKeyword(e.target.value)} />
            </form>
            </div>
            <WhyVegan />
            <img src='https://cdn.discordapp.com/attachments/1014195982969360527/1025998690839703602/f67e767acfab64459151084cf10956e9-removebg-preview_1.png' alt="" style={{ marginLeft: '30vw', }} />
            <Recipes keyword={keyword} toggle={toggle} />
        </>
    );
}

export default LandingPage