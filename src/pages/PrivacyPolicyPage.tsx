import React from 'react';
import PolicyPage from '../components/layout/PolicyPage';

const PrivacyPolicyPage: React.FC = () => (
    <PolicyPage
        badge="Legal"
        title="Privacy Policy"
        effectiveDate="Effective Date: March 13, 2026"
        description="GA HireSync respects your privacy and is committed to protecting the personal information you share with us. This Privacy Policy explains how we collect, use, store, and protect your information when you use our website and services."
        sections={[
            {
                heading: 'Information We Collect',
                content: 'We may collect the following types of information:',
                bullets: [
                    'Personal information such as name, email address, phone number, company details, and job-related information.',
                    'Candidate information including resumes, work experience, skills, and other employment-related data.',
                    'Usage information including device information, IP address, browser type, and activity on the platform.',
                ],
            },
            {
                heading: 'How We Use Your Information',
                content: 'Your information may be used to:',
                bullets: [
                    'Provide and operate the GA HireSync platform.',
                    'Enable recruiters, agencies, and employers to manage hiring processes.',
                    'Improve platform performance and user experience.',
                    'Communicate updates, notifications, or support responses.',
                    'Maintain security and prevent unauthorized activities.',
                ],
            },
            {
                heading: 'Data Sharing',
                content: 'GA HireSync does not sell personal information. However, data may be shared with:',
                bullets: [
                    'Authorized recruiters, employers, and agencies using the platform.',
                    'Third-party service providers that support platform operations.',
                    'Legal authorities when required by law.',
                ],
            },
            {
                heading: 'Data Security',
                content: 'We implement industry-standard security measures including encryption, controlled access, and secure infrastructure to protect your data.',
            },
            {
                heading: 'User Rights',
                content: 'Users may request to:',
                bullets: [
                    'Access their stored data.',
                    'Update or correct their information.',
                    'Request deletion of their data.',
                    'Withdraw consent where applicable.',
                ],
            },
            {
                heading: 'Contact Us',
                content: 'For questions regarding this policy, please contact us at the email below. Company: GA HireSync.',
            },
        ]}
    />
);

export default PrivacyPolicyPage;
