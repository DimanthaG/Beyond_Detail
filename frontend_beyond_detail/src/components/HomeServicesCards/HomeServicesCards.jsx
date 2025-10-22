import React, { useState, useEffect } from 'react';
import images from '../../constants/images';
import { motion } from 'framer-motion';
import { urlFor, client } from '../../client';
import { Loading } from '../../components';
import { useNavigate } from 'react-router-dom';
import './HomeServicesCards.scss';

function HomeServicesCards() {
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(false);

  let navigate = useNavigate();

  useEffect(() => {
    const query = '*[_type == "homeServicesCards"]';

    client.fetch(query).then((data) => {
      setCards(data);
      setLoading(true);
    });
  }, []);

  return (
    <>
      {loading ? (
        <div className='homeServicesCards__section'>
          {cards.length !== 0 && (
            <>
              <div className='homeServicesCards__cards'>
                <motion.div
                  className='homeServicesCards__card firstCard'
                  whileInView={{ y: [100, 0], opacity: [0, 1] }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  <img
                    src={urlFor(cards[0].cardOne.bgImage)}
                    alt='card1'
                    loading='lazy'
                  />
                  <div className='homeServicesCards__card-description1'>
                    <div className='homeServicesCards__topDescription'>
                      <h4 className='dollarSign'>
                        {cards[0].cardOne.dollarSign}
                      </h4>
                      <h1>{cards[0].cardOne.price}</h1>
                    </div>
                    <h2>{cards[0].cardOne.heading}</h2>
                    <p>{cards[0].cardOne.description}</p>
                    <div className='arrow-button'>
                      <span
                        onClick={() => navigate(cards[0].cardOne.buttonUrl)}
                      >
                        {cards[0].cardOne.buttonLabel}
                      </span>
                    </div>
                  </div>
                </motion.div>
                <motion.div
                  className='homeServicesCards__card secondCard'
                  whileInView={{ y: [100, 0], opacity: [0, 1] }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  <img
                    src={urlFor(cards[0].cardTwo.bgImage)}
                    alt='card2'
                    loading='lazy'
                  />
                  <div className='homeServicesCards__card-description2'>
                    <div className='homeServicesCards__topDescription'>
                      <h4 className='dollarSign'>
                        {cards[0].cardTwo.dollarSign}
                      </h4>
                      <h1>{cards[0].cardTwo.price}</h1>
                    </div>
                    <h2>{cards[0].cardTwo.heading}</h2>
                    <p>{cards[0].cardTwo.description}</p>
                    <div className='arrow-button2'>
                      <span
                        onClick={() => navigate(cards[0].cardTwo.buttonUrl)}
                      >
                        {cards[0].cardTwo.buttonLabel}
                      </span>
                    </div>
                  </div>
                </motion.div>
                <motion.div
                  className='homeServicesCards__card'
                  whileInView={{ y: [100, 0], opacity: [0, 1] }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  <img
                    src={urlFor(cards[0].cardThree.bgImage)}
                    alt='card3'
                    loading='lazy'
                  />
                  <div className='homeServicesCards__card-description3'>
                    <div className='homeServicesCards__topDescription'>
                      <h4 className='dollarSign'>
                        {cards[0].cardThree.dollarSign}
                      </h4>
                      <h1>{cards[0].cardThree.price}</h1>
                    </div>
                    <h2>{cards[0].cardThree.heading}</h2>
                    <p>{cards[0].cardThree.description}</p>
                    <div className='arrow-button'>
                      <span
                        onClick={() => navigate(cards[0].cardOne.buttonUrl)}
                      >
                        {cards[0].cardThree.buttonLabel}
                      </span>
                    </div>
                  </div>
                </motion.div>
              </div>
            </>
          )}
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
}

export default React.memo(HomeServicesCards);
