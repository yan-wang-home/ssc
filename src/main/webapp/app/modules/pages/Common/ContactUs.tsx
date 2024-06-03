import React from 'react';

import Footer from '../../components/Footer';
import Header from '../../components/Header';
import { Translate } from 'react-jhipster';
import { APIProvider, Map, Marker } from '@vis.gl/react-google-maps';

const ContactUs: React.FC = () => {
  const position = { lat: 43.84752488828167, lng: -79.38650206890091 };
  return (
    <>
      <div className="bg-gray-100 flex flex-col font-chivo items-center justify-start mx-auto w-full">
        <Header className="flex items-center justify-center sm:px-5 w-full" />
        <div className="flex flex-col items-center justify-start w-full">
          <div className="grid lg:grid-cols-2 sm:grid-cols-1 gap-16 items-center relative overflow-hidden lg:p-10 md:p-6 sm:p-3 w-full mx-auto bg-white text-[#333] font-[sans-serif] before:absolute before:right-0 before:w-[300px] lg:before:bg-blue-400 before:h-full max-md:before:hidden">
            <div>
              <div className="flex sm:flex-col flex-col items-center justify-center lg:mt-8 md:mt-3 sm:mt-3 lg:gap-5 md:gap-3 sm:gap-3 space-y-4 w-full">
                <div className="items-start">
                  <h2 className="lg:text-3xl md:text-3xl sm:text-2xl text-blue-900 font-extrabold underline decoration-2">
                    <Translate contentKey="contactus.title" />
                  </h2>
                </div>
                <div className="flex flex-col items-center">
                  <div className="flex items-center justify-center rounded-[75%]">
                    <a href="https://maps.app.goo.gl/cnNufP8GubnZm5UKA">
                      <img
                        alt="location icon"
                        loading="lazy"
                        decoding="async"
                        data-nimg="1"
                        className="color:transparent w-12"
                        src="content/images/location.svg"
                      />
                    </a>
                  </div>
                  <div className="flex flex-col gap-0 items-center">
                    <a
                      href="https://maps.app.goo.gl/cnNufP8GubnZm5UKA"
                      className="font-Inter lg:text-xl md:text-lg sm:text-lg text-center font-medium text-blue-900"
                    >
                      Unit 3 - 175 West Beaver Creek Road, Richmond Hill, ON
                    </a>
                  </div>
                </div>
                <div className="flex flex-col items-center">
                  <div className="flex items-center justify-center rounded-[75%]">
                    <a href="tel:+6479713755">
                      <img
                        alt="phone icon"
                        loading="lazy"
                        decoding="async"
                        data-nimg="1"
                        className="color:transparent w-12"
                        src="content/images/phone.svg"
                      />
                    </a>
                  </div>
                  <div>
                    <a href="tel:+6479713755" className="font-Inter lg:text-xl md:text-lg sm:text-lg font-medium text-blue-900">
                      <Translate contentKey="footer.office" />: 647-9713755
                    </a>
                    <br />
                    {/* <a href="tel:+6479713755" className="font-Inter text-xl font-medium text-blue-900"> */}
                    {/*   <Translate contentKey="footer.fax" />: 647-9713755 */}
                    {/* </a> */}
                  </div>
                </div>
                <div className="flex flex-col items-center">
                  <div className="flex items-center justify-center rounded-[75%]">
                    <a href="mailto:info@ssc.finance">
                      <img
                        alt="mail icon"
                        loading="lazy"
                        decoding="async"
                        data-nimg="1"
                        className="color:transparent w-12"
                        src="content/images/mail.svg"
                      />
                    </a>
                  </div>
                  <div>
                    <a href="mailto:info@ssc.finance" className="font-Inter lg:text-xl md:text-lg sm:text-lg font-medium text-blue-900">
                      info@ssc.finance
                    </a>
                  </div>
                </div>
                <div className="flex flex-col items-center">
                  <div className="flex items-center justify-center rounded-[75%]">
                    <img
                      alt="wechat icon"
                      loading="lazy"
                      width="50"
                      decoding="async"
                      data-nimg="1"
                      className="color:transparent"
                      src="content/images/wechat.svg"
                    ></img>
                  </div>
                  <div></div>
                </div>
              </div>
            </div>
            <div className="relative h-[550px] max-md:min-h-[350px]">
              <APIProvider apiKey={'AIzaSyApt6EyQQv3zPvgM6AoeOq95I3I5VlNidM'}>
                <Map defaultCenter={position} defaultZoom={14}>
                  <Marker position={position} />
                </Map>
              </APIProvider>
            </div>
          </div>
          <Footer className="bg-gray-200 flex items-center justify-center lg:mt-[120px] w-full" />
        </div>
      </div>
    </>
  );
};

export default ContactUs;
