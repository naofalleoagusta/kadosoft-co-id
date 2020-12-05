import gql from "graphql-tag"

const MUTATION_ADD_USER = gql`
    mutation addUser ($email:String! , $name:String!, $phone:String,$company:String,$message:String) {
        addUser(email:$email , name:$name , phone:$phone, company:$company, message:$message){
            id
        }
    }
`;
export { MUTATION_ADD_USER }
