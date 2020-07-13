db.createUser(
    {
        user: "manel",
        pwd: "whaya",
        roles:[
            {
                role: "readWrite",
                db:   "wotada"
            }
        ]
    }
);

db.createUser(
    {
        user: "user",
        pwd: "password",
        roles:[
            {
                role: "readWrite",
                db:   "dbtfg"
            }
        ]
    }
);