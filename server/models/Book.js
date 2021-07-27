const { Schema } = require('mongoose')

// Model: Book
const bookSchema = new Schema({
  authors: [
    {
      type: String
    }
  ],
  description: {
    type: String,
    required: true
  },
  // this is the saved GoogleBooks book id
  bookId: {
    type: String,
    required: true
  },
  image: {
    type: String
  },
  link: {
    type: String
  },
  title: {
    type: String,
    required: true
  }
})

module.exports = bookSchema
