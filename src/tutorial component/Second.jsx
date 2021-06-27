import React from 'react'

function Second() {
    const [filter, setFilter] = React.useState("");
    const [userCollection, setUserCollection] = React.useState([]);


    // Load full list when the component gets mounted and filter gets updated
    React.useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users?name_like=${filter}`)
            .then(response => response.json())
            .then(json => setUserCollection(json));
    }, [filter]);

    return (
        <div>
            <input value={filter} onChange={e => setFilter(e.target.value)} />
            <ul>
                {userCollection.map((user, index) => (
                    <li key={index}>{user.name}</li>
                ))}
            </ul>
        </div>
    );
};






// // You need to extract the functionality of this 
// component into a function namely "useUserCollection" that will return 4 things :

// // {userCollection, loadUsers, filter, setFilter}



// // And call that function from the functional component. 
// Also, make sure the custom function call will be made only when the filter variable changes.

// // The functionality of the Component => 
// It will load the list of user from the API: "https://jsonplaceholder.typicode.com/users". 
//And it will show an editable field that will filter out the username based on the character entered in the field.






export default Second
