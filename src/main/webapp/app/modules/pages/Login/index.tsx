import React from 'react';

import { useNavigate } from 'react-router-dom';

import { Button, Img, Input, Line, Text } from '../../components';

const LoginPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-gray-200 flex flex-col font-chivo items-center justify-start mx-auto p-20 md:px-10 sm:px-5 w-full">
        <div className="bg-white-A700 flex md:flex-col flex-row gap-12 items-start justify-center max-w-[1112px] mx-auto pl-12 md:px-5 rounded-bl-md rounded-tl-md shadow-bs1 w-full">
          <div className="flex md:flex-1 flex-col items-start justify-start md:mt-0 mt-[70px] w-[43%] md:w-full">
            <Img className="h-8 w-[26%]" src="content/images/img_uilchartgrowt.svg" alt="uilchartgrowt" />
            <div className="flex flex-col items-center justify-start mt-[50px] rounded-md w-full">
              <div className="flex flex-col gap-8 items-start justify-start rounded-md w-full">
                <Text className="md:text-2xl sm:text-[22px] text-[26px] text-black-900" size="txtChivoBold26">
                  Login to your account
                </Text>
                <div className="flex flex-col gap-[29px] items-center justify-start pt-1 rounded-md w-full">
                  <div className="flex flex-col gap-[17px] items-start justify-start rounded-md w-full">
                    <Text className="text-black-900 text-lg" size="txtChivoRegular18">
                      Email Address
                    </Text>
                    <Input
                      name="FormInput"
                      placeholder="Email Address"
                      className="p-0 placeholder:text-bluegray-200 text-base text-left w-full"
                      wrapClassName="border border-bluegray-200 border-solid w-full"
                      type="email"
                    ></Input>
                  </div>
                  <div className="flex flex-col gap-[17px] items-start justify-start rounded-md w-full">
                    <Text className="text-black-900 text-lg" size="txtChivoRegular18">
                      Password
                    </Text>
                    <Input
                      name="FormInput One"
                      placeholder="Password"
                      className="p-0 placeholder:text-bluegray-200 text-base text-left w-full"
                      wrapClassName="border border-bluegray-200 border-solid w-full"
                      type="password"
                    ></Input>
                  </div>
                </div>
                <Button
                  className="cursor-pointer min-w-[456px] sm:min-w-full text-base text-center"
                  shape="round"
                  color="teal_400"
                  size="xs"
                  variant="fill"
                >
                  Login
                </Button>
              </div>
              <Text className="mt-6 text-base text-teal-400" size="txtChivoBold16">
                Forgot Password?
              </Text>
              <div className="flex flex-col items-center justify-start mt-[38px]">
                <Text className="common-pointer text-base text-gray-900" size="txtChivoRegular16" onClick={() => navigate('/signup')}>
                  <span className="text-gray-900 font-chivo text-left font-normal">Don’t have an account? </span>
                  <span className="text-teal-400 font-chivo text-left font-normal">Sign Up</span>
                </Text>
              </div>
            </div>
            <Line className="bg-gray-200 h-px mt-12 w-full" />
            <div className="flex flex-row gap-[23px] items-start justify-center md:ml-[0] ml-[91px] mt-7 w-[61%] md:w-full">
              <Text className="text-base text-bluegray-200" size="txtChivoRegular16Bluegray200">
                Terms & Conditions
              </Text>
              <Text className="text-base text-bluegray-200" size="txtChivoRegular16Bluegray200">
                Privacy Policy
              </Text>
            </div>
          </div>
          <div className="bg-teal-400 flex md:flex-1 flex-col items-center justify-end p-16 md:px-10 sm:px-5 rounded-br-md rounded-tr-md w-[53%] md:w-full">
            <div className="flex flex-col items-center justify-start mt-2.5 w-full">
              <Img className="h-[402px] w-[84%]" src="content/images/img_illustration.svg" alt="illustration" />
              <Text
                className="leading-[32.00px] mt-[60px] text-[22px] text-center sm:text-lg text-white-A700 md:text-xl w-[94%] sm:w-full"
                size="txtChivoBold22"
              >
                A powerful SaaS analytics application that is very easy to use
              </Text>
              <Text className="leading-[26.00px] mt-2 text-base text-center text-white-A700_99 w-full" size="txtChivoRegular16WhiteA70099">
                The fastest and simple way to generate growing business solutions with our products
              </Text>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
