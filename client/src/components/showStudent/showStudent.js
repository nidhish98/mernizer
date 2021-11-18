import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import axios from "axios";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

export default function BasicTable() {
  const classes = useStyles();
  const [studentsList, setStudentList] = useState([]);

  const deleteStudent = (id) => {
    axios.delete(`http://localhost:5000/students/${id}`).then(() => {
      window.location.reload(false);
    });
  };
  useEffect(() => {
    axios
      .get("http://localhost:5000/students")
      .then((allStudents) => setStudentList(allStudents.data));
  });
  return (
    <>
      <h2>All students</h2>
      <TableContainer component={Paper}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell align="right">Registration Number</TableCell>
              <TableCell align="right">Grade</TableCell>
              <TableCell align="right">Section</TableCell>
              <TableCell align="right">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {studentsList.map((student, key) => (
              <TableRow key={key}>
                <TableCell component="th" scope="row">
                  {student.studentName}
                </TableCell>
                <TableCell align="right">{student.regNo}</TableCell>
                <TableCell align="right">{student.grade}</TableCell>
                <TableCell align="right">{student.section}</TableCell>
                <TableCell align="right">
                  <IconButton
                    aria-label="delete"
                    className={classes.margin}
                    onClick={() => deleteStudent(student._id)}
                  >
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
