import React from 'react'









export default function AddTocart() {


const data=JSON.parse(localStorage.getItem("cart"))











  return (
    <div className="grid">
    {data.map((val,index) => (
      <React.Fragment key={val.id}>
        <div className="Fl">
          <div className="main2">
            <img src={val.image} width={200} height={200} className="PI" />
          </div>
          <div className="main">
            <h5 style={{ marginTop: '20%' }}>{val.title}</h5>
            <h6>🏷️RS ₹{val.price}</h6>
            <h6>⭐ {val.rating.rate}</h6>
            <h6>Products available {val.rating.count}</h6>
            <div className="button">
              {/* <button className="BT">
                <Link to={`/Product/${val.id}`} className="b" >
                  view details
                </Link>

              </button> */}
              {/* <button className="BT" onClick={()=>{handleCart(val)}}> */}
               
                  {/* addtocarrt */}
                 

              {/* </button> */}
            </div>
          </div>
        </div>
      </React.Fragment>
    ))}
  </div>

  )
}
