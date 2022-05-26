const foodicons = require('../seed_data/foodicons');

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = function (knex) {
  // Deletes ALL existing entries
    return knex('food_info')
    .del()
    .then(function() {
        return knex('food_info').insert(foodicons);
    })
};