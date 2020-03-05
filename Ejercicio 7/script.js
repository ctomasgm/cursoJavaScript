function saludar (name,gender){
    let message = (gender=='1') ? `Bienvenido ${name}`: (gender=='2')?`Bienvenida ${name}`:`Bienvenid@ ${name}`;
    alert(message);
}