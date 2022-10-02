import React, { useState } from "react";
import axios from 'axios'

const Product = ({ id }) => {

    const [recipeData, setRecipedata] = useState({
        "id": 664501,
        "title": "Vegan Taco bowls with Cilantro Lime Cauliflower Rice",
        "readyInMinutes": 180,
        "servings": 4,
        "sourceUrl": "http://www.foodista.com/recipe/DKDKL4GJ/vegan-taco-bowls-with-cilantro-lime-cauliflower-rice",
        "image": "https://spoonacular.com/recipeImages/664501-556x370.jpg",
        "imageType": "jpg",
        "summary": "Vegan Taco bowls with Cilantro Lime Cauliflower Rice might be just the main course you are searching for. This caveman, gluten free, primal, and whole 30 recipe serves 4 and costs <b>$2.42 per serving</b>. One serving contains <b>521 calories</b>, <b>12g of protein</b>, and <b>48g of fat</b>. Not a lot of people made this recipe, and 2 would say it hit the spot. This recipe is typical of Mexican cuisine. Head to the store and pick up cilantro, walnuts, jalapeno, and a few other things to make it today. To use up the onion you could follow this main course with the <a href=\"https://spoonacular.com/recipes/candy-corn-cupcakes-63881\">Candy Corn Cupcakes</a> as a dessert. From preparation to the plate, this recipe takes approximately <b>3 hours</b>. All things considered, we decided this recipe <b>deserves a spoonacular score of 86%</b>. This score is spectacular. Try <a href=\"https://spoonacular.com/recipes/turkey-taco-bowls-with-cilantro-lime-rice-497780\">Turkey Taco Bowls with Cilantro Lime Rice</a>, <a href=\"https://spoonacular.com/recipes/cilantro-lime-rice-bowls-818459\">Cilantro-Lime Rice Bowls</a>, and <a href=\"https://spoonacular.com/recipes/turkey-taco-bowls-with-cauliflower-rice-meal-prep-893379\">Turkey Taco Bowls with Cauliflower Rice Meal Prep</a> for similar recipes.",
        "cuisines": [],
        "dishTypes": [
            "side dish"
        ],
        "diets": [
            "gluten free",
            "dairy free",
            "paleolithic",
            "lacto ovo vegetarian",
            "primal",
            "whole 30",
            "vegan"
        ],
        "occasions": [],
        "winePairing": {},
        "instructions": "<ol><li>Set the nuts to soak in a bowl of water 2-8 hours before preparing the meat.</li><li>Preheat the oven to 375 F and line a baking sheet with aluminum foil.</li><li>Finely chop the cauliflower into rice-sized pieces, or pulse in the food processor until the desired consistency. Toss with the oil and spread onto the baking sheet in an even layer. Bake for 18 minutes, stirring halfway through.</li><li>While the cauliflower rice is cooking, prepare the guacamole and taco meat.</li><li>Cut the avocado into large chunks and place into a small bowl. Add the lime juice and mash the avocado to a chunky puree or your preferred consistency. Stir in the cilantro, jalapeno, onion and spices. Set aside.</li><li>Remove the nuts from the water and place into a small food processor. Discard the water. Pulse the nuts until theyve reached a ground meat consistency, I find about 5-7 pulses works. Transfer to a bowl and stir in the salt, cumin, garlic powder, and red chili powder. Set aside.</li><li>When the cauliflower is done, transfer to a mixing bowl while still warm and stir in the lime, cilantro, and salt.</li><li>To assemble the bowls, layer 1 cup of the cauliflower rice in a bowl with taco nut meat, a dollop of guacamole, fresh tomatoes, and a sprinkling of fresh cilantro.</li><li>Serve immediately with an additional slice of lime if desired.</li></ol>",
    })

    const getrecipe = () => {

        axios.get(`https://api.spoonacular.com/recipes/${id}/information?apiKey=b5328ae4f8a442b8bae5518c50307ddb&includeNutrition=false`).then(res => setRecipedata(res.data.recipes))
    }

    return (
        <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" style={{fontWeight:'bolder'}} id="exampleModalLabel">{recipeData.title}</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">

                        <img src={recipeData.image} alt='' width='50%' style={{ marginLeft: '25%' }} />
                        <h4>Summary</h4>
                        <div dangerouslySetInnerHTML={{ __html: recipeData.summary }} style={{ marginLeft: '3%' }} />
                        <br/><h4>Instructions</h4>
                        <div dangerouslySetInnerHTML={{ __html: recipeData.instructions }} style={{ marginLeft: '3%' }} />
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Product