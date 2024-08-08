import { useEffect, useState } from "react";
import Success from "./components/Success";
import Users from "./components/User";



function App() {

  const [users, setUsers] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [searchValue, setSearchValue] = useState('');
  const [invites, setInvites] = useState([]);
  const [success, setSuccess] = useState(false)



  useEffect(()=>{
    fetch(' https://reqres.in/api/users')
    .then(data => data.json())
    .then(arrayUsers => setUsers(arrayUsers.data))
    .catch(err => {
      console.warn(err);
      alert('Помилка при отримуванні користувачів')
    }).finally(() => setLoading(false))
    
  }, [])

  function onChangeSearchValue(event){
    setSearchValue(event.target.value)
  }

  function onClickInvite(id){
    if(invites.includes(id)){
      setInvites(prevValue =>
        prevValue.filter(_id =>
          _id !== id
          ))
    }else{
      setInvites(prevValue => [...prevValue, id])
    }

  }

  console.log(users)
  return (
    <div className="App">
      {success ? 
      <Success
      count ={invites.length}
      /> 
      :
      <Users 
        items = {users} 
        isLoading ={isLoading} 
        searchValue ={searchValue} 
        onChangeSearchValue ={onChangeSearchValue}
        invites ={invites}
        onClickInvite ={onClickInvite}
        setSuccess ={setSuccess}
    />
      }
      
    </div>
  );
}

export default App;
