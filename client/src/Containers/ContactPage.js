import React, {Component} from 'react';
import ReactContactForm from 'react-mail-form';

class ContactPage extends Component {
    render() {
        return (
            <div className="ContactPage">
                <form className="contact-form">
                    <input type="text" placeholder="Email..."/>
                    <input type="text" placeholder="Subject..."/>
                    <textarea name="" id="" cols="30" rows="10"></textarea>
                </form>
            </div>
        );
    }
}

export default ContactPage;