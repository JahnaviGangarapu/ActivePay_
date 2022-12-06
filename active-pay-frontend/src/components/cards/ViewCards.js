// This is to view the list of cards associated with the user

import { getAllCards } from '../redux/actions/api';
import { useEffect } from  'react';
import { useDispatch, useSelector } from 'react-redux';
import ViewCardDetails from './viewDetailsofCard';

// This is to view the list of cards associated with the user
const ViewCards = () => {
  const dispatch = useDispatch();
  const cards = useSelector(state => state.cards);
  useEffect(() => {
    dispatch(getAllCards());
  },[]);

  return(
    <div className="cards-container">
     <ul className="card-list">
        {
          cards.map(card => (
            <ViewCardDetails
              key={card._id}
              card = { card }
            />
          ))
        }
     </ul>
  </div>
  )
}

export default ViewCards;
