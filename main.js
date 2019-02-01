$('#create').click(()=>{
    $('.ground').append(`<div class="object"></div>`,`<div class="object2"></div>`);
    
});

var int = 1000;

for (let index = 0; index < 10; index++) {
    setTimeout(function(){
        $('.ground').append(`<div class="object"></div>`,`<div class="object2"></div>`).fadeIn();
        console.log('iteration');
    }, int);
    int += 1000;
}
