import React from "react";
import {Link} from 'react-router-dom';

const header = (props) => {
    return (
        <header>
            <nav className="navbar navbar-expand-md navbar-dark navbar-fixed bg-danger">
                <div className={"container"}>
                    <a className="navbar-brand" href="/books">Library Application</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse"
                            aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarCollapse">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <Link className="nav-link text-white" to={"/books"}>Books</Link>
                            </li>
                            <li className="nav-item active">
                                <Link className="nav-link text-white" to={"/categories"}>Categories</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>

    )
}

export default header;