var numbers = [45, 87, 89, 56, 32, 51, 102, 25, 32, 58]

for(i = 0 ; i <= numbers.length; i++){
    var number = numbers[i];
    
    if(number > 50){
        continue;
    }
    console.log(number);
}