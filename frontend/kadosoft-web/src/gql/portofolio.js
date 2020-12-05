import gql from "graphql-tag";

const GET_TOP_3_PORTOFOLIO = gql`    
    query getTop3Portofolio{
        getTop3Portofolio{
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

export { GET_TOP_3_PORTOFOLIO }