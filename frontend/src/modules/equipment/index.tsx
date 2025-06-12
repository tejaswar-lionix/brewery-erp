import React, {useState} from 'react';
export const EquipmentView: React.FC = () => {
  const [filter,setFilter]=useState('high');
  return <div><h2>EQUIPMENT - Equipment - tanks, CIP, maintenance, cal</h2><p>tanks</p></div>
};
export default EquipmentView;
