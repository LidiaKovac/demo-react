import { Card, Col, Button } from "react-bootstrap"
export const SingleBook = ({book}) => {
  return (
    <>
      <Col>
        <Card>
          <Card.Img variant="top" src={book.img} />
          <Card.Body>
            <Card.Title>{book.title}</Card.Title>
            <Card.Text>
             {book.price}
            </Card.Text>
            <Button variant="primary">{book.price}</Button>
          </Card.Body>
        </Card>
      </Col>
    </>
  )
}
