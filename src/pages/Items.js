import React from 'react'

import ItemsList from '../components/Items/ItemsList'
import Layout from './Layout'

const Items = () => {
    return (
        <Layout pageTitle={"Items List"}>
            <ItemsList />
        </Layout>
    )
}

export default Items