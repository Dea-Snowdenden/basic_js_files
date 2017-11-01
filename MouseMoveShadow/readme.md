# JS TUTORIAL ON FLEX SHADOW EFFECTS

### Sample
![alt-text](images/sample.gif)


### Initial 
![alt-text](images/first.png)


### Adding Mouse event
```
    const hero = document.querySelector('.hero');
    const text = hero.querySelector('h1');
    function shadow(e) {
    console.log(e);
    }

    hero.addEventListener('mousemove', shadow);
```
![alt-text](images/firstmouseevent.png)

![alt-text](images/secondevent.png)


### Final
```
    const xWalk = Math.round((x / width * walk) - (walk / 2));
const yWalk = Math.round((x / height * walk) - (walk / 2));
//console.log(xWalk, yWalk);  
    text.style.textShadow = `
      ${xWalk}px ${yWalk}px 0 rgba(255,0,255,0.7),
      ${xWalk * -1}px ${yWalk}px 0 rgba(0,255,255,0.7),
      ${yWalk}px ${xWalk * -1}px 0 rgba(0,255,0,0.7),
      ${yWalk * -1}px ${xWalk}px 0 rgba(0,0,255,0.7)
    `;
```
![alt-text](images/final.png)


