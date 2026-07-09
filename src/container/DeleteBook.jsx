import React from 'react'
import NavBar from './NavBar'

const DeleteBook = () => {
    return (
        <div>
            <NavBar />
            <h3>DELETE BOOK</h3>
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                        <div className="row g-4">
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                                <label htmlFor="" className="form-label">Book Code/ISBN</label>
                                <input type="text" className="form-control" />

                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                                <button className="btn btn-danger">Search</button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default DeleteBook