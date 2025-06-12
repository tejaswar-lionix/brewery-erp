import React, {useState} from 'react';
export const SupplierView: React.FC = () => {
  const [filter,setFilter]=useState('high');
  return <div><h2>SUPPLIER - Supplier - vendors, PO,Receiving, QC</h2><p>vendors</p></div>
};
export default SupplierView;
