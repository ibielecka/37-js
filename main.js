
let dodawanie = document.getElementById('dodaj'), 
usuwanie = document.getElementById('usun'),
paragraf = document.getElementById('tekst'),
flag = true;
flag = false;

const zmiana = () => {
    flag = true;
    if (flag == true) {
        paragraf.textContent = 'dodano tekst - hurraaaaaa!!!';
        flag = false;
        return flag;}
 }

 const powrot = () => {
    flag = false;
    if(flag == false) {
        paragraf.innerText = '';
        flag = true;
        return flag;
    }}


dodawanie.addEventListener('click', function() {
zmiana();
})
usuwanie.addEventListener('click', function(){
powrot();
})