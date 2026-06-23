class AdministradorUsuarios {
  constructor() {
    this.usuarios = [];
    this.inicializar();
  }

  async inicializar() {
    try {
      console.log("Iniciando carga de datos... Espera 2 segundos.");

      await new Promise((resolve) => setTimeout(resolve, 2000));

      const respuesta = await fetch("https://typicode.com");

      if (!respuesta.ok) {
        throw new Error("El servidor no respondió correctamente");
      }

      this.usuarios = await respuesta.json();
      console.log("¡Datos cargados con éxito desde el servidor remoto!");
    } catch (error) {
      console.error(
        "No se pudo conectar a la API (" +
          error.message +
          "). Cargando datos de respaldo locales...",
      );

      this.usuarios = [
        {
          id: 1,
          name: "Leanne Graham",
          email: "Sincere@april.biz",
          address: { city: "Gwenborough" },
        },
        {
          id: 2,
          name: "Ervin Howell",
          email: "Shanna@melissa.tv",
          address: { city: "Wisokyburgh" },
        },
        {
          id: 3,
          name: "Clementine Bauch",
          email: "Nathan@yesenia.net",
          address: { city: "McKenziehaven" },
        },
      ];
      console.log("¡Datos de respaldo cargados localmente con éxito!");
    }
  }

  listarTodos() {
    if (this.usuarios.length === 0) {
      console.warn(
        "Los datos aún se están cargando. Por favor, espera un momento.",
      );
      return;
    }

    console.clear();
    console.log("--- LISTA DE TODOS LOS USUARIOS ---");

    this.usuarios.forEach((usuario) => {
      console.log(`Nombre: ${usuario.name}`);
    });
  }

  buscarPorId() {
    if (this.usuarios.length === 0) {
      console.warn(
        "Los datos aún se están cargando. Por favor, espera un momento.",
      );
      return;
    }

    const idBuscado = prompt(
      "Escribe el ID del usuario que deseas buscar (ejemplo: 1, 2 o 3):",
    );

    const usuarioEncontrado = this.usuarios.find(
      (user) => user.id === Number(idBuscado),
    );

    console.clear();

    if (usuarioEncontrado) {
      console.log("--- USUARIO ENCONTRADO ---");
      console.log(`Nombre: ${usuarioEncontrado.name}`);
      console.log(`Email:  ${usuarioEncontrado.email}`);
      console.log(`Ciudad: ${usuarioEncontrado.address.city}`);
    } else {
      console.log(`No se encontró ningún usuario con el ID: ${idBuscado}`);
    }
  }
}

const admin = new AdministradorUsuarios();
