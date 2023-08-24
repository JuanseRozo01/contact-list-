let listaDeContactos = [
{ id: 2,
  nombres: "yuneyis", 
  apellidos:"pacheco",
  telefono:78749598,
  ubicacion: "cali"

},
{  id:6,
   nombres: "juan estaban",
   apellidos:"calderon",
   telefono:74848474,  
   ubicacion:"bogota"
},
{  id:5,
   nombres:"ana elvira",
   apellidos:"mercado",
   telefono:656383834,
   ubicacion:"medellin"
},
{   id:8,
    nombres: "hernan francisco", 
    apellidos:"uhia",
    telefono: 92337474,
    ubicacion: "canada"
}

];

const anadirContacto = (id, nombres, apellidos, telefono, ubicacion) => {
    let newconstacts = {
         id: id,
        nombres: nombres,
        apellidos: apellidos,
        telefono: telefono,
        ubicaciones: ubicacion
            
    };
    console.log(nombres, apellidos, ubicacion)
    listaDeContactos.push(newconstacts);
    console.log("contactos agregados ", newconstacts ) 
    
}
anadirContacto(10, "alejandro", "villegas", 304567927,"valledupar", "aguachica" )
anadirContacto(19, "roxana", "nieves", 310987342,"choco", "cauca" )
anadirContacto(70, "juan sebastian", "corzo", 56392809,"alemania", "munich" )
anadirContacto(8, "marcela", "sierra", 33225778220,"santa marta", "el peñon" )

const eliminarContacto = (deleteContact) =>{
  listaDeContactos.splice(deleteContact);
  console.log("contacto borrado ", deleteContact);
}
eliminarContacto(7)

// bonus = función que permite actualizar un contacto:

const actualizarContactoPorId = (id, newDatos) => {
    const indice = listaDeContactos.findIndex(contacto => contacto.id === id);
    if(indice !== -1){
        listaDeContactos[indice] = {...listaDeContactos[indice], ...newDatos};
        console.log("actualizacion de contacto", listaDeContactos[indice]);
    }else{
        console.log("este contacto", id, "no existe");
    }

}

const actualizarContactos = 2;
const newDatos =  {
         id: 97,
        nombres: "ana milena",
        apellidos: "cuadrado" ,
        telefono: 3567849764 ,
        ubicaciones: {
            ciudad: "tolima",
            direccion: "caldas"
        }
            
    };
    actualizarContactoPorId(actualizarContactos, newDatos);


for (let i = 0; i < listaDeContactos.length; i++){
    console.log(listaDeContactos[i]);
}
