import React from "react";

const ProductCard = ({ item, setid }) => {
    return (
        <div className="card" style={{ height: "25rem", width: "15rem", padding: '20px' }}>
            <img className="card-img-top" src={item.image} alt="" />
            <div className="card-body">
                <h5 className="card-title">{item.title}</h5>
                <button onClick={e => setid(item.id)} className="btn btn-primary" data-toggle="modal" data-target="#exampleModal">Go somewhere</button>
            </div>
        </div>
    );
}

export default ProductCard