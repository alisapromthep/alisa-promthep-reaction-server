/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema
        .createTable('users', (table)=>{
            table.increments('user_id').primary();
            table.string('username').notNullable();
            table.string('password').notNullable();
            table.string('phone').notNullable();
            table.string('email').notNullable().unique();
        })
        .createTable('user_logs', (table)=>{
            table.increments('id');
            table.date('date').notNullable();
            table.time('time_of_day').notNullable();
            table.string('food').notNullable();
            table.string('symptom').notNullable();
            table
                .foreign('user_id');
                
        })


};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {

};
