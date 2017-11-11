
var decide = false 
function primeNum(a){  
        for (var i=2;i<a;i++) {
            //console.log(a%i);
            if(a%i==0) {
                //console.log(a+" = false");
              
                decide = false 
                console.log(a+" is not prime");
                break;
            }else{
                decide = true;
             }
            
        }
        
        if(decide==true){
            console.log(a +" is prime");
          
        }
    
         
}
primeNum(802471);

///second program 

var decide = false 
var a = 0
var times = 2
function primeNum2() {
    for(a = 0;a<1010;a++){  
      
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
            console.log(a+" is the " + times +" prime" );
            times++ 
        }
       
    }

    //console.log(a+" is the " + times +" prime" );
}
primeNum2()
