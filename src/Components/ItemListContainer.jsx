import React from 'react';

const ItemListContainer = ({greeting}) => {
    return (
        <div style={{fontSize: "40px", backgroundColor: "lightblue", marginTop: "20px"}}>
            {greeting}
        </div>
    );
}

export default ItemListContainer;