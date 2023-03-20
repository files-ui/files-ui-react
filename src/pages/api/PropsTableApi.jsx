import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import SortByAlphaIcon from "@mui/icons-material/SortByAlpha";
import LowPriorityIcon from "@mui/icons-material/LowPriority";
import SubTitle from "../../components/demo-components/sub-title/SubTitle";
import { Tooltip, IconButton, Stack } from "@mui/material";
import DescParagraph from "../../components/demo-components/desc-paragraph/DescParagraph";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#042354",
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function compareNames(a, b) {
  if (a?.name < b?.name) {
    return -1;
  } else {
    return 1;
  }
}

export default function PropsTableApi({
  rows = [],
  title = "",
  desc=<></>,
  omitDefault = false,
}) {
  const [sorted, setSorted] = React.useState(false);
  const [localRows, setLocalRows] = React.useState(rows);

  const handleSort = () => {
    setSorted((_sorted) => {
      const resultSorted = !_sorted;
      const rowsToSort = [...rows];
      if (resultSorted) {
        setLocalRows(rowsToSort.sort(compareNames));
      } else {
        setLocalRows(rowsToSort);
      }
      return resultSorted;
    });
  };
  return (
    <React.Fragment>
      <Stack
        direction={"row"}
        justifyContent="flex-start"
        alignItems={"center"}
        spacing={2}
      >
        <SubTitle content={title.length === 0 ? "Props" : title} />{" "}
        <Tooltip title={sorted ? "Sort by importance" : "Sort alphabetically"}>
          <IconButton
            style={{ borderRadius: "50%", border: "0.5px solid #eaeef3" }}
            onClick={handleSort}
            aria-label="upload picture"
            component="label"
          >
            {sorted ? <SortByAlphaIcon /> : <LowPriorityIcon />}
          </IconButton>
        </Tooltip>{" "}
      </Stack>
      {desc!==undefined && <DescParagraph>{desc}</DescParagraph>}
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell /* width={"30%"} */>Name</StyledTableCell>
              <StyledTableCell align="left" /* width={"30%"} */>
                Type
              </StyledTableCell>
              {!omitDefault && (
                <StyledTableCell align="left">Default</StyledTableCell>
              )}
              <StyledTableCell
                align="left"
                /*  width={"30%"} */
              >
                Description
              </StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {localRows.map((row) => (
              <StyledTableRow key={row.name}>
                <StyledTableCell
                  component="th"
                  scope="row"
                  style={{
                    wordBreak: row.name.length > 20 ? "break-word" : "normal",
                  }}
                >
                  {row.name}
                </StyledTableCell>
                <StyledTableCell
                  align="left"
                  style={{
                    wordBreak: row.name.length > 10 ? "break-word" : "normal",
                  }}
                >
                  {row.type}
                </StyledTableCell>
                
                {!omitDefault && (
                  <StyledTableCell align="left">{row.default}</StyledTableCell>
                )}
                
                <StyledTableCell align="left" style={{ maxWidth: "50%" }}>
                  {row.description}
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </React.Fragment>
  );
}
