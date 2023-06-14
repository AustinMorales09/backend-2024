const User = require('../models/User');
const jwt = require('jsonwebtoken');


const maxAge = 3 * 24 * 60 * 60;

const createToken = (_id) => {
    return jwt.sign({ _id }, 'secret message', {
        expiresIn: maxAge
        })
}

const loginUser = async (req, res) => {

    // gather password and email from POST request
    const {email, password} = req.body;
    try {

        // call static login function from userModel
        const user = await User.login(email, password);

        // create a token for the user
        const token = createToken(user._id);
        res.status(200).json({ email, token });
    } catch (error) {

        // catch and display any thrown errors
        res.status(400).json({ error: error.message });
    }
}

// signup user
const signupUser = async (req, res) => {
 
    const {email, password} = req.body;
    try {

        const user = await User.signup(email, password);

        const token = createToken(user._id);
        res.status(200).json({ email, token });

    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

module.exports = {
    loginUser,
    signupUser
}