import React from 'react';

import { useNavigate } from 'react-router-dom';

import { Button, CheckBox, Img, Input, Line, Text } from '../../components';

const forminputFourOptionsList = [
  { label: 'Option1', value: 'option1' },
  { label: 'Option2', value: 'option2' },
  { label: 'Option3', value: 'option3' },
];

const SignUpPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-gray-200 flex flex-col font-chivo items-start justify-start mx-auto p-20 md:px-10 sm:px-5 w-full">
        <div className="bg-white-A700 flex md:flex-col flex-row gap-12 items-start justify-start md:ml-[0] ml-[51px] pl-12 md:px-5 rounded-bl-md rounded-tl-md shadow-bs1 w-[87%] md:w-full">
          <div className="flex flex-col items-start justify-start md:mt-0 mt-16 w-[43%] md:w-full">
            <Img className="h-8 w-[26%]" src="content/images/img_uilchartgrowt.svg" alt="uilchartgrowt" />
            <div className="flex flex-col gap-8 items-start justify-start mt-14 w-full">
              <Text className="md:text-2xl sm:text-[22px] text-[26px] text-black-900" size="txtChivoBold26">
                Create your Growly Account
              </Text>
              <div className="flex flex-col items-center justify-start w-full">
                <div className="flex sm:flex-col flex-row gap-8 items-start justify-between pt-1 rounded-md w-full">
                  <div className="flex sm:flex-1 flex-col gap-[17px] items-start justify-start rounded-md w-[47%] sm:w-full">
                    <Text className="text-black-900 text-lg" size="txtChivoRegular18">
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
                  <div className="flex sm:flex-1 flex-col gap-[17px] items-start justify-start rounded-md w-[47%] sm:w-full">
                    <Text className="ml-1 md:ml-[0] text-black-900 text-lg" size="txtChivoRegular18">
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
                  <Text className="text-black-900 text-lg" size="txtChivoRegular18">
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
                <div className="flex sm:flex-col flex-row gap-8 items-start justify-between mt-6 pt-1.5 rounded-md w-full">
                  <div className="flex sm:flex-1 flex-col gap-3 items-start justify-start rounded-md w-[47%] sm:w-full">
                    <Text className="text-black-900 text-lg" size="txtChivoRegular18">
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
                  <div className="flex sm:flex-1 flex-col gap-3 items-start justify-start rounded-md w-[47%] sm:w-full">
                    <Text className="text-black-900 text-lg" size="txtChivoRegular18">
                      Company size
                    </Text>
                    {/* <SelectBox */}
                    {/*   className="border border-bluegray-200 border-solid text-base text-left w-full" */}
                    {/*   placeholderClassName="text-bluegray-200" */}
                    {/*   indicator={ */}
                    {/*     <Img */}
                    {/*       className="h-6 mr-[13px] w-6" */}
                    {/*       src="content/images/img_arrowdown.svg" */}
                    {/*       alt="arrow_down" */}
                    {/*     /> */}
                    {/*   } */}
                    {/*   isMulti={false} */}
                    {/*   name="forminput Four" */}
                    {/*   options={forminputFourOptionsList} */}
                    {/*   isSearchable={false} */}
                    {/*   placeholder="Company Size" */}
                    {/*   shape="round" */}
                    {/*   color="white_A700" */}
                    {/*   size="xs" */}
                    {/*   variant="fill" */}
                    {/* /> */}
                  </div>
                </div>
                <div className="flex flex-col gap-[17px] items-start justify-start mt-7 w-full">
                  <Text className="text-black-900 text-lg" size="txtChivoRegular18">
                    Phone Number
                  </Text>
                  <div className="bg-white-A700 border border-bluegray-200 border-solid flex sm:flex-col flex-row sm:gap-5 items-center justify-start p-2 rounded-md w-full">
                    <div className="bg-white-A700 flex sm:flex-1 flex-col items-center justify-start ml-2 sm:ml-[0] sm:mt-0 my-[7px] pb-2.5 w-[6%] sm:w-full">
                      <div className="bg-red-800 h-2.5 w-full"></div>
                    </div>
                    <Img className="h-6 ml-2 sm:ml-[0] w-6" src="content/images/img_arrowdown_bluegray_600.svg" alt="arrowdown" />
                    <Line className="bg-gray-200 h-[26px] sm:h-px ml-2 sm:ml-[0] sm:mt-0 my-1 sm:w-full w-px" />
                    <Input
                      name="frame178"
                      placeholder="Phone Number"
                      className="!placeholder:text-bluegray-600 !text-bluegray-600 p-0 text-base text-left w-full"
                      wrapClassName="sm:flex-1 sm:ml-[0] ml-[7px] w-[76%] sm:w-full"
                      type="number"
                      shape="square"
                      size="xs"
                    ></Input>
                  </div>
                </div>
                <CheckBox
                  className="leading-[26.00px] mt-6 text-base text-left"
                  inputClassName="h-4 mr-[5px] w-4"
                  name="BysigningupI"
                  id="BysigningupI"
                  label="By signing up I agree  to Sastly Terms & Conditons and Privacy Policy"
                ></CheckBox>
                <Button
                  className="cursor-pointer min-w-[456px] sm:min-w-full mt-8 text-base text-center"
                  shape="round"
                  color="teal_400"
                  size="xs"
                  variant="fill"
                >
                  Sign Up
                </Button>
              </div>
              <Text
                className="common-pointer md:ml-[0] ml-[141px] text-base text-gray-900"
                size="txtChivoRegular16"
                onClick={() => navigate('/')}
              >
                <span className="text-gray-900 font-chivo text-left font-normal">Already an user? </span>
                <span className="text-teal-400 font-chivo text-left font-normal">Login</span>
              </Text>
            </div>
            <Line className="bg-gray-200 h-px mt-16 w-full" />
            <div className="flex flex-row gap-6 items-start justify-center md:ml-[0] ml-[91px] mt-7 w-[61%] md:w-full">
              <Text className="text-base text-bluegray-200" size="txtChivoRegular16Bluegray200">
                Terms & Conditions
              </Text>
              <Text className="text-base text-bluegray-200" size="txtChivoRegular16Bluegray200">
                Privacy Policy
              </Text>
            </div>
          </div>
          <div className="bg-teal-400 flex flex-col items-center justify-start p-[65px] md:px-10 sm:px-5 rounded-br-md rounded-tr-md w-[53%] md:w-full">
            <div className="flex flex-col items-center justify-start mb-36 mt-[120px] w-full">
              <Img className="h-[402px] w-[84%]" src="content/images/img_illustration_402X358.svg" alt="illustration" />
              <Text
                className="leading-[32.00px] mt-16 text-[22px] text-center sm:text-lg text-white-A700 md:text-xl w-[94%] sm:w-full"
                size="txtChivoBold22"
              >
                Give trust to us to provide accurate data for your product
              </Text>
              <Text className="leading-[26.00px] mt-4 text-base text-center text-white-A700_99 w-full" size="txtChivoRegular16WhiteA70099">
                The fastest and simple way to generate growing business solutions with our products
              </Text>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUpPage;
