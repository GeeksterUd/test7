let n=parseInt(prompt('Enter no. of terms;'));
let s=-1;
let sum=0;
for(let i=1;i<=n;++i)
{
    s=s+2;
    console.log(s);
    sum=s+sum;
}
console.log('sum of  odd numbers ' + sum);
   