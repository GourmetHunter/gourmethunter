# LoadStore

***Input*** : Void 

***Output*** :

```js
{
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
}
```

# StoreStoreEvaluation

***Input*** : 

```js
{
    user_id,
    store_id,
    evaluate: [...] // store's evaluation
}
```

***Output*** :

```js
{
    success, //true, false
    data: { user_id,
            store_id,
            evaluate: [...]},
    message
}
```

# ComputeStoreEvaluation

***Input*** : Store's id

***Ouput*** :

```js
{
    store_id,
    evaluate: [...] // store's evaluation
}
```

# UpdateStoreEvaluation

***Input*** :

```js
{
    store_id,
    evaluate: [...] // store's evaluation
}
```

***Output*** :

```js
{
    success, //true, false
    data: { store_id,
            evaluate: [...]},
    message
}
```

