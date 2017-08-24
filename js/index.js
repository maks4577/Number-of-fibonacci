    
    
    const a = parseInt(prompt('Enter number'))
    alert( fib(a) );

    
    
    function fib(n) {
      let a = 1,
        b = 1;
      for (let i = 3; i <= n; i++) {
        let c = a + b;
        a = b;
        b = c;
      }
      return b;
    }
  
    
