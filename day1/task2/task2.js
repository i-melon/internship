let lang = 'en';
if(lang == 'ru'){
    alert('понедельник, ...');
} else if(lang == 'en'){
    alert('monday, ...');
} else{
    alert(' language error');
}

let lang2 = 'ru';
switch(lang2){
    case 'ru':
        alert('понедельник, ...');
        break;
    case 'en':
        alert('monday, ...');
        break;
    default:
        alert(' language error');

}

let lang3 = 'ru';
let a = {
    'ru': 'понедельник, ...',
    'en': 'monday, ...'
};
alert(a[lang3]);



let namePerson = 'Maksim';
firstCheck = namePerson == 'Artem';
SecondCheck = namePerson == 'Maksim';
firstCheck ? (
    alert('director')
): SecondCheck ?(
    alert('teacher')
): (
    alert('student')
)