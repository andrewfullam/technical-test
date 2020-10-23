import { useEffect, useMemo, useState } from "react";

const useApi = (pageNumber: number, pageSize: number) => {
  // Api call uses a useState hook here to control the rerendering of the component that uses this.
  // This will trigger a rerender when an API call is made and the response is set here
  const [apiResponse, setApiReponse] = useState<IApiResponse<IEmployeeValue>>({
    data: [],
    numberOfPages: 1,
  });

  // For simplicity of completing this task in a timely fashion decided to always pass page number and page size to api endpoint
  const queryParams = useMemo(
    () => `?pageNumber=${pageNumber}&pageSize=${pageSize}`,
    [pageNumber, pageSize]
  );

  // using the simple fetch function to carry out this api call, Nothing too fancy here. Success response sets value to the response from the api which
  // as stated above. Triggers re render of component which uses this hook
  useEffect(() => {
    fetch("https://localhost:44330/api/employee" + queryParams)
      .then((res) => res.json())
      .then(
        (result) => {
          setApiReponse(result);
        },
        (error) => {
          console.log(error);
        }
      );
  }, [queryParams]);

  return apiResponse;
};

// Simple interfaces. Storing the data as a data property within the response so I can attach number of pages so I know
// how many page buttons to render in pagination
interface IApiResponse<T> {
  data: T[];
  numberOfPages: number;
}

export interface IEmployeeValue {
  id: number;
  firstName: string;
  lastName: string;
  organisation: {
    organisationName: string;
    organisationNumber: string;
    addressLine1: string;
    addressLine2: string | null;
    addressLine3: string | null;
    addressLine4: string | null;
    town: string;
    postcode: string;
  };
}

export default useApi;
