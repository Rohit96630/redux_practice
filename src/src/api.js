import React from 'react';
const Myapi = () =>{
    return(
        <div className="container text-center">
            <div className='row'>
                <div className='col-lg-12'>
                    <h3 className='text-primary'> API Data Send To Redux Store </h3>
                    <button className='btn btn-primary m-3'> Send All Data To Redux </button>
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Index</th>
                                <th>Name</th>
                                <th>Phone No</th>
                                <th>City</th>
                                <th>e-Mail</th>
                            </tr>
                        </thead>
                    </table>
                </div>
            </div>
        </div>
    )
}
export default Myapi;