import React from 'react';
const Mybook = () =>{
    return(
        <div className="container text-center">
            <div className='row'>
                <div className='col-lg-6 offset-3'>
                    <h3 className='text-primary'> Book Management </h3>
                    <p>
                        Enter Book Name : <input type="text" id="newbook"/>
                        <button className="btn btn-primary m-3"> Save Book </button>
                    </p>
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Book Index</th>
                                <th>Book Name</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                    </table>
                </div>
            </div>
        </div>
    )
}
export default Mybook;