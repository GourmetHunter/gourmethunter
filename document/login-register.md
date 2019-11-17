# Register

***Input*** :

```js
{
    email,
    password,
    gender
}
```

***Ouput*** :

```js
{
    success, //true, false
    data: {
        user_id,
        dish_id,
        evaluate: {} // dish's evaluation
    },
    message
}
```

# Login

***Input*** : email,password

***Output*** : 

```js
{
    success, //true, false
    data: {
        token
    },
    message
}
```
