import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
import { FC } from 'react';
import { Group } from '../../../models/groups.model';
import { User } from '../../../models/user.model';
import { StyledTableCell } from './GroupsList.styles';

interface GroupList {
  groups: Group[];
  currentUser: User | null;
  onGroupClick: (id: string) => void;
}

export const GroupsList: FC<GroupList> = ({
  groups,
  currentUser,
  onGroupClick,
}) => {
  return (
    <Box>
      <TableContainer>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Name</StyledTableCell>
              <StyledTableCell align="right">Users in Group</StyledTableCell>
              <StyledTableCell align="right">My Group</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {groups.map((group) => (
              <TableRow
                key={group.id}
                sx={{
                  cursor: 'pointer',
                  '&:last-child td, &:last-child th': { border: 0 },
                }}
                onClick={() => onGroupClick(group.id)}
              >
                <TableCell component="th" scope="row">
                  {group.name}
                </TableCell>
                <TableCell align="right">{group.users.length}</TableCell>
                <TableCell align="right">
                  {group.userCreate === currentUser?.uid ? '+' : '-'}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};
