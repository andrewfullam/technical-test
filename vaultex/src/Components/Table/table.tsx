import React, { ReactChild } from "react";
import "./table.css";

const Table = ({ columns, values }: ITableProps) => {
  // This uses a passed in key, ITableValue and Columns to parse the table value
  // as a correct type. Will also call the custom render function if the column has one defined.
  const render = (key: string, value: ITableValue, columns: ITableColumns) => {
    var column = columns[key];
    var cellValue = value[key];

    if (column.render !== undefined) {
      return column.render(cellValue);
    }

    if (column && value) {
      switch (column.type) {
        case "text":
          return cellValue;
        case "datetime":
          return new Date(cellValue);
        default:
          return cellValue;
      }
    }
    return "";
  };

  // Simple rendering of the column headings and row date using the above render function
  return (
    <table>
      <thead>
        <tr>
          {Object.values(columns).map((value) => (
            <td key={value.label}>{value.label}</td>
          ))}
        </tr>
      </thead>
      <tbody>
        {values.map((value, key) => (
          <tr key={key}>
            {Object.keys(value).map((v, key) => (
              <td key={v + key}>{render(v, value, columns)}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

// Simple interfaces for the props
interface ITableProps {
  columns: ITableColumns;
  values: ITableValue[];
}

export interface ITableColumns {
  [key: string]: {
    type: string;
    label: string;
    render?: (value: string | number) => ReactChild;
  };
}

export interface ITableValue {
  [key: string]: string | number;
}

export default Table;
