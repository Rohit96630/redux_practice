import React from 'react';
import { Savebook, Deletebook } from './action/myaction';
import { useSelector, useDispatch } from 'react-redux';

const Mybook = () =>{
    const allbook = useSelector(state=>state.Booklist);
    const dispatch = useDispatch();
    return(
        <div className="container text-center">
            <div className='row'>
                <div className='col-lg-6 offset-3'>
                    <h3 className='text-primary'> Book Management : {allbook.length}  </h3>
                    <p>
                        Enter Book Name : <input type="text" id="newbook"/>
                        <button 
                        className="btn btn-primary m-3"
                        onClick={ ()=>dispatch( Savebook() ) }> Save Book </button>
                    </p>
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Book Index</th>
                                <th>Book Name</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                allbook.map((name ,index)=>{
                                    return(
                                        <tr key={index}>
                                            <td>{index}</td>
                                            <td>{name}</td>
                                            <td> 
                            <button 
                                className="btn btn-danger btn-sm"
                                onClick={ ()=>dispatch( Deletebook(index) ) }>
                                Delete
                            </button>
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
export default Mybook;