import React from 'react';
import {Glyphicon} from 'react-bootstrap';

import BillsTable from './bills_table';

const GlyphiconSwitch = ({type}) => {
  switch (type) {
    case 'CZYNSZ':
      return <Glyphicon glyph='glyphicon glyphicon-home'/>;
      break;
    case 'PRAD':
    return <Glyphicon glyph='glyphicon glyphicon-flash'/>;

  }

};

export default GlyphiconSwitch;
