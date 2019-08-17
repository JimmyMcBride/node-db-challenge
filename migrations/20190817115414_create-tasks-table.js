exports.up = function(knex) {

  return knex.schema.createTable('tasks', table => {
    table.increments()

    table.text('description', 256)
      .notNullable()

    table.text('notes', 256)

    table.boolean('completed')
      .defaultTo(false)

    table.integer('project_id')
      .unsigned()
      .notNullable()
      .references('projects.id')
  })

}

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('tasks')
}
