const bookSchema = require('./Book')
const { Schema, model } = require('mongoose')
const bcrypt = require('bcrypt')

// Model: User
const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: [/.+@.+\..+/, 'Must use a valid email address']
    },
    password: {
      type: String,
      required: true
    },
    savedBooks: [bookSchema]
  },
  {
    toJSON: {
      virtuals: true
    }
  }
)

userSchema.pre('save', async function (next) {
  if (this.isNew || this.isModified('password')) {
    const saltRounds = 10
    this.password = await bcrypt.hash(this.password, saltRounds)
  }

  next()
})

// compare/validate pw to log in
userSchema.methods.isCorrectPassword = async function (password) {
  return bcrypt.compare(password, this.password)
}

// query a user -> get another field `bookCount` w/ # of saved books
userSchema.virtual('bookCount').get(function () {
  return this.savedBooks.length
})

const User = model('User', userSchema)

module.exports = User
