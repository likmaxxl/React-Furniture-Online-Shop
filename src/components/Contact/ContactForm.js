import React from 'react'
import PropTypes from 'prop-types'
import {UserContext} from '../Context'

const  ContactForm = (props) => {
  return (
<>
<UserContext.Consumer>
{
  (context)=>(

<form onSubmit={context.sendMessage}>
  <div class="form-row">
    <div class="form-group col-md-6">
      <label for="inputFirstName">First name <span>*</span></label>
    <input
      type="text"
      class={context.state.nameFormControl}
      id="inputFirstName"
      name="firstName"
      value={context.state.firstName}
      onChange={context.onChangeInputFieldForm}
      />
      <div class="invalid-feedback">
        Please enter First Name.
           </div>
    </div>
    <div class="form-group col-md-6">
      <label for="inputLastName">Last name <span>*</span></label>
    <input
      type="text"
      class={context.state.lastNameFormControl}
      id="inputLastName"
      name="lastName"
      value={context.state.lastName}
      onChange={context.onChangeInputFieldForm}
      />
      <div class="invalid-feedback">
          Please enter Last Name.
           </div>
    </div>
  </div>
  <div class="form-group">
    <label for="inputEmail">Email <span>*</span></label>
  <input
    type="email"
    class={context.state.emailFormControl}
    id="inputEmail"
    name="email"
    value={context.state.email}
    onChange={context.onChangeInputFieldForm}
    />
    <div class="invalid-feedback">
        Please enter a valid email adress: example@mail.com
         </div>
  </div>
  <div class="form-group">
    <label for="inputMessage">Message <span>*</span></label>
  <input
    type="text"
    class={context.state.messageFormControl}
    id="inputMessage"
    name="message"
    value={context.state.message}
    onChange={context.onChangeInputFieldForm}
    />
    <div class="invalid-feedback">
        Please type message.
         </div>
  </div>
  <div class="form-group">
     <label for="additionalDetails">Additional details</label>
   <textarea
     class="form-control"
     id="additionalDetails"
     rows="4"
     name="details"
     value={context.state.details}
     onChange={context.onChangeInputFieldForm}
     ></textarea>
   </div>
   <div className="buttonSend">
     <button type="submit" class="btn btn-primary">Send message</button>

   </div>
</form>
)
}
</UserContext.Consumer>
</>
  )
}

export default ContactForm
