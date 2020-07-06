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