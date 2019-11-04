# Stores structure

<>: must have <br>
[ ] : better have

```js
[{
    name: <storename>,
    address: <storeaddress>,
    _id: <HASH of name and address !Unique>
    dishes: [
        {
            name: <dishname>,
            image: <dishimage>,
            // evaluate : [salubrious, set up, satisfied, price]
            evaluate: <[...]>,
            category: [[...]]
        },...,
    ],
    image: <[...]>
    //evaluate: [clean, serve, food quality, comfortable]
    evaluate: <[...]>
    style: [[...]]
},..]
```

# Dishes Structure
```js
[{
    name: <dishname>,
    image: <dishimage>,
    _id: <HASH of dishs name and stores name !Unique>
    // evaluate : [salubrious, set up, satisfied, price]
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

# Users Structure
```js
[{
    username: <username>,
    password: <encrypted password>,
    _id: <HASH of username !Unique>
}]
```



# Dish's Evaluation

```js
[{
    user_id,
    dish_id,
    evaluate: [...] // dish's evaluation
},...]
```

# Store's Evaluation

```js
[{
    user_id,
    store_id,
    evaluate: [...] // store's evaluation
},...]
```



# Recommendation Database

### ***Graph database***  (highly recommended)
- Neo4j
- GraphQL
- ...

### ***Document database***
- MongoDB
- ...

