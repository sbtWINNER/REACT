
import './Card.scss'
// import cartImg from '../../images/Frame.png'

export const Cart = ({ image, catalog, episode, title, description }) => {

    return (
        <div className='cart-conteiner'>
            <div className='cart-conteiner-img'>
                <img src={image} alt="" />
            </div>
            <div className='cart-conteiner-descriptions'>
                <p className='category'>{catalog}</p>
                <p className='episode'>{episode}</p >
                <h2 className='title'>{title}</h2>
                <p className='description'>{description}</p>
            </div>

        </div>
    );
}

export default Cart;
