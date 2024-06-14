export const fechaDeHoy = () => {
    const fechaHoy = new Date();
    const dia = fechaHoy.getDate();
    const mes = fechaHoy.getMonth() + 1; // Los meses se cuentan desde 0, por lo que sumamos 1.
    const año = fechaHoy.getFullYear();
  
    // Formatea la fecha como una cadena "dd/mm/aaaa" (puedes ajustar el formato según tus preferencias).
    const fechaFormateada = `${dia}/${mes}/${año}`;
  
    return fechaFormateada;
}

//generar ID
export const generarIDAleatorio = (longitud) => {
    const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const numbers = '0123456789';
    let resultadoCaracteres = '';
    let resultadoNumeros = '';
    const caracteresLength = caracteres.length;
    const numbersLength = numbers.length;

    for (let i = 0; i < longitud; i++) {
        resultadoCaracteres += caracteres.charAt(Math.floor(Math.random() * caracteresLength));
    }
    for (let i = 0; i < longitud-5; i++) {
        resultadoNumeros += numbers.charAt(Math.floor(Math.random() * numbersLength));
    }
    console.log(resultadoCaracteres);
    console.log(resultadoNumeros);
    const id = `${resultadoNumeros}-${resultadoCaracteres}`

    return id;
}

