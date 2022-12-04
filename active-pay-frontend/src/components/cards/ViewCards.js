// author: Madhura Kurhadkar

import { getAllCards } from '../redux/actions/api';
import { useEffect } from  'react';
import { useDispatch, useSelector } from 'react-redux';
import ViewCardDetails from './viewDetailsofCard';


// this functions renders the detailed to-do list from ShowDetailedTask file.
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
              todo = { card }
            />
          ))
        }
     </ul>
  </div>
  )
}

export default ViewCards;
