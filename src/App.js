import React, { Component } from 'react';
import {
  Button,
  Icon,
  Col,
  Row,
  NavItem,
  Navbar,
  Input,
  Card,
  CardTitle
} from 'react-materialize';
import ImageResult from './components/ImageResult';
import axios from 'axios';

const navStyle = {
  paddingLeft: '20px'
};

const containerStyle = {
  margin: '50px'
};

export default class App extends Component {
  state = {
    search: '',
    number: 5,
    apikey: '9748915-3639dd3d4cd778ae2f47d8f94',
    url: 'https://pixabay.com/api/',
    images: []
  };

  onChange = e =>
    this.setState(
      {
        [e.target.name]: e.target.value,
        images: []
      },
      () => {
        if (this.state.search.length > 2) {
          axios
            .get(
              `${this.state.url}/?key=${this.state.apikey}&q=${
                this.state.search
              }&image_type=photo&per_page=${
                this.state.number
              }&safesearch=true&page=1`
            )
            .then(response =>
              this.setState({
                images: response.data.hits
              })
            );
        }
      }
    );

  render() {
    return (
      <div>
        <Navbar
          brand="Procure imagens :z"
          right
          style={navStyle}
          className="light-blue accent-3"
        >
          <NavItem>Feito por</NavItem>
          <NavItem>Logitão >:]</NavItem>
        </Navbar>
        <div style={containerStyle}>
          <Row>
            <Input
              name="search"
              s={12}
              m={6}
              label="Procurar..."
              icon="search"
              onChange={this.onChange}
            />
            <Input
              type="select"
              name="number"
              s={12}
              m={6}
              label="Nº Imagens..."
              onChange={this.onChange}
              defaultValue={5}
            >
              <option value={5}>5</option>
              <option value={10}>10</option>
              <option value={20}>20</option>
              <option value={30}>30</option>
              <option value={40}>40</option>
              <option value={50}>50</option>
            </Input>
          </Row>
          <br />
          <div style={containerStyle}>
            <h1>Resultados</h1>
            <hr />
            <Row>
              {this.state.images.map((image, index) => (
                <ImageResult key={index} image={image} />
              ))}
            </Row>
          </div>
        </div>
      </div>
    );
  }
}
