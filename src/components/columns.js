import { format } from "date-fns";
import { ColumnFilter } from "./ColumnFilter";

export const COLUMNS = [
  {
    Header: "Id",
    accessor: "id",
    Filter: ColumnFilter,
    disableFilters: true,
  },
  {
    Header: "Country",
    accessor: "country",
    // Filter: ColumnFilter,
  },
  {
    Header: "First Name",
    accessor: "first_name",
    disableFilters: true,
    // Filter: ColumnFilter
  },
  {
    Header: "Last Name",
    accessor: "last_name",
    disableFilters: true,

    // Filter: ColumnFilter
  },
  {
    Header: "Date fo Birth",
    accessor: "date_of_birth",
    Cell: ({ value }) => {
      return format(new Date(value), "dd/MM/yyyy");
    },
    disableFilters: true,

    // Filter: ColumnFilter
  },

  {
    Header: "Phone",
    accessor: "phone",
    disableFilters: true,

    // Filter: ColumnFilter
  },
];

export const GROUPED_COLUMNS = [
  {
    Header: "Id",
    accessor: "id",
  },
  {
    Header: "Name",
    columns: [
      {
        Header: "First Name",
        accessor: "first_name",
      },
      {
        Header: "Last Name",
        accessor: "last_name",
      },
    ],
  },
  {
    Header: "Info",
    columns: [
      {
        Header: "Date fo Birth",
        accessor: "date_of_birth",
      },
      {
        Header: "Country",
        accessor: "country",
      },
      {
        Header: "Phone",
        accessor: "phone",
      },
    ],
  },
];
