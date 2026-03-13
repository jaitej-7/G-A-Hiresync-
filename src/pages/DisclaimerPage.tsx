import React from 'react';
import PolicyPage from '../components/layout/PolicyPage';

const DisclaimerPage: React.FC = () => (
    <PolicyPage
        badge="Legal"
        title="Disclaimer"
        description="The information and services provided through GA HireSync are intended to support recruitment processes but do not guarantee hiring outcomes."
        sections={[
            {
                heading: 'Platform Limitations',
                content: 'GA HireSync:',
                bullets: [
                    'Does not guarantee job placements or candidate selections.',
                    'Does not verify all information submitted by users or candidates.',
                    'Is not responsible for decisions made by recruiters, agencies, or employers using the platform.',
                ],
            },
            {
                heading: 'User Responsibility',
                content: 'Users are responsible for independently verifying candidate credentials, employment details, and hiring decisions.',
            },
            {
                heading: 'Liability',
                content: 'GA HireSync shall not be held liable for any loss, damages, or disputes arising from recruitment activities conducted through the platform.',
            },
        ]}
    />
);

export default DisclaimerPage;
