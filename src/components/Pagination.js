import React from 'react'

const Pagination = ( { currentPage, showsPerPage, totalShows, paginatHandler } ) => {
    let pageNumbersArray = []
    for (let i = 1; i<= Math.ceil(totalShows / showsPerPage); i++) {
        pageNumbersArray.push(i)
    }
    return (
        <nav>
        <ul className="pagination">
            {pageNumbersArray.map(number => 
                <li 
                    className="page-item"
                    key={number}
                >
                    <a className={`page-link ${currentPage === number ? `active` : ''}`} href="#!" onClick={() => paginatHandler(number)}>
                        {number}
                    </a>
                </li>
            )}

        </ul>
        </nav>
    )
}

export default Pagination