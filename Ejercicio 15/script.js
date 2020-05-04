const pagarComida = new Promise((resolve, reject) => {
  setTimeout(() => {
    Promise.race([paypal,tarjeta]).then(proveedorPago =>{
      resolve(resolve({done:true, proveedorPago, clienteId:45613}))
    })
  },3000)
})

const paypal = new Promise((resolve,reject) => {
  setTimeout(() => {
    resolve("Paypal")
  },3000)
})

const tarjeta = new Promise((resolve,reject) => {
  setTimeout(() => {
    resolve("Tarjeta")
  },5000)
})


const enviarComida = new Promise((resolve,reject) => {
  setTimeout(()=>{
    //reject("Problema con el repartidor")
    resolve({repartidorId:4561,distancia:10})
  },10000)
})

const pedirComida = () => {
  Promise.all([pagarComida,enviarComida])
    .then(orden => console.log(orden))
    .catch(error => console.error(error))
    .finally(() => console.log("Proceso finalizado"))
}

pedirComida()