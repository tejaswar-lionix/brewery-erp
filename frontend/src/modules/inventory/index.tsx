import React, {useState} from 'react';
export const InventoryView: React.FC = () => {
  const [filter,setFilter]=useState('high');
  return <div><h2>INVENTORY - Inventory - grains, hops, yeast, adjunct</h2><p>grains</p></div>
};
export default InventoryView;
