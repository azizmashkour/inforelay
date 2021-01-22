import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import DataTable from "react-data-table-component";
import Checkbox from "@material-ui/core/Checkbox";
import SortIcon from "@material-ui/icons/ArrowDownward";
import VisibilityIcon from '@material-ui/icons/Visibility';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import FakeNotifs from "./FakeNotifs.js";
import Card from "@material-ui/core/Card";
import { Link } from "react-router-dom";

const editRecord=(record)=> {
  const { id } = record;
}

const deleteRecord=(record)=> {
  const { id } = record;
}

const columns = [
  {
    name: "ID",
    selector: "id",
    sortable: true
  },
  {
    name: "Content",
    selector: "content",
    sortable: true
  },
  {
    name: "Status",
    selector: "status",
    sortable: true
  },
  {
    name: "Date",
    selector: "date",
    sortable: true,
    right: true
  },
  {
    name: "Action",
    key: "action",
    text: "Action",
    className: "action",
    width: 100,
    align: "left",
    sortable: false,
    cell: record => {
      return (
        <Fragment>
          <Link to={`/request/${record.id}`}>
            <button
              className="btn btn-view">
              <VisibilityIcon />
            </button>
          </Link>
          <button
            className="btn btn-delete"
            onClick={() => deleteRecord(record)}>
            <DeleteIcon />
          </button>
        </Fragment>
      );
    }
  }
];

const isIndeterminate = indeterminate => indeterminate;
const selectableRowsComponentProps = { indeterminate: isIndeterminate };

const List=()=> {
  return (
    <div className="Request-list">
      <Card>
        <DataTable
          title="Notifications"
          columns={columns}
          data={FakeNotifs}
          defaultSortField="id"
          sortIcon={<SortIcon />}
          pagination
          selectableRows
          selectableRowsComponent={Checkbox}
          selectableRowsComponentProps={selectableRowsComponentProps}
        />
      </Card>
    </div>
  );
}

export default List;
