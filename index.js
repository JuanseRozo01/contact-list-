let listaDeContactos = [
"yuneyis pacheco", 
"juan estaban calderon", 
"ana mercado", 
"marcela ramirez",
"hernan francisco"];

const anadirContacto = (newcontact) => {
    listaDeContactos.push(newcontact);
    console.log("contacto agregado ", newcontact) 
}
anadirContacto("alejandro villegas")

const eliminarContacto = (deleteContact) =>{
  listaDeContactos.splice(deleteContact);
  console.log("contacto borrado ", deleteContact);
}
eliminarContacto(5)

for (let i = 0; i < listaDeContactos.length; i++){
    console.log(listaDeContactos[i]);
}