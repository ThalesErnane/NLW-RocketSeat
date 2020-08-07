// Procurar o botao

document.querySelector("#add-time")
// Quando clicar no botão 
.addEventListener('click', cloneField)



function cloneField(){
    // duplicar os campos
    const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true); //clona todos os campos q estão dentro da schedule-item

    // pegar os campos 
    const fields = newFieldContainer.querySelectorAll('input'); // seleciona todos os inputs dentro do schedule-item


    // para cada campo limpar
    fields[0].value = ""; // limpa o input das  
    fields[1].value = ""; // limpa o input ate 

 fields.forEach(function(field) {
     // pega o field do momento e limpa ele 
     field.value = "";
 })
    // colocar na pagina 

    document.querySelector('#schedule-items').appendChild(newFieldContainer); // inclui na pag novos campos no schedule-items
}

// Executa uma ação 
