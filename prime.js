let n=parseInt(prompt('enter a number'));
let r;
    if(n<=1)
    {
        console.log('not prime nor composite');
    }
    else{
        for(let i=2;i<n;++i)
        {
            if(n%i==0){
             r=n+ ' is not prime';
            break;
            }
            else{
             r=n + ' is  prime';
            }
        }
        console.log(r);
    }