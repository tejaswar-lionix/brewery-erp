import React, {useState} from 'react';
export const WarehouseView: React.FC = () => {
  const [filter,setFilter]=useState('high');
  return <div><h2>WAREHOUSE - Warehouse - cold storage, kegs, pallets,</h2><p>cold storage</p></div>
};
export default WarehouseView;
