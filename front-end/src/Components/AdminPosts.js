import React from 'react'
import { useSelector, useDispatch } from "react-redux";
import { Table } from 'react-bootstrap';
import { deleteProduct } from '../redux/action/itemActions';
const AdminPosts = ({ products }) => {
  console.log('productsAdmin', products)
  const dispatch = useDispatch();
  const deleteProducts = (i) => {
    dispatch(deleteProduct(products[i]._id, products[i].user))
  }
  return (
    <div className="table">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th></th>
            <th>Product id</th>
            <th>Title</th>
            <th>Price</th>
            <th>Description</th>
            <th>Category</th>

          </tr>
        </thead>
        {products && products.map((el, i) => (
          <tbody key={i}>
            <tr>
              <td>{i}</td>
              <td>{el._id}</td>
              <td>{el.title}</td>
              <td>{el.price}</td>
              <td>{el.description}</td>
              <td>{el.category}</td>
              <td>
                <button onClick={() => deleteProducts(i)}>delete</button>
              </td>

            </tr>

          </tbody>
        )
        )}
      </Table>


    </div>
  )
}

export default AdminPosts
