const Titulo = (props) => {
    return (
        <div>
            <h1> {props.name} </h1>
        </div>        
    )
}
Titulo.propTypes = String

//por si acaso me daba error al colocarlo de esa forma y alli en el error me salia un link en el que si definia por string
//dejaba de darme fastidio porque el name no tenia definicion de props no se si es una mala practica pero las otras 
// soluciones no me funcionaban porque eran para fuction en vez de funcion flecha

export default Titulo