import React from 'react';

const Item = ({item}) => {
    return (
        <tr>
            <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center">
                    <div className="text-sm font-medium text-gray-900">
                    {item.name}
                    </div>
                </div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-900">{item.price}</div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-900">{item.size}</div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                <div className="text-sm text-gray-900">{item.color}</div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                {/* <a href="#" className="text-indigo-600 hover:text-indigo-900">Edit</a> */}
            </td>
        </tr>
    )
}
export default Item