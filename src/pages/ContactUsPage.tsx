import React from 'react';
import ContactHero from '../components/sections/contact/ContactHero';
import ContactForm from '../components/sections/contact/ContactForm';

import ContactFAQ from '../components/sections/contact/ContactFAQ';

const ContactUsPage: React.FC = () => {
    return (
        <div className="min-h-screen">
            <ContactHero />
            <ContactForm />
            <ContactFAQ />
        </div>
    );
};

export default ContactUsPage;
