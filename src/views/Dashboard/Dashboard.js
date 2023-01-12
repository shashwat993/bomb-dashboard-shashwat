// import React from 'react';
import React, { useMemo } from 'react';



import { roundAndFormatNumber } from '../../0x';
import useBombStats from '../../hooks/useBombStats';
import useBondStats from '../../hooks/useBondStats';
import useCurrentEpoch from '../../hooks/useCurrentEpoch';
import Page from '../../components/Page';
import { createGlobalStyle } from 'styled-components';
import BombImage from '../../assets/img/bomb.png';
import BBomdImage from '../../assets/img/bbond-256.png';
import BShareImage from '../../assets/img/bshare-512.png';
import BShareBNBLP from '../../assets/img/bshare-bnb-LP.png';
import BOMBBTC from '../../assets/img/bomb-bitcoin-LP.png';
import DiscordImg from '../../assets/img/discord-logo.png';
import ReadDocsImg from '../../assets/img/read-docs.png';
import usebShareStats from '../../hooks/usebShareStats';
import useCashPriceInEstimatedTWAP from '../../hooks/useCashPriceInEstimatedTWAP';
import useTotalValueLocked from '../../hooks/useTotalValueLocked';
import useTotalStakedOnBoardroom from '../../hooks/useTotalStakedOnBoardroom';
import { getDisplayBalance } from '../../utils/formatBalance';
// import {CardContent, Typography} from '@material-ui/core';
import useXbombAPR from '../../hooks/useXbombAPR';
import useStakedTotalBombBalance from '../../hooks/useTotalStakedBombBalance';




import HomeImage from '../../assets/img/background.jpg';

const BackgroundImage = createGlobalStyle`
  body {
    background: url(${HomeImage}) repeat !important;
    background-size: cover !important;
    background-color: #171923;
  }
`;



