// Función para registrar un nuevo usuario
function registrarUsuario(event) {
  event.preventDefault(); // Evita que el formulario recargue la página

  const nombre = document.getElementById("nombre").value;
  const correo = document.getElementById("correo").value;
  const password = document.getElementById("password").value;
  const confirmarPassword = document.getElementById("confirmar-password").value;

  if (password !== confirmarPassword) {
    alert("Las contraseñas no coinciden.");
    return;
  }

  // Cargar el archivo JSON (simulación)
  fetch("users.json")
    .then((response) => response.json())
    .then((data) => {
      // Verificar si el usuario ya existe
      const usuarioExistente = data.find(
        (usuario) => usuario.correo === correo
      );
      if (usuarioExistente) {
        alert("Este correo ya está registrado.");
        return;
      }

      // Agregar el nuevo usuario al arreglo
      const nuevoUsuario = { nombre, correo, password };
      data.push(nuevoUsuario);

      // Simulación de guardar el archivo JSON (no persistirá localmente)
      console.log("Usuarios actualizados:", data);
      alert("Registro exitoso. Por favor, inicia sesión.");
    })
    .catch((error) => {
      console.error("Error al leer el archivo JSON:", error);
    });
}

// Función para iniciar sesión
function iniciarSesion(event) {
  event.preventDefault();

  const correo = document.getElementById("correo").value;
  const password = document.getElementById("password").value;

  // Cargar el archivo JSON (simulación)
  fetch("users.json")
    .then((response) => response.json())
    .then((data) => {
      const usuario = data.find(
        (usuario) => usuario.correo === correo && usuario.password === password
      );
      if (usuario) {
        alert(`Bienvenido, ${usuario.nombre}`);
      } else {
        alert("Correo o contraseña incorrectos.");
      }
    })
    .catch((error) => {
      console.error("Error al leer el archivo JSON:", error);
    });
}
