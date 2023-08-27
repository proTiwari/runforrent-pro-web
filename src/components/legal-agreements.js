import React from 'react';
import Navbar from './global-components/navbar';
import PageHeader from './global-components/page-header';
import ContactInfo from './section-components/contact-info';
import ContactForm from './section-components/contact-form';
import Map from './section-components/map';
import AgreementInfo from './section-components/agreement-info';
import CallToActionV1 from './section-components/call-to-action-v1';
import Footer from './global-components/footer';

const LegalAgreement = () => {
    return <div>
        <Navbar />
        <PageHeader headertitle="Legal Agreements" subheader="Legal Agreements" />
        {/* <ContactInfo /> */}
        <AgreementInfo />
        <Map />
        <CallToActionV1 />
        <Footer />
    </div>
}

export default LegalAgreement

