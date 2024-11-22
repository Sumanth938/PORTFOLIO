import React from 'react';
import PropTypes from 'prop-types';

interface FlexProps {
  direction?: 'row' | 'column';
  justify?: 'start' | 'end' | 'center' | 'between' | 'around';
  align?: 'start' | 'end' | 'center' | 'baseline' | 'stretch';
  children?: React.ReactNode;
  className?: string;
}

const Flex: React.FC<FlexProps> = ({
  direction = 'row',
  justify = 'start',
  align = 'center',
  children,
  className = '',
  ...props
}) => {
  // Build class names based on props
  const directionClass = direction === 'row' ? 'flex-row' : 'flex-column';
  const justifyClass = `justify-content-${justify}`;
  const alignClass = `align-items-${align}`;
  
  return (
    <div className={`d-flex ${directionClass} ${justifyClass} ${alignClass} ${className}`} {...props}>
      {children}
    </div>
  );
};

// Define prop types for the component
Flex.propTypes = {
  direction: PropTypes.oneOf(['row', 'column']),
  justify: PropTypes.oneOf(['start', 'end', 'center', 'between', 'around']),
  align: PropTypes.oneOf(['start', 'end', 'center', 'baseline', 'stretch']),
  children: PropTypes.node,
  className: PropTypes.string
};

export default Flex;
