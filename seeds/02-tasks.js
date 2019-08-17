
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tasks').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('tasks').insert([
        { id: 1, description: 'put soil in pot' },
        { id: 2, description: 'put seeds in soil' },
        { id: 3, description: 'water finished pot' },
        { id: 4, description: 'measure wood' },
        { id: 5, description: 'cut wood' },
        { id: 6, description: 'nail together' },
      ]);
    });
};
