# LoadRankedStores

***Input*** : 

```js
{
    <top_k>, // load top k
  	[style], // style of the store
    ... // other params use for other features: pagination,...
}
```



***Output*** :

```js
{
    success, //true, false
    data:{
        stores: <[...]> // list of ranked stores
        <top_k>,
       	[style],
        ... // other params
    }
    message
}
```

# LoadRankedDishes

***Input*** : 

```js
{
    <top_k>, // load top k
  	[category], // category of the dish
    ... // other params use for other features: pagination,...
}
```



***Output*** :

```js
{
    success, //true, false
    data:{
        dishes: <[...]> // list of ranked dishes
        <top_k>,
       	[category],
        ... // other params
    }
    message
}
```



