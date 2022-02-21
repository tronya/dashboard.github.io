import { TextField, InputAdornment, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { FC, KeyboardEvent } from 'react';

interface SearchInputProps {
  onChangeSearchTerm: (value: string) => void;
  searchTerm: string;
}

const SearchInput: FC<SearchInputProps> = ({
  onChangeSearchTerm,
  searchTerm,
}) => {
  const handleEscape = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Escape') {
      event.preventDefault();
      onChangeSearchTerm('');
    }
  };

  return (
    <TextField
      fullWidth
      label="Search..."
      onKeyDown={handleEscape}
      value={searchTerm}
      onChange={(event) => onChangeSearchTerm(event.target.value)}
      autoComplete="off"
      autoFocus={true}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton>
              <SearchIcon />
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
  );
};

export default SearchInput;
