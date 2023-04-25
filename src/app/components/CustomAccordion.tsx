import Accordion from 'react-bootstrap/Accordion';
import './CustomAccordion.css';

interface CustomAccordionProps {
    faqList: {id: number; question: string, answer: string}[] ;
}
const CustomAccordion:React.FC<CustomAccordionProps> = ({faqList}:CustomAccordionProps) : JSX.Element => {
    return (
        <div className='CustomAccordion'>
            <Accordion>
            {faqList && faqList.map((faq)=>(
                <Accordion.Item eventKey={faq.id.toString()} key={faq.id}>
                <Accordion.Header>{faq.question}</Accordion.Header>
                <Accordion.Body>{faq.answer}</Accordion.Body>
            </Accordion.Item>
            ))}
            </Accordion>
        </div>
      );
}

export default CustomAccordion;