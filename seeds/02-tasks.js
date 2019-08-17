
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tasks').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('tasks').insert([
        { id: 1, description: 'put soil in pot', project_id: 1 },
        { id: 2, description: 'put seeds in soil', project_id: 1 },
        { id: 3, description: 'water finished pot', project_id: 1 },
        { id: 4, description: 'measure wood', project_id: 2 },
        { id: 5, description: 'cut wood', project_id: 2 },
        { id: 6, description: 'nail together', project_id: 2 },
      ]);
    });
};
