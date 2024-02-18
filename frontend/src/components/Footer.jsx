import {Container,Row,Col} from 'react-bootstrap';


const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
        <Col className='text-center py-3'>
            <p>ShopCart &copy; {currentYear}</p>
        </Col>
    </footer>
  )
}

export default Footer
