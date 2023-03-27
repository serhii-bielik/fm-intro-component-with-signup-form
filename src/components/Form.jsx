import React from 'react';
import { useForm } from 'react-hook-form';
import TryIt from './TryIt';
import InputError from './InputError';

function Form() {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({ mode: 'onBlur' });

  const onSubmit = (data) => {
    alert(JSON.stringify(data));
    reset();
  };

  return (
    <div className='form-wrapper'>
      <TryIt />

      <form
        action="/"
        method="post"
        className="trial-form"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className='input-area'>
          <input
            type="text"
            className={'input-text' + (errors?.firstName ? ' error-icon' : '')}
            placeholder='First Name' 
            aria-label="First Name"
            aria-invalid={errors.firstName ? 'true' : 'false'}
            {...register('firstName', {
              required: 'First Name cannot be empty',
            })}
          />
          {errors?.firstName && (
            <InputError message={errors?.firstName?.message} />
          )}
        </div>
        <div className='input-area'>
          <input
            type="text"
            className={'input-text' + (errors?.lastName ? ' error-icon' : '')}
            placeholder='Last Name'
            aria-label="Last Name"
            aria-invalid={errors.lastName ? 'true' : 'false'}
            {...register('lastName', {
              required: 'Last Name cannot be empty',
            })}
          />
          {errors?.lastName && (
            <InputError message={errors?.lastName?.message} />
          )}
        </div>
        <div className='input-area'>
          <input
            type="text"
            className={'input-text' + (errors?.email ? ' error-icon' : '')}
            placeholder='Email Address'
            aria-label="Email Address"
            aria-invalid={errors.email ? 'true' : 'false'}
            {...register('email', {
              required: 'Email cannot be empty',
              pattern: {
                value: /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,})$/,
                message: 'Looks like this is not an email'
              }
            })}
          />
          {errors?.email && (
            <InputError message={errors?.email?.message} />
          )}
        </div>
        <div className='input-area'>
          <input
            type="password"
            className={'input-text' + (errors?.password ? ' error-icon' : '')}
            placeholder='Password'
            aria-label="Password"
            aria-invalid={errors.password ? 'true' : 'false'}
            {...register('password', {
              required: 'Password cannot be empty',
              minLength: {
                value: 8,
                message: 'Password must be longer than 7 symbols'
              }
            })}
          />
          {errors?.password && (
            <InputError message={errors?.password?.message} />
          )}
        </div>
        <input type="submit" className='input-button' value="Claim your free trial" />
        <p className='trial-form__terms'>
          By clicking the button, you are agreeing to our{' '}
          <a href="#">Terms and Services</a>
        </p>
      </form>
    </div>
  );
}

export default Form;
