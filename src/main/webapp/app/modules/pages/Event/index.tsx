import React from 'react';

import Footer from '../../components/Footer';
import Header from '../../components/Header';
import { Translate } from 'react-jhipster';
import { Img, Text } from 'app/modules/components';
import Seo from 'app/modules/pages/Seo';

const Event: React.FC = () => {
  return (
    <>
      <Seo
        title="Upcoming Events | Smart Solutions Capital | 聪达资本 | SSC"
        description="Stay up-to-date with the latest events and webinars hosted by Smart Solutions Capital (SSC). Join us and learn more about capital solutions."
        keywords="Smart Solutions Capital, SSC, 聪达资本, Events"
        url="https://ssc.finance/event"
      />
      <div className="bg-gray-100 flex flex-col font-chivo items-center justify-start mx-auto w-full">
        <Header className="flex items-center justify-center sm:px-5 w-full" />
        <div className="flex flex-col items-center justify-start w-full">
          <div id="sticky-banner" className="flex rounded-lg flex-col justify-between w-9/12 m-10 border-b border-gray-200 bg-blue-900 dark:bg-gray-700 dark:border-gray-600">
            <div className="flex items-center mx-auto mt-3">
              <p className="flex items-center text-sm font-normal text-white-A700 dark:text-gray-400">
                <Img className="lg:h-10 md:h-8 sm:h-4" src="content/images/announcement.svg" alt="call" />
              <span className="lg:text-xl md:text-l text-center p-2"><Translate contentKey="event.wechat.launch" /><a href="https://mp.weixin.qq.com/s/N5otftWRClmYPjgdzzb94g" className="inline font-medium text-red-800 underline dark:text-blue-500 underline-offset-2 decoration-600 dark:decoration-500 decoration-solid hover:no-underline"><Translate contentKey="event.wechat.officalaccount" /></a></span>
              </p>
            </div>

            <div className="flex lg:flex-row md:flex-row sm:flex-col lg:w-11/12 sm:w-full pt-10 lg:gap-24 md:gap-8 sm:gap-8 mb-3">
              <div className="flex flex-col lg:w-1/2 md:w-1/2 sm:w-full items-center text-center">
                <Img className="w-1/2" src="content/images/WechatOfficialAccount.png" />
                <Text className="text-white-A700 italic lg:text-xl md:text-lg sm:text-lg">
                  <Translate contentKey="event.wechat.officalaccount" />
                </Text>
              </div>
              <div className="flex flex-col lg:w-1/2 md:w-1/2 sm:w-full items-center text-center">
                <Img className="w-1/2" src="content/images/WechatServiceAccount.png" />
                <Text className="text-white-A700 italic lg:text-xl md:text-lg sm:text-lg">
                  <Translate contentKey="event.wechat.serviceaccount" />
                </Text>
              </div>
            </div>
          </div>
        </div>
        <Footer className="bg-gray-200 flex items-center justify-center w-full" />
      </div>
    </>
  );
};

export default Event;
