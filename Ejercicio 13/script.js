const hacerTarea = (tarea,callback) => {
  setTimeout(()=>{
    console.log(`Haciendo tarea de ${tarea}`)
    callback()
  },1000);
}

hacerTarea("Derecho Informatico",()=>{
  console.log("Salir de antro");
})