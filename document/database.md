# Store structure

<>: must have <br>
[ ]: better have

```
[{
    name: <storename>,
    address: <storeaddress>,
    dishes: [
        {
            name: <dishname>,
            image: <dishimage>,
            // evaluate : [salubrious, set up,
            // satisfied, price]
            evaluate: <[...]>,
            category: [[...]]
        },...,
    ],
    image: <[...]>
    //evaluate: [clean, serve, food quality, 
    //comfortable]
    evaluate: <[...]>
    style: [[...]]
},..]
```

# Dish Stucture
```
[{
    name: <dishname>,
    image: <dishimage>,
    // evaluate : [salubrious, set up,
    // satisfied, price]
    evaluate: <[...]>,
    category: [[...]],
    store:{
        name: <storename>,
        address: <storeaddresss>,
        image: <[...]>,
        evaluate: <[...]>
    }
},..]
```

# User Structure
```
[{
    username: <username>,
    password: <encrypted password>,
}]
```

# Recommendation Database
### ***Graph database***
- Neo4j
- GraphQL
- ...

### ***Document database***
- MongoDB
- ...

