import React from 'react';
import { Card, Container, CardGroup, Button } from 'react-bootstrap';

import pic1 from './stockPhotos/brainstorm.jpg';
import pic2 from './stockPhotos/lightbulb.jpg';
import pic3 from './stockPhotos/working.jpg';

export default function Home() {


    return (
        <>
            <div className='container text-center'>
                <header className='jumbotron'>
                    <h3>Welcome to the Home page</h3>
                </header>
            </div>

            <Container as='div' className='home text-center'>
                <CardGroup>
                    <Card className="card">
                        <Card.Header>
                            Title1
                        </Card.Header>
                        <Card.Img className='featured' variant='top' src={pic1} />
                        <Card.Body>
                            <Card.Text>
                                Text<br />More text
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <Button href='/'>Link</Button>
                        </Card.Footer>
                    </Card>
                    <Card className="card">
                        <Card.Header>
                            Title2
                        </Card.Header>
                        <Card.Img className='featured' variant='top' src={pic2} />
                        <Card.Body>
                            <Card.Text>
                                Text<br />More text
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <Button href='/'>Link</Button>
                        </Card.Footer>
                    </Card>
                    <Card className="card">
                        <Card.Header>
                            Text3
                        </Card.Header>
                        <Card.Img className='featured' variant='top' src={pic3} />
                        <Card.Body>
                            <Card.Text>
                                Text<br />More text
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <Button href='/'>Link</Button>
                        </Card.Footer>
                    </Card>
                </CardGroup>
            </Container>

            <Container as='div' className='home text-center mt-5'>
                <CardGroup>
                    <Card className="card">
                        <Card.Header>
                            Title1
                        </Card.Header>
                        <Card.Img className='featured' variant='top' src={pic1} />
                        <Card.Body>
                            <Card.Text>
                                Text<br />More text
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <Button href='/'>Link</Button>
                        </Card.Footer>
                    </Card>
                    <Card className="card">
                        <Card.Header>
                            Title2
                        </Card.Header>
                        <Card.Img className='featured' variant='top' src={pic2} />
                        <Card.Body>
                            <Card.Text>
                                Text<br />More text
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <Button href='/'>Link</Button>
                        </Card.Footer>
                    </Card>
                    <Card className="card">
                        <Card.Header>
                            Text3
                        </Card.Header>
                        <Card.Img className='featured' variant='top' src={pic3} />
                        <Card.Body>
                            <Card.Text>
                                Text<br />More text
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <Button href='/'>Link</Button>
                        </Card.Footer>
                    </Card>
                </CardGroup>
            </Container>
        </>
    )
}

