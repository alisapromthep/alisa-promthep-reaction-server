/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable(
        "user_logs", (table) => {
            table.increments('id').primary();
            table.integer('login_id').notNullable().unsigned();
            table.string('user_id').notNullable();
            table.string('date').notNullable();
            table.string('time_of_day').notNullable();
            table.string('food').notNullable();
            table.string('symptom').notNullable();
            table.string('notes').nullable();
            table
                .foreign('login_id')
                .references('id')
                .inTable('users')
                .onUpdate('CASCADE')
                .onDelete('CASCADE'); 
        }
    )

};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('user_logs');

};
