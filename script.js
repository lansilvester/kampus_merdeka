
//     hasil = document.getElementById('hasil');


//     function batal(){
//         a1.value="";
//         a2.value="";
//     }
//     function tambah(a1,a2){
//         tambah = a1+a2;
//         return tambah;
//         console.log(tambah);
//     }

var el_a1 = document.getElementById('a1'),
    el_a2 = document.getElementById('a2'),
    hasil = document.getElementById('hasil');
var validasi = /^[0-9]+$/;

function tambah(){
    if(el_a1.value.match(validasi) && el_a2.value.match(validasi)){ 
            a1 = eval(el_a1.value);
            a2 = eval(el_a2.value);
            hasil_tambah = a1+a2;
            hasil.value = hasil_tambah;
            console.log(hasil_tambah);
    }else{
        alert('--INVALID--\nHarus input angka');
        a1.value="";
        a2.value="";
    }
}
function kurang(){
    if(el_a1.value.match(validasi)&&el_a2.value.match(validasi)){

        a1 = eval(el_a1.value);
        a2 = eval(el_a2.value);
        hasil_kurang = a1-a2;
        hasil.value = hasil_kurang;
        console.log(hasil_kurang);
    }else{
        alert('--INVALID--\nHarus input angka');
        a1.value="";
        a2.value="";
    }
}
function kali(){
    if(el_a1.value.match(validasi)&&el_a2.value.match(validasi)){

        a1 = eval(el_a1.value);
        a2 = eval(el_a2.value);
        hasil_kali = a1*a2;
        hasil.value = hasil_kali;
        console.log(hasil_kali);
    }else{
        alert('--INVALID--\nHarus input angka');
        a1.value="";
        a2.value="";
    }
}
function bagi(){
    if(el_a1.value.match(validasi)&&el_a2.value.match(validasi)){

        a1 = eval(el_a1.value);
        a2 = eval(el_a2.value);
        hasil_bagi = a1/a2;
        hasil.value = hasil_bagi;
        console.log(hasil_bagi);
    }else{
        alert('--INVALID--\nHarus input angka');
        a1.value="";
        a2.value="";
    }
}
function pangkat(){
    if(el_a1.value.match(validasi)&&el_a2.value.match(validasi)){

        a1 = eval(el_a1.value);
        a2 = eval(el_a2.value);
        hasil_pangkat = Math.pow(a1,a2);
        hasil.value = hasil_pangkat;
        
    }else{
        alert('--INVALID--\nHarus input angka');
        a1.value="";
        a2.value="";
    }
}

function batal(){
    el_a1.value="";
    el_a2.value="";
    hasil.value="";
}