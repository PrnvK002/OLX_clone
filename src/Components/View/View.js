import React,{ useContext , useEffect , useState } from 'react';
import { AuthContext, FirebaseContext } from '../../store/Context';
import { PostContext } from '../../store/postDetails';

import './View.css';
function View() {

  const [ userData , setUser ] = useState();
  const { postDetails } = useContext(PostContext);
  const { firebase } = useContext(FirebaseContext);

  console.log(postDetails);

  useEffect(() => {
    
    let { userId } = postDetails;
    firebase.firestore().collection('users').where('id','==', userId).get().then((res) => {

      res.forEach((doc) => {

        setUser(doc.data());

      })

    })
 
  }, [])
  
  console.log(userData);

  return (
    <div className="viewParentDiv">
      <div className="imageShowDiv">
        <img
          src={ postDetails.url }
          alt=""
        />
      </div>
      <div className="rightSection">
        <div className="productDetails">
          <p>&#x20B9; { postDetails.price }</p>
          <span>{ postDetails.name }</span>
          <p>{ postDetails.category }</p>
          <span>{ postDetails.createdAt }</span>
        </div>

        {
          
          userData && 

          <div className="contactDetails">

            <p>Seller details</p>
            <p>{userData.name}</p>
            <p>{userData.phone}</p>

        </div>

        }
      </div>
    </div>
  );
}
export default View;
