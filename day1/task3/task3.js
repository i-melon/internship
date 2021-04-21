function search(a){
    if (typeof a != 'string'){
        alert('it is not a string!!');
    }
    a = a.trim();
    if (a.length > 30){
        a = a.slice(0,30) + '...';   
    }
    alert(a);
}



let a = '                   ytrqwertyuioplkjhgfdsazxcvbnm,.oiuytr   rtyuixcdfvgbhnjm                              ';
search(a);
