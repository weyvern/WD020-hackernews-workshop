import Row from 'react-bootstrap/Row';
import Spinner from 'react-bootstrap/Spinner';

const Loading = ({ animation, variant, size }) => {
  return (
    <Row className='justify-content-around'>
      <Spinner animation={animation} variant={variant} size={size} />
    </Row>
  );
};

export default Loading;
