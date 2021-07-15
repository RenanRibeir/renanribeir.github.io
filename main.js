var text = document.getElementById("pedido")
var idItem = 0;

function enviar()
{
    let filhos = document.querySelectorAll('#pedido > *');
    console.log(filhos)
    var msg = 'Pedido%20de%20Carlos%20Mesa%2001%0A';
    
    var phone = 0000000000
    for(var i = 0;i<filhos.length;i++)
     msg += filhos[i].innerText.substring(0,filhos[i].innerText.length - 7) + "%0A"
    
    console.log(msg)
    window.open("https://api.whatsapp.com/send?phone=" + phone + "&text=" + msg, "_blank");
}

function adicionaritemSimples(item)
{

    sessionStorage[idItem]  = '<p id="'+idItem+'">  - '+item+'<button onclick="remover('+idItem+')">Remover</button>'
    
    text.innerHTML =  text.innerHTML + sessionStorage[idItem];

    idItem++;
}

function adicionaritem(item,cx)
{

    var select = document.getElementById(cx);
	var value = select.options[select.selectedIndex].value;

    sessionStorage[idItem]  = '<p id="'+idItem+'"> - '+item+' '+value+'<button onclick="remover('+idItem+')">Remover</button>'
    
    text.innerHTML =  text.innerHTML + sessionStorage[idItem];

    idItem++;
}

function adicionarFoudue(item)
{

    if(document.getElementById('adicional').checked){
        item += " com Mashmellow"; 
    }

    sessionStorage[idItem] = '<p id="'+idItem+'"> - '+item+'<button onclick="remover('+idItem+')">Remover</button>'
    
    text.innerHTML =  text.innerHTML + sessionStorage[idItem];

    idItem++;

}

function remover(id)
{

    var node = document.getElementById(id);
    if (node.parentNode) {
        node.parentNode.removeChild(node);
    }

}