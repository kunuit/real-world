const { mutationSet, baseFlag } = require('../helpers');

exports.up = function(knex) {
  return knex.schema.withSchema('admin').createTable('Admin', function (tb) {
    tb.increments('adminId').comment('Admin Id');
    tb.string('adminNm').unique().comment('Admin name');
    tb.string('adminEml').unique().comment('Admin Email');
    tb.string('adminPwd').comment('Admin Password');

    baseFlag(tb);
    mutationSet(knex, tb);

    tb.comment('Admin');
  });
};

exports.down = function(knex) {
  return knex.schema
};
