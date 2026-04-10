import react from 'react';
import Accordion from './Accordion';

function Applicant({data}) {
    return (
        <div className='Card'>
            <div className="header">Second Look ATS Auditing Tool</div>
            
            <div className="accordion">
                <Accordion data={data} />
            </div>
        </div>
    )
}

export default Applicant;

