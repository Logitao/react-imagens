import React, { Component } from 'react';
import { Card, CardTitle, Col } from 'react-materialize';
import PropTypes from 'prop-types';

export default class ImageResult extends Component {
  static propTypes = {
    image: PropTypes.object.isRequired
  };

  render() {
    const { image } = this.props;
    return (
      <div>
        <Col s={12} m={6} l={3}>
          <Card
            className="small"
            header={<CardTitle image={image.webformatURL} />}
            actions={[
              <a href={image.webformatURL} target="_blank">
                Ver Imagem
              </a>
            ]}
          >
            <p>{image.tags}</p>
          </Card>
        </Col>
      </div>
    );
  }
}
