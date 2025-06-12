import React, {useState} from 'react';
export const FinancialsView: React.FC = () => {
  const [filter,setFilter]=useState('high');
  return <div><h2>FINANCIALS - Financials - COGS, ledger, P&L, TTB exci</h2><p>COGS</p></div>
};
export default FinancialsView;
