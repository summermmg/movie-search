import React from 'react'

const ResultList = ({currentShows}) => {
    return (
        <section>
            <div classs="cards">
                {currentShows && 
                currentShows.map(show => (              

                    <div id={show.show.id} class="card">
                        <div class="container">
                            {show.show.image 
                            ? <div className="card-image"><img src={show.show.image.original} alt={show.show.name}></img></div>
                            : <div className="card-image"><img src="https://picsum.photos/id/1003/200/300" alt="default"></img></div>
                            }
                            <div class="content">
                                <span class='author'>{show.show.rating.average}</span>
                                <h1 class="title"><a href="#!">{show.show.name}</a></h1>
                                <p>{show.show.summary.substring(3, 100)}</p>
                            </div>        
                        </div>
                    </div>
                ))}
            </div>
        </section>  
    )
}
                
        
    


export default ResultList
