# Javascript tutorial about css

## FEATURE
* update CSS variables with JS
* CSS anywhere in the page will be updated if that is referenced to 

### initial output
![alt-text](initial.png)

* JS script:
```
  <script>
    const  inputs = document.querySelectorAll('.controls input');

    function handleUpdate(){
      const suffix = this.dataset.sizing || '';
      document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
    }

    inputs.forEach(input => input.addEventListener('change', handleUpdate));
    inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));
  </script>
```

### final ouput
![alt-text](final.gif)