import React, { ReactNode } from 'react';

interface ReuseDetailsProps {
  title: string;
  children: ReactNode;
}

const ReuseDetails: React.FC<ReuseDetailsProps> = ({ title, children }) => {
  return (
    <div className='details-component'>
      <span className='details-title'>{title}</span>
      <hr />
      <div style={{marginTop:"-10px"}} className='d-flex flex-column gap-3'>
      {children}
      </div>
    </div>
  );
}

export default ReuseDetails;
