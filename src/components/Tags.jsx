import Badge from 'react-bootstrap/Badge';
import Stack from 'react-bootstrap/Stack';

const Perro1 = ({ color, raza }) => {
  return (
    <>
      <Stack direction="horizontal" gap={2}>
        <Badge className='Nombre' pill bg={color}>
          {raza}
        </Badge>
      </Stack>
    </>
  );
};
Perro1.propTypes = String
export default Perro1;