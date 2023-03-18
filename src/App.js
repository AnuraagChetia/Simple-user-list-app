import React, {useState} from 'react';
import AddUser from './Components/Users/AddUser'
import UserList from './Components/Users/UserList';

function App() {
  const [userList,setUserList] = useState([]);
  const addUserHandler = (uName,uAge)=>{
    setUserList((prevList)=>{
      return [...prevList,{name:uName,age:uAge,id:Math.random().toString()}]
    })
  }
  return (
    <div>
      <AddUser onAddUser={addUserHandler}></AddUser>
      <UserList users={userList}></UserList>
    </div>
  );
}

export default App;
