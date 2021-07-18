const form = document.getElementById('form')

form.addEventListener('submit', (e) => {

// e.preventDefault();     



let nome = document.getElementById('nome').value;
let celular = document.getElementById('celular').value;
let email = document.getElementById('email').value;


let data = {
    nome,
    celular,
    email,
}
let convertData= JSON.stringify(data);

localStorage.setItem('lead', convertData);

 if (email == ''|| nome =='' || celular ==''){

    alert("Preencha os espaços em branco.");
    }

 else if (isNaN(celular)){
    alert("Preencha um número de celular válido");
 }   
else {

alert(" Obrigado, entraremos em contato!")

}
console.log("Nome :", nome);
console.log("Email :", email);
})