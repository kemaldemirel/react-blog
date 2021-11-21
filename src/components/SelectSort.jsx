import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Box, InputLabel, MenuItem, FormControl, Select } from '@mui/material';
import { setSortBy } from '../store/actions/filters';

export default function SelectSort() {
  const sortBy = useSelector(({ filter }) => filter.sortBY);
  const dispatch = useDispatch();

  const handleChange = (event) => {
    dispatch(setSortBy(event.target.value));
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Сортировать по</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={sortBy}
          label="Сортировать по"
          onChange={handleChange}>
          <MenuItem value="views">По просмотрам</MenuItem>
          <MenuItem value="favorites">По рейтингу</MenuItem>
          <MenuItem value="comments">По комментариям</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
