module.exports = {
    mongo: {
        development: {
            connectionString: 'mongodb+srv://MatthewMinish:MePremier22!@mminishcluster.0bxwe.gcp.mongodb.net/IceCreamService?retryWrites=true&w=majority'
        },
        production: {
            connectionString: 'mongodb+srv://MatthewMinish:MePremier22!@mminishcluster.0bxwe.gcp.mongodb.net/IceCreamService?retryWrites=true&w=majority'
        }
    },
    session: {
        secret: 'some kind of secret',
        resave: false,
        saveUninitialized: true,
        cookie: { secure: false } // This needs to be true if in prod under https
    }
};