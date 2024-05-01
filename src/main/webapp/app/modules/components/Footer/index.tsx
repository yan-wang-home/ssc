import React from 'react';

import { Img, Text } from '../../components';
import { Link } from 'react-router-dom';
import { Translate } from 'react-jhipster';

type FooterProps = React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> & Partial<{}>;

const Footer: React.FC<FooterProps> = props => {
  return (
    <>
      <footer className={props.className}>
        <div className="flex flex-col sm:gap-10 gap-1 items-center justify-evenly mb-6 mt-[35px] lg:w-[78%] md:w-[88%] sm:w-[95%]">
          <div className="flex lg:flex-row sm:flex-col items-center justify-start w-full mx-auto">
            <div className="flex flex-col lg:items-start sm:items-center justify-center w-full relative">
              <div className="flex flex-row items-center lg:w-full">
                <Link to="/" className="alert-link">
                  <Img className="w-[50px]" src="content/images/logo.png" alt="Group448 One" />
                </Link>
                <Link to="/" className="alert-link">
                  <Text className="ml-2 text-xl text-blue-900" size="txtCinzelDecorativeBold16Cyan300">
                    <Translate contentKey="footer.title" />
                  </Text>
                </Link>
              </div>
              <div className="flex flex-col lg:w-full">
                <div className="mt-[18px] flex gap-4">
                  <a className="hover:scale-110" target="_blank" href="https://www.facebook.com/" rel="noreferrer">
                    <img
                      alt="facebook icon"
                      loading="lazy"
                      width="36"
                      height="36"
                      decoding="async"
                      data-nimg="1"
                      className="color:transparent"
                      src="content/images/facebook.svg"
                    />
                  </a>
                  <a className="hover:scale-110" target="_blank" href="https://www.linkedin.com/" rel="noreferrer">
                    <img
                      alt="linkdin icon"
                      loading="lazy"
                      width="36"
                      height="36"
                      decoding="async"
                      data-nimg="1"
                      className="color:transparent"
                      src="content/images/linkdin.svg"
                    />
                  </a>
                  <a className="hover:scale-110" target="_blank" href="https://www.instagram.com/" rel="noreferrer">
                    <img
                      alt="instagram icon"
                      loading="lazy"
                      width="36"
                      height="36"
                      decoding="async"
                      data-nimg="1"
                      className="color:transparent"
                      src="content/images/instagram.svg"
                    />
                  </a>
                  <a className="hover:scale-110" target="_blank" href="https://twitter.com/" rel="noreferrer">
                    <img
                      alt="twitter icon"
                      loading="lazy"
                      width="36"
                      height="36"
                      decoding="async"
                      data-nimg="1"
                      className="color:transparent"
                      src="content/images/twitter.svg"
                    />
                  </a>
                  <a className="hover:scale-110" target="_blank" href="https://www.youtube.com/" rel="noreferrer">
                    <img
                      alt="youtube icon"
                      loading="lazy"
                      width="36"
                      height="36"
                      decoding="async"
                      data-nimg="1"
                      className="color:transparent"
                      src="content/images/youtube.svg"
                    />
                  </a>
                </div>
              </div>
            </div>
            <div className="flex flex-col sm:items-center w-full relative">
              <div className="flex sm:flex-col flex-col lg:items-start sm:items-center gap-2 justify-center sm:mt-10 sm:gap-3">
                <div className="flex lg:flex-row md:flex-col sm:flex-col items-center">
                  <div className="flex h-[38px] w-[38px] items-center justify-center rounded-[75%]">
                    <a href="tel:+6479713755">
                      <img
                        alt="phone icon"
                        loading="lazy"
                        width="24"
                        decoding="async"
                        data-nimg="1"
                        className="color:transparent"
                        src="content/images/phone.svg"
                      />
                    </a>
                  </div>
                  <div className="ml-[18px] items-center">
                    <a href="tel:+6479713755" className="font-Inter text-[18px] font-medium text-blue-900">
                      <Translate contentKey="footer.office" />: 647-9713755
                    </a>
                    {/* <br /> */}
                    {/* <a href="tel:+911800123444" className="font-Inter text-[18px] font-medium text-blue-900"> */}
                    {/*   <Translate contentKey="footer.fax" />: 647-9713755 */}
                    {/* </a> */}
                  </div>
                </div>
                <div className="flex lg:flex-row md:flex-col sm:flex-col items-center">
                  <div className="flex h-[38px] w-[38px] items-center justify-center rounded-[75%]">
                    <a href="mailto:info@ssc.finance">
                      <img
                        alt="mail icon"
                        loading="lazy"
                        width="24"
                        decoding="async"
                        data-nimg="1"
                        className="color:transparent"
                        src="content/images/mail.svg"
                      />
                    </a>
                  </div>
                  <div className="ml-[18px] mt-1">
                    <a href="mailto:info@ssc.finance" className="font-Inter text-[18px] font-medium text-blue-900">
                      info@ssc.finance
                    </a>
                  </div>
                </div>
                <div className="flex lg:flex-row md:flex-col sm:flex-col items-center">
                  <div className="flex w-[38px] items-center justify-center rounded-[75%]">
                    <a href="https://maps.app.goo.gl/cnNufP8GubnZm5UKA">
                      <img
                        alt="location icon"
                        loading="lazy"
                        width="24"
                        decoding="async"
                        data-nimg="1"
                        className="color:transparent"
                        src="content/images/location.svg"
                      />
                    </a>
                  </div>
                  <div className="flex flex-col gap-0 items-center ml-[18px]">
                    <a href="https://maps.app.goo.gl/cnNufP8GubnZm5UKA">
                      <Text className="font-Inter text-[18px] sm:text-center font-medium text-blue-900">
                        Unit 3 - 175 West Beaver Creek Road, Richmond Hill, ON
                      </Text>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-row items-center justify-evenly sm:mt-10 w-full relative">
              <div className="flex flex-col ">
                <Text className="underline decoration-2 text-base text-blue-900 font-bold" size="txtChivoBold16WhiteA700">
                  <Translate contentKey="footer.support" />
                </Text>
                <Text className="mt-6 text-base text-blue-900" size="txtChivoRegular16Bluegray100">
                  <a href="/contactus">
                    <Translate contentKey="footer.contactus" />
                  </a>
                </Text>
                {/* <Text className="mt-1 text-base text-blue-900" size="txtChivoRegular16Bluegray100"> */}
                {/*   <Translate contentKey="footer.faq" /> */}
                {/* </Text> */}
                <Text className="mt-1 text-base text-blue-900" size="txtChivoRegular16Bluegray100">
                  <a href="/privacypolicy">
                    <Translate contentKey="footer.privacypolicy" />
                  </a>
                </Text>
              </div>
              <div className="flex flex-col ">
                <Text className="underline decoration-2 text-base text-blue-900 font-bold" size="txtChivoBold16WhiteA700">
                  <Translate contentKey="footer.about" />
                </Text>
                {/* <Text className="mt-6 text-base text-blue-900" size="txtChivoRegular16Bluegray100"> */}
                {/*   <Translate contentKey="footer.ourstory" /> */}
                {/* </Text> */}
                <Text className="mt-6 text-base text-blue-900" size="txtChivoRegular16Bluegray100">
                  <a href="/about">
                    <Translate contentKey="footer.team" />
                  </a>
                </Text>
                <Text className="mt-1 text-base text-blue-900" size="txtChivoRegular16Bluegray100">
                  <a href="/comingsoon">
                    <Translate contentKey="footer.careers" />
                  </a>
                </Text>
              </div>
            </div>
          </div>
          <hr className="mt-[30px] text-blue-900" />
          <div className="flex sm:flex-col flex-row sm:gap-5 items-end justify-center w-full">
            <Text className="sm:mt-0 mt-2 text-sm text-blue-900 text-center" size="txtChivoRegular14">
              <Translate contentKey="footer.copyRight" />
            </Text>
          </div>
        </div>
      </footer>
    </>
  );
};

Footer.defaultProps = {};

export default Footer;
