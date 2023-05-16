

function fizz_buzz(N) {
  let cont = [N];
  for (let i = 0; i <= N; i++) {
    
    
     if((((i+1)%3)==0)&&(((i+1)%5)==0)){
      cont[i]="FizzBuzz"
    }
else if(((i+1)%3)==0){
      cont[i]="fizz"
    } else if(((i+1)%5)==0){
       cont[i]="fuzz"
    }else
     cont[i]=i+1
    
  }
  return cont;
}
for (let i = 0; i < 6; i++) {
console.log(fizz_buzz(6)[i]);

}