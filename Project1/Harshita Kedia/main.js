var options={
    strings:['Competitive Programmer' , 'Web Developer'],
    typeSpeed:80,
    backSpeed:50,
    loop:true
};
    var typed= new Typed('.text',options);

const toggle=document.querySelector('#checkbox')
toggle.addEventListener('change',() =>{
    if(toggle.checked){
        document.body.classList.add('dark-theme')
    }
    else{
        document.body.classList.remove('dark-theme')
    }
})