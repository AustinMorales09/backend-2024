const mongoose = require('mongoose');
const { isEmail } = require('validator');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required:[ true, 'Please enter an email'],
        unique: true,
        lowercase: true,
        validate: [isEmail, 'Please enter a valid email']
    },
    password: {
        type: String,
        required: [true, 'Please enter a password'],
        minLength: [6, 'Minimum length is 6 characters']
    }
})


userSchema.statics.signup = async function (email, password) {

    // validation
    // if no email or password was sent
    if (!email || !password) {
      throw Error('All fields must be filled')
    }
    // if the email is valid through validator
    if (!validator.isEmail(email)) {
      throw Error('Email not valid')
    }
    // if the password is strong through validator
    if (!validator.isStrongPassword(password)) {
      throw Error('Password not strong enough')
    }
    // if the email already exists as a user  
    const exists = await this.findOne({ email });
    if (exists) {
      throw Error('Email already in use');
    }
  
    // salt and hash password through bcrypt
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);
  
    // create user with hashed password and return it
    const user = await this.create({ email, password: hash });
    return user;
  }
  
  // static login method
  userSchema.statics.login = async function (email, password) {
  
    //   if no email or password was sent
    if (!email || !password) {
      throw Error('All fields must be filled')
    }
  
    //   find if user exists
    const user = await this.findOne({ email })
    if (!user) {
      throw Error('Incorrect Email');
    }
  
    //   match user's password with the one stored 
    const match = await bcrypt.compare(password, user.password);
  
    // if it doesnt match throw an error
    if (!match) {
      throw Error('Incorrect Password');
    }
  
    // if it matches return the user
    return user;
  }


userSchema.post('save', function(doc, next){
    console.log('new user was created and saved', doc);
    next();
})
userSchema.pre('save', async function(next){
    const salt = await bcrypt.genSalt();
    this.password = await bcrypt.hash(this.password, salt)
    next();
})


const User = mongoose.model('user', userSchema);

module.exports = User;