import { Link } from 'react-router-dom';
import { Carousel, Image, Row, Col } from 'react-bootstrap';
import Loader from './Loader';
import Message from './Message';
import { useGetTopProductsQuery } from '../slices/productsApiSlice';

const ProductCarousel = () => {
  const { data: products, isLoading, error } = useGetTopProductsQuery();

  return isLoading ? (
    <Loader />
  ) : error ? (
    <Message variant='danger'>{error?.data?.message || error.error}</Message>
  ) : (
    <Carousel pause='hover' className='mb-4'>
      {products.map((product) => (
        <Carousel.Item key={product._id}>
          <Row noGutters>
            <Col md={6}>
              <Link to={`/product/${product._id}`}>
                <Image src={product.image} alt={product.name} fluid />
              </Link>
            </Col>
            <Col md={6} className='d-flex align-items-center bg-warning'>
              <div className='w-100 p-4'>
                <h2 className='text-black text-right'>{product.name}</h2>
                <h3 className='text-black text-right'>${product.price}</h3>
                <p className='text-black text-right'>{product.description}</p>
              </div>
            </Col>
          </Row>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default ProductCarousel;