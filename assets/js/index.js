console.log("Entro index.js");

let mascota = {
    nombre: "Ramon",
    color: "Marron",
    raza: "Labrador",
    edad: 4,
    peso: 30,
    vacunas: ["Rabia", "Parvovirus", "Colcha"],
    fechas: "07/10/2023",
};

console.log(mascota);
console.log(mascota.nombre);
console.log(mascota.color);
console.log(mascota.raza);
console.log(mascota.peso);
console.log(mascota.edad);
console.log(mascota.vacunas[0]);
console.log(mascota.vacunas);

let colors = [
    { name: "Red", code: "#ff0000" },
    { name: "Green", code: "#00ff00" },
    { name: "Blue", code: "#0000ff" },
    { name: "Yellow", code: "#ffff00" },
    { name: "Purple", code: "#800080" },
];

colors[1].spanish ="verde"
console.log(colors[1].spanish);
console.log(colors);

let employeesWithSalary = [
    {
        name: "Jesus Cardenas",
        age: 32,
        position: "Manager",
        salary: 500
    },
    {
        name: "Manuel Martinez",
        age: 27,
        position: "Developer",
        salary: 300
    },
    {
        name: "Carlos Perez",
        age: 27,
        position: "Developer",
        salary: 300
    },
    {
        name: "Arturo Lopez",
        age: 27,
        position: "Developer",
        salary: 300
    },
    {
        name: "Juan Hernandez",
        age: 27,
        position: "Developer",
        salary: 300
    },
    {
        name: "Bob Johnson",
        age: 35,
        position: "Designer",
        salary: 300
    },
    {
        name: "Emily Davis",
        age: 29,
        position: "QA Engineer",
        salary: 300
    },
    {
        name: "William Brown",
        age: 31,
        position: "Product Manager",
        salary: 300
    }
];

function filtrarTrabajo (employe){
    let arregloFiltrado2 = employe.filter(employe =>{
        return employe.position == "Developer";
    });
    return arregloFiltrado2;
}
console.log (filtrarTrabajo(employeesWithSalary))





