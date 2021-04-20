let num = 266219;
let c = 266219 % 10;
while(num > 10){
    num = (num - (num%10))/10
    c *= num%10
}
alert(c)

let b = c**3;
alert(String(b).slice(0,2));