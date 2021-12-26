import React from 'react'
import CardItem from './CardItem'
import './Cards.css'
function Cards() {
    return (
        <div className='cards'>
            <h1>Check out these New Products!</h1>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                        <CardItem
                            src='https://cdn.shopify.com/s/files/1/0083/4856/5568/files/16.jpg?v=1591804513'
                            text='Que La Famille x Rémi Procureur DRP3'
                            label='Industrie'
                            path='/sign-up'
                        />
                        <CardItem
                            src='https://cdn.shopify.com/s/files/1/0083/4856/5568/files/02.jpg?v=1591803784'
                            text='Que La Famille x Rémi Procureur DRP3'
                            label='Luxury'
                            path='/sign-up'
                        />
                    </ul>
                    <ul className='cards__items'>
                        <CardItem
                            src='https://cdn.shopify.com/s/files/1/0083/4856/5568/files/12.jpg?v=1591803713'
                            text='Que La Famille x Rémi Procureur DRP3'
                            label='Industrie'
                            path='/sign-up'
                        />
                        <CardItem
                            src='https://cdn.shopify.com/s/files/1/0083/4856/5568/files/07.jpg?v=1591804266'
                            text='Que La Famille x Rémi Procureur DRP3'
                            label='Industrie'
                            path='/sign-up'
                        />
                        <CardItem
                            src='https://cdn.shopify.com/s/files/1/0083/4856/5568/files/18.jpg?v=1591804754'
                            text='Que La Famille x Rémi Procureur DRP3'
                            label='Industrie'
                            path='/sign-up'
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards
