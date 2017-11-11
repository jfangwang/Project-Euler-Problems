/*A Pythagorean triplet is a set of three natural numbers, a < b < c, for which,

a2 + b2 = c2
For example, 32 + 42 = 9 + 16 = 25 = 52.

There exists exactly one Pythagorean triplet for which a + b + c = 1000.
Find the product abc.*/



var a=0,b=0,c=0;
for(var i=0;i<1000;i++){
    //all possible numbers for "a" and "b"
    for (a=0;a<1000;a++) {
        c=a*a+b*b
        c=Math.sqrt(c)
        
        if(c%1==0){
        //no decimals
            if(a<b&&b<c){
            //possible working pythagorean theorum numbers in order
            //console.log(a+" "+b+" "+c);
                if(a+b+c==1000){
                    console.log("The product of 'abc' is "+a*b*c);
                    console.log("a = "+a);
                    console.log("b = "+b);
                    console.log("c = "+c);
                    console.log(a+"*"+b+"*"+c+"="+a*b*c);
                }  
            }
        }
    }
    b++
}