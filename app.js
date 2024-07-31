

function encriptar(){
    let textoEncriptar = document.getElementById("text").value.toLowerCase();
    let textoEncriptado = textoEncriptar.replace(/e|é/igm,"enter");
    textoEncriptado = textoEncriptado.replace(/o|ó/igm,"ober");
    textoEncriptado = textoEncriptado.replace(/i|í/igm,"imes");
    textoEncriptado = textoEncriptado.replace(/a|á/igm,"ai");
    textoEncriptado = textoEncriptado.replace(/u|ú/igm,"ufat");
    
    document.getElementById("texto_out").style.visibility = 'visible';
    document.getElementById("texto_out").innerText = textoEncriptado;
    document.getElementById("temp2").style.display = "none";
    document.getElementById("temp3").style.display = "none";
    document.getElementById("temp1").style.display = "none";
    document.getElementById("copy").style.visibility = "visible";
}
function desencriptar(){
    let textoDesencriptar = document.getElementById("text").value.toLowerCase();
    let textoDesencriptado = textoDesencriptar.replace(/enter/igm,"e");
    textoDesencriptado = textoDesencriptado.replace(/ober/igm,"o");
    textoDesencriptado = textoDesencriptado.replace(/imes/igm,"i");
    textoDesencriptado = textoDesencriptado.replace(/ai/igm,"a");
    textoDesencriptado = textoDesencriptado.replace(/ufat/igm,"u");
    
    document.getElementById("texto_out").style.visibility = 'visible';
    document.getElementById("texto_out").innerText = textoDesencriptado;
    document.getElementById("temp2").style.display = "none";
    document.getElementById("temp3").style.display = "none";
    document.getElementById("temp1").style.display = "none";
    document.getElementById("copy").style.visibility = "visible";
}
function copiar(){
    let texto_a_copiar = document.getElementById("texto_out").innerHTML;
    navigator.clipboard.writeText(texto_a_copiar);
    alert('¡Texto copiado!');
}
