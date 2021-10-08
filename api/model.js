function getRecipeById(recipe_id) {
    return Promise.resolve(`awesome is ${recipe_id}`)
}

module.exports = { getRecipeById }