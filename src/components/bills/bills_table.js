import React from 'react';
import { ListGroup, ListGroupItem } from 'react-bootstrap';

import BillElement from './bill_table_element';

const BillsTable = ({}) => {
  const billsElements = billsData.map(({ id, type, title }) => (
    <BillElement key={id} type={type} title={title} />
  ));
  return <ListGroup>{billsElements}</ListGroup>;
};

export default BillsTable;

const billsData = [
  {
    id: 1,
    founder: 'Hipex',
    title: 'Czynsz 07.2018',
    type: 'CZYNSZ',
    amount: 200,
    status: 'OPEN'
  },
  {
    id: 2,
    founder: 'Darex',
    title: 'Prąd 07.2018',
    type: 'PRAD',
    amount: 140,
    status: 'OPEN'
  }
];
