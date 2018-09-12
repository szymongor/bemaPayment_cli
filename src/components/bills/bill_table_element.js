import React from 'react';
import { ListGroupItem, Grid, Col, Row, ProgressBar } from 'react-bootstrap';

import GlyphiconSwitch from './glyphicon_switch';

const BillElement = ({ id, founder, title, type, amount, status }) => {
  return (
    <ListGroupItem href="#link1" className='bottomPaddingFix'>
      <Grid>
        <Row className="show-grid">
          <Col xs={1} sm={1} md={1} lg={1} className='textCenter'>
            {id}
          </Col>
          <Col xs={3} sm={3} md={3} lg={3}  className='textCenter'>
            <GlyphiconSwitch type={type} />
          </Col>
          <Col xs={3} sm={3} md={3} lg={3}>
            {title}
          </Col>
          <Col xs={4} sm={3} md={3} lg={3}>
            <ProgressBar active now={99} className='textCenter'/>
          </Col>
          <Col xs={1} sm={2} md={2} lg={2} className='textCenter'>
            {status}
          </Col>
        </Row>
      </Grid>
    </ListGroupItem>
  );
};

export default BillElement;
