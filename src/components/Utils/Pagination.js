import parser from 'html-react-parser'

const Pagination = ({meta, handlePaginationClick}) => {

    const onPageClick = (link) => {
        if(link.url) handlePaginationClick(link)
    }

    return (
    <div className="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6">
    <div className="flex-1 flex justify-between sm:hidden">
        <a href="#" className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
        Previous
        </a>
        <a href="#" className="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
        Next
        </a>
    </div>
    <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
        <div>
        <p className="text-sm text-gray-700">
            Showing
            <span className="font-medium">{meta.from && meta.from}</span>
            to
            <span className="font-medium">{meta.to && meta.to}</span>
            of
            <span className="font-medium">{meta.total && meta.total}</span>
            results
        </p>
        </div>
        <div>
        <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
           
            {
                meta.links && meta.links.map( (link, index) => {
                    return (
                        <a key={index} onClick={ () => onPageClick(link) } className={`cursor-pointer bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium 
                            ${link.active ? "z-10 bg-indigo-50 border-indigo-500 text-indigo-600" : ""}
                            ${link.url ?? "cursor-not-allowed disable"}
                            `}
                            disabled
                              >
                        {parser(link.label)}
                        </a>
                    )
                })
            }
        </nav>
        </div>
    </div>
    </div>
    )
}
export default Pagination