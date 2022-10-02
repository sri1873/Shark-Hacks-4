import React, { useState, useEffect } from "react";
import ProductCard from "../components/ProductCard";
import Slider from "react-slick";
import axios from 'axios'
import Product from "../components/Product";
import About from "./About";

const Recipes = ({keyword,toggle}) => {
    const [id, setid] = useState()
    const [recipeList, setRecipeList] = useState([])
    const [randomList, setRandomList] = useState([])
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1
    };

    const data = {
        "results": [
            {
                "id": 1095996,
                "title": "Vegan Eggnog",
                "image": "https://spoonacular.com/recipeImages/1095996-312x231.jpg",
                "imageType": "jpg"
            },
            {
                "id": 664472,
                "title": "Vegan Potato Salad",
                "image": "https://spoonacular.com/recipeImages/664472-312x231.jpg",
                "imageType": "jpg"
            },
            {
                "id": 664396,
                "title": "Vegan Beet Borscht",
                "image": "https://spoonacular.com/recipeImages/664396-312x231.jpg",
                "imageType": "jpg"
            },
            {
                "id": 664396,
                "title": "Vegan Beet Borscht",
                "image": "https://spoonacular.com/recipeImages/664396-312x231.jpg",
                "imageType": "jpg"
            },
            {
                "id": 664396,
                "title": "Vegan Beet Borscht",
                "image": "https://spoonacular.com/recipeImages/664396-312x231.jpg",
                "imageType": "jpg"
            },
        ]
    }

    const searchResults = () => {
        // axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=b5328ae4f8a442b8bae5518c50307ddb&query=${keyword}&number=8`).then(res => setRecipeList(res.data.results))
    }
    
    const getrandomres = () => {
        axios.get('https://api.spoonacular.com/recipes/random?apiKey=b5328ae4f8a442b8bae5518c50307ddb&limitLicense=true&tags=vegan&number=8').then(res => setRandomList(res.data.recipes))
    }
    useEffect(
        (() => {
            console.log(data.results)
            setRandomList(data.results)
            setRecipeList(data.results)
            // getrandomres()

        }), []
        )
        if (toggle) {
            searchResults()
    }


    return (
        <>
            <div className='recipe'>
                <h3 id="Recipes" style={{padding:'80px 0 20px 0'}}>Blahaj Recommendations</h3>
            {randomList ? <Slider {...settings}>
                {randomList.map(item => (<ProductCard key={item.index} setid={ setid} item={item} />)
                )}
            </Slider> : ''}

            <div id="Search" style={{height:'91vh',paddingTop:'80px'}}>
            {recipeList ? <h3 id="Search" style={{ padding: '20px 0 10px 0' }}>Search Results for {keyword}</h3> : ''}
            {recipeList ? <Slider {...settings}>
                {recipeList.map(item => (<ProductCard key={item.index} setid={setid}  item={item} />)
                )}
            </Slider> : ''}
                </div>
            <Product id={id} />
        </div>
            <About/>
        </>
    );
}


export default Recipes