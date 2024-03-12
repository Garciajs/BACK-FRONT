
import Layout from "../components/Layout";
import { useForm } from "react-hook-form";
const Servicios = () => {
    
    const {register, handleSubmit, formState:{errors}} = useForm();


    const enviarDatos= handleSubmit((data) =>{
        
        console.log(data);

        //                   valida condicional telefono
        // if(isNaN(data.telefono)){

        //     return console.log("no puedes ingresar letras") 
        // }

        // console.log("sigue ejecutando")



                    
    //     var emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    
    //     if(emailRegex.test(data.telefono) ){
    //        return 

    //     }


    //     console.log(data.email)
    //    if(isNaN(data.telefono)){
    //  console.log("el telefono no puede tener letras");
        
    //   }
    })

    return (
    
    <div>
        <Layout/>
        <body id='body_color'>

<body className="body-serv">
    <div className="container-serv">
        <div className="title-form">Pide tu Servicio</div>
        <hr />
        <form onSubmit={enviarDatos} action="/" id="formulario"> 
    
            <div className="form-group">
            {errors.nom_cliente && (
            <p  id="p-cliente" >El nombre no puede estar vacio</p>
        ) }
                <span>Nombre o razón social</span>
                <input className="formulario__input" type="text" placeholder="Ingrese su nombre" {...register("nom_cliente",{required:true})}/>
            </div>

            <div className="form-group">
            {errors.email && (
            <p  id="email" >El email no puede estar vacio</p>
        ) }
                <span>Dirección de correo</span>
                <input id="formulario__input" type="email" placeholder="Ingrese su correo" {...register("email",{required:true})} />
            </div>

            <div className="form-group">
            {errors.telefono && (
            <p  id="telefono" >El telefono no puede estar vacio</p>
        ) }
                <span>Teléfono</span>
                <input id="formulario__input"  type="number" placeholder="Ingrese su número de teléfono" {...register("telefono",{required:true})} />
            </div>
            
            <div className="form-group">
            {errors.tipo_servicio && (
            <p  id="tipo_servicio" >El telefono no puede estar vacio</p>
        ) }
                <span>Tipo de Servicio</span>
                            <select className="form-select" id="floatingSelect" aria-label="Floating label select example" placeholder="tipo de servicio" {...register("tipo_servicio",{required:true})}>
                                    <option selected>Motorizado inmediato</option>
                                    <option value="1">Motorizado por horas</option>
                                    <option value="2">Motorizado permanente</option>
                                    <option value="3">Carga Inmediata</option>
                                    <option value="4">Carga Por horas</option>
                                    <option value="5">Carga Permanente</option>
                                    <option value="6">Pasajeros Inmediato</option>
                                    <option value="7">Pasajeros por horas</option>
                                    <option value="8">Pasajeros Permanente</option>
                                    
                                </select>
            </div>

            <div className="form-group">
            {errors.dir_recogida && (
            <p  id="dir_recogida" >La dirección de recogida no puede estar vacio</p>
        ) }
                <span>Lugar de Recogida</span>
                <input id="formulario__input" type="text" placeholder="lugar de recogida" {...register("dir_recogida",{required:true})}/>
            </div>

            <div className="form-group">
            {errors.dir_entrega && (
            <p  id="dir_entrega" >La dirección de entrega no puede estar vacio</p>
        ) }
                <span>Lugar de Entrega</span>
                <input id="formulario__input" type="text" placeholder="lugar de entrega" {...register("dir_entrega",{required:true})} />
            </div>
            
            <div className="form-group">
                <span>Observaciones</span>
            <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style={{"height": "100px"}} {...register("comentario",{required:true})}></textarea>
                            </div>
            
                <button className="button-form" type="submit"  >Enviar</button>
            
        </form>
    </div>

    <formularioServicio/>
</body>




</body>

    </div>
    )
}

export default Servicios
