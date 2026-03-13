import React from 'react';
import PolicyPage from '../components/layout/PolicyPage';

const CancellationPolicyPage: React.FC = () => (
    <PolicyPage
        badge="Legal"
        title="Cancellation Policy"
        description="GA HireSync offers subscription-based services for agencies, recruiters, and businesses."
        sections={[
            {
                heading: 'Subscription Cancellation',
                content: 'Users may cancel their subscription at any time through their account dashboard or by contacting support.',
            },
            {
                heading: 'Effect of Cancellation',
                content: 'Upon cancellation:',
                bullets: [
                    'Access to premium features will remain active until the end of the current billing period.',
                    'No additional charges will be applied after the subscription ends.',
                ],
            },
            {
                heading: 'Refunds',
                content: 'Unless otherwise specified, payments made for subscription services are non-refundable. Exceptions may apply in cases of billing errors or technical issues.',
            },
            {
                heading: 'Account Termination',
                content: 'GA HireSync reserves the right to suspend or terminate accounts that violate platform policies or engage in misuse of services.',
            },
        ]}
    />
);

export default CancellationPolicyPage;
