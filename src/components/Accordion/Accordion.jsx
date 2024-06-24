import React, { useState } from 'react';
import './Accordion.css';

const accordionData = [
  {
    title: "When and how it should be used?",
    content: "Accordions are best used when you need to present a lot of information in a limited space. They can help in organizing content and improving user experience by avoiding overwhelming the user with too much information at once. Use them for FAQs, product features, or any section where you need to manage the space efficiently."
  },
  {
    title: "What's an accordion?",
    content: "The accordion is a graphical control element comprising a vertically stacked list of items, such as labels or thumbnails. An accordion is similar in purpose to a tabbed interface, a list of items where exactly one item is expanded into a panel"
  },
  {
    title: "What if the user clicks on a collapsed card while another card is open?",
    content: "Ideally, the currently open card should collapse and the new card should expand. This behavior ensures that only one card is open at a time, keeping the interface clean and avoiding clutter. This can be achieved by managing the state appropriately in your component logic."
  },
  {
    title: "How to choose an icon to indicate expansion?",
    content: "Choosing the right icon is important for a good user experience. Typically, a '+' icon is used to indicate that an item can be expanded, and a '-' icon indicates that it can be collapsed. Ensure that the icons are intuitive and provide a clear indication of the action that will occur when they are clicked."
  }
];

const Accordion = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="accordion">
      <h2 className="accordion-header">The Barebones Of An Accordion</h2>
      <p className="accordion-subheader">Highlighting important details of a section and revealing <br/>more details upon a tap or click, if necessary.</p>
      {accordionData.map((item, index) => (
        <div className="accordion-item" key={index}>
          <div className={`accordion-title ${openIndex === index ? 'active' : ''}`} onClick={() => toggleAccordion(index)}>
            <h3>{item.title}</h3>
            <span>{openIndex === index ? '-' : '+'}</span>
          </div>
          {/* {openIndex === index && <div className="accordion-content" dangerouslySetInnerHTML={{ __html: item.content }} />} */}
          <div className={`accordion-content ${openIndex === index ? 'open' : ''}`} dangerouslySetInnerHTML={{ __html: item.content }} />

        </div>
      ))}
    </div>
  );
};

export default Accordion;
