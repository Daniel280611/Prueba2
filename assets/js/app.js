if (navigator.serviceWorker) {
    navigator.serviceWorker.register("sw.js");
    console.log ("si funciona");
  } else {
      console.log("Aqui no funciona")
  }

