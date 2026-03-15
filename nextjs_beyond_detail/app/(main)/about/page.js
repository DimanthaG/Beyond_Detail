import AboutClient from './AboutClient';

export const metadata = {
  title: "About Beyond Detail | Scarborough's Trusted Auto Detailing Studio",
  description: "Beyond Detail is Scarborough's trusted auto detailing studio. Professional detailing, ceramic coating & window tinting. IDA-Certified technicians. Meet the team.",
  keywords: 'about Beyond Detail Toronto, auto detailing company Scarborough, professional car detailing Markham, vehicle detailing services Pickering, GTA car care',
  alternates: { canonical: '/about' },
};

export default function AboutPage() {
  return <AboutClient />;
}
