exports.up = function(knex) {

  return knex.schema.createTable('resources', table => {
    table.increments()

    table.text('name', 128)
      .notNullable()

    table.text('description', 256)

    table.integer('project_id')
      .notNullable()
      .unsigned()
      .references('projects.id')
      // .onDelete('RESTRICT')
      // .onUpdate('CASCADE')
  })

}

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('resources')
}
