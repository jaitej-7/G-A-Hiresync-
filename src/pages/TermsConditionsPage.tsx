import React from 'react';
import PolicyPage from '../components/layout/PolicyPage';

const TermsConditionsPage: React.FC = () => (
    <PolicyPage
        badge="Legal"
        title="Terms and Conditions"
        effectiveDate="Effective Date: March 13, 2026"
        description="These Terms and Conditions govern your use of the GA HireSync platform and services. By accessing or using the platform, you agree to comply with these terms."
        sections={[
            {
                heading: 'Platform Usage',
                content: 'Users may use GA HireSync for lawful recruitment-related activities including job posting, candidate tracking, and recruitment management.',
                bullets: [
                    'Use the platform for fraudulent or illegal activities.',
                    'Attempt to access restricted areas without authorization.',
                    'Disrupt platform operations or compromise security.',
                ],
            },
            {
                heading: 'User Accounts',
                content: 'Users are responsible for maintaining the confidentiality of their login credentials and for all activities conducted under their account.',
            },
            {
                heading: 'Service Availability',
                content: 'GA HireSync strives to maintain reliable service but does not guarantee uninterrupted platform access. Maintenance or technical issues may occasionally affect availability.',
            },
            {
                heading: 'Intellectual Property',
                content: 'All content, design, software, and trademarks associated with GA HireSync remain the property of GA HireSync and may not be reproduced without permission.',
            },
            {
                heading: 'Limitation of Liability',
                content: 'GA HireSync shall not be liable for any indirect, incidental, or consequential damages arising from the use of the platform.',
            },
            {
                heading: 'Modifications',
                content: 'We reserve the right to modify these terms at any time. Continued use of the platform constitutes acceptance of the updated terms.',
            },
        ]}
    />
);

export default TermsConditionsPage;
