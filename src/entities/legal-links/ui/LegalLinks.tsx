import { ROUTES } from '~shared/config';

const PAGE_SLUGS = {
  privacy: ROUTES.LEGAL.path('privacy'),
  terms: ROUTES.LEGAL.path('terms'),
};

export function LegalLinks() {
  return (
    <p className="text-purple-text-primary group opacity-60 text-center text-xs">
      By choosing your age, you agree with{' '}
      <a href={PAGE_SLUGS.terms} className="underline">
        Terms and Conditions
      </a>
      ,{' '}
      <a href={PAGE_SLUGS.privacy} className="underline">
        Privacy Policy
      </a>
    </p>
  );
}
