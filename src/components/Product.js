import React, { useState } from "react";
import axios from 'axios'

const Product = ({ id }) => {

    const [recipeData, setRecipedata] = useState({
        "id": 1095996,
        "title": "Vegan Eggnog",
        "readyInMinutes": 40,
        "servings": 5,
        "sourceUrl": "https://www.foodista.com/recipe/FWWPNHST/vegan-eggnog-for-christmas",
        "image": "https://spoonacular.com/recipeImages/1095996-556x370.jpg",
        "imageType": "jpg",
        "summary": "Vegan Eggnog is a <b>gluten free and dairy free</b> beverage. This recipe serves 5 and costs $2.48 per serving. One serving contains <b>283 calories</b>, <b>4g of protein</b>, and <b>13g of fat</b>. It will be a hit at your <b>Christmas</b> event. 1 person were glad they tried this recipe. If you have almond milk, dates, vanillan extract, and a few other ingredients on hand, you can make it. It is brought to you by Foodista. From preparation to the plate, this recipe takes approximately <b>40 minutes</b>. Taking all factors into account, this recipe <b>earns a spoonacular score of 21%</b>, which is rather bad. Similar recipes include <a href=\"https://spoonacular.com/recipes/vegan-eggnog-581520\">Vegan Eggnog</a>, <a href=\"https://spoonacular.com/recipes/vegan-eggnog-506692\">Vegan Eggnog</a>, and <a href=\"https://spoonacular.com/recipes/vegan-eggnog-122403\">Vegan Eggnog</a>.",
        "cuisines": [],
        "dishTypes": [
            "beverage",
            "drink"
        ],
        "diets": [
            "gluten free",
            "dairy free"
        ],
        "occasions": [
            "christmas"
        ],
        "winePairing": {
            "pairedWines": [],
            "pairingText": "",
            "productMatches": []
        },
        "instructions": "<ol><li>In a large saucepan, add the almond milk, shredded coconut, sliced almonds, sugar, dates, split vanilla bean and seeds, cinnamon sticks, nutmeg, and vanilla extract. </li><li>Place over medium heat and slowly bring to a simmer, whisking occasionally.</li><li>Once simmering, reduce the heat to low and cook for 20 minutes. Be careful not to boil.</li><li>Turn off the heat and let steep for 10 minutes. Remove the vanilla bean and cinnamon sticks and discard.</li><li>Using a kitchen blender, and working in batches, blend the eggnog on high for about 1 minute. Stain the eggnog through a fine chinois (strainer) into a glass or metal bowl. </li><li>Using a wooden spoon, gently press the strained solids firmly against the chinois to extract as much liquid and flavor as possible.  Dispose of the solids. Repeat this process with the remaining mixture.</li><li>Chill the strained eggnog for at least 1 hour or more if serving cold</li><li>To serve, stir about 1 tablespoon of rum per 1 cup of eggnog. </li><li>Ladle into serving glasses and garnish with a dash of nutmeg on top. </li><li>If serving warm, add the rum and enjoy right away.</li></ol>",
    })

    const getrecipe = () => {

        axios.get(`https://api.spoonacular.com/recipes/${id}/information?apiKey=b5328ae4f8a442b8bae5518c50307ddb&includeNutrition=false`).then(res => setRecipedata(res.data.recipes))
    }

    return (
        <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">{recipeData.title}</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">

                        <img src={recipeData.image} alt='' width='50%' style={{ marginLeft: '25%' }} />
                        <h4>Instructions</h4>
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