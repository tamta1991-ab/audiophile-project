import React from 'react';
import { useNavigate } from 'react-router-dom';

const GoBackButton: React.FC = () => {
  const navigate = useNavigate();

  const goBackHandler = () => {
    navigate(-1); // Navigate back one step in history
  };

  return (
    <button type='button'
    style={{
        border : 'none',
        color:'#979797',
        backgroundColor: 'transparent',
        marginBottom: '3rem'
    }} onClick={goBackHandler}>
      Go Back
    </button>
  );
};

export default GoBackButton;

