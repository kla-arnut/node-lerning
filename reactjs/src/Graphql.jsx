import { useQuery, gql } from "@apollo/client";

const GET_CUSTOMER = gql`
    query {
        customers {
            name
            phone
        }
    }
`

export function Graphql() {
    const {loading, error, data} = useQuery(GET_CUSTOMER)

    if (!data) {
        return <p>
            loading...
        </p>
    } 
    
    const {customers} = data
    
    return <>
    <h1>graphql</h1>
    <hr></hr>
    {
        CustomElementRegistry.map(each => {
            return <p>{each.name}</p>
        })
    }
    </>
}