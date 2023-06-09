import { Grid } from '@mui/material'
import React from 'react'
import dessertsData from '../../../Data/desertsData.json'
import ItemCard from '../../ItemCard/ItemCard'
import { Link } from 'react-router-dom'

const Desserts = ({ simplified }) => {
    const data = simplified ? dessertsData.slice(0,3) : dessertsData
  return (
    <div className='list-container' style={{ width: '90%', margin: '0 auto' }}>
        <div className='header'>
            <h2 className='title'>Desserts</h2>
            {simplified && <Link to='/desserts'><h2 className='explore'>Explore</h2></Link>}
        </div>
        <Grid container spacing={4} justifyContent='center'>
            {data.map(dessert => (
                <Grid item xs={12} sm={6} md={4} lg={4} key={dessert.id}>
                    <ItemCard
                        item={dessert}
                        title={dessert.title}
                        description={dessert.description}
                        alt={dessert.alt}
                        price={dessert.price}
                        image={dessert.image}
                    />
                </Grid>
            ))}
        </Grid>
    </div>
  )
}

export default Desserts