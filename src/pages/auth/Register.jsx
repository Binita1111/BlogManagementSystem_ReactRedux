import React, { useEffect } from 'react'
import Form from './components/form/Form'
import { register, setStatus } from '../../../store/authSlice'
import { useDispatch, useSelector } from 'react-redux'
import STATUSES from '../../globals/status/statuses'
import { useNavigate } from 'react-router-dom'

const Register = () => {
  const dispatch = useDispatch();
  const { status } = useSelector((state) => state.auth);

  const navigate = useNavigate();

  const handleRegister = (data) => {
    dispatch(register(data));
  };

  useEffect(() => {
    if (status === STATUSES.SUCCESS) {
      dispatch(setStatus(null));
      navigate('/login');
    }
  }, [status, dispatch, navigate]);

  return (
    <Form type='Register' onSubmit={handleRegister} />
  );
};

export default Register;