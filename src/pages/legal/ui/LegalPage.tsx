import { AnimatePresence, motion } from 'motion/react';
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ROUTES, env } from '~shared/config';
import { BaseLayout } from '~shared/layout/base-layout';

import { LegalPageShimmer } from './LegalPageShimmer';

const PAGE_SLUGS = {
  privacy: env.PRIVACY_POLICY_URL,
  terms: env.TERMS_CONDITIONS_URL,
};

type PageSlug = keyof typeof PAGE_SLUGS;

export function LegalPage() {
  const { slug } = useParams<{ slug: PageSlug }>();
  const [isPageLoading, setIsPageLoading] = useState(true);

  if (!slug || !Object.hasOwn(PAGE_SLUGS, slug)) {
    throw new Error('ERROR_LEGAL_PAGE_SLUG_NOT_FOUND');
  }

  const navigate = useNavigate();

  const url = PAGE_SLUGS[slug];

  function onPageLoad() {
    setIsPageLoading(false);
  }

  return (
    <BaseLayout
      isCanGoBack={true}
      events={{
        onGoBack: () => navigate(ROUTES.ROOT.path()),
      }}
    >
      <section className="relative">
        <AnimatePresence>
          {isPageLoading && (
            <motion.div
              key="legal-shimmer"
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-white"
            >
              <LegalPageShimmer />
            </motion.div>
          )}
        </AnimatePresence>

        <iframe
          src={url}
          className="h-full w-full"
          onLoad={onPageLoad}
        ></iframe>
      </section>
    </BaseLayout>
  );
}
