// document.readyState;
let selectors = document.querySelectorAll('.nvl');
Array.from(selectors).forEach(function(selector){
selector.addEventListener('click', function(e){
    e.preventDefault();
    const scrl = selector.getAttribute('data-scroll');
    console.log('####'.repeat(20));
    console.log(scrl);
    let section = document.querySelector('#'+scrl);

    const scrlVl = section.offsetTop;
    console.log(scrlVl);
    console.log('####'.repeat(20));

    window.scrollTo({
        top: scrlVl,
        left: 0,
        behavior: "smooth",
        
      });
      e.stopPropagation();
    // console.log(section);
    // console.log(e.target);
 })   
});
let box = document.getElementsByClassName('box');
for(i=0; i<box.length; i++){
    box[i].addEventListener('click', function(){
        
        console.log('####'.repeat(20));
        console.log(this);
        console.log('####'.repeat(20));
       this.classList.toggle('active');
    })
};
let mail = document.querySelector('.mailLink');
let tel = document.querySelector('.telLink');
let mlbox = document.querySelector('.mail-box');
let telbox = document.querySelector('.tel-box');
    mail.addEventListener('click', function(e){
    
    mlbox.classList.toggle('show');
    telbox.classList.remove('show');
    e.preventDefault();
   
});
tel.addEventListener('click', function(e){
    telbox.classList.toggle('show');
    mlbox.classList.remove('show');
    e.preventDefault();

});
let btn = document.getElementById('send');

// l....3et nomvalue =  nom.value;

function sendEmail(){
        const nom = document.getElementById('nom');
        const sujet = document.getElementById('sujet');
        const num = document.getElementById('num');
        const adresse = document.getElementById('adresse');
        const msg = document.getElementById('message');
   

    const mailbody = {
        Nom :(nom.value),
        Telephone : (num.value),
        Email : (adresse.value),
        Message : (msg.value)  
    };
    const sbjct = sujet.value;
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "ali.brahmi.br@gmail.com",
        Password : "0F8973DAD64AC320B2E94A13C78F1F642048",
        To : 'ali.brahmi.br@gmail.com',
        From : "ali.brahmi.br@gmail.com",
        Subject : sbjct,
        Body : mailbody
    }).then(
      
      message => { 
        let chek = message;
       if(chek == 'ok'){
            console.log(chek);

       }

        // 
        // 
        Swal.fire({
            title: "Good job!",
            text: "You clicked the button!",
            icon: "success"
          });
        }
    //  
    );
}

btn.addEventListener('click', function(e){
    console.log('clicked');
    e.preventDefault();
    sendEmail(); 
    console.log(nom.value);

    // console.log(sujet);
    // console.log(num);
    // console.log(adresse);
});
// window.addEventListener('scroll', function(){
//     let wdscrl = window.scrollY;
//     if (wdscrl > 3280){
//          mlbox.classList.toggle('show');
//          console.log(' window scrolled to contact us');
//     }else{
//         mlbox.classList.remove('show');
//     } ;
   
   
// });
// let selectedSection = document.querySelector('#home');
// const scrl = selectedSection.offsetTop;
// console.log(scrl);
// window.scrollTo({
//     top: scrl,
//     left: 0,
//     behavior: "smooth",
//   });
  
    
    
// let a= e.target;
// console.log(a);

// 

let main = document.querySelector('#main')
console.log(main);

let n1 = [10, 30, 10, 20];
let n2 = [30, 20, 10];
console.log([...n1, ...n2].length);
console.log(Math.max(...n1));
console.log([...n1, ...n2].length * Math.max(...n1));