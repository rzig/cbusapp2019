/**
 * Here we define all of the ENGLISH text in the app.
 * There should be a pair for each screen, and in there
 * should at minimum be a `header` property, which
 * is what is displayed at the top of the screen.
 * 
 * And, by defining the header text in here, we are able
 * to customize it for the SwitchNavigator, something
 * that is not otherwise possible.
 */
const spanishStrings = {
    Welcome: {
        header: "Bienvenido",
        body: "Bienvenido a Universal Solar! Nosotros le guiaremos a través de todo el proceso. Presione Siguiente cuando esté listo para comenzar."
    },
    Groups: {
        header: "Grupos",
        body: "Un grupo es con quien comprarás solar. Si has recibido un código de grupo por correo, puedes escribirlo a continuación. Si no lo ha hecho, únase a uno de los grupos que aparecen a continuación.",
        loading: "Cargando...",
        error: "Hay un error al cargar los datos. Vuelva a intentarlo más tarde, por favor.",
        placeholder: "Nombre del Grupo"
    },
    Plan: {
        header: "Plan",
        body: "Saque entre veinte y cuarenta fotos de su casa, desde múltiples ángulos. Cuando termines, presiona Siguiente.",
        permissionTitle: "¿Permite el acceso a la cámara?",
        permissionMessage: "Usamos esto para construir un modelo 3D.",
        buttonName: "Toma una foto",
        buttonDescription: "Toma una foto."
    },
    Buy: {
        header: "Compra",
        warning: "Por favor, únase a un grupo primero.",
        upfront: "costo inicial",
        saved: "ahorrado por año",
        each: " cada",
        numberOf: "Número de paneles solares",
        energyUse: "Su consumo de energía",
        solarToSell: "La energía solar ya está a la venta",
        perMonth: "al mes"
    },
    Checkout: {
        header: "Caja",
        card: "Número de tarjeta",
        expirationYear: "Año de vencimiento (AAAA)",
        expirationMonth: "Mes de vencimiento (MM)",
        addressOne: "Dirección línea uno",
        addressTwo: "Dirección línea uno",
        city: "Ciudad",
        state: "Estado",
        zipcode: "Código postal"
    },
    Navigator: {
        next: "Siguiente",
        nextDescription: "Pasa al siguiente paso.",
        back: "Espalda",
        backDescription: "Se desplaza al paso anterior"
    }
}

export default  spanishStrings;