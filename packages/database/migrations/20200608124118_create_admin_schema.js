
exports.up = function(knex) {
  return knex.schema.raw('CREATE SCHEMA IF NOT EXISTS admin;'); // Profile Module
};

exports.down = function(knex) {
  
};
