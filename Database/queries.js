const database = require("./database-connection")

module.exports = {
    list(tableName) {
        return database(tableName).select()
    },
    read(tableName, id) {
      return database(tableName).select().where('id', id)
    },
    post(tableName, newPost) {
      return database(tableName)
        .insert(newEvent)
        .returning('*')
        .then(record => record[0])
    },
    update(tableName, id, newPost) {
      return database(tableName)
        .update(newPost)
        .where('id', id)
        .returning('*')
        .then(record => record[0])
    },
    deleteOne(tableName, id) {
      return database(tableName)
        .delete()
        .where('id', id)
    }
}
