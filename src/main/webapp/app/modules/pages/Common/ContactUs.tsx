import React from 'react';

import Footer from '../../components/Footer';
import Header from '../../components/Header';
import { Translate } from 'react-jhipster';

const ContactUs: React.FC = () => {
  return (
    <>
      <div className="bg-gray-100 flex flex-col font-chivo items-center justify-start mx-auto w-full">
        <Header className="flex items-center justify-center sm:px-5 w-full" />
        <div className="flex flex-col items-center justify-start w-full">
          <div className="grid lg:grid-cols-2 sm:grid-cols-1 gap-16 items-center relative overflow-hidden p-10 w-full mx-auto bg-white text-[#333] font-[sans-serif] before:absolute before:right-0 before:w-[300px] lg:before:bg-blue-400 before:h-full max-md:before:hidden">
            <div>
              <div className="flex sm:flex-col flex-col lg:items-center sm:items-center justify-center lg:mt-8 md:mt-3 sm:mt-3 lg:gap-5 md:gap-3 sm:gap-3 space-y-4 w-full">
                <div className="items-start">
                  <h2 className="text-3xl text-blue-900 font-extrabold underline decoration-2">
                    <Translate contentKey="contactus.title" />
                  </h2>
                </div>
                <div className="flex flex-col items-center">
                  <div className="flex items-center justify-center rounded-[75%]">
                    <img
                      alt="location icon"
                      loading="lazy"
                      width="50"
                      decoding="async"
                      data-nimg="1"
                      className="color:transparent"
                      src="content/images/location.svg"
                    ></img>
                  </div>
                  <div className="flex flex-col gap-0 items-center">
                    <a className="font-Inter text-xl text-center font-medium text-blue-900">
                      Unit 3 - 175 West Beaver Creek Road, Richmond Hill, ON
                    </a>
                  </div>
                </div>
                <div className="flex flex-col items-center">
                  <div className="flex items-center justify-center rounded-[75%]">
                    <img
                      alt="phone icon"
                      loading="lazy"
                      width="50"
                      decoding="async"
                      data-nimg="1"
                      className="color:transparent"
                      src="content/images/phone.svg"
                    ></img>
                  </div>
                  <div>
                    <a href="tel:+911800123444" className="font-Inter text-xl font-medium text-blue-900">
                      <Translate contentKey="footer.office" />: 647-9713755
                    </a>
                    <br />
                    <a href="tel:+911800123444" className="font-Inter text-xl font-medium text-blue-900">
                      <Translate contentKey="footer.fax" />: 647-9713755
                    </a>
                  </div>
                </div>
                <div className="flex flex-col items-center">
                  <div className="flex items-center justify-center rounded-[75%]">
                    <img
                      alt="mail icon"
                      loading="lazy"
                      width="50"
                      decoding="async"
                      data-nimg="1"
                      className="color:transparent"
                      src="content/images/mail.svg"
                    ></img>
                  </div>
                  <div>
                    <a href="mailto:help@smartsolutionscapital.com" className="font-Inter text-xl font-medium text-blue-900">
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
              <iframe
                src="https://maps.google.com/maps?q=manhatan&t=&z=13&ie=UTF8&iwloc=&output=embed"
                className="left-0 top-0 h-full w-full rounded-t-lg lg:rounded-tr-none lg:rounded-bl-lg"
                frameBorder="0"
                allowFullScreen
              ></iframe>
            </div>
          </div>
          <Footer className="bg-gray-200 flex items-center justify-center lg:mt-[120px] w-full" />
        </div>
      </div>
    </>
  );
};

export default ContactUs;
