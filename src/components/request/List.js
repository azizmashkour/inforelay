import React, { Fragment, useEffect, useState } from "react";
import ReactDOM from "react-dom";
import DataTable from "react-data-table-component";
import Checkbox from "@material-ui/core/Checkbox";
import SortIcon from "@material-ui/icons/ArrowDownward";
import VisibilityIcon from '@material-ui/icons/Visibility';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import FakeRequests from "./FakeRequests.js";
import Card from "@material-ui/core/Card";
import { Link, useRouteMatch } from "react-router-dom";
import "./styles.css";
import { loadRequests } from '../../services/HttpClient';

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
    name: "Title",
    selector: "title",
    sortable: true
  },
  {
    name: "Description",
    selector: "shortDescription",
    sortable: true
  },
  {
    name: "Badge",
    selector: "badge",
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
            className="btn btn-edit"
            onClick={() => editRecord(record)}>
            <EditIcon />
          </button>
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
  const [loading, setLoading] = useState(true);
  const [requests, setRequests] = useState([]);
  const [errorGetRequests, setErrorGetRequests] = useState(null);

  useEffect(() => {
    processLoadRequests();
  }, []);

  const processLoadRequests = async () => {
    setLoading(true);
    const response = await loadRequests();
    console.log('response', response.json());
    // if (response.ok) {
    //   const data = await response.json();
    //   setRequests(data)
    // } else {
    //   setRequests([])
    //   setErrorGetRequests(t('notifications.retrieve_the_notifications'))
    // }
    // setLoading(false);
  }

  return (
    <div className="Request-list">
      <Card>
        <DataTable
          title="Requests submitted"
          columns={columns}
          data={FakeRequests}
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
