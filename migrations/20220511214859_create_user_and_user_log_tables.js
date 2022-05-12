/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema
        .createTable('users', (table)=>{
            table.increments('id').primary();
            table.string('username').notNullable();
            table.string('password').notNullable();
        })
        .createTable('user_logs', (table)=>{
            table.increments('id');
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
