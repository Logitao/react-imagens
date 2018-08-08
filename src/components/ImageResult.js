import { Card, CardTitle, Col } from 'react-materialize';
import React from 'react';

export const ImageResult = props => (
  <div>
    <Col s={12} m={6} l={3}>
      <Card
        className="small"
        header={<CardTitle image={props.image.webformatURL} />}
        actions={[
          <a href={props.image.webformatURL} target="_blank">
            Ver Imagem
          </a>
        ]}
      >
        <p>{props.image.tags}</p>
      </Card>
    </Col>
  </div>
);
