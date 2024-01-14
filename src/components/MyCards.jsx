import Card from 'react-bootstrap/Card';
import Perro1 from './Tags';
import 'bootstrap/dist/css/bootstrap.min.css';

const Perritos = ({Nombre, Img, Descripcion, raza}) => {
    return <>
    <div className='posicion'>
    <Card className='tarjeta'>
      <Card.Img className="ImgPerritos" variant="top"  src={Img} />
      <Card.Body>
        <Card.Title>{Nombre}</Card.Title>
        <Card.Text className='texto'>
        {Descripcion}
        </Card.Text>
        <Perro1 color="success" raza={raza} />
      </Card.Body>
    </Card>
    </div>
    
    </>
    }
    Perritos.propTypes = String
    

    export default Perritos