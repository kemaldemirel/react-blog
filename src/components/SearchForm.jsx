import React from 'react';
import styled from 'styled-components';

const FormSearch = styled.form`
  margin-right: 50px;
`;

const Input = styled.input`
  width: 300px;
  padding: 10px;
  border: 1px solid #fff;
  background-color: transparent;
  border-radius: 10px;
  color: #fff;

  &::placeholder {
    color: #fff;
  }
`;

const SearchForm = () => {
  return (
    <FormSearch>
      <Input type="text" placeholder="Поиск статей" />
    </FormSearch>
  );
};

export default SearchForm;
