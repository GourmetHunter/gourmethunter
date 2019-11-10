# Stores structure

<>: must have <br>
[ ] : better have

```js
[{
    name: <storename>,
    address: <storeaddress>,
    _id: <HASH of name and address !Unique>
    dishes: [dish_id,..],
    images: <[...]>
    // /images/stores/<store hash>/[...].png // store's image
    // evaluate: [clean, serve, food quality, comfortable]
    evaluate: {
             clean,
             serve,
             food_quanlity,
             comfortable
             },
    [style: [...]]
},..]
```

# Store Owners

```js
[{
    id_user,
    id_store
}]
```



# Dishes Structure

```js
[{
    name: <dishname>,
    images: [...], //path of images
    _id: <HASH of dishs name and stores name !Unique>
    // evaluate : salubrious, set up, satisfied, price
    evaluate: {
		salubrious,
    	setup,
    	satisfied,
    	price
	},
    [category: [...]],
    id_store
},..]
```

# Users Structure
```js
[{
    local:{
        <email>,
        <username>,
        <HASHed password SHA1>,
    },
    google:{
    	<email>,
    	<_id>
	},
    method,
   	[gender],
    [address],
    [birthday],
    [name_full],
    [phone],
    followers: [...], // _id of users who follow this user
    following: [...], // _id of users who followed by this user
    <avatar>, // need default image for new user _ this is a path of image
   			 // /images/users/<username _ hash>/[....].png
    favorite_stores:[...], // _ids of favorite stores
    favorite_dishes:[...], // _ids of favorite dishes
}]
```



# Dish's Evaluation

```js
[{
    user_id,
    dish_id,
    evaluate: {
		salubrious,
    	setup,
    	satisfied,
    	price
	}, // dish's evaluation
    date,
    _id
},...]
```

# Store's Evaluation

```js
[{
    user_id,
    store_id,
    //evaluate: [clean, serve, food quality, comfortable]
    evaluate: {
    	clean,
        serve,
        food_quality,
        comfortable
    },
    date,
    _id
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

