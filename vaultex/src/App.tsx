import React, { useState } from "react";
import useApi from "./api/useApi";
import "./App.css";
import Pagination from "./Components/Pagination/pagination";
import Table, { ITableColumns, ITableValue } from "./Components/Table/table";

const App = () => {
  // React hooks to store these in state
  const [currentPageNumber, setCurrentPageNumber] = useState(1);
  const [currentPageSize, setCurrentPageSize] = useState(10);

  //Created a hook here to handle the API request. This API call will be made every time the currentPageNumber
  //and current page size variables change
  const apiValue = useApi(currentPageNumber, currentPageSize);

  // Using the same pattern we used at previous job to define columns and column details.
  // also provides a non required render function prop that can be used to customise the render to the table
  const tableColumns: ITableColumns = {
    id: {
      label: "Id",
      type: "Text",
    },
    firstName: {
      label: "First Name",
      type: "Text",
    },
    lastName: {
      label: "Last Name",
      type: "Text",
    },
    organisationName: {
      label: "Organisation Name",
      type: "Text",
    },
    organisationNumber: {
      label: "Organisation Number",
      type: "Text",
    },
    addressLine1: {
      label: "Address Line 1",
      type: "Text",
    },
    addressLine2: {
      label: "Address Line 2",
      type: "Text",
    },
    addressLine3: {
      label: "Address Line 3",
      type: "Text",
    },
    addressLine4: {
      label: "Address Line 4",
      type: "Text",
    },
    town: {
      label: "Town",
      type: "Text",
    },
    postcode: {
      label: "Postcode",
      type: "Text",
    },
  };

  // Simple event handling for the updating of page number and page size
  const updatePageNumber = (value: number) => {
    setCurrentPageNumber(value);
  };

  const updatePageSize = (value: number) => {
    setCurrentPageSize(value);
  };

  // Mapping of api response values to TableValues to be used by the table
  const tableValues = apiValue.data.map<ITableValue>((v) => ({
    id: v.id,
    firstName: v.firstName,
    lastName: v.lastName,
    organisationName: v.organisation.organisationName,
    organisationNumber: v.organisation.organisationNumber,
    addressLine1: v.organisation.addressLine1,
    addressLine2: v.organisation.addressLine2
      ? v.organisation.addressLine2
      : "",
    addressLine3: v.organisation.addressLine3
      ? v.organisation.addressLine3
      : "",
    addressLine4: v.organisation.addressLine4
      ? v.organisation.addressLine4
      : "",
    town: v.organisation.town,
    postcode: v.organisation.postcode,
  }));

  // Simple render here with a separated table and pagination components
  return (
    <>
      <div className="App">
        <Table columns={tableColumns} values={tableValues} />
        <Pagination
          numberOfPages={apiValue.numberOfPages}
          updatePageNumber={updatePageNumber}
          updatePageSize={updatePageSize}
        />
      </div>
    </>
  );
};

export default App;
