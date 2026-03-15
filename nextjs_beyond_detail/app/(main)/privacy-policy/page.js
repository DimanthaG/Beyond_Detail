import PrivacyPolicyClient from './PrivacyPolicyClient';

export const metadata = {
  title: 'Privacy Policy - Beyond Detail Toronto',
  description: 'Privacy Policy for Beyond Detail Toronto. Learn how we collect, use, and protect your personal information when you use our automotive detailing services.',
  alternates: { canonical: '/privacy-policy' },
};

export default function PrivacyPolicyPage() {
  return <PrivacyPolicyClient />;
}
