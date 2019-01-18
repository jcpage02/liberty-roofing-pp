import React, { Component } from "react";
import axios from "axios";
import Paper from "@material-ui/core/Paper";
// import Chip from "@material-ui/core/Chip";
// import Input from "@material-ui/core/Input";
// import Select from "@material-ui/core/Select";
// import MenuItem from "@material-ui/core/MenuItem";
import {
  DataTypeProvider,
  EditingState,
  // SortingState,
  // LocalSorting
} from "@devexpress/dx-react-grid";
import {
  Grid,
  Table,
  TableHeaderRow,
  TableEditRow,
  TableEditColumn
} from "@devexpress/dx-react-grid-material-ui";
import "./JobTable.css";

const CurrencyFormatter = ({ value }) => (
  <b style={{ color: "black", fontWeight: 500 }}>${value}</b>
);

const CurrencyTypeProvider = props => (
  <DataTypeProvider formatterComponent={CurrencyFormatter} {...props} />
);

const DateFormatter = ({ value }) =>
  value.split("T")[0].replace(/(\d{4})-(\d{2})-(\d{2})/, "$2/$3/$1");

const DateTypeProvider = props => (
  <DataTypeProvider formatterComponent={DateFormatter} {...props} />
);

// const getRowId = rox => row.div

class JobTable extends Component {
  state = {
    rows: [],
    columns: [
      { name: "customer_name", title: "Customer Name" },
      { name: "phone", title: "Phone #" },
      { name: "email", title: "Email" },
      { name: "date_sold", title: "Date Sold" },
      { name: "address", title: "Address" },
      { name: "city", title: "City" },
      { name: "state", title: "State" },
      { name: "zip", title: "Zip" },
      { name: "status", title: "Status" },
      { name: "price", title: "Price" },
      { name: "ecd", title: "ECD" },
      { name: "crew_name", title: "Crew Name" },
      { name: "crew_head", title: "Crew Head" },
      { name: "crew_phone", title: "Crew Phone #" }
    ],
    dateColumns: ["date_sold", 'ecd'],
    currencyColumns: ["price"]
  };

  componentDidMount() {
    axios.get("/api/active-jobs").then(res => {
      this.setState({
        rows: res.data
      });
    });
  }

  commitChanges = ({ added, changed, deleted }) => {
    let { rows } = this.state;
    if (added) {
      const startingAddedId =
        rows.length > 0 ? rows[rows.length - 1].id + 1 : 0;
      rows = [
        ...rows,
        ...added.map((row, index) => ({
          id: startingAddedId + index,
          ...row
        }))
      ];
    }
    if (changed) {
      rows = rows.map(row =>
        changed[row.id] ? { ...row, ...changed[row.id] } : row
      );
    }
    if (deleted) {
      const deletedSet = new Set(deleted);
      console.log(deletedSet);
      rows = rows.filter(row => !deletedSet.has(row.id));
      console.log(rows);
    }
    this.setState({ rows });
  };

  render() {
    const style = {
      fontSize: 24
    };

    const { rows, columns, dateColumns, currencyColumns } = this.state;
    return (
      <div className="JobTable" style={style}>
        <Paper>
          <Grid rows={rows} columns={columns}>
            <EditingState onCommitChanges={this.commitChanges} />
            {/* <SortingState /> */}
            <CurrencyTypeProvider for={currencyColumns} />
            <DateTypeProvider for={dateColumns} />
            <Table />
            <TableHeaderRow />
            <TableEditRow />
            <TableEditColumn showAddCommand showEditCommand showDeleteCommand />
          </Grid>
        </Paper>
      </div>
    );
  }
}

export default JobTable;
