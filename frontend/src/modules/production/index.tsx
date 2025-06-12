import React, {useState} from 'react';
export const ProductionView: React.FC = () => {
  const [filter,setFilter]=useState('high');
  return <div><h2>PRODUCTION - Production - mashing, boiling, fermentat</h2><p>mashing</p></div>
};
export default ProductionView;
