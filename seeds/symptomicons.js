const symptomicons = require('../seed_data/symptomicons');

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = function (knex) {
  // Deletes ALL existing entries
    return knex('symptom_info')
    .del()
    .then(function() {
        return knex('symptom_info').insert(symptomicons);
    })
};