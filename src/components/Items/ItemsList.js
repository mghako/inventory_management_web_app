import React, {useState, useEffect} from 'react'
import api from '../../api'
import Item from './Item'

const ItemsList = () => {
    
    const [items, setItems] = useState([])
    

    const fetchItems =  async () => {
        const response = await api().get('/api/v1/items')
        if(response.status === 200) {
            setItems(response.data)
            console.log("response data", response.data)
        }
    }

    const itemsData = items.map( (item) =>
            <Item key={item.id} item={item}/>
    )

    useEffect(() => {
        let apiSubscribed = true
        if(apiSubscribed) fetchItems()

        return () => {
            apiSubscribed = false
        }
    }, [])

    return (
        <div className="flex flex-col">
            <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                    <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Name
                                    </th>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Price
                                    </th>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Size
                                    </th>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Color
                                    </th>
                                    <th scope="col" className="relative px-6 py-3">
                                        <span className="sr-only">Edit</span>
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                {itemsData}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ItemsList