# LoadStore

***Input*** : store_id

***Output*** :

```js
{	
    success, // true, false
    data:{
        name: <storename>,
        address: <storeaddress>,
        _id: <HASH of name and address !Unique>
        // need to load dishes
        dishes: [
            {
                name: <dishname>,
                image: <dishimage>, // the first image
                evaluate: {salubrious, set up, satisfied, price},
                [category: [...]]
            },...,
        ],
        images: <[...]>,
        evaluate: {clean, serve, food quality, comfortable},
        [style: [...]]
	},
    message
}
```

# SaveStoreEvaluation

***Input*** : 

```js
{
    user_id,
    store_id,
    evaluate: {} // store's evaluation
}
```

***Output*** :

```js
{
    success, //true, false
    data: { user_id,
            store_id,
            evaluate: {}
          },
    message
}
```

# ComputeStoreEvaluation

***Input*** : Store's id

***Ouput*** :

```js
{
    store_id,
    evaluate: {} // store's evaluation
}
```

# UpdateStoreEvaluation

***Input*** :

```js
{
    store_id,
    evaluate: {} // store's evaluation
}
```

***Output*** :

```js
{
    success, //true, false
    data: { store_id,
            evaluate: {}
          },
    message
}
```

