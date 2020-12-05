import { gql } from '@apollo/client';

const GET_PORTOFOLIOS_BY_CATEGORY = gql`
  query getPortofoliosByCategory($category:ID!){
    getPortofoliosByCategory(category:$category){
      id
      name
      category{
        id
        category_name
      }
      description
      photo{
        type
        url
      }
      url
    }
  }
`;

export { GET_PORTOFOLIOS_BY_CATEGORY }
