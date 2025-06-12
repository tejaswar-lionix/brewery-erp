import React, {useState} from 'react';
export const QualityView: React.FC = () => {
  const [filter,setFilter]=useState('high');
  return <div><h2>QUALITY - Quality - QC, lab, tasting, sensory</h2><p>QC</p></div>
};
export default QualityView;
