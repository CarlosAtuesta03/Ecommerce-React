import React from 'react';
function Products() {
    
    const productss=[
        {
            name:'Pc Games Escritorio',
            description:'Raizen 5 16 Ram',
            img:'/img/pc gamer.jpg',
            price:'3500000'
        },
        {
            name:'Portátil Asus ',
            description:'X411 -u44',
            img:'/img/pc2.png',
            price:'25000000'
        },
        {
            name:'Portátil Asus Tuf Gaming',
            description:'Inspiron 3493',
            img:'/img/pc3.jpg',
            price:'3899900'
        },
        {
            name:'Portátil Huawei',
            description:'Matebook 13',
            img:'/img/pc4.png',
            price:'2339900'
        },
        {	
            name:'Portátil Asus',
            description:'x334-u44f',
            img:'/img/pc1.png',
            price:'2759900'
        }
    ]

    const listproducts= productss.map((product,i) =>
        <div className="card"  > 
            <img src={product.img} className="card-img-top"/>
            <div className="card-body"> 
                <h5 className="card-title">{product.name}</h5> 
                <p className="card-text">{product.price}</p> 
                <a type="button" className="btn btn-outline-primary btn-block">Ver mas</a> 
            </div> 
        </div>
    );

     return (
        <div className="Products">      
        <div className="card-columns">
                {listproducts}
            </div>
        </div>
     );
   }
    
  
   
   
export default Products;