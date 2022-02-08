import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { FC } from "react";
import { GroupProps } from "../../../models/groups.model";
import { AuthUser } from "../../../models/user.model";

interface GroupList {
  groups: GroupProps[];
  currentUser: AuthUser | null;
}
export const GroupsList: FC<GroupList> = ({ groups, currentUser }) => {
  return (
    <Box>
      <TableContainer>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell align="right">Users in Group</TableCell>
              <TableCell align="right">My Group</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {groups.map((group) => (
              <TableRow
                key={group.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {group.name}
                </TableCell>
                <TableCell align="right">{group.users.length}</TableCell>
                <TableCell align="right">
                  {group.userCreate === currentUser?.uid ? "+" : "-"}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};
