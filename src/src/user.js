import React from 'react';
const Myuser = () =>{
    return(
        <div className="container text-center">
            <div className='row'>
                <div className='col-lg-12'>
                    <h3 className='text-primary'> User Management </h3>
                    <p>
                        <input type="text" id="name" placeholder='Full Name' className="m-2"/>
                        <input type="text" id="age" placeholder='Age' className="m-2"/>
                        <input type="text" id="edu" placeholder='Education' className="m-2"/>
                        <button className="btn btn-primary m-3"> Save User </button>
                    </p>
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Index</th>
                                <th>Name</th>
                                <th>Age</th>
                                <th>Education</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                    </table>
                </div>
            </div>
        </div>
    )
}
export default Myuser;