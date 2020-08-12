document.querySelector("#add-time")
.addEventListener("click", cloneField)

function cloneField(){
    //duplica los campos .schedule-item
    const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true)

    //lSelecciona los campos a limpiar

    const fields = newFieldContainer.querySelectorAll('input')

    //para cada campo, limpiar
    fields.forEach(function(field){
        field.value=""
    })


    //posición del nuevo campo duplicado
    document.querySelector('#schedule-items').appendChild(newFieldContainer)

}