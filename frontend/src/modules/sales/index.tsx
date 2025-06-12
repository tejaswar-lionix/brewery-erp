import React, {useState} from 'react';
export const SalesView: React.FC = () => {
  const [filter,setFilter]=useState('high');
  return <div><h2>SALES - Sales - orders, invoices, taproom POS, k</h2><p>orders</p></div>
};
export default SalesView;
