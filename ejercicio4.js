class Autobus {
    constructor(capacidad, matricula, listadoConductores) {
      this.capacidad = capacidad;
      this.pasajeros = 0;
      this.matricula = matricula;
      this.listadoConductores = listadoConductores;
    }
  
    getCapacidad() {
      return this.capacidad;
    }
  
    setCapacidad(nuevaCapacidad) {
      this.capacidad = nuevaCapacidad;
    }
  
    getPasajeros() {
      return this.pasajeros;
    }
  
    setPasajeros(nuevosPasajeros) {
      this.pasajeros = nuevosPasajeros;
    }
  
    getMatricula() {
      return this.matricula;
    }
  
    setMatricula(nuevaMatricula) {
      this.matricula = nuevaMatricula;
    }
  
    getListadoConductores() {
      return this.listadoConductores;
    }
  
    setListadoConductores(nuevoListadoConductores) {
      this.listadoConductores = nuevoListadoConductores;
    }
  
    mostrarDatosAutobus() {
      console.log("Matrícula del autobús: " + this.matricula);
      console.log("Capacidad del autobús: " + this.capacidad);
      console.log("Número de pasajeros: " + this.pasajeros);
      console.log("Listado de conductores: ");
      for (let i = 0; i < this.listadoConductores.length; i++) {
        const conductor = this.listadoConductores[i];
        conductor.mostrarDatosConductor();
      }
    }
  
    subir(numPasajeros) {
      if (numPasajeros <= this.capacidad) {
        this.pasajeros += numPasajeros;
        console.log("Se subieron " + numPasajeros + " pasajeros. Número actual de pasajeros: " + this.pasajeros);
      } else {
        do {
          console.log("El número de pasajeros " + numPasajeros + " supera la capacidad del autobús: " + this.capacidad);
          numPasajeros = parseInt(prompt("¿Cuántos pasajeros quieres subir al autobús?: "));
        } while (numPasajeros > this.capacidad);
            this.pasajeros += numPasajeros;
            console.log("Se subieron " + numPasajeros + " pasajeros. Número actual de pasajeros: " + this.pasajeros);
      }
    }
    

    bajar(numPasajeros) {
      if (numPasajeros <= this.pasajeros) {
        this.pasajeros -= numPasajeros;
        console.log("Se bajaron " + numPasajeros + " pasajeros. Número actual de pasajeros: " + this.pasajeros);
      } else {
        do {
          console.log("El número de pasajeros " + numPasajeros + " supera el número actual de pasajeros: " + this.pasajeros);
          numPasajeros = parseInt(prompt("¿Cuántos pasajeros quieres bajar del autobús?: "));
        } while (numPasajeros > this.pasajeros);
            this.pasajeros -= numPasajeros;
          console.log("Se bajaron " + numPasajeros + " pasajeros. Número actual de pasajeros: " + this.pasajeros);
      }
    }
    
  
    buscarConductor(licencia) {
      for (let i = 0; i < this.listadoConductores.length; i++) {
        const conductor = this.listadoConductores[i];
        const licenciaConductor = conductor.licencia.toLowerCase();
        if (licencia.toLowerCase() === licenciaConductor) {
          return true;
        }
      }
      return false;
    }    
  }
  
  class Conductor {
    constructor(nombre, licencia) {
      this.nombre = nombre;
      this.licencia = licencia;
    }
  
    getNombre() {
      return this.nombre;
    }
  
    setNombre(nuevoNombre) {
      this.nombre = nuevoNombre;
    }
  
    getLicencia() {
      return this.licencia;
    }
  
    setLicencia(nuevaLicencia) {
      this.licencia = nuevaLicencia;
    }
  
    mostrarDatosConductor() {
      console.log("Nombre del conductor: " + this.nombre);
      console.log("Número de licencia: " + this.licencia);
    }
  }
  
  function main() {
    // Crear objetos de la clase Autobus
    const autobus = new Autobus(50, "1234AAA", []);
  
    // Crear objetos de la clase Conductor
    const conductor1 = new Conductor("Juan Pérez", "1111XYZ");
    const conductor2 = new Conductor("María Santana", "2222XYZ");
    const conductor3 = new Conductor("Pedro Martínez", "333XYZ");
    const conductor4 = new Conductor("Laura García", "4444XYZ");
    const conductor5 = new Conductor("Miguel Fernández", "5555XYZ");
  
    // Agregar conductores al listado del autobús
    autobus.setListadoConductores([conductor1, conductor2, conductor3, conductor4, conductor5]);
  
    // Mostrar información del autobús
    autobus.mostrarDatosAutobus();
  
    // Pedir cantidad de pasajeros a subir
    const cantidadSubir = parseInt(prompt("¿Cuántos pasajeros quieres subir al autobús?: "));
    autobus.subir(cantidadSubir);

    // Pedir cantidad de pasajeros a bajar
    const cantidadBajar = parseInt(prompt("¿Cuántos pasajeros quieres bajar del autobús?: "));
    autobus.bajar(cantidadBajar);
  
    // Buscar un conductor por licencia
    const licenciaABuscar = prompt("Escribe el número de licencia a buscar: ");
    const encontrado = autobus.buscarConductor(licenciaABuscar);
    console.log("¿Conductor con licencia " + licenciaABuscar +  " encontrado? " + encontrado);
  }
    main();
  