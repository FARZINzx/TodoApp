import React , {useContext}  from "react";

//Import Context
import AuthContext from "../Contexts/AuthContext";
import {NavLink} from "react-router-dom";


function Header(){

   let authit = useContext(AuthContext)


    return(
         <header>
             <div className="navbar navbar-dark navbar-expand-md   bg-dark shadow-sm">
                 <div className="container d-flex justify-content-between">
                     {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                     <ul className='navbar-nav me-auto'>
                         <li className='navbar-nav me-auto'>
                             <NavLink className='nav-link' to={{
                                 pathname : '/todos'
                             }}><strong>Todo App</strong></NavLink>
                         </li>
                         <li className='nav-item active'>
                             <NavLink className='nav-link' path='/history' to='/history' activeStyle={{
                                color : "white" ,
                                backgroundColor : '#343a40',
                             }}  >History</NavLink>
                         </li>
                         <li className='nav-item'>
                             <NavLink className='nav-link' activeStyle={{
                                 color : "white" ,
                                 backgroundColor : '#343a40',
                             }} to={{
                                 pathname : '/Content'
                             }}>Contact us</NavLink>
                         </li>
                         <li>
                            <NavLink className='nav-link' activeStyle={{
                                color : "white",
                                backgroundColor : '#343a40'
                            }} to={{
                                pathname : '/hamintori'
                            }}>hamintori</NavLink>
                         </li>
                     </ul>
                     {
                         !authit.authiticate
                          ? <button className="btn btn-success" onClick={() => authit.dispatch({type : 'login'})}>Login</button>
                          : <button className="btn btn-danger"  onClick={() => authit.dispatch({type : 'log_out'})}>LogOut</button>
                     }
                 </div>
             </div>
         </header>
    )
}

export default Header