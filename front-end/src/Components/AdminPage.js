import React from 'react'
import { logout} from "../redux/action/authAction";
import { useSelector, useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
const AdminPage = () => {
    // componentDidMount() {
    //     userService.getAll().then(users => this.setState({ users }));
    // }
const  dispatch = useDispatch();
const history = useHistory();


    return (
        <div className = "table-nav-adin">

           <button>
               <Link className="link-admin" to="/"> Home</Link>
           </button>
           <button><Link className="link-admin" to="admin-users">Users</Link></button>
           <button><Link className="link-admin" to="admin-posts">Posts</Link></button>
           <button className="btn-nav-admin"
           onClick={()=> {
               dispatch(logout());
               history.push("/")
           }}>
                logout
           </button>


        </div>
    )
}

export default AdminPage
