
import './App.css';
import { Container,Row,Col,Button ,Alert,Breadcrumb,Card, CardTitle, CardImg, CardBody, CardText,Form, FormLabel, FormGroup, FormControl, FormText} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Container>
        <Card>
          
          <CardImg src='https://cdn.dribbble.com/userupload/11605783/file/original-2b933621e5bcdc4184b8090d10500d31.png?resize=700x400&vertical=center'></CardImg>
          <CardBody>
             <CardTitle>seeek</CardTitle>
             <CardText>SOUL SEARCHING.....</CardText>
             <Button variant='primary'>find</Button>
          </CardBody>
        </Card>
        <Breadcrumb>
         <Breadcrumb.Item>test 1</Breadcrumb.Item>
         <Breadcrumb.Item>test 2</Breadcrumb.Item>
         <Breadcrumb.Item>test 3</Breadcrumb.Item>
         <Breadcrumb.Item active>test 4</Breadcrumb.Item>
        </Breadcrumb>
        
        <Form>
        <Row>
          <Col>
          <FormGroup controlId="form email">
            <FormControl type='text' placeholder='example@email.com'></FormControl>
            <FormLabel>enter email</FormLabel>
            <FormText></FormText>
          </FormGroup>
          </Col>
          
          <Col>
          <FormGroup controlId="form name">
            <FormControl type='text' placeholder='username'></FormControl>
            <FormLabel>username</FormLabel>
            <FormText></FormText>
          </FormGroup>
          </Col>
          </Row>
         </Form>
        
         
        <Alert variant='success'>form submitted</Alert>
        <Button>click me</Button>
        </Container>
      </header>
    </div>
   

  );
}

export default App;
