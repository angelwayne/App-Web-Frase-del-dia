function obtenFrase()
{
    // URL de la API que deseas consumir
    const apiUrl = 'https://api.quotable.io/random';

    // Usando fetch para obtener datos de la API
    fetch(apiUrl)
    .then(response => {
        // Verifica si la respuesta es exitosa
        if (!response.ok) {
            throw new Error(`Error: ${response.status}`);
        }
       data = response.json(); // Procesa la respuesta en formato JSON

       return data;
    })
    .then(data => {
        // Maneja los datos de la API
        // console.log(data);
        Swal.fire({
            title: "Aqui esta la frase.",
            text: data['content'],
            footer: `Autor: ${data['author']}`
        });
    })
    .catch(error => {
        // Maneja cualquier error ocurrido durante la solicitud
        console.error('Error al consumir la API:', error);

        Swal.fire({
            icon: "error",
            title: "Error...",
            text: error
          });
    });
    
 
}

