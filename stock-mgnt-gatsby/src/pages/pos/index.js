import * as React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, ButtonGroup, Button, Row, Col } from 'react-bootstrap';
import WineCard from '../../components/WineCard';
import { useLocalStorage } from 'react-use';

const dummyPrice = 59

function PosPage() {

    // window.localStorage['coffee'] = 'Latte'

    let [coffeeTitles, setCoffeeTitles] = React.useState([])
    let [subMenu, setSubMenu] = React.useState('reds')
    let [cart, setCart] = useLocalStorage('cart', [])

    function addToCard(coffee) {
        // console.debug(coffee)
        cart.push(coffee)
        console.table(cart)
        setCart([...cart])
    }

    React.useEffect(() => {
        let items = []
        fetch(`https://api.sampleapis.com/wines/${subMenu}`)
            .then(res => res.json())
            .then((wines) => {
                for (let i = 0; i < wines.length; i++) {
                    // console.log(coffees[i].title)
                    items.push(
                        <WineCard
                            key={i}
                            image={wines[i].image}
                            winery={wines[i].winery}
                            wine={wines[i].wine}
                            avgRating={wines[i].rating.average}
                            reviewRating={wines[i].rating.reviews}
                            location={wines[i].location}
                            price={dummyPrice}
                            handleClick={() => { addToCard(wines[i]) }}
                        />
                    )
                }
                setCoffeeTitles(items)
            })
    }, [subMenu])


    return <Container>
        <h1>POS</h1>
        <ButtonGroup aria-label="Basic example">
            <Button variant="secondary" onClick={() => { setSubMenu('reds') }}>Reds</Button>
            <Button variant="secondary" onClick={() => { setSubMenu('whites') }}>Whites</Button>
            <Button variant="secondary" onClick={() => { setSubMenu('sparkling') }}>Sparkling</Button>
            <Button variant="secondary" onClick={() => { setSubMenu('rose') }}>Rose</Button>
            <Button variant="secondary" onClick={() => { setSubMenu('dessert') }}>Dessert</Button>
            <Button variant="secondary" onClick={() => { setSubMenu('port') }}>Port</Button>
        </ButtonGroup>
        <Row>
            <Col>
                <Row>
                    {coffeeTitles}
                </Row>
            </Col>
            <Col sm={3}>
                <h2>Cart</h2>
                {cart.map((item, i) => {
                    return <Row key={i}>
                        <Col>{item.wine}</Col>
                        <Col>{dummyPrice}</Col>
                    </Row>
                })}
                <Row>
                    Total: {cart.length * dummyPrice} Baht
                </Row>
            </Col>
        </Row>
    </Container>
}

export default PosPage