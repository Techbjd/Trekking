import React from 'react';
import DWTExperience from './components/DWTExperience';
import ExperienceNepal from './components/ExperienceNepal';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import GlobalHappyFamily from './components/GlobalHappyFamily';
import Header from './components/Header';
import Hero from './components/Hero';
import InstagramFeed from './components/InstagramFeed';
import PrivateTreks from './components/PrivateTreks';
import ServiceExcellence from './components/ServiceExcellence';
import Testimonials from './components/Testimonials';
import TravelBlog from './components/TravelBlog';
import YourTrustedPartner from './components/YourTrustedPartner';






const Welcome: React.FC = () => {
    return (
        <div className='max-w-360 mx-auto'>
            <Header />
            <Hero />
            <ExperienceNepal />
            <GlobalHappyFamily />
            <PrivateTreks />
            <DWTExperience />
            <YourTrustedPartner />
            <ServiceExcellence />
            <Testimonials />
            <TravelBlog />
            <InstagramFeed />
            <FAQ />
            <Footer />
        </div>
    );
};

export default Welcome;
