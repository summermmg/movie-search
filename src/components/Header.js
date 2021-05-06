import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Shows from './Shows'
import Pagination from './Pagination'

const Header = () => {
    const showsPerPage = 5;
    const [keyword, setKeyword] = useState('')
    const [currentPage, setCurrentPage] = useState(1)
    const [currentShows, setCurrentShows] = useState([])
    // All shows fetched from api
    const [fetchResult, setFetchResult] = useState([])
    const [loading, setLoading] = useState(false)
    const [err, setErr] = useState(null) 

    const fetchshow = async () => {
       try {
            setLoading(true)
            const response = await axios.get(`http://api.tvmaze.com/search/shows?q=${keyword}`)
            setFetchResult(response.data) 
            setLoading(false)
            setKeyword('')
            setCurrentPage(1)
       } catch (error) {
            setLoading(false)
            error.response && error.response.data.detail
            ? setErr(error.response.data.detail)
            : setErr(error.message)
       }
    }

    useEffect(() => {
        // Get shows on current page (1st page index from 0 to 4) when currentPage or fetchResult changed 
        if (fetchResult) {
            const indexOfLastShow = currentPage * showsPerPage;
            const indexOfFirstShow = indexOfLastShow - showsPerPage;
            setCurrentShows(fetchResult.slice(indexOfFirstShow, indexOfLastShow))
        }
    }, [currentPage, showsPerPage, fetchResult])

    const paginateHandler = (selectPageNumber) => setCurrentPage(selectPageNumber)

    return (

        <section>
            <h2>Search TV Show</h2>
            <div className="bar-container">
                <div className="bar">
                    <input className="searchbar" type="text" title="Search" value={keyword} onChange = {(e) => setKeyword(e.target.value)}></input>                   
                </div>
                <a href="#!" onClick = {fetchshow}><i className="fa fa-search"></i></a>
            </div>
            {loading && <p>Loading on TV search...</p>}
            {err && <p>Fail to load TV show</p> }
            {/* Once currentPage state updated, pass shows of current page to Show component */}
            <Shows 
                currentShows = {currentShows}    
            />

            <Pagination
                currentPage={currentPage}
                showsPerPage={showsPerPage}
                totalShows={fetchResult.length}
                paginatHandler={paginateHandler}
            />    

        </section>

    )
}

export default Header
