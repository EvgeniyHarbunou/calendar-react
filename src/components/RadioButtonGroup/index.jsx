import React from 'react';
import PropTypes from 'prop-types';
import RadioButton from '../RadioButton';

const RadioButtonGroup = ({  values,  defaultChecked, ...rest }) => {
  return (
    <div>
 
      <div>
        {values.map(item => {
          return (
            <RadioButton
              key={item.value}
              {...item}
              {...rest}
              defaultChecked={defaultChecked ? defaultChecked === item.value : ''}
            />
          );
        })}
      </div>
    </div>
  );
};
RadioButtonGroup.defaultProps = {
  defaultChecked: '',
};

RadioButtonGroup.propTypes = {
  values: PropTypes.array.isRequired,
  defaultChecked: PropTypes.string,
};

export default RadioButtonGroup;
