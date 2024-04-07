import React from 'react';

import { useNavigate } from 'react-router-dom';

import { Button, Img, Input, Line, List, Text, TextArea } from '../../components';
import Footer from '../../components/Footer';
import Header from '../../components/Header';

const WhatNewPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-chivo sm:gap-10 md:gap-10 gap-[70px] items-center justify-start mx-auto w-full">
        <Header className="flex items-center justify-center md:px-5 w-full" />
        <div className="flex flex-col items-center justify-start w-full">
          <div className="flex md:flex-col flex-row gap-10 items-center justify-start max-w-[1112px] mx-auto md:px-5 w-full">
            <div className="flex md:flex-1 flex-col gap-8 items-center justify-start w-[49%] md:w-full">
              <div className="flex flex-col gap-4 items-center justify-start w-full">
                <Text className="leading-[54.00px] sm:text-[34px] md:text-[40px] text-[44px] text-gray-900 w-full" size="txtChivoBold44">
                  Talk to our product analytics expert
                </Text>
                <Text className="leading-[28.00px] text-bluegray-600 text-lg w-full" size="txtChivoRegular18Bluegray600">
                  Have questions about pricing, plans, or Growit? Fill out the form and our product analytics expert will be in touch
                  directly.
                </Text>
              </div>
              <div className="flex flex-col gap-[30px] items-start justify-start w-full">
                <Text className="md:text-2xl sm:text-[22px] text-[26px] text-gray-900" size="txtChivoBold26Gray900">
                  Our office
                </Text>
                <div className="flex flex-col gap-10 items-center justify-start w-full">
                  <div className="flex flex-col gap-[18px] items-center justify-start rounded-md w-full">
                    <Img
                      className="h-60 md:h-auto object-cover rounded-md w-[99%]"
                      src="content/images/img_rectangle224.png"
                      alt="Rectangle224"
                    />
                    <Text className="leading-[28.00px] text-bluegray-600 text-lg w-full" size="txtChivoRegular18Bluegray600">
                      Have questions about pricing, plans, or Growit? Fill out the form and our product analytics expert will be in touch
                      directly.
                    </Text>
                  </div>
                  <List
                    className="sm:flex-col flex-row gap-10 grid sm:grid-cols-1 grid-cols-2 justify-center w-full"
                    orientation="horizontal"
                  >
                    <div className="flex flex-1 flex-col gap-3 items-start justify-start pb-[3px] w-full">
                      <Text className="text-gray-900 text-lg" size="txtChivoBold18">
                        United Kingdom
                      </Text>
                      <div className="flex flex-row gap-2 items-start justify-start w-full">
                        <Img className="h-5 mt-[3px] w-5" src="content/images/img_location.svg" alt="location" />
                        <Text className="leading-[26.00px] text-base text-bluegray-600" size="txtChivoRegular16Bluegray600">
                          <>
                            30 Eastbourne Terrace
                            <br />
                            Paddington, London
                            <br />
                            W2 6LA, UK
                          </>
                        </Text>
                      </div>
                      <div className="flex flex-row gap-2 items-center justify-start w-3/5 md:w-full">
                        <Img className="h-5 w-5" src="content/images/img_call.svg" alt="call" />
                        <Text className="text-bluegray-600 text-sm underline" size="txtChivoBold14">
                          +44 13 5135 1051
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-1 flex-col items-start justify-start pb-[3px] w-full">
                      <Text className="text-gray-900 text-lg" size="txtChivoBold18">
                        France
                      </Text>
                      <div className="flex flex-row gap-2 items-start justify-start mt-[15px] w-full">
                        <Img className="h-5 mt-[5px] w-5" src="content/images/img_location.svg" alt="location One" />
                        <Text className="leading-[26.00px] text-base text-bluegray-600" size="txtChivoRegular16Bluegray600">
                          <>
                            266 Place Ernest Granier
                            <br />
                            34000 Montpellier
                            <br />
                            France
                          </>
                        </Text>
                      </div>
                      <div className="flex flex-row gap-2 items-center justify-start mt-[11px] w-[59%] md:w-full">
                        <Img className="h-5 w-5" src="content/images/img_call.svg" alt="call One" />
                        <Text className="text-bluegray-600 text-sm underline" size="txtChivoBold14">
                          +33 5 12 18 21 86
                        </Text>
                      </div>
                    </div>
                  </List>
                </div>
              </div>
            </div>
            <div className="bg-white-A700 flex md:flex-1 flex-col items-center justify-start p-[39px] sm:px-5 rounded-md shadow-bs1 w-[49%] md:w-full">
              <div className="flex flex-col items-center justify-start pt-1 w-full">
                <div className="flex sm:flex-col flex-row gap-8 items-center justify-between w-full">
                  <div className="flex sm:flex-1 flex-col gap-[17px] items-start justify-start rounded-md w-[47%] sm:w-full">
                    <Text className="text-gray-900 text-lg" size="txtChivoRegular18Gray900">
                      Firts Name
                    </Text>
                    <Input
                      name="FormInput"
                      placeholder="First Name"
                      className="p-0 placeholder:text-bluegray-200 text-base text-left w-full"
                      wrapClassName="border border-bluegray-200 border-solid w-full"
                      type="text"
                    ></Input>
                  </div>
                  <div className="flex sm:flex-1 flex-col gap-[18px] items-start justify-start rounded-md w-[47%] sm:w-full">
                    <Text className="ml-1 md:ml-[0] text-gray-900 text-lg" size="txtChivoRegular18Gray900">
                      Last Name
                    </Text>
                    <Input
                      name="FormInput One"
                      placeholder="Last Name"
                      className="p-0 placeholder:text-bluegray-200 text-base text-left w-full"
                      wrapClassName="border border-bluegray-200 border-solid w-full"
                      type="text"
                    ></Input>
                  </div>
                </div>
                <div className="flex flex-col gap-[17px] items-start justify-start mt-7 rounded-md w-full">
                  <Text className="text-gray-900 text-lg" size="txtChivoRegular18Gray900">
                    Email Address
                  </Text>
                  <Input
                    name="FormInput Two"
                    placeholder="Email Address"
                    className="p-0 placeholder:text-bluegray-200 text-base text-left w-full"
                    wrapClassName="border border-bluegray-200 border-solid w-full"
                    type="email"
                  ></Input>
                </div>
                <div className="flex flex-col gap-[13px] items-start justify-start mt-[29px] rounded-md w-full">
                  <Text className="text-gray-900 text-lg" size="txtChivoRegular18Gray900">
                    Company Name
                  </Text>
                  <Input
                    name="FormInput Three"
                    placeholder="Company Name"
                    className="p-0 placeholder:text-bluegray-200 text-base text-left w-full"
                    wrapClassName="border border-bluegray-200 border-solid w-full"
                    type="text"
                    size="lg"
                  ></Input>
                </div>
                <div className="flex flex-col gap-[17px] items-start justify-start mt-7 w-full">
                  <Text className="text-gray-900 text-lg" size="txtChivoRegular18Gray900">
                    Phone Number
                  </Text>
                  <div className="bg-white-A700 border border-bluegray-200 border-solid flex sm:flex-col flex-row sm:gap-5 items-center justify-start p-1.5 rounded-md w-full">
                    <div className="bg-white-A700 flex sm:flex-1 flex-col items-center justify-start ml-2.5 sm:ml-[0] sm:mt-0 my-[9px] pb-2.5 w-[6%] sm:w-full">
                      <div className="bg-red-800 h-2.5 w-full"></div>
                    </div>
                    <Img className="h-6 ml-2 sm:ml-[0] w-6" src="content/images/img_arrowdown.svg" alt="arrowdown" />
                    <Line className="bg-gray-200 h-[26px] sm:h-px ml-2 sm:ml-[0] sm:mt-0 my-1.5 sm:w-full w-px" />
                    <Input
                      name="Frame179"
                      placeholder="Phone Number"
                      className="!placeholder:text-bluegray-600 !text-bluegray-600 p-0 text-base text-left w-full"
                      wrapClassName="sm:flex-1 sm:ml-[0] ml-[7px] w-[69%] sm:w-full"
                      type="number"
                      shape="square"
                      size="sm"
                    ></Input>
                  </div>
                </div>
                <div className="flex flex-col gap-3 items-start justify-start mt-[30px] rounded-md w-full">
                  <Text className="text-gray-900 text-lg" size="txtChivoRegular18Gray900">
                    Message
                  </Text>
                  <TextArea
                    className="bg-white-A700 border border-bluegray-200 border-solid pb-[35px] pl-4 sm:pr-5 pr-[35px] pt-[19px] rounded-md text-base placeholder:text-bluegray-200 text-bluegray-200 text-left w-full"
                    name="FormInput Four"
                    placeholder="Message"
                  ></TextArea>
                </div>
                <Button
                  className="cursor-pointer min-w-[457px] sm:min-w-full mt-10 text-base text-center"
                  shape="round"
                  color="teal_400"
                  size="xs"
                  variant="fill"
                >
                  Send Message
                </Button>
              </div>
            </div>
          </div>
          <div className="bg-teal-401 flex md:flex-col flex-row md:gap-10 gap-[75px] items-start justify-center max-w-[1112px] mt-[100px] mx-auto pb-[39px] pl-[39px] md:px-5 rounded-md w-full">
            <div className="flex md:flex-1 flex-col items-start justify-start md:ml-[0] ml-[25px] md:mt-0 mt-12 rounded-md w-[45%] md:w-full">
              <Text className="sm:text-[34px] md:text-[40px] text-[44px] text-white-A700" size="txtChivoBold44WhiteA700">
                Ready to get started?
              </Text>
              <Text className="leading-[28.00px] mt-4 text-lg text-white-A700_99 w-full" size="txtChivoRegular18WhiteA70099">
                The fastest and simple way to generate growing business solutions with our products
              </Text>
              <div className="flex flex-col items-center justify-start mt-8 rounded-md w-full">
                <div className="bg-white-A700 border border-bluegray-200 border-solid flex sm:flex-col flex-row gap-[21px] items-center justify-end p-2 rounded-md w-full">
                  <Input
                    name="box"
                    placeholder="Your business email"
                    className="p-0 placeholder:text-bluegray-200 text-base text-left w-full"
                    wrapClassName="sm:flex-1 sm:mt-0 my-1.5 w-[61%] sm:w-full"
                    type="email"
                    shape="square"
                    size="sm"
                  ></Input>
                  <Button
                    className="cursor-pointer min-w-[150px] text-base text-center"
                    shape="round"
                    color="teal_400"
                    size="xs"
                    variant="fill"
                  >
                    Get Started
                  </Button>
                </div>
              </div>
            </div>
            <Img className="h-[281px] w-[46%]" src="content/images/img_pattern_3.svg" alt="pattern" />
          </div>
          <Footer className="bg-gray-900 flex items-center justify-center mt-[120px] md:px-5 w-full" />
        </div>
      </div>
    </>
  );
};

export default WhatNewPage;
