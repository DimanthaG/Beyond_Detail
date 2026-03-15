'use client';

import React, { Suspense, lazy } from 'react';
import AreasServed from '@/components/AreasServed/AreasServed';
import './ServiceAreas.scss';

// TODO: Migrate Contact component to a shared component
// const Contact = lazy(() => import('@/components/Contact/Contact'));

export default function ServiceAreasClient() {
  return (
    <div className="service-areas-page">
      <div className="service-areas-page__container">
        <Suspense fallback={<div style={{ minHeight: '400px' }} />}>
          <AreasServed />
        </Suspense>
      </div>
      {/* TODO: Add Contact component once migrated to shared */}
    </div>
  );
}