const Dashboard = () => {


  const bombStats = useBombStats();
  const bShareStats = usebShareStats();
  const tBondStats = useBondStats();
  const currentEpoch = useCurrentEpoch();
  const cashStat = useCashPriceInEstimatedTWAP();
  const TVL = useTotalValueLocked();
  const totalStaked = useTotalStakedOnBoardroom();
  const xbombAPR = useXbombAPR();
  const bombCirculatingSupply = useMemo(() => (bombStats ? String(bombStats.circulatingSupply) : null), [bombStats]);
  const bShareCirculatingSupply = useMemo(
    () => (bShareStats ? String(bShareStats.circulatingSupply) : null),
    [bShareStats],
  );
  const tBondCirculatingSupply = useMemo(
    () => (tBondStats ? String(tBondStats.circulatingSupply) : null),
    [tBondStats],
  );


  const bombTotalSupply = useMemo(() => (bombStats ? String(bombStats.totalSupply) : null), [bombStats]);
  const bShareTotalSupply = useMemo(() => (bShareStats ? String(bShareStats.totalSupply) : null), [bShareStats]);
  const tBondTotalSupply = useMemo(() => (tBondStats ? String(tBondStats.totalSupply) : null), [tBondStats]);

  const bombPriceInDollars = useMemo(
    () => (bombStats ? Number(bombStats.priceInDollars).toFixed(2) : null),
    [bombStats],
  );
  const bSharePriceInDollars = useMemo(
    () => (bShareStats ? Number(bShareStats.priceInDollars).toFixed(2) : null),
    [bShareStats],
  );
  const tBondPriceInDollars = useMemo(
    () => (tBondStats ? Number(tBondStats.priceInDollars).toFixed(2) : null),
    [tBondStats],
  );

  const scalingFactor = useMemo(() => (cashStat ? Number(cashStat.priceInDollars).toFixed(4) : null), [cashStat]);
  const xbombDailyAPR = useMemo(() => (xbombAPR ? Number(xbombAPR.dailyAPR).toFixed(2) : null), [xbombAPR]);
  const stakedTotalBombBalance = useStakedTotalBombBalance();
  const bombTotalStaked = Number(stakedTotalBombBalance / 1000000000000000000).toFixed(0);


  return (
    <Page>

      <BackgroundImage />


      <div style={{
        color: '#ffffff',
        // fontFamily: 'Nunito'

      }}>


        <div style={{
          background: 'rgba(35, 40, 75, 0.75)',
          width: '100%',
          height: '270px',
          margin: 'auto',
          // padding: '5px',
          borderRadius: '10px'



        }} >
          <br></br>
          <p style={{

            textAlign: 'center',
            marginBottom: '1px',
            marginTop: '10px',
            fontSize: '22px',
            fontWeight: '400'
          }} >Bomb Finance Summary</p>

          <hr size='1' style={{
            color: '#C3C5CB',
            width: '970px',
            marginBottom: '15px'
          }} ></hr>

          <div style={{
            display: 'flex'
          }}>
            <div style={{
              width: '50%',
              flex: '2'

            }}>
              <br></br>
              <table style={{
                width: '350px',
                marginLeft: '120px'
              }}>
                <thead>
                  <tr style={{ fontSize: '10px', fontWeight: '400', color: '#ffffff' }}>
                    <th > </th>
                    <th >Current Supply</th>
                    <th> Total Supply</th>
                    <th>Price</th>
                  </tr>
                </thead>
                <tbody style={{ textAlign: 'center', fontWeight: '600', color: '#ffffff', fontSize: '14px' }}>

                  <tr>

                    <th scope="row"> <img src={BombImage} alt="Bomb.money" style={{
                      maxHeight: '20px',
                    }} /> $BOMB</th>

                    <td>{roundAndFormatNumber(bombCirculatingSupply, 2)}</td>
                    <td>{roundAndFormatNumber(bombTotalSupply, 2)}</td>
                    <td>${bombPriceInDollars ? roundAndFormatNumber(bombPriceInDollars, 2) : '-.--'} </td>
                  </tr>
                  <br></br>

                  <tr>
                    <th scope="row">
                      <img src={BShareImage} alt="Bomb.money" style={{
                        maxHeight: '20px',
                      }} />
                      $BSHARE</th>
                    <td> {roundAndFormatNumber(bShareCirculatingSupply, 2)} </td>
                    <td>{roundAndFormatNumber(bShareTotalSupply, 2)}</td>
                    <td>${bSharePriceInDollars ? bSharePriceInDollars : '-.--'}</td>
                  </tr>
                  <br></br>
                  <tr>
                    <th scope="row">
                      <img src={BBomdImage} alt="Bomb.money" style={{
                        maxHeight: '20px',
                      }} />

                      $BBOND</th>
                    <td>{roundAndFormatNumber(tBondCirculatingSupply, 2)} </td>
                    <td>{roundAndFormatNumber(tBondTotalSupply, 2)}</td>
                    <td>${tBondPriceInDollars ? tBondPriceInDollars : '-.--'} </td>
                  </tr>
                </tbody>
              </table>

            </div>



            <div style={{
              flex: '1',
              textAlign: 'center'
            }}>
              <div style={{
                lineHeight: '0.1px',
                marginBottom: '40px'
              }}>
                <p style={{ fontSize: '18px', marginBottom: '0', marginTop: '0.5px' }}>Current Epoch</p>
                <p style={{ fontSize: '36px', marginTop: '0.1' }}>{Number(currentEpoch)}</p>
              </div>

              <div style={{
                lineHeight: '0.1px',
                marginBottom: '35px'

              }}>



                <p style={{ fontSize: '25px' }}>03:45:23</p>
                <p style={{ fontSize: '15px' }}> Next Epoch in</p>
              </div>
              <div style={{
                lineHeight: '2px',
                marginTop: '15px'
              }}>
                <p style={{ fontSize: '14px' }}>Live TWAP:  <span style={{ color: '#00E8A2', fontWeight: 'bold', letterSpacing: '2px' }}> {scalingFactor}</span> </p>
                <p style={{ fontSize: '14px' }}>TVL: <span style={{ color: '#00E8A2', fontWeight: 'Bold', letterSpacing: '2px' }}> ${roundAndFormatNumber(TVL, 2)}</span>  </p>
                <p style={{ fontSize: '14px' }}>Last Epoch TWAP: <span style={{ color: '#00E8A2', fontWeight: 'Bold', letterSpacing: '2px' }}> 1.22</span> </p>

              </div>
            </div>
          </div>

        </div>

        <br></br>


        <div style={{
          display: 'flex',
          justifyContent: 'space-between'
        }}>

          <div>

            <div style={{
              width: '800px'
            }}>
              <a href='https://docs.bomb.money/welcome-start-here/strategies' style={{
                display: 'block',
                target: "_blank",
                textAlign: 'right',
                textDecorationLine: 'underline',
                color: '#9EE6FF',
              }}>Read Investment Strategy? </a>

               <div >
                <button style={{
                  width: '800px',
                height: '40px',
                left: '196px',
                top: '365.47px',
                background: 'radial-gradient(59345.13% 4094144349.28% at 39511.5% -2722397851.45%, rgba(0, 245, 171, 0.5) 0%, rgba(0, 173, 232, 0.5) 100%)',
                border: '0.1px solid #E41A1A',
                textAlign: 'center',
                fontStyle: 'normal',
                fontWeight: '800',
                fontSize: '24px',
                lineHeight: '33px',
                marginTop: '9px',
                borderRadius: '3px',
                marginBottom: '10px',
                color:'#ffffff'
                  }}>
                  Invest Now
                  </button>
               </div>

              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                marginBottom: '-9px',
                marginTop: '-3px'
               }}>

                <div style={{
                  display: 'flex',
                  justifyContent: 'center',
                  width: '390px',
                  height: '40px',
                  background: 'rgba(255, 255, 255, 0.5)',
                  border: '1px solid #728CDF',
                  backdropFilter: 'blur(12.5px)',
                  fontWeight: '700',
                  fontSize: '18px',
                  lineHeight: '33px',
                  textAlign: 'center',
                  fontFeatureSettings: "'liga' off",
                  color: "#000000",
                  marginTop: '1px',
                  borderRadius: '3px'
                 }}>
                  <span style={{
                  }}>
                    <img src={DiscordImg} alt="Bomb.money" style={{
                      maxHeight: '16px',
                      marginRight: '6px',
                      marginBottom: '-9px',
                      border: '1px solid #ffffff',
                      padding: '3px',
                      borderRadius: '175px',
                      backgroundColor: 'white',
                      background: '#ffffff'
                    }} />
                  </span >
                  <a href='https://discord.com/' style={{
                    display: 'block',
                    color: 'black',
                    marginTop: '5px'
                  }}>
                    Chat On Discord
                  </a>
                </div>

                <div style={{
                  display: 'flex',
                  justifyContent: 'center',
                  width: '390px',
                  height: '40px',
                  background: 'rgba(255, 255, 255, 0.5)',
                  border: '1px solid #728CDF',
                  backdropFilter: 'blur(12.5px)',
                  fontWeight: '700',
                  fontSize: '18px',
                  lineHeight: '33px',
                  textAlign: 'center',
                  fontFeatureSettings: "'liga' off",
                  color: "#000000",
                  marginTop: '1px',
                  borderRadius: '3px'
                 }}>
                  <span style={{
                  }}>
                    <img src={ReadDocsImg} alt="Bomb.money" style={{
                      maxHeight: '16px',
                      marginRight: '6px',
                      marginBottom: '-9px',
                      border: '1px solid #ffffff',
                      padding: '3px',
                      borderRadius: '175px',
                      backgroundColor: 'white',
                      background: '#ffffff'
                    }} />
                  </span >
                  <a href='https://discord.com/' style={{
                    display: 'block',
                    color: 'black',
                    marginTop: '3px',
                    marginLeft: '2px'
                  }}>
                    Read Docs
                  </a>
                </div>




              </div>

            </div>

            <div style={{
              width: '800px',
              height: '207px',
              left: '196px',
              top: '463px',

              background: 'rgba(35, 40, 75, 0.75)',
              border: '1px solid #728CDF',
              backdropFilter: 'blur(5px)',
              borderRadius: '10px',
              marginTop: '20.1px',
            }}>

              <div style={{
                display: 'flex',
                justifyContent: 'space-between'
              }}>
                <div style={{ display: 'flex' }} >
                  <div style={{
                    padding: '10px',
                  }}>
                    <img src={BShareImage} alt="Bomb.money" style={{
                      maxHeight: '45px',
                    }} />
                  </div>

                  <div style={{
                    marginTop: '10px'
                  }}>
                    <div style={{ fontWeight: '800', fontSize: '22px', lineHeight: '30px' }} >Boardroom  <span style={{
                      fontWeight: '600', fontSize: '12px',
                      background: 'rgba(0, 232, 162, 0.5)',
                      borderRadius: '3px',
                      padding: '2px 8px',
                    }} > Recommended</span> </div>
                    <div style={{ fontWeight: '400', fontSize: '13px' }}>Stake BSHARE and earn BOMB every epoch </div>
                  </div>


                </div>
                <div style={{
                  marginRight: '32px',
                  marginTop: '22px'
                }} >

                  <p style={{
                    fontWeight: '600',
                    fontSize: '15px',
                    marginBottom: '0px'

                  }}> <span style={{ fontSize: '13px', fontWeight: '500' }} >TVL: </span> $1,008,430</p>
                </div>
              </div>
              <hr size='1' style={{
                color: '#C3C5CB',
                width: '705px',
                // marginBottom: '15px'
                marginLeft: '64px',
                marginTop: '-3px',
                opacity: '0.6'
              }} ></hr>
              <p
                style={{
                  fontSize: '14px',
                  fontWeight: '600',
                  textAlign: 'right',
                  marginRight: '32px',
                  marginBottom: '4px'
                }}
              > Total Staked: <span>
                  <img src={BShareImage} alt="Bomb.money" style={{
                    maxHeight: '16px',
                    margin: '-2px',
                  }} /></span>   <span>{roundAndFormatNumber(getDisplayBalance(totalStaked), 1)}</span> </p>


              <div style={{ display: 'flex' }}>
                <div style={{ marginLeft: '25px', flex: '1' }}>
                  <p style={{ fontSize: '14px' }} > Daily Returns:</p>
                  <p style={{ fontSize: '30px', marginTop: '-10px' }}> {xbombDailyAPR} %</p>
                </div>

                <div style={{ marginLeft: '25px', flex: '1' }}>
                  <p style={{ fontSize: '14px' }} > Your Stake::</p>
                  <p style={{ fontSize: '18px', marginTop: '-10px' }}> 6.0000</p>
                </div>

                <div style={{ marginLeft: '25px', flex: '1' }}>
                  <p style={{ fontSize: '14px' }} > Earned:</p>
                  <p style={{ fontSize: '18px', marginTop: '-10px' }}> {roundAndFormatNumber(bombTotalStaked)}</p>
                </div>

                <div style={{
                  flex: '2',
                  textAlign: 'center',
                  padding: '0',
                  margin: '0',
                  boder: 'none',
                  background: 'rgba(35, 40, 75, 0.75)'
                }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px', marginRight: '32px' }}>
                    <button style={{
                      backgroundColor: 'rgba(35, 40, 75, 0.75)',
                      border: '2px solid #ffffff',
                      backdropFilter: 'blur(5px)',
                      borderRadius: '20px',
                      color: '#ffffff',
                      marginTop: '14px',
                      fontSize: '15px',
                      padding: '6px 32px'

                    }}>Deposit</button>
                    <button style={{
                      backgroundColor: 'rgba(35, 40, 75, 0.75)',
                      border: '2px solid #ffffff',
                      backdropFilter: 'blur(5px)',
                      borderRadius: '20px',
                      color: '#ffffff',
                      marginTop: '14px',
                      fontSize: '15px',
                      padding: '6px 32px'

                    }} >Withdraw</button>
                  </div>

                  <button style={{
                    backgroundColor: 'rgba(35, 40, 75, 0.75)',
                    border: '2px solid #ffffff',
                    backdropFilter: 'blur(5px)',
                    borderRadius: '20px',
                    color: '#ffffff',
                    fontSize: '15px',
                    padding: '6px 76px',
                    marginRight: '32px'
                  }}>Claim Rewards</button>
                </div>
              </div>
            </div>

          </div>
          <div style={{
            width: '400px',
            height: '336px',
            left: '0px',
            top: '0px',
            background: 'rgba(35, 40, 75, 0.75)',
            border: '1px solid #728CDF',
            backdropFilter: 'blur(5px)',
            borderRadius: '10px',
            marginTop: '0'
          }}>
            <p style={{
              marginTop: '10px',
              marginLeft: '10px',
              fontWeight: 'bold'
            }}> Latest News</p>
          </div>
        </div>

        <div style={{
          width: '100%',
          height: '430.25px',
          left: '196px',
          top: '685px',
          background: 'rgba(35, 40, 75, 0.75)',
          border: '1px solid #728CDF',
          backdropFilter: 'blur(5px)',
          borderRadius: '10px',
          marginTop: '17px',

        }}>
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            marginTop: '0px',
            marginLeft: '25px'
          }} >
            <div>
              <p style={{ fontSize: '22px', fontWeight: '700' }}> Bomb Farms</p>
              <p style={{ marginTop: '-18px', fontSize: '14px', fontWeight: '400' }} > Stake Your LP tokens in our farms to start earning $BSHARE </p>
            </div>
            <div>
              <button style={{
                display: 'block',
                backgroundColor: 'rgba(35, 40, 75, 0.75)',
                border: '2px solid #ffffff',
                backdropFilter: 'blur(5px)',
                borderRadius: '20px',
                color: '#ffffff',
                fontSize: '15px',
                padding: '6px 40px',
                marginRight: '40px',
                marginTop: '30px',


              }}>Claim All</button>
            </div>
          </div>

          <div style={{
            width: '100%',
            height: '80px',
            left: '196px',
            top: '463px',
            marginTop: '0.1px',
          }}>

            <div style={{
              display: 'flex',
              justifyContent: 'space-between'
            }}>
              <div style={{ display: 'flex' }} >
                <div style={{
                  padding: '10px',
                }}>
                  <img src={BOMBBTC} alt="Bomb.money" style={{
                    maxHeight: '45px',
                    // maxHeight: '34px',
                    marginTop: ' -5px',
                    marginLeft: '9px',
                  }} />
                </div>

                <div style={{
                  marginTop: '10px',
                  marginBotton: '10px'

                }}>
                  <div style={{ fontWeight: '800', fontSize: '22px', lineHeight: '30px' }} >BOMB-BTCB  <span style={{
                    fontWeight: '600', fontSize: '12px',
                    background: 'rgba(0, 232, 162, 0.5)',
                    borderRadius: '3px',
                    padding: '2px 8px',

                  }} > Recommended</span> </div>
                </div>


              </div>
              <div style={{
                marginRight: '32px',
                marginTop: '10px'
              }} >

                <p style={{
                  fontWeight: '600',
                  fontSize: '15px',
                  marginBottom: '-1px'

                }}> <span style={{ fontSize: '13px', fontWeight: '500' }} >TVL: </span> $1,008,430</p>
              </div>
            </div>
            <hr size='1' style={{
              color: '#C3C5CB',
              width: '93%',
              // marginBottom: '15px',
              marginLeft: '64px',
              marginTop: '-18px',
              opacity: '0.6'
            }} ></hr>



            <div style={{ display: 'flex', marginTop: '30px' }}>
              <div style={{ marginLeft: '25px', flex: '1' }}>
                <p style={{ fontSize: '14px', marginTop: '0px' }} > Daily Returns:</p>
                <p style={{ fontSize: '30px', marginTop: '-11px' }}> 2% </p>
              </div>

              <div style={{ marginLeft: '25px', flex: '1' }}>
                <p style={{ fontSize: '14px', marginTop: '0px' }} > Your Stake::</p>
                <p style={{ fontSize: '18px', marginTop: '-11px' }}> 6.0000</p>
              </div>

              <div style={{ marginLeft: '25px', flex: '1' }}>
                <p style={{ fontSize: '14px', marginTop: '0px' }} > Earned:</p>
                <p style={{ fontSize: '18px', marginTop: '-11px' }}> 1660.4413 </p>
              </div>

              <div style={{
                flex: '2'
              }}>
                <div style={{ marginBottom: '10px', marginRight: '32px', display: 'flex', justifyContent: 'space-between' }}>
                  <button style={{
                    backgroundColor: 'rgba(35, 40, 75, 0.75)',
                    border: '2px solid #ffffff',
                    backdropFilter: 'blur(5px)',
                    borderRadius: '20px',
                    color: '#ffffff',
                    marginTop: '14px',
                    fontSize: '15px',
                    padding: '6px 32px'


                  }}>Deposit</button>
                  <button style={{
                    backgroundColor: 'rgba(35, 40, 75, 0.75)',
                    border: '2px solid #ffffff',
                    backdropFilter: 'blur(5px)',
                    borderRadius: '20px',
                    color: '#ffffff',
                    marginTop: '14px',
                    fontSize: '15px',
                    padding: '6px 32px'

                  }} >Withdraw</button>

                  <button style={{
                    backgroundColor: 'rgba(35, 40, 75, 0.75)',
                    border: '2px solid #ffffff',
                    backdropFilter: 'blur(5px)',
                    borderRadius: '20px',
                    color: '#ffffff',
                    marginTop: '14px',
                    fontSize: '15px',
                    padding: '6px 25px'

                  }} >Claim Rewards</button>
                </div>
              </div>
            </div>
          </div>

          <br></br>
          <br></br>
          <hr size='1' style={{
            color: '#00ADE8',
            width: '100%',
            marginBottom: '18px',
            marginTop: '45px',
            opacity: '0.2'
          }} ></hr>



          <div style={{
            width: '100%',
            height: '80px',
            left: '196px',
            top: '463px',
            marginTop: '0.1px',
          }}>

            <div style={{
              display: 'flex',
              justifyContent: 'space-between'
            }}>
              <div style={{ display: 'flex' }} >
                <div style={{
                  padding: '10px',
                }}>
                  <img src={BShareBNBLP} alt="Bomb.money" style={{
                    maxHeight: '45px',
                    // maxHeight: '34px',
                    marginTop: ' -5px',
                    marginLeft: '9px',
                  }} />
                </div>

                <div style={{
                  marginTop: '10px',
                  marginBotton: '10px'

                }}>
                  <div style={{ fontWeight: '800', fontSize: '22px', lineHeight: '30px' }} >BSHARE-BNB  <span style={{
                    fontWeight: '600', fontSize: '12px',
                    background: 'rgba(0, 232, 162, 0.5)',
                    borderRadius: '3px',
                    padding: '2px 8px',

                  }} > Recommended</span> </div>
                </div>


              </div>
              <div style={{
                marginRight: '32px',
                marginTop: '10px'
              }} >

                <p style={{
                  fontWeight: '600',
                  fontSize: '15px',
                  marginBottom: '-1px'

                }}> <span style={{ fontSize: '13px', fontWeight: '500' }} >TVL: </span> $1,008,430</p>
              </div>
            </div>
            <hr size='1' style={{
              color: '#C3C5CB',
              width: '93%',
              // marginBottom: '15px'
              marginLeft: '64px',
              marginTop: '-18px',
              opacity: '0.6'
            }} ></hr>



            <div style={{ display: 'flex', marginTop: '30px' }}>
              <div style={{ marginLeft: '25px', flex: '1' }}>
                <p style={{ fontSize: '14px', marginTop: '0px' }} > Daily Returns:</p>
                <p style={{ fontSize: '30px', marginTop: '-11px' }}> 2% </p>
              </div>

              <div style={{ marginLeft: '25px', flex: '1' }}>
                <p style={{ fontSize: '14px', marginTop: '0px' }} > Your Stake::</p>
                <p style={{ fontSize: '18px', marginTop: '-11px' }}> 6.0000</p>
              </div>

              <div style={{ marginLeft: '25px', flex: '1' }}>
                <p style={{ fontSize: '14px', marginTop: '0px' }} > Earned:</p>
                <p style={{ fontSize: '18px', marginTop: '-11px' }}> 1660.4413 </p>
              </div>

              <div style={{
                flex: '2'
              }}>
                <div style={{ marginBottom: '10px', marginRight: '32px', display: 'flex', justifyContent: 'space-between' }}>
                  <button style={{
                    backgroundColor: 'rgba(35, 40, 75, 0.75)',
                    border: '2px solid #ffffff',
                    backdropFilter: 'blur(5px)',
                    borderRadius: '20px',
                    color: '#ffffff',
                    marginTop: '14px',
                    fontSize: '15px',
                    padding: '6px 32px'


                  }}>Deposit</button>
                  <button style={{
                    backgroundColor: 'rgba(35, 40, 75, 0.75)',
                    border: '2px solid #ffffff',
                    backdropFilter: 'blur(5px)',
                    borderRadius: '20px',
                    color: '#ffffff',
                    marginTop: '14px',
                    fontSize: '15px',
                    padding: '6px 32px'

                  }} >Withdraw</button>

                  <button style={{
                    backgroundColor: 'rgba(35, 40, 75, 0.75)',
                    border: '2px solid #ffffff',
                    backdropFilter: 'blur(5px)',
                    borderRadius: '20px',
                    color: '#ffffff',
                    marginTop: '14px',
                    fontSize: '15px',
                    padding: '6px 25px'

                  }} >Claim Rewards</button>
                </div>
              </div>
            </div>
          </div>

        </div>






        <div>
          <div style={{
            width: '100%',
            height: '190px',
            left: '196px',
            top: '463px',
            background: 'rgba(35, 40, 75, 0.75)',
            border: '1px solid #728CDF',
            backdropFilter: 'blur(5px)',
            borderRadius: '10px',
            marginTop: '17px',
          }}>

            <div style={{
              display: 'flex',
              justifyContent: 'space-between'
            }}>
              <div style={{ display: 'flex' }} >
                <div style={{
                  padding: '10px',
                }}>
                  <img src={BBomdImage} alt="Bomb.money" style={{
                    maxHeight: '45px',
                  }} />
                </div>

                <div style={{
                  marginTop: '10px'
                }}>
                  <div style={{ fontWeight: '800', fontSize: '22px', lineHeight: '30px' }} >Bonds </div>
                  <div style={{ fontWeight: '400', fontSize: '13px' }}>BBOND can be purchased only on contraction periods, when TWAP of BOMB is below 1 </div>
                </div>


              </div>

            </div>

            <div style={{ display: 'flex', marginTop: '12px', justifyContent: 'space-between', marginRight: '32px' }}>
              <div style={{ marginLeft: '25px', flex: '1' }}>
                <p style={{ fontSize: '16px', marginTop: '4px', fontWeight: '500' }} > Current Price: (Bomb)^2</p>
                <p style={{ fontSize: '22px', marginTop: '-11px', fontWeight: '700' }}> BBond = 6.2872 BTCB </p>
              </div>

              <div style={{ marginLeft: '25px', flex: '1' }}>
                <p style={{ fontSize: '16px', marginTop: '4px', fontWeight: '400' }} > Available to redeem:</p>
                <p style={{ fontSize: '36px', marginTop: '-11px', fontWeight: '700' }}> 456</p>
              </div>

              <div style={{ marginLeft: '25px', flex: '1' }}>
                <p style={{ fontSize: '16px', marginTop: '4px', fontWeight: '600', marginBottom: '-3px' }} > Purchase BBond</p>
                <p style={{ fontSize: '16px', marginTop: '4px', fontWeight: '300' }} > Bomb is Over peg</p>
                <p style={{ fontSize: '16px', marginTop: '4px', fontWeight: '600' }} > Redeem Bomb</p>
              </div>




              <div style={{ marginBottom: '10px', display: 'flex', flexDirection: 'column' }}>
                <button style={{
                  backgroundColor: 'rgba(35, 40, 75, 0.75)',
                  border: '2px solid #ffffff',
                  backdropFilter: 'blur(5px)',
                  borderRadius: '20px',
                  color: '#ffffff',
                  marginTop: '-1px',
                  fontSize: '15px',
                  padding: '6px 25px',
                  opacity: '0.5'

                }}>Purchase</button>
                <button style={{
                  backgroundColor: 'rgba(35, 40, 75, 0.75)',
                  border: '2px solid #ffffff',
                  backdropFilter: 'blur(5px)',
                  borderRadius: '20px',
                  color: '#ffffff',
                  marginTop: '20px',
                  fontSize: '15px',
                  padding: '6px 25px'


                }} >Redeem</button>

              </div>

            </div>
          </div>



        </div>





      </div>

    </Page>

  );
};

export default Dashboard;




