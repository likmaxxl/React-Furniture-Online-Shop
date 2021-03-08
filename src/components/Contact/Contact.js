import React from 'react'
import PropTypes from 'prop-types'
import ContactForm from './ContactForm'
const Contact = (props) => {
  return (
<>
  <div className="contactPage">
<div className="contactHeader">
  <div className="container">
    <h6>GOT A QUESTION?</h6>
  <h1>Contact Bazar</h1>
<p>We’re here to help and answer any question you might<br/> have. We look forward to hearing from you.</p>
  </div>
</div>
<div className="contactForm">
  <div className="container">
    <div className="row">
      <div className="coll col-lg-6">
      <ContactForm/>
      </div>
<div className="coll col-lg-6">
  <div className="contactInformation">


  <div className="contactInfoHead">
    <h2>drop us a line</h2>
  <h4>We would lowe to hear from you!</h4>
<p>Would you like to discuss a potential furniture? Maybe you just want to stop in and say hi? You can send us a message using our contact form, or reach us using the information below.</p>
  </div>
  <div className="contactInfo">
    <h4>Contact information</h4>
  <div className="contactBox">
    <div className="icon">
      <i class="fas fa-map-marker-alt"></i>
    </div>
    <div className="text">
      412 Frelinghysen Ave <br/>
    New York Vej 21A 07541 SAD
    </div>
  </div>
  <div className="contactBox">
    <div className="icon">
    <i class="fas fa-phone-alt"></i>
    </div>
    <div className="text">
      <a href="tel:11111">+85 78 52 36 95</a>

    </div>
  </div>
  <div className="contactBox">
    <div className="icon">
    <i class="fas fa-envelope"></i>
    </div>
    <div className="text">

      <a href="mailto:webmaster@example.com">furnituree@bazarshop.com</a>
    </div>
  </div>
  </div>
</div>
    </div>
      </div>
  </div>
</div>
  </div>
</>
  )
}

export default Contact
