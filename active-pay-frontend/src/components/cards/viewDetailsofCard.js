//This is written to fetch the details of the card when user clicks on Details button

import React from 'react';
import { deleteCard } from '../redux/actions/api';
import { useDispatch } from 'react-redux';


const ViewCardDetails =  ({ card }) =>{

  const dispatch = useDispatch();
  // const [updateTask, setUpdateTask] = useState(false);

  const deleteCard =(e) =>{
    dispatch(deleteCard(card._id)); // calls the function which will delete from db
    deleteClass(e);
  }

  const deleteClass = (e) => {
    if(e.target.classList[0] === 'delete-btn'){
    const card = e.target.parentElement;
    card.classList.toggle('fall');
  }
  };

  const toggleView = (e) => {
    if(e.target.classList[0] === 'view-details-btn'){
    const card = e.target.parentElement;
    const li = card.childNodes[0].childNodes[1];
    li.classList.toggle('details');
    // console.log(todo.childNodes[0].childNodes[1]);
  }
  };


  return(
      <div className="card">
         <li className="card-item">
            { card.cardNumber }
            <div className="detail-view">
               <ul className="details">
                  <li> { card.cardOwnerName } </li>
                  <li> { card.outstandingAmount } </li>
                  <li> { card.expiryMonth } </li>
                  <li> { card.expiryYear } </li>
               </ul>
            </div>
         </li>
         <button className="view-details-btn" onClick = {(e) => toggleView(e)} ><i className="fa-solid fa-chevron-down"></i></button>
         <button className="delete-btn" onClick={(e) => deleteCard(e)}><i className="fa-solid fa-square-xmark"></i></button>
      </div>
    )
}

export default ViewCardDetails;
