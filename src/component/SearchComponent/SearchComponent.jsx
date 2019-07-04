import React from 'react';

const SearchComponent = () => {
    return(
        <div className="row justify-content-md-center">                 
            <div className="col-sm-7">
                <input type="text" placeholder="Search Book..." className="form-control form-control-lg rounded-pill search shadow-sm p-3 mb-5 bg-white" />
            </div>
        </div>
    )
}

export default SearchComponent