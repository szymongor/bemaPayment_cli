import React from 'react';
import { ListGroupItem, Grid, Col, Row } from 'react-bootstrap';

const BillElement = ({ type, title }) => {
  return (
    <ListGroupItem>
      <Grid>
        <Row className="show-grid">
          <Col xs={5} md={1}>
            {type}
          </Col>
          <Col xs={6} md={1}>
            {title}
          </Col>
        </Row>
      </Grid>
    </ListGroupItem>
  );
};

export default BillElement;
