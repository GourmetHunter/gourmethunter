# StoreDishEvaluation

***Input*** :

```js
{
    user_id,
    dish_id,
    evaluate // dish's evaluation
}
```

***Ouput*** :

```js
{
    success, //true, false
    data: {
        user_id,
        dish_id,
        evaluate // dish's evaluation
    },
    message
}
```

# ComputeDishEvaluation

***Input*** : dish_id

***Output*** : 

```js
{
    dish_id,
    evaluate // dish's evaluation
}
```

# UpdateDishEvaluation

***Input*** : 

```js
{
    dish_id,
    evaluate // dish's evaluation
}
```



***Output*** :

```js
{
    success,
    data : {
        dish_id,
        evaluate // dish's evaluation
    },
    message
}
```

# LoadDish

***Input*** : dish_id

***Ouput*** :

```js
{
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
}
```

