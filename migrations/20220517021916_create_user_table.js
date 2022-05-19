/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema
    .createTable('users', (table)=>{
        table.increments('id').primary();
        table.string('user_id').unique();
        table.string('name').notNullable();
        table.string('username').notNullable().unique();
        table.string('password').notNullable();
        table.string('phone').notNullable();
        table.string('email').notNullable().unique();
    })

};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('users');
};
