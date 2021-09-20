import React from 'react'
import { useSelector, useDispatch } from "react-redux";
import { Table } from 'react-bootstrap';
import { deleteUsers } from '../redux/action/authAction';
const AdminUsers = ({users}) => {
  console.log('userPost', users)
  const dispatch = useDispatch();
  // const users = useSelector(state => state.authReducer.users)

  const deleteUser = (i) => {
    dispatch(deleteUsers(users[i]._id))
  }
  return (
    <div className="table">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th></th>
            <th>User id</th>
            <th>User Name</th>
            <th>Email</th>
            <th>Products of the user </th>
            <th>Hundle products</th>

          </tr>
        </thead>
        {users && users.map((el, i) => (
          <tbody key={i}>
            <tr>
              <td>{i}</td>
              <td>{el._id}</td>
              <td>{el.name}</td>
              <td>{el.email}</td>
              <td>{el.description}</td>
              <td>{el.category}</td>
              <td>
                <button onClick={() => deleteUser(i)}>delete</button>
              </td>

            </tr>

          </tbody>
        )
        )}
      </Table>


    </div>
  )
}

export default AdminUsers
