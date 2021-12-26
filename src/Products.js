import React from 'react'
import CardItem from './CardItem'
import './Cards.css'
import './Products.css'
function Products() {
    return (
        <div className='card'>
            <h1 className='drp1'>Collection N°1</h1>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                        <CardItem
                            src='https://cdn.shopify.com/s/files/1/0083/4856/5568/files/LOOK_4_EXTRA_SHOT_16_WEB_81b876a6-68ed-4b01-ba12-14fbe24a67d5.jpg?v=1559809396'
                            text='Que La Famille x Rémi Procureur DRP1'
                            label='Collection N°1'
                            path='/sign-up'
                        />
                        <CardItem
                            src='https://cdn.shopify.com/s/files/1/0083/4856/5568/files/LOOK_5_ANGLE_2_SHOT_24_WEB.jpg?v=1559109601'
                            text='Que La Famille x Rémi Procureur DRP1'
                            label='Collection N°1'
                            path='/sign-up'
                        />
                    </ul>
                    <ul className='cards__items'>
                        <CardItem
                            src='https://cdn.shopify.com/s/files/1/0083/4856/5568/files/COEUR_SHOT_04.jpg?v=1559109707'
                            text='Que La Famille x Rémi Procureur DRP1'
                            label='Collection N°1'
                            path='/sign-up'
                        />
                        <CardItem
                            src='https://cdn.shopify.com/s/files/1/0083/4856/5568/files/LOOK_3_ANGLE_1_SHOT_47_WEB.jpg?v=1559109515'
                            text='Que La Famille x Rémi Procureur DRP1'
                            label='Collection N°1'
                            path='/sign-up'
                        />
                        <CardItem
                            src='https://cdn.shopify.com/s/files/1/0083/4856/5568/files/LOOK_1_ANGLE_2_SHOT_02_WEB.jpg?v=1559109342'
                            text='Que La Famille x Rémi Procureur DRP1'
                            label='Collection N°1'
                            path='/sign-up'
                        />
                    </ul>
                </div>
            </div>

            <h1 className='drp2'>Summer Collection</h1>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                        <CardItem
                            src='https://cdn.shopify.com/s/files/1/0083/4856/5568/files/56102_2020_07_10_QLF_LOOKBOOK_ETE_1.jpg?v=1594999260'
                            text='Que La Famille x Rémi Procureur DRP2'
                            label='Summer'
                            path='/sign-up'
                        />
                        <CardItem
                            src='https://cdn.shopify.com/s/files/1/0083/4856/5568/files/41021_2020_07_10_QLF_LOOKBOOK_ETE.jpg?v=1594999346'
                            text='Que La Famille x Rémi Procureur DRP2'
                            label='Summer'
                            path='/sign-up'
                        />
                    </ul>
                    <ul className='cards__items'>
                        <CardItem
                            src='https://cdn.shopify.com/s/files/1/0083/4856/5568/files/49016_2020_07_10_QLF_LOOKBOOK_ETE_1.jpg?v=1594998597'
                            text='Que La Famille x Rémi Procureur DRP2'
                            label='Summer'
                            path='/sign-up'
                        />
                        <CardItem
                            src='https://cdn.shopify.com/s/files/1/0083/4856/5568/files/55006_2020_07_10_QLF_LOOKBOOK_ETE.jpg?v=1594999119'
                            text='Que La Famille x Rémi Procureur DRP2'
                            label='Summer'
                            path='/sign-up'
                        />
                        <CardItem
                            src='https://cdn.shopify.com/s/files/1/0083/4856/5568/files/ACCESSOIRES039_2020_07_10_QLF_LOOKBOOK_ETE.jpg?v=1594999499'
                            text='Que La Famille x Rémi Procureur DRP2'
                            label='Summer'
                            path='/sign-up'
                        />
                    </ul>
                </div>
            </div>

            <h1 className='drp3'>Building Collection</h1>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                        <CardItem
                            src='https://cdn.shopify.com/s/files/1/0083/4856/5568/files/QLF_Batiments_LB-4.jpg?v=1607176484'
                            text='Que La Famille x Rémi Procureur DRP3'
                            label='Building'
                            path='/sign-up'
                        />
                        <CardItem
                            src='https://cdn.shopify.com/s/files/1/0083/4856/5568/files/QLF_Batiments_LB-16.jpg?v=1607176484'
                            text='Que La Famille x Rémi Procureur DRP3'
                            label='Building'
                            path='/sign-up'
                        />
                    </ul>
                    <ul className='cards__items'>
                        <CardItem
                            src='https://cdn.shopify.com/s/files/1/0083/4856/5568/files/QLF_Batiments_LB-19.jpg?v=1607176483'
                            text='Que La Famille x Rémi Procureur DRP3'
                            label='Building'
                            path='/sign-up'
                        />
                        <CardItem
                            src='https://cdn.shopify.com/s/files/1/0083/4856/5568/files/QLF_Batiments_LB-3.jpg?v=1607176484'
                            text='Que La Famille x Rémi Procureur DRP3'
                            label='Building'
                            path='/sign-up'
                        />
                        <CardItem
                            src='https://cdn.shopify.com/s/files/1/0083/4856/5568/files/QLF_Batiments_LB-20.jpg?v=1607176484'
                            text='Que La Famille x Rémi Procureur DRP3'
                            label='Building'
                            path='/sign-up'
                        />
                    </ul>
                </div>
            </div>

            <h1 className='drp4'>Au DD Collection</h1>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                        <CardItem
                            src='https://cdn.shopify.com/s/files/1/0083/4856/5568/files/1080x1080_DRPAUDD_POST_4_14.jpg?v=1587113536'
                            text='Que La Famille x Rémi Procureur DRP4'
                            label='Building'
                            path='/sign-up'
                        />
                        <CardItem
                            src='https://cdn.shopify.com/s/files/1/0083/4856/5568/files/1080x1080_DRPAUDD_POST_4_15.jpg?v=1587113474'
                            text='Que La Famille x Rémi Procureur DRP4'
                            label='Building'
                            path='/sign-up'
                        />
                    </ul>
                    <ul className='cards__items'>
                        <CardItem
                            src='https://cdn.shopify.com/s/files/1/0083/4856/5568/files/1080x1080_DRPAUDD_POST_4_18.jpg?v=1587112513'
                            text='Que La Famille x Rémi Procureur DRP4'
                            label='Building'
                            path='/sign-up'
                        />
                        <CardItem
                            src='https://cdn.shopify.com/s/files/1/0083/4856/5568/files/1080x1080_DRPAUDD_POST_4_19.jpg?v=1587112288'
                            text='Que La Famille x Rémi Procureur DRP4'
                            label='Building'
                            path='/sign-up'
                        />
                        <CardItem
                            src='https://cdn.shopify.com/s/files/1/0083/4856/5568/files/1080x1080_DRPAUDD_POST_4_16.jpg?v=1587112887'
                            text='Que La Famille x Rémi Procureur DRP4'
                            label='Building'
                            path='/sign-up'
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Products
