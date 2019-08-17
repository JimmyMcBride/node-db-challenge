
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('resources').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('resources').insert([
        { id: 1, name: 'soil' },
        { id: 2, name: 'water' },
        { id: 3, name: 'pot' },
        { id: 4, name: 'nail' },
        { id: 5, name: 'hammer' },
        { id: 6, name: 'wood' },
      ]);
    });
};
