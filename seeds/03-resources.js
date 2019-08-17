
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('resources').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('resources').insert([
        { id: 1, name: 'soil', project_id: 1 },
        { id: 2, name: 'water', project_id: 1 },
        { id: 3, name: 'pot', project_id: 1 },
        { id: 4, name: 'nail', project_id: 2 },
        { id: 5, name: 'hammer', project_id: 2 },
        { id: 6, name: 'wood', project_id: 2 },
      ]);
    });
};
