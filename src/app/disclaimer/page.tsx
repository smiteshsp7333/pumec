// Disclaimer page redirects/renders the Terms of Use content since they are combined
import TermsOfUsePage from '../terms-of-use/page';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Legal Disclaimer | PUMEC Consultants Pvt Ltd",
  description: "Terms of Use and Legal Disclaimer for PUMEC Consultants Private Limited.",
};

export default function DisclaimerPage() {
  return <TermsOfUsePage />;
}