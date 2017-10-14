# PRACTICE ON DEV TOOLSA

* check where Js is running by clicking the html, then script, then break-on attribute modifications

* for grouping: 
initial code sample:
```
        dogs.forEach(dog => {
        console.log(`This is ${dog.name}`);
        console.log(`${dog.name} is ${dog.age} years old`);
        console.log(`${dog.name} is ${dog.age * 70} dog years old`);
        console.groupEnd(`${dog.name}`);
    })
```

final code:
```
    dogs.forEach(dog => {
        console.groupCollapsed(`${dog.name}`);
        console.log(`This is ${dog.name}`);
        console.log(`${dog.name} is ${dog.age} years old`);
        console.log(`${dog.name} is ${dog.age * 70} dog years old`);
        console.groupEnd(`${dog.name}`);
    })
```



