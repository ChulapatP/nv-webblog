let users =  [
    {
        "name":"asago",
        "lastname":"agaligo",
        "email":"AAGG1122@gmail.com",
        "from":"Thailand"
    },
    {
        "name":"Job",
        "lastname":"Steve",
        "email":"steve.job@gmail.com",
        "from":"USA"
    }
    ]

    let userA =  
        {
            "name":"AAA",
            "lastname":"AAAA",
            "email":"AAAA@gmail.com",
            "from":"Thailand"
        }

        let userB =  
        {
            "name":"BBB",
            "lastname":"BBBB",
            "email":"BBBB@gmail.com",
            "from":"Thailand"
        }

    users.push(userA)
    users.push(userB)
    
    for (let i = 0; i < users.length; i++) {
       console.log('Name: ' + users[i].name + ' ' + users[i].lastname)
    }   