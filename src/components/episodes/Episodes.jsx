import React from 'react';
import { Cart } from '../../featurs';
import './Episodes.scss'


const Episodes = () => {
    const carts = [
        {
            img: fram1,
            catalo: 'Geat',
            episode: 'episode 3',
            title: 'Should you get outboard audio gear?',
            description: `Is hardware really worth it when it comes
                     to podcasting? The answer is...it depends. Here’s our reasons on why 
                     you might want to consider picking something up.`
        }
    ]
    return (
        <div className='episodes'>
            <div className='episodes-title'>
                <h2>Latest episodes</h2>
                <button>View all episodes</button>
            </div>
            
            <Cart />
        </div>
    );
}

export default Episodes;
