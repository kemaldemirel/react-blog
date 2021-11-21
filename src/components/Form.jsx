import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import TextField from '@mui/material/TextField';

const Form = () => {
  const { handleSubmit, control, reset } = useForm({
    defaultValues: {
      checkbox: false,
    },
  });
  const onSubmit = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name="post"
        control={control}
        rules={{ required: true }}
        render={({ field }) => <TextField {...field} />}
      />
      <input type="submit" />
    </form>
  );
};

export default Form;
