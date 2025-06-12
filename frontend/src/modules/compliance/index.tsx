import React, {useState} from 'react';
export const ComplianceView: React.FC = () => {
  const [filter,setFilter]=useState('high');
  return <div><h2>COMPLIANCE - Compliance - TTB, FDA, COLA, reporting</h2><p>TTB</p></div>
};
export default ComplianceView;
