
//This component is where the pagination of statements takes place, it divide the area and showcase [articular number of rows of statements per page


import React from 'react';
import { Pagination } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

import './styles.scss';

const Paginate = (props) => {
  const { pages, page, utils } = props;

  return (
    pages > 1 && (
      <Pagination className="justify-content-center">
        {[...Array(pages).keys()].map((x) => (
          <LinkContainer
            key={x + 1}
            to={`/cards/${utils.cardId}/statements/${utils.year}/${
              utils.month
            }/${x + 1}`}
          >
            <Pagination.Item active={x + 1 === page}>{x + 1}</Pagination.Item>
          </LinkContainer>
        ))}
      </Pagination>
    )
  );
};

export default Paginate;
