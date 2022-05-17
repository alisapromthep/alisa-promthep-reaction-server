const usersData = require('../seed_data/usersData');
const userlogData = require('../seed_data/userlogsData');

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('users')
    .del()
    .then(function() {
      return knex('users').insert(usersData);
    })
    .then(()=>{
      return knex('user_logs').del();
    })
    .then(()=>{
      return knex('user_logs').insert(userlogData);
    })
};
