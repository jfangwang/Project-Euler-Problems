var decide = false 
var a = 0
var times = 1
var list = 2
function primeNum2() {
    for(a = 0;a<2000001;a++){  
      
        for (var i= 2;i<a;i++) {
            
            if(a%i==0){
                //console.log(a+" false");
                decide = false 
                break;
            }else{
                decide=true
            }
         }
        
        
        if(decide==true){
            //console.log(a+" is the " + times +" prime" );
            times++ 
            list+=a
            //console.log("the answer is "+list+".There are "+times+" prime numbers that add up to this total!");
            
        }
    }
    console.log(list);
}

primeNum2()
//PROBLEM!! This program took 761.976s(12 mins) to run 