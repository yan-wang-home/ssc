import React, { useLayoutEffect, useState } from 'react';

import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Helmet from 'react-helmet';

const CalculatorsPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <script src="https://widget.mortgagecalculator.ca/js?key=355edb63-cd20-4b75-9fd6-ff94df47edfa"></script>
      </Helmet>
      <div className="bg-gray-100 flex flex-col font-chivo sm:gap-10 gap-10 items-center justify-start mx-auto w-full">
        <Header className="flex items-center justify-center sm:px-5 w-full" />
        <div className="flex flex-col items-center justify-start w-full lg:mt-12 md:mt-12">
          <div className="lg:w-9/12 md:w-10/12 sm:w-full">
            {/* Top */}
            {/* <div className="flex flex-col gap-12 items-center  mx-auto w-full px-8"> */}
            {/*   <div className="flex flex-col gap-0 items-center justify-start mb-3"> */}
            {/*     <Text */}
            {/*       className="leading-[54.00px] sm:text-[34px] text-[50px] text-center text-blue-900 w-full sm:w-full" */}
            {/*       size="txtChivoBold44" */}
            {/*     > */}
            {/*       <Translate contentKey="calculator.title" /> */}
            {/*     </Text> */}
            {/*   </div> */}
            {/* </div> */}

            <div>
              <div className="hidden lg:flex flex-col w-full h-full items-center">
                <div className="calculator-lg-div">
                  <iframe
                    className="w-full"
                    src="http://www.mortgagecalculator.net/embeddable/v2/?size=1"
                    frameBorder={2}
                    scrolling="yes"
                    height="330px"
                  />
                </div>
              </div>
              <div className="hidden md:flex flex-col w-full h-full items-center">
                <div className="calculator-md-div">
                  <iframe
                    className="w-full"
                    src="http://www.mortgagecalculator.net/embeddable/v2/?size=2"
                    width="100%"
                    frameBorder={2}
                    scrolling="yes"
                    height="330px"
                  />
                </div>
              </div>
              <div className="hidden sm:flex flex-col w-full h-full items-center">
                <div className="calculator-sm-div">
                  <iframe
                    className="w-full"
                    src="http://www.mortgagecalculator.net/embeddable/v2/?size=5"
                    width="100%"
                    frameBorder={2}
                    scrolling="yes"
                    height="330px"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Footer */}
          <Footer className="bg-gray-200 flex items-center justify-center lg:mt-[140px] md:mt-[500px] sm:mt-[50px] w-full" />
        </div>
      </div>
    </>
  );
};

export default CalculatorsPage;
