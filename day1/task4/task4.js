let numbers = ['228', '195', '117', '9876', '435', '6789', '23456'];
for (let i = 0; i < 7; i++){
    if(numbers[i].slice(0,1) == '2' || numbers[i].slice(0,1) == '4'){
        document.write(numbers[i] + '<\/br>');
    }
}

function isPrime(a){
    let c;
    let isit = true;
    for (let i = 2; i < a; i++){
        if (a % i == 0){
            isit = false;
        }
    }
    return isit;
}
for (let i = 2; i < 101;  i++){
    if (isPrime(i) == true){
        document.write(i + ' Делители этого числа: 1 и ' + i + '; <\/br>');
    }
}
