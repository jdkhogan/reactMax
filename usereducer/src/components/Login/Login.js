import React, { useState, useEffect, useReducer, useContext, useRef } from 'react';

import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';
import Input from '../UI/Input/Input';
import AuthContext from '../../store/auth-context';

const emailReducer = (state, action) => {
  if (action.type === 'USER_INPUT') {
    return {
      value: action.val, 
      isValid: action.val.includes('@')
    };
  }
  if (action.type === 'INPUT_BLUR') {
    return {
      value: state.value, 
      isValid: state.value.includes('@')    
    };
  }
  return {value: '', isValid: false};
};

const pwReducer = (state, action) => {
  if (action.type === 'USER_INPUT') {
    return {
      value: action.val, 
      isValid: action.val.trim().length > 6
    };
  }
  if (action.type === 'INPUT_BLUR') {
    return {
      value: state.value, 
      isValid: state.value.trim().length > 6  
    };
  }
  return {value: '', isValid: false};
};

const Login = (props) => {
  const [emailState, dispatchEmail] = useReducer(emailReducer, { 
    value: '', 
    isValid: null 
  });
  const [pwState, dispatchPassword] = useReducer(pwReducer, { 
    value: '', 
    isValid: null 
  });

  const [formIsValid, setFormIsValid] = useState(false);

  const ctx = useContext(AuthContext);

  const emailInputRef = useRef();
  const pwInputRef = useRef();

  useEffect(() => {
    const identifier = setTimeout(() => {
      console.log('Checking form validity!');
      setFormIsValid(emailState.isValid && pwState.isValid);
    }, 500);

    return () => {
      console.log('CLEANUP');
      clearTimeout(identifier);
    };
  }, [emailState.value, pwState.value]);

  const emailChangeHandler = (event) => dispatchEmail({type: 'USER_INPUT', val: event.target.value});
  const passwordChangeHandler = (event) => dispatchPassword({type: 'USER_INPUT', val: event.target.value});
  const validateEmailHandler = () => dispatchEmail({type: 'INPUT_BLUR'});
  const validatePasswordHandler = () => dispatchPassword({type: 'INPUT_BLUR'});

  const submitHandler = (event) => {
    event.preventDefault();
    if (formIsValid) {
      ctx.onLogin(emailState.value, pwState.value);
    } else if (!emailState.isValid) {
      emailInputRef.current.focus();
    } else {
      pwInputRef.current.focus();
    }
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <Input ref={emailInputRef}
          type="email" name="email" title="E-Mail"
          value={emailState.value} 
          isValid={emailState.isValid} 
          onChange={emailChangeHandler}
          onBlur={validateEmailHandler}
        />
        <Input ref={pwInputRef}
          type="password" name="password" title="Password"
          value={pwState.value} 
          isValid={pwState.isValid} 
          onChange={passwordChangeHandler}
          onBlur={validatePasswordHandler}
        />
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
