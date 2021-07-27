const { Schema } = require('mongoose')

const bookSchema = new Schema({
  authors: [
    {
      type: String
    }
  ],
  title: {
    type: String,
    required: true
  }
  description: {
    type: String,
    required: true
  },
  bookId: {
    type: String,
    required: true
  },
  link: {
    type: String
  },
  image: {
    type: String
  },
})

module.exports = bookSchema
