import gql from "graphql-tag";

const MUTATION_SEND_CATALOG_EMAIL = gql`
    mutation sendemail($to:String!){
        sendemail(to:$to)
    }
`;

export {MUTATION_SEND_CATALOG_EMAIL}