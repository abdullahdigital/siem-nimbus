import React, { useState } from 'react';
import Sidebar from './Sidebar';
import '../styles/HelpPage.css';

const HelpPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [expandedFAQIndex, setExpandedFAQIndex] = useState(null);

  const faqData = [
    {
      question: 'How do I change my password?',
      answer: 'To change your password, go to the Profile page, enter your new password, and confirm it.',
    },
    {
      question: 'How can I update my profile picture?',
      answer: 'You can update your profile picture by navigating to the Profile page and uploading a new image.',
    },
    {
      question: 'How do I contact support?',
      answer: 'You can contact support by emailing us or calling our hotline.',
    },
    {
      question: 'How do I generate a report?',
      answer: 'To generate a report, navigate to the Reports section, select the report type, and click "Generate".',
    },
    // Add more FAQs as needed
  ];

  const filteredFAQs = faqData.filter(faq =>
    faq.question.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const toggleFAQ = (index) => {
    setExpandedFAQIndex(expandedFAQIndex === index ? null : index);
  };

  return (
    <div className="dashboard d-flex">
      <Sidebar />
      <div className="dashboard-content container-fluid">
        <div className="container mt-4">
          <div className="header mb-4">
            <h2 className="text-primary">Help & Support</h2>
            <p className="text-muted">Find answers to common questions or contact our support team for assistance.</p>
          </div>

          <div className="search-section mb-5">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Search FAQs..."
              value={searchTerm}
              onChange={handleSearchChange}
            />
          </div>

          <div className="faq-section mb-5">
            <h3 className="text-secondary">Frequently Asked Questions</h3>
            <div className="accordion" id="faqAccordion">
              {filteredFAQs.length > 0 ? (
                filteredFAQs.map((faq, index) => (
                  <div key={index} className="card mb-3">
                    <div className="card-header p-2">
                      <h5
                        className="mb-0 faq-question"
                        onClick={() => toggleFAQ(index)}
                        data-toggle="collapse"
                        data-target={`#collapse${index}`}
                        aria-expanded={expandedFAQIndex === index}
                        aria-controls={`collapse${index}`}
                      >
                        {faq.question}
                      </h5>
                    </div>
                    <div
                      id={`collapse${index}`}
                      className={`collapse ${expandedFAQIndex === index ? 'show' : ''}`}
                      data-parent="#faqAccordion"
                    >
                      <div className="card-body">
                        <p className="faq-answer">{faq.answer}</p>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-muted">No FAQs match your search.</p>
              )}
            </div>
          </div>

          <div className="support-contact-section mb-5">
            <h3 className="text-secondary">Contact Support</h3>
            <p>If you need further assistance, please contact us:</p>
            <p>Email: <strong>support@example.com</strong></p>
            <p>Phone: <strong>+1 (800) 123-4567</strong></p>
          </div>

          <div className="documentation-section mb-5">
            <h3 className="text-secondary">Documentation Links</h3>
            <ul className="list-unstyled">
              <li className="mb-2">
                <i className="fas fa-file-alt mr-2"></i>
                <strong>User Guide:</strong> Detailed instructions on how to use the system.
              </li>
              <li className="mb-2">
                <i className="fas fa-tools mr-2"></i>
                <strong>Troubleshooting:</strong> Common issues and their solutions.
              </li>
              <li className="mb-2">
                <i className="fas fa-book mr-2"></i>
                <strong>API Documentation:</strong> Information for developers integrating with our API.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HelpPage;
