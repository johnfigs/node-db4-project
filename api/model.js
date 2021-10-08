const db = require('./../data/db-config')

async function getRecipeById(recipe_id) {
    const recipeRows = await db('recipes as r')
        .join('steps as s', 'r.recipe_id', 's.recipe_id')
        .leftJoin('step_ingredients as si', 'si.step_id', 's.step_id')
        .leftJoin('ingredients as i', 'i.ingredient_id', 'si.ingredient_id')
        .where('r.recipe_id', recipe_id)
        .select('r.recipe_id','r.recipe_name', 's.step_id', 's.step_number', 's.step_text', 'i.ingredient_id', 'i.ingredient_name', 'si.quantity')
        
    const result = {
        recipe_id: recipeRows[0].recipe_id,
        recipe_name: recipeRows[0].recipe_name,
        steps: []
    } 
     recipeRows.forEach(row => {
         if (row.step_id) {
             result.steps.push({
                 step_id: row.step_id,
                 step_number: row.step_number,
                 step_instructions: row.step_text,
                 ingredients: []
             })
         }
     })
    //  recipeRows.forEach(row => {
    //      if (row.ingredient_id) {
    //          result.steps.ingredients.push({
    //              ingredient_id: row.ingredient_id,
    //              ingredient_name: row.ingredient_name,
    //              quantity: row.quantity
    //          })
    //      }
    //  })
    return result
    //return recipeRows
}

module.exports = { getRecipeById }