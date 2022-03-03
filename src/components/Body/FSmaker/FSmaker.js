import React, { Component } from 'react'
import "../../../allcss.css"
import Cross from '../../../assets/Body/Trialitems/cross.png';

class FSmaker extends Component {
  render(){
  return (
    <div className='FSmaker-wrapper'>
    <div className='FSmaker-blue'></div>
      <div className='FSmaker-inner-wrap'>
        <div className='FSmaker-top'>
          <h1>Free slogan maker</h1>
          <p>Simply enter a term that describes your business, and get up to 1,000 relevant slogans for free.</p>
          <h6>Word for your slogan</h6>
          <div className='FSmaker-textfield'>
          <div><p>Cozy</p></div>
          <div><img src={Cross} alt=""></img></div>
          </div>
          <br></br>
          <div className='FSmaker-button'> <button>Generate slogans</button></div>
        </div>
        <div className='FSmaker-bottom'>
          <div className='FSmaker-bottom-head'>
            <div className='slogan-heading'>
              <h1>We have generated 1,023 slogans for “cozy”</h1>
            </div>
            <div className='slogan-download'>
              <button>Download All</button>
            </div>
          </div>
          <div className='FSmaker-bottom-content'>
            
            <div className='slogan-element'>
            <p>There is no Sore it will Not Heal, No cool it will not Subdue.</p>
            </div>
            <div className='slogan-element'>
            <p>coziness building for tomorrow</p>
            </div>
            <div className='slogan-element'>
            <p>There is no Sore it will Not Heal, No cool it will not Subdue.</p>
            </div>
            <div className='slogan-element'>
            <p>Review the facts cool is the best.</p>
            </div>
            <div className='slogan-element'>
            <p>Review the facts cool is the best.</p>
            </div>
            <div className='slogan-element'>
            <p>coziness building for tomorrow</p>
            </div>
            <div className='slogan-element'>
            <p>There is no Sore it will Not Heal, No cool it will not Subdue.</p>
            </div>
            <div className='slogan-element'>
            <p>coziness building for tomorrow</p>
            </div>
            <div className='slogan-element'>
            <p>There is no Sore it will Not Heal, No cool it will not Subdue.</p>
            </div>
            <div className='slogan-element'>
            <p>coziness building for tomorrow</p>
            </div>
            <div className='slogan-element'>
            <p>There is no Sore it will Not Heal, No cool it will not Subdue.</p>
            </div>
            <div className='slogan-element'>
            <p>coziness building for tomorrow</p>
            </div>
            <div className='slogan-element'>
            <p>There is no Sore it will Not Heal, No cool it will not Subdue.</p>
            </div>
            <div className='slogan-element'>
            <p>coziness building for tomorrow</p>
            </div>
            <div className='slogan-element'>
            <p>There is no Sore it will Not Heal, No cool it will not Subdue.</p>
            </div>
            <div className='slogan-element'>
            <p>coziness building for tomorrow</p>
            </div>
            <div className='slogan-element'>
            <p>There is no Sore it will Not Heal, No cool it will not Subdue.</p>
            </div>
            <div className='slogan-element'>
            <p>coziness building for tomorrow</p>
            </div>
             
          </div>
        </div>
        <div className='FSmaker-paging'>
        <div className='paging-blank'></div>
        <div className='paging-number' style={{color:"blue"}}>
        1 2 3 ... 21
        </div>
        <div className='paging-next'>
        <div><p>Next</p> </div>
        </div>

        </div>
      </div>
    </div>
  );
}
}

export default FSmaker