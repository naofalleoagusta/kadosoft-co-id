import React from 'react';
import {GET_PORTOFOLIOS_BY_CATEGORY} from "../../gql/portfolio";
import {useQuery} from "@apollo/client"
const PortofolioData = (props) => {
  const { loading, error, data } = useQuery(GET_PORTOFOLIOS_BY_CATEGORY, {
    variables: { category: props.category }, fetchPolicy: "network-only"
  });
  if (loading) return (<p>Loading</p>);
  if (error) {
    console.log(error);
    console.log(`Error! ${error.message}`);
    return "";
  }
  console.log(data)
  return (
    <React.Fragment>
      <div>
        <p>mantap</p>
      </div>
    </React.Fragment>
  );
};

export default PortofolioData;
