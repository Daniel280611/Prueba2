if (navigator.serviceWorker) {
    navigator.serviceWorker.register("/prueba2/sw.js");
    console.log ("si funciona");
  } else {
      console.log("Aqui no funciona")
  }

