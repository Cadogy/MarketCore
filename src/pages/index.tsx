import * as React from 'react';

import Hero from '@/components/Homepage/Hero';
import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';

export default function HomePage() {
  return (
    <>
    <Layout>
      <Seo
      templateTitle='Trusted Marketplace for In-Game Items'
      />
      <Hero />
    </Layout>
    </>
  );
}