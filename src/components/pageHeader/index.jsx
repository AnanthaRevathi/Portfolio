import React from 'react';
import './styles.scss'; // Ensure this path is correct

const PageHeader = (props) => {
  const { headerText } = props;
  return (
    <div className='wrapper'>
      <h2>{headerText}</h2>
    </div>
  );
};

export default PageHeader;
