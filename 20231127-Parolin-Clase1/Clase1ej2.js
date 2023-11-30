let alumnos = [
    {
      nombre: "Mariano Damian",
      apellido: "Hernandez",
      notas: [8, 7, 9, 10, 6],
    },
    {
      nombre: "Ramiro",
      apellido: "Diaz",
      notas: [1, 3, 8, 2, 1],
    },
    {
      nombre: "Ana",
      apellido: "Armella",
      notas: [5, 7, 9, 4, 2],
    },
    {
      nombre: "Romina",
      apellido: "Almeda",
      notas: [10, 6, 7, 5, 9],
    },
    {
      nombre: "Denis",
      apellido: "Tolaba",
      notas: [10, 10, 9, 9, 10],
    },
    {
      nombre: "Hugo",
      apellido: "Castellano",
      notas: [2, 3, 3, 6, 1],
    },
    {
      nombre: "Analia Daiana",
      apellido: "Fonseca",
      notas: [4, 3, 4, 5, 2],
    },
    {
      nombre: "Francisco Daniel",
      apellido: "Samir",
      notas: [5, 5, 6, 4, 2],
    },
  ];

  function promedio(alumnos, estado) {
    let resultado = [];
    for (let i = 0; i < alumnos.length; i++) {
      let alumno = alumnos[i];
      let sumaNotas = 0;
      for (let j = 0; j < alumno.notas.length; j++) {
        sumaNotas += alumno.notas[j];
      }
      let promedio = sumaNotas / alumno.notas.length;
      let estadoAlumno = promedio >= 7 ? "aprobado" : "desaprobado";
      if (estadoAlumno === estado) {
        resultado.push({
          nombreCompleto: alumno.nombre + " " + alumno.apellido,
          promedio: promedio,
          estado: estadoAlumno,
        });
      }
    }
    return resultado;
  }

  promedio(alumnos, "aprobado")
  