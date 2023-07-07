import React,{useEffect,useState}from 'react'
import  "./Product.scss"
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { json } from 'react-router-dom';

const Product = () => {
    const { uid } = useParams()







    const [data, setData] = useState([]);
    const [total,setTotal] = useState(JSON.parse(localStorage.getItem('cart')))

    useEffect(() => {
      axios.get(   ` http://localhost:5000/products?ProductId=${uid}`).then((data) => {

      setData(data.data)
     
      })
       
    
    }, []);
  

    const handleAddCart =()=>{
        if(total) {
            let currentIndex = -1;
            let item = total.filter((ele, index) =>{
                if(ele.id == data[0].id) {
                    currentIndex = index;
                    return true;
                } return false;
            });
            if (item.length) {
                total[currentIndex].totalAddedTocart = Number(total[currentIndex].totalAddedTocart) + 1;
                addItemToCart(total);
            } else {
                total.push(data[0]);
                addItemToCart(total);
            }
     
        } else {
            console.log(total, "total");
            addItemToCart(data);
            setTotal(JSON.parse(localStorage.getItem('cart')))
        }
    
      
          
        }


    const addItemToCart = (items) => {
        localStorage.setItem('cart', JSON.stringify(items));
    }
    
    
 
  return (
    <div  className='product-container'>
        <div className='img'   
          style={{
                 backgroundSize: "contai",
                 backgroundRepeat: "no-repeat",
                  background: `url(${data[0]?.productImgUrl})`
                
                }}>
           
        </div>

        <div>
            <div>
                  <h1>name of produt</h1>  
                    <h3>detail of product</h3>          
            </div>
            <div>
                <button onClick={handleAddCart}>Add to cart</button>
            </div>
        </div>
    </div>
  )
}

export default Product