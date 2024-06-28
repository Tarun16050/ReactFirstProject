import React from 'react';

const Searchreslt = (probs) => {
    // const imga = `https://imgur.com/${probs.names}.jpg`;
    // const imga =`https://unsplash.com/s/photos/mango.png`;/https://imgur.com/CzXTtJV
    const imga = `https://picsum.photos/id/${probs.names}/200/300`;
    return (
        <>
            <div className='searchbar'>
                <img src={imga} alt='images demo'/>
            </div>
        </>
    );
}

export default Searchreslt;
