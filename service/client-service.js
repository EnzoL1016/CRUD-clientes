//Fetch API
const listaClientes = async () => (await fetch('http://localhost:3000/perfil')).json();

const crearCliente = (nombre, email) =>{
    return fetch('http://localhost:3000/perfil',{
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify({nombre,email,id: uuid.v4()})
    });
};

const eliminarCliente = (id) =>{
    return fetch(`http://localhost:3000/perfil/${id}`,{
        method:'DELETE',
    });
};

const detalleCliente = async (id) =>{
    return await (await fetch(`http://localhost:3000/perfil/${id}`)).json();    
};

const actualizarCliente = async (nombre,email,id) =>{
    try{
        return await fetch(`http://localhost:3000/perfil/${id}`,{
            method:'PUT',
            headers: {
            'Content-Type': 'application/json'
            },
            body:JSON.stringify({nombre,email}),  
        })
    }catch(error){
        window.location.href = '/screens/error.html';
    }
}

export const clientServices = {
    listaClientes,
    crearCliente,
    eliminarCliente,
    detalleCliente,
    actualizarCliente,
};




