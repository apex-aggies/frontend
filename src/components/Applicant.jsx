import react from 'react';
import Accordion from './Accordion';

function Applicant() {
    return (
        <div className='Card'>
            <div className="header">Second Look ATS Auditing Tool</div>
            <div className="accordion">
                    <Accordion title={"123456789"} score={"56%"} content={"sadasdsadad"} packetID={"1254"} />
                    <Accordion title={"123456789"} score={"56%"} content={"sadasdsadad"} />
                                        <Accordion title={"123456789"} score={"56%"} content={"sadasdsadad"} />

                    <Accordion title={"123456789"} score={"56%"} content={"sadasdsadad"} />

                    <Accordion title={"123456789"} score={"56%"} content={"sadasdsadad"} />

                    <Accordion title={"123456789"} score={"56%"} content={"sadasdsadad"} />

            </div>
        </div>
    )
}

export default Applicant;

