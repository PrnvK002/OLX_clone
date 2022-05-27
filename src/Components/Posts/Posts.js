import React,{ useEffect , useState , useContext } from 'react';

import Heart from '../../assets/Heart';
import { FirebaseContext } from '../../store/Context';
import './Post.css';
import { useHistory } from 'react-router-dom';
import { PostContext } from '../../store/postDetails';

function Posts() {

  const { setPostDetails } = useContext(PostContext);

  const { firebase } = useContext(FirebaseContext);
  const [ products , setProducts ] = useState([]);
  const history = useHistory();

  useEffect(()=>{

    firebase.firestore().collection('products').get().then((snapshot) => {

          console.log(snapshot);
          let allProducts = snapshot.docs.map((product) => {

            return { ...product.data() , id : product.id  }

          })

          console.log(allProducts);
          setProducts(allProducts);

      })

  },[])

  return (
    <div className="postParentDiv">
      <div className="moreView">
        <div className="heading">
          <span>Quick Menu</span>
          <span>View more</span>
        </div>
        <div className="cards">

          {

            products.map((product) => {

            return (

          <div
            className="card" onClick={ ()=> { setPostDetails(product);  history.push('/view'); } }
          >
            <div className="favorite">
              <Heart></Heart>
            </div>
            <div className="image">
              <img src={product.url} alt="image loading" />
            </div>
            <div className="content">
              <p className="rate">&#x20B9; { product.price }</p>
              <span className="name" >{ product.category }</span>
              <p  className="kilometer"> { product.name }</p>
            </div>
            <div className="date">
              <span>{ product.createdAt }</span>
            </div>
          </div>

            )

          })

          }
        </div>
      </div>
      {/* <div className="recommendations">
        <div className="heading">
          <span>Fresh recommendations</span>
        </div>
        <div className="cards">
          <div className="card">
            <div className="favorite">
              <Heart></Heart>
            </div>
            <div className="image">
              <img src="../../../Images/R15V3.jpg" alt="" />
            </div>
            <div className="content">
              <p className="rate">&#x20B9; 250000</p>
              <span className="kilometer">Two Wheeler</span>
              <p className="name"> YAMAHA R15V3</p>
            </div>
            <div className="date">
              <span>10/5/2021</span>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
}

export default Posts;
