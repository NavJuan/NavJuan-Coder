//Primera entrega del proyecto final
// Navarro, Juan

// toDoList

//Array de tareas
let tareas = []

//Variable para el menu de opciones
let option
let exit = false 

//Array para usuarios
let usuarios = []

//Funcion para agregar una tarea

function addTask(){

    let tarea = prompt("Ingrese la tarea")
    let tareaObj = {
        nombre: tarea,
        completada: false
    }
    tareas.push(tareaObj)
    console.log("Tarea agregada")

}

//Funcion para borrar una tarea

function deleteTask(){

    let tarea = prompt("Ingrese la tarea a borrar")
    let index = tareas.findIndex(tareaObj => tareaObj.nombre == tarea)
    if(index != -1){
        tareas.splice(index, 1)
        console.log("Tarea borrada")
    }
    else{
        console.log("Tarea no encontrada")
    }


}

//Funcion para marcar una tarea como completada

function markTask(){

    let tarea = prompt("Ingrese la tarea a marcar como completada")
    let index = tareas.findIndex(tareaObj => tareaObj.nombre == tarea)
    if(index != -1){
        tareas[index].completada = true
        console.log("Tarea marcada como completada")
    }
    else{
        console.log("Tarea no encontrada")
    }


}

//Funcion para listar tareas

function listTasks(){

    console.log("Tareas:")
    tareas.forEach(tareaObj => {
        if(tareaObj.completada){
            console.log(tareaObj.nombre + " - Completada")
        }
        else{
            console.log(tareaObj.nombre + " - Incompleta")
        }
    })

}




//Funcion menu
function menuMaster() {
    do{

  
    console.log("Menu")
    console.log("1. Agregar una tarea")
    console.log("2. Borrar una tarea")
    console.log("3. Marcar una tarea como completada")
    console.log("4. Listar tareas")
    console.log("5. Salir")
    console.log("6. Cambiar de usuario")
    
    option = parseInt(prompt("Seleccione una opcion: "))

    switch(option){

        case 1:
            console.log("Seleccionaste la opcion 1")
            addTask()
            prompt("Presione Enter para continuar...")
            break

        case 2:
            console.log("Seleccionaste la opcion 2")
            listTasks()
            deleteTask()
            prompt("Presione Enter para continuar...")
            break

        case 3:
            console.log("Seleccionaste la opcion 3")
            listTasks()
            markTask()
            prompt("Presione Enter para continuar...")
            break
        
        case 4:
            console.log("Seleccionaste la opcion 4")
            listTasks()
            prompt("Presione Enter para continuar...")
            break
        
        case 5:
            console.log("Seleccionaste la opcion 5")
            exit=true
            break

        case 6:
            console.log("Seleccionaste la opcion 6")
            exit=false



            break
        
        default:
            console.log("Error")
            prompt("Presione Enter para continuar...")
            break
    }


    }while (option != 5 && option != 6)
    console.log("Gracias por usar la aplicacion")
}

function menuSlave(){


    do{

  
        console.log("Menu")

        console.log("1. Marcar una tarea como completada")
        console.log("2. Listar tareas")
        console.log("3. Salir")
        console.log("4. Cambiar de usuario")

        option = parseInt(prompt("Seleccione una opcion: "))
    
        switch(option){
    
            case 1:
                console.log("Seleccionaste la opcion 3")
                listTasks()
                markTask()
                prompt("Presione Enter para continuar...")
                break
            
            case 2:
                console.log("Seleccionaste la opcion 4")
                listTasks()
                prompt("Presione Enter para continuar...")
                break
            
            case 3:
                console.log("Seleccionaste la opcion 5")
                exit=true
                break

            case 4:
                console.log("Seleccionaste la opcion 4")
                exit=false
            
                break
            
            default:
                console.log("Error")
                prompt("Presione Enter para continuar...")
                break
        }
    
    
        }while (option != 3 && option != 4)
        console.log("Gracias por usar la aplicacion")

}


//Funcion para seleccionar el menu

function seleccionMenu(){

    do{
    let usuario = prompt("Ingrese su nombre de usuario")
    let index = usuarios.findIndex(usuarioObj => usuarioObj.nombre == usuario)

    if(index == -1){
        console.log("Usuario no encontrado")
        crearUsuario()
    }
    else{
        console.log("Usuario encontrado")
    }

    if(usuario == "admin"){
        menuMaster()
    }
    else{
        menuSlave()
    }
  }while(exit==false)
}


//Funcion para crear un usuario

function crearUsuario(){
    
    let usuario = prompt("Ingrese el nombre de usuario")
    let usuarioObj = {
        nombre: usuario
    }
    usuarios.push(usuarioObj)
    console.log("Usuario creado")

}

//Llaamado a la funcion seleccionMenu

seleccionMenu()

//Fin del programa