import React from 'react'

export default function PageNumber({page, active, setCurrentPage}) {
    console.log(page)

    function getPage (e) {
        e.preventDefault()
        setCurrentPage(page)
    }

    return (<>
        <li className={`page-item ${active}`}><a className="page-link" href="#" onClick={getPage}>{page}</a></li>
    </>
    )
}
