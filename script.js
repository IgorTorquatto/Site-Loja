var menulist=document.getElementById('menulist')
menulist.style.maxHeight='0px'

function togglemenu(){
    if(menulist.style.maxHeight=='0px'){
        menulist.style.maxHeight='130px'
    }else{
        menulist.style.maxHeight='0px'
    }
}

function refresh(){
    window.location.reload()
}

function about(){
    var element=document.getElementById('#')
    element.innerHTML='Loja de Bolsas e Calçados localizada na esquina das ruas São Pedro e Alencar Peixoto, 717, Juazeiro do Norte-Ceará.'
}