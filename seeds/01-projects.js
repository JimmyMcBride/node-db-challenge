
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('projects').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        { id: 1, name: 'herb garden',
        description: 'plant an herb garden',
        completed: false },
        { id: 2, name: 'bird house',
        description: 'build a bird house',
        completed: false },
      ]);
    });
};
