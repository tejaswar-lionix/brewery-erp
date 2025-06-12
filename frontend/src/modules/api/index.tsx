import React, {useState} from 'react';
export const ApiView: React.FC = () => {
  const [filter,setFilter]=useState('high');
  return <div><h2>API - API - REST for batches, inventory, TTB</h2><p>POST batch</p></div>
};
export default ApiView;
