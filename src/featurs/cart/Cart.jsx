
import './Card.scss'
import cartImg from '../../images/Frame.png'

export const Cart = (props) => {
    const {img, }
    return (
        <div className='cart-conteiner'>
            <div className='cart-conteiner-img'>
                <img src={cartImg} alt="" />
            </div>
            <div className='cart-conteiner-descriptions'>
                <p className='category'>Geat</p>
                <p className='episode'>Episode 3</p >
                <h2 className='title'>Should you get outboard audio gear?</h2>
                <p className='description'>
                    Is hardware really worth it when it comes
                     to podcasting? The answer is...it depends. Here’s our reasons on why 
                     you might want to consider picking something up.
                     </p>
            </div>

        </div>
    );
}

export default Cart;
