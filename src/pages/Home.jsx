import React, { lazy, Suspense } from 'react';
//Estilos de CSS
import '../style/main.css';
import '../style/Home/container-tecworld.css';

const BannerImage = lazy(() => import("./componentsHome/BannerImage"));
const DescriptionTechnology = lazy(() => import("./componentsHome/DescriptionTechnology"));
const Bridge = lazy(() => import("./componentsHome/Bridge"));
const StudentImage = lazy(() => import("./componentsHome/StudentImage"));
const EngineerProfile = lazy(() => import("./componentsHome/EngineerProfile"));
const CarouselProjects = lazy(() => import("./componentsHome/CarouselProjects"));
const LanguagesCarousel = lazy(() => import("./componentsHome/LanguagesCarousel"));
const ConnectInstitute = lazy(() => import("./componentsHome/ConnectInstitute"));
const Footer = lazy(() => import("../components/Footer"));

export const Home = () => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <main>
                <BannerImage />

                <div className="container-TecWorld">
                    <DescriptionTechnology />
                    <div className="container-circleBlue"></div>
                </div>
                
                <Bridge />
                <StudentImage />
                <EngineerProfile />
                <CarouselProjects />
                <LanguagesCarousel />
                <ConnectInstitute />
            </main>

            <Footer />
        </Suspense>
    );
}