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
              {/* <iframe width="600" height="450" style="border:0" loading="lazy" allowFullScreen */}
              {/*         src="https://www.google.com/maps/embed/v1/place?q=place_id:EkIxNzUgV2VzdCBCZWF2ZXIgQ3JlZWsgUmQgdW5pdCAzLCBSaWNobW9uZCBIaWxsLCBPTiBMNEIgM00xLCBDYW5hZGEiIhogChYKFAoSCW98CI5JKyuIEbm6Ce974hKPEgZ1bml0IDM&key=..."></iframe> */}
              <iframe
                src="http://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2877.214502440468!2d-79.39470638785994!3d43.851382539469384!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b2b39d32a5c13%3A0x2084d46d74ccc126!2s175%20West%20Beaver%20Creek%20Rd%20%233%2C%20Richmond%20Hill%2C%20ON%20L4B%201H4!5e0!3m2!1sen!2sca!4v1713587594398!5m2!1sen!2sca"
                className="left-0 top-0 h-full w-full rounded-t-lg lg:rounded-tr-none lg:rounded-bl-lg"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
          <Footer className="bg-gray-200 flex items-center justify-center lg:mt-[120px] w-full" />
        </div>
      </div>
    </>
  );
};

export default ContactUs;
