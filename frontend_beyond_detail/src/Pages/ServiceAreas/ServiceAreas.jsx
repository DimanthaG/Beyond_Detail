import React, { lazy } from 'react';
import { motion } from 'framer-motion';
import { SEO, Contact } from '../../components';
import './ServiceAreas.scss';

const AreasServed = lazy(() => import('../../components/AreasServed/AreasServed'));

export function ServiceAreas() {
    return (
        <div className="service-areas-page">
            <SEO
                title="Service Areas | Car Detailing & Window Tinting GTA | Beyond Detail"
                description="Premium car detailing, ceramic coating and window tinting services across the GTA. Serving Toronto, Scarborough, Markham, Pickering, North York and Durham Region."
                name="Beyond Detail Service Areas"
                type="website"
                url="/service-areas"
            />

            <div className="service-areas-page__container">
                <AreasServed />
            </div>

            <Contact />
        </div>
    );
}

export default ServiceAreas;
