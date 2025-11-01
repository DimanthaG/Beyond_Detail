import React, { useState, useEffect, useRef } from 'react';
import images from '../../constants/images';
import { urlFor, client } from '../../client';
import { Loading } from '../../components';
import Tint_noTint from '../../assets/Tints/Car-Ceramic-No-Film.png';
import Tint_five from '../../assets/Tints/Car-Ceramic-5-Percent.png';
import Tint_fifteen from '../../assets/Tints/Car-Ceramic-15-Percent.png';
import Tint_thirtyFive from '../../assets/Tints/Car-Ceramic-35-Percent.png';
import Tint_fifty from '../../assets/Tints/Car-Ceramic-50-Percent.png';
import './TintsPercentageTabs.scss';

function TintsPercentageTabs() {
  const [tintsSimulatorData, setTintsSimulatorData] = useState([]);
  const [loading, setLoading] = useState(false);

  // Get Tints Simulator Section Data
  useEffect(() => {
    const query = '*[_type == "tints"]';

    client.fetch(query).then((data) => {
      setTintsSimulatorData(data);
      setLoading(true);
    });
  }, []);

  const [tintClicked, setTintClicked] = useState([
    {
      tintName: 'tint0',
      isClicked: true,
    },
    {
      tintName: 'tint5',
      isClicked: false,
    },
    {
      tintName: 'tint15',
      isClicked: false,
    },
    {
      tintName: 'tint35',
      isClicked: false,
    },
    {
      tintName: 'tint50',
      isClicked: false,
    },
  ]);

  const [tintImage, setTintImage] = useState(Tint_noTint);

  function clickNoTint() {
    setTintImage(() => Tint_noTint);

    setTintClicked(() => {
      return [
        {
          tintName: 'tint0',
          isClicked: true,
        },
        {
          tintName: 'tint5',
          isClicked: false,
        },
        {
          tintName: 'tint15',
          isClicked: false,
        },
        {
          tintName: 'tint35',
          isClicked: false,
        },
        {
          tintName: 'tint50',
          isClicked: false,
        },
      ];
    });
  }

  function clickTintFive() {
    setTintImage(() => Tint_five);

    setTintClicked(() => {
      return [
        {
          tintName: 'tint0',
          isClicked: false,
        },
        {
          tintName: 'tint5',
          isClicked: true,
        },
        {
          tintName: 'tint15',
          isClicked: false,
        },
        {
          tintName: 'tint35',
          isClicked: false,
        },
        {
          tintName: 'tint50',
          isClicked: false,
        },
      ];
    });
  }

  function clickTintFifteen() {
    setTintImage(() => Tint_fifteen);

    setTintClicked(() => {
      return [
        {
          tintName: 'tint0',
          isClicked: false,
        },
        {
          tintName: 'tint5',
          isClicked: false,
        },
        {
          tintName: 'tint15',
          isClicked: true,
        },
        {
          tintName: 'tint35',
          isClicked: false,
        },
        {
          tintName: 'tint50',
          isClicked: false,
        },
      ];
    });
  }

  function clickTintThirtyFive() {
    setTintImage(() => Tint_thirtyFive);

    setTintClicked(() => {
      return [
        {
          tintName: 'tint0',
          isClicked: false,
        },
        {
          tintName: 'tint5',
          isClicked: false,
        },
        {
          tintName: 'tint15',
          isClicked: false,
        },
        {
          tintName: 'tint35',
          isClicked: true,
        },
        {
          tintName: 'tint50',
          isClicked: false,
        },
      ];
    });
  }

  function clickTintFifty() {
    setTintImage(() => Tint_fifty);

    setTintClicked(() => {
      return [
        {
          tintName: 'tint0',
          isClicked: false,
        },
        {
          tintName: 'tint5',
          isClicked: false,
        },
        {
          tintName: 'tint15',
          isClicked: false,
        },
        {
          tintName: 'tint35',
          isClicked: false,
        },
        {
          tintName: 'tint50',
          isClicked: true,
        },
      ];
    });
  }

  return (
    <>
      {loading && tintsSimulatorData.length !== 0 ? (
        <div className='tintsPercentageTabs__wrapper'>
          <h1 className='tintsPercentage__title'>
            Visualize Your Window Tint
          </h1>
          <hr className='tintsPercentage__divider' />
          <p>{tintsSimulatorData[0].tintsSimulator.description}</p>
          <div className='tintsPercentageTabs__container'>
            <div className='tab-cont'>
              <button
                className={tintClicked[0].isClicked ? 'tintClicked' : 'but'}
                onClick={clickNoTint}
              >
                No Film Tint
              </button>
              <button
                className={tintClicked[1].isClicked ? 'tintClicked' : 'but'}
                onClick={clickTintFive}
              >
                5%
              </button>
              <button
                className={tintClicked[2].isClicked ? 'tintClicked' : 'but'}
                onClick={clickTintFifteen}
              >
                15%
              </button>
              <button
                className={tintClicked[3].isClicked ? 'tintClicked' : 'but'}
                onClick={clickTintThirtyFive}
              >
                35%
              </button>
              <button
                className={tintClicked[4].isClicked ? 'tintClicked' : 'but'}
                onClick={clickTintFifty}
              >
                50%
              </button>
            </div>
            <div className='tab-content' id='noTint'>
              <img src={tintImage} alt='' />
            </div>
          </div>
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
}

export default React.memo(TintsPercentageTabs);
