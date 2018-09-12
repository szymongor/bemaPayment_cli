import React from 'react';
import { ListGroup, ListGroupItem } from 'react-bootstrap';

import BillElement from './bill_table_element';

const BillsTable = ({}) => {
  const billsElements = billsData.map(({ id, founder, title, type, amount, status }) => (
    <BillElement id={id} founder={founder} title={title} type={type} amount={amount} status={status}/>
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
