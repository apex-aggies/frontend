import React, { useState } from 'react';

const styles = {
  redColor: {
    backgroundColor: 'red'
  },
  yellowColor: {
    backgroundColor: 'yellow'
  },
  greenColor: {
    backgroundColor: 'green'
  },
};

const Accordion = ({ title, score, level, packetID, data }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="accordion-item">
      <div className="accordion-title" onClick={() => setIsActive(!isActive)}>
        <div className="title-right">
          <div></div>
          <div>Applicant: {data?.applicant_id}</div>
        </div>
        <div className='title-left'>
          <div classname="accordion-score">{score}%</div>
          <div className="accordion-level" style={styles.greenColor}>{level}</div>
        </div>
      </div>
        {isActive && <div className="accordion-content">
          <ul>
            <li><span>PackeID:</span> <span>{packetID}</span></li>
            <li>Triggered Rules:</li>
            <ul>
              <li><span>broken rule</span><span>50pts</span></li>
            </ul>
          </ul>
          
        </div>}
    </div>
  );
};

export default Accordion;