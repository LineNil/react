import React from 'react';
import {useForm} from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup
  .object({
    fullName: yup.string().min(3, 'Your full name should be at least 3 characters.').required(),
    subject: yup.string().min(3,'Your subject should be at least 3 characters.').required(),
    email: yup.string().email('Must be a valid email address.').required(),
    message: yup.string().min(3,'Your message should be at least 3 characters.').required(),
  })
  .required();

function Contact() {
  const {
    register, 
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  function onSubmit(data) {
    console.log(data);
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor='fullName'>Full name:</label>
      <input
      {...register('fullName')}/>
      <p>{errors.fullName?.message}</p>

      <label htmlFor='subject'>Subject:</label>
      <input
      {...register('subject')}/>
      <p>{errors.subject?.message}</p>

      <label htmlFor='email'>E-mail:</label>
      <input
      {...register('email')}/>
      <p>{errors.email?.message}</p>

      <label htmlFor='message'>Message:</label>
      <input
      {...register('message')}/>
      <p>{errors.message?.message}</p>

      <input type='submit'/>
    </form>
  );
}

export default Contact;
