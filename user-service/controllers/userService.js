const mongoose = require('mongoose');
const User = mongoose.model('User');
const passport = require('passport');

module.exports = {
    /**
     * Adds a user to the database. Also generates an API key and a JWT for the user.
     * @param {any} req 
     * @param {any} res 
     */
    register: function (req, res) {
        newUser = new User(req.body);
        newUser.apiKey = Math.random().toString(36).substring(7);
        newUser.save((err) => {
            if (err) {
                res.status(404).json(err);
            } else {
                const token = newUser.generateJwt();
                res.status(200).json({ token });
            }
        });
    },

    /**
     * Edits a user in the database.
     * @param {Number} id 
     * @param {JSON} newUserDetails 
     */
    editUser: function (id, newUserDetails) {
        return User.findByIdAndUpdate(id, newUserDetails, { new: true })
            .catch(err => {
                console.error(err);
                return [];
            });
    },

    /**
     * 
     * @param {any} req
     * @param {any} res
     */
    login: function (req, res) {
        passport.authenticate('local', (err, user, info) => {
            let token;
            if (err) {
                return res
                    .status(404)
                    .json(err);
            }
            if (user) {
                token = user.generateJwt();
                res
                    .status(200)
                    .json({ token });
            } else {
                res
                    .status(401)
                    .json(info);
            }
        })(req, res);
    }
}