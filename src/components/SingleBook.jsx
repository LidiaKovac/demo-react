import { Card, Col, Button } from "react-bootstrap"
export const SingleBook = (props) => {
  /* props  {
   book: {
    title: "",
    price: ""
   },
   ciao: "pippo"
  }
  */ 
  return (
    <>
      <Col>
        <Card>
          <Card.Img variant="top" src={props.bookProp.img} />
          <Card.Body>
            <Card.Title>{props.bookProp.title}</Card.Title>
            <Card.Text>
             {props.bookProp.price}
            </Card.Text>
            <Button variant="primary">{props.bookProp.price}</Button>
          </Card.Body>
        </Card>
      </Col>
    </>
  )
}
