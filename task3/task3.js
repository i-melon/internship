function search(a){
    if (typeof a != 'string'){
        alert('it is not a string!!');
    }
}
function cut(a){
    a = a.trim();
    alert(a);
}
function cutstring(a){
    if (a.length > 30){
        a = a.slice(0,30) + '...';
        alert(a);
    }
}


let a = '                   ytr                              ';
search(a);
cut(a);
cutstring(a);