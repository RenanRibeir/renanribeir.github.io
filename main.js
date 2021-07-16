var text = document.getElementById("pedido")
var idItem = 0;
var total = 0;

function enviar()
{
    let filhos = document.querySelectorAll('#pedido > *');
    console.log(filhos)
    var msg = 'Pedido%20de%20Carlos%20Mesa%2001%0A';
    
    var phone = 558597821541
    for(var i = 0;i<filhos.length;i++)
     msg += filhos[i].innerText.substring(0,filhos[i].innerText.length - 1) + "%0A"
    
    msg += 'Total%20R$%20'+total
    console.log(msg)
    window.open("https://api.whatsapp.com/send?phone=" + phone + "&text=" + msg, "_blank");
}

function adicionaritemSimples(item,valor)
{
    item += ' - '+valor;
    sessionStorage[idItem]  = valor
    text.innerHTML =  text.innerHTML +'<div class="item"  id="'+idItem+'"><text> - '+item+'</text><text onclick="remover('+idItem+')">X</text></div>';

    idItem++;
    total += valor
    
    document.getElementById('totalPedido').innerHTML = 'Total: R$ '+ total;
}

function adicionaritem(item,cx,valor)
{

    var select = document.getElementById(cx);
	var value = select.options[select.selectedIndex].value;
    item += ' '+value+' - '+valor;
    sessionStorage[idItem]  = valor
    
    text.innerHTML =  text.innerHTML +'<div class="item"  id="'+idItem+'"><text> - '+item+'</text><text onclick="remover('+idItem+')">X</text></div>';

    idItem++;
    
    total += valor
    
    document.getElementById('totalPedido').innerHTML = 'Total: R$ '+ total;
}

function adicionarFoudue(item,valor)
{

    if(document.getElementById('adicional').checked){
        item += " com Mashmellow"; 
        valor += 2;
    }
    item += ' - '+valor
    sessionStorage[idItem] = valor
    
    text.innerHTML =  text.innerHTML + '<div class="item"  id="'+idItem+'"><text> - '+item+'</text><text onclick="remover('+idItem+')">X</text></div>';

    idItem++;
    
    total += valor
    document.getElementById('totalPedido').innerHTML = 'Total: R$ '+ total;
}

function remover(id)
{

    var node = document.getElementById(id);
    total -= sessionStorage[id]
    if (node.parentNode) {
        node.parentNode.removeChild(node);
    }
    
    document.getElementById('totalPedido').innerHTML = 'Total: R$ '+ total;

}