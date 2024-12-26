const quotes = [{
    'quotes':`"Hal yang paling penting adalah menikmati hidupmu, menjadi bahagia, apa pun yang terjadi."`,
    'person':`Audrey Hepburn`
},{
    'quotes':`"Hidup itu sederhana, kita yang membuatnya sulit."`,
    'person':`Confucius`
},{
    'quotes':`"Hidup itu bukan soal menemukan diri Anda sendiri, hidup itu membuat diri Anda sendiri."`,
    'person':`George Bernard Shaw`
},{
    'quotes':`"Hidup adalah mimpi bagi mereka yang bijaksana, permainan bagi mereka yang bodoh, komedi bagi mereka yang kaya, dan tragedi bagi mereka yang miskin."`,
    'person':`Sholom Aleichem`
},{
    'quotes':`"Kenyataannya, Anda tidak tahu apa yang akan terjadi besok. Hidup adalah pengendaraan yang gila dan tidak ada yang menjaminnya."`,
    'person':`Eminem`
},{
    'quotes':`"Tujuan hidup kita adalah menjadi bahagia."`,
    'person':`Dalai Lama`
},{
    'quotes':`"Hidup yang baik adalah hidup yang diinspirasi oleh cinta dan dipandu oleh ilmu pengetahuan."`,
    'person':`Bertrand Russell`
},{
    'quotes':`"Seribu orang tua bisa bermimpi, satu orang pemuda bisa mengubah dunia."`,
    'person':`Soekarno`
},{
    'quotes':`"Pendidikan adalah senjata paling ampuh untuk mengubah dunia."`,
    'person':`Nelson Mandela`
},{
    'quotes':`"Usaha dan keberanian tidak cukup tanpa tujuan dan arah perencanaan."`,
    'person':`John F. Kennedy`
},{
    'quotes':`"Kamu tidak perlu menjadi luar biasa untuk memulai, tapi kamu harus memulai untuk menjadi luar biasa."`,
    'person':`Zig Ziglar`
}]

let quote = document.querySelector('.quote');
let person = document.querySelector('.person');
let getBtn = document.querySelector('#new-quote');

let i = 0;

getBtn.addEventListener('click', () => {
    // let i = Math.floor(Math.random() * quotes.length);
    if (i == quotes.length){
        i = 0;
    }
    quote.innerText = quotes[i].quotes;
    person.innerText = quotes[i].person;
    i++;
})
