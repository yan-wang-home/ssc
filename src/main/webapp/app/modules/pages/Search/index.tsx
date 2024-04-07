import React from 'react';

import { useNavigate } from 'react-router-dom';

import { Button, Img, Input, Line, List, Text } from '../../components';
import Footer from '../../components/Footer';
import Header from '../../components/Header';

const SearchPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-chivo items-center justify-start mx-auto w-full">
        <div className="pt-8 h-[1056px] md:h-[1470px] sm:h-[2135px] md:px-5 relative w-full">
          <div
            className="absolute bg-cover bg-no-repeat flex flex-col inset-x-[0] items-center justify-start mx-auto top-[0] w-full"
            style={{ backgroundImage: "url('images/img_group862.png')" }}
          >
            <Header className="flex flex-col items-center justify-start w-full" />
          </div>
          <div className="bg-teal-401 flex md:flex-col flex-row md:gap-10 gap-[75px] items-start justify-center max-w-[1350px] mt-[100px] mx-auto pb-[39px] pl-[39px] md:px-5 rounded-md w-full">
            <div className="flex md:flex-1 flex-col items-start justify-start md:ml-[0] ml-[25px] md:mt-0 mt-12 rounded-md w-[60%] md:w-full">
              <Text className="sm:text-[34px] md:text-[40px] text-[44px] text-white-A700" size="txtChivoBold44WhiteA700">
                Check your application status?
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
                    Search
                  </Button>
                </div>
              </div>
              {/* <Text */}
              {/*   className="leading-[28.00px] mt-4 text-lg text-white-A700_99 w-full" */}
              {/*   size="txtChivoRegular18WhiteA70099" */}
              {/* > */}
              {/*   Obtain your application status in real time */}
              {/* </Text> */}
              <br />
              <Text className="sm:text-[34px] md:text-[40px] text-[44px] text-white-A700" size="txtChivoBold44WhiteA700">
                Check your application status?
              </Text>
            </div>
            <Img className="h-[281px] w-[60%]" src="content/images/img_pattern_281X493.svg" alt="pattern" />
          </div>
          {/* <div className="absolute bottom-[0] flex flex-col md:gap-10 gap-16 inset-x-[0] items-center justify-start mx-auto w-[78%]"> */}
          {/*   <div className="flex flex-col gap-4 items-center justify-start"> */}
          {/*     <Text */}
          {/*       className="leading-[58.00px] sm:text-[38px] md:text-[44px] text-[52px] text-center text-gray-900 w-full" */}
          {/*       size="txtChivoBold52" */}
          {/*     > */}
          {/*       Pricing plan for every product of all sizes. */}
          {/*     </Text> */}
          {/*     <Text */}
          {/*       className="leading-[28.00px] text-bluegray-600 text-center text-lg w-[74%] sm:w-full" */}
          {/*       size="txtChivoRegular18Bluegray600" */}
          {/*     > */}
          {/*       Start connecting with all your team and plan payment for every */}
          {/*       product as you want */}
          {/*     </Text> */}
          {/*   </div> */}
          {/*   <List */}
          {/*     className="sm:flex-col flex-row gap-10 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center w-full" */}
          {/*     orientation="horizontal" */}
          {/*   > */}
          {/*     <div className="md:h-[601px] h-[654px] relative w-full"> */}
          {/*       <div className="absolute bg-white-A700 bottom-[0] flex flex-col inset-x-[0] items-center justify-center mx-auto p-[39px] sm:px-5 rounded-md shadow-bs1 w-full"> */}
          {/*         <div className="flex flex-col items-center justify-start mt-10"> */}
          {/*           <Text */}
          {/*             className="text-[22px] text-gray-900 sm:text-lg md:text-xl" */}
          {/*             size="txtChivoBold22Gray900" */}
          {/*           > */}
          {/*             Free */}
          {/*           </Text> */}
          {/*           <Text */}
          {/*             className="mt-4 text-3xl sm:text-[26px] md:text-[28px] text-gray-900" */}
          {/*             size="txtChivoBold30" */}
          {/*           > */}
          {/*             <span className="md:text-[34px] sm:text-[32px] text-gray-900 font-chivo text-left text-4xl font-normal"> */}
          {/*               $0 */}
          {/*             </span> */}
          {/*             <span className="text-gray-900 font-chivo text-left text-lg font-normal"> */}
          {/*               /month */}
          {/*             </span> */}
          {/*           </Text> */}
          {/*           <Text */}
          {/*             className="leading-[26.00px] mt-2 text-base text-bluegray-600 text-center w-full" */}
          {/*             size="txtChivoRegular16Bluegray600" */}
          {/*           > */}
          {/*             All the basics for businesses that are just getting */}
          {/*             started */}
          {/*           </Text> */}
          {/*         </div> */}
          {/*         <Button */}
          {/*           className="cursor-pointer min-w-[154px] mt-6 text-base text-center" */}
          {/*           shape="round" */}
          {/*           color="teal_401" */}
          {/*           size="xs" */}
          {/*           variant="fill" */}
          {/*         > */}
          {/*           Get Started */}
          {/*         </Button> */}
          {/*         <Line className="bg-gray-200 h-px mt-8 w-full" /> */}
          {/*         <div className="flex flex-col gap-5 items-start justify-start mt-[31px] pt-0.5 w-[99%] md:w-full"> */}
          {/*           <div className="flex flex-row gap-3 items-start justify-start w-[67%] md:w-full"> */}
          {/*             <Img */}
          {/*               className="h-6 w-6" */}
          {/*               src="content/images/img_checkmark.svg" */}
          {/*               alt="checkmark" */}
          {/*             /> */}
          {/*             <Text */}
          {/*               className="mt-1 text-base text-gray-900_99" */}
          {/*               size="txtChivoRegular16Gray90099" */}
          {/*             > */}
          {/*               Single Project Use */}
          {/*             </Text> */}
          {/*           </div> */}
          {/*           <div className="flex flex-row gap-3 items-start justify-start w-full"> */}
          {/*             <Img */}
          {/*               className="h-6 w-6" */}
          {/*               src="content/images/img_checkmark.svg" */}
          {/*               alt="checkmark One" */}
          {/*             /> */}
          {/*             <Text */}
          {/*               className="mt-[3px] text-base text-gray-900_99" */}
          {/*               size="txtChivoRegular16Gray90099" */}
          {/*             > */}
          {/*               Unlimited User Authentication */}
          {/*             </Text> */}
          {/*           </div> */}
          {/*           <div className="flex flex-row gap-3 items-start justify-start w-full"> */}
          {/*             <Img */}
          {/*               className="h-6 w-6" */}
          {/*               src="content/images/img_checkmark.svg" */}
          {/*               alt="checkmark Two" */}
          {/*             /> */}
          {/*             <Text */}
          {/*               className="mt-1 text-base text-gray-900_99" */}
          {/*               size="txtChivoRegular16Gray90099" */}
          {/*             > */}
          {/*               Unlimited data history & seats */}
          {/*             </Text> */}
          {/*           </div> */}
          {/*           <div className="flex flex-row gap-3 items-start justify-start w-[70%] md:w-full"> */}
          {/*             <Img */}
          {/*               className="h-6 w-6" */}
          {/*               src="content/images/img_checkmark.svg" */}
          {/*               alt="checkmark Three" */}
          {/*             /> */}
          {/*             <Text */}
          {/*               className="mt-1 text-base text-gray-900_99" */}
          {/*               size="txtChivoRegular16Gray90099" */}
          {/*             > */}
          {/*               Monitoring & alerts */}
          {/*             </Text> */}
          {/*           </div> */}
          {/*           <div className="flex flex-row gap-3 items-start justify-start w-[97%] md:w-full"> */}
          {/*             <Img */}
          {/*               className="h-6 w-6" */}
          {/*               src="content/images/img_checkmark.svg" */}
          {/*               alt="checkmark Four" */}
          {/*             /> */}
          {/*             <Text */}
          {/*               className="mt-[3px] text-base text-gray-900_99" */}
          {/*               size="txtChivoRegular16Gray90099" */}
          {/*             > */}
          {/*               Basic Roles and Permissions */}
          {/*             </Text> */}
          {/*           </div> */}
          {/*         </div> */}
          {/*       </div> */}
          {/*       <div className="absolute bg-white-A700 h-[100px] md:h-[50px] inset-x-[0] mx-auto p-[25px] sm:px-5 rounded-md shadow-bs top-[0] w-[100px]"> */}
          {/*         <Img */}
          {/*           className="absolute h-[50px] inset-[0] justify-center m-auto w-[50px]" */}
          {/*           src="content/images/img_thumbsup.svg" */}
          {/*           alt="thumbsup" */}
          {/*         /> */}
          {/*       </div> */}
          {/*     </div> */}
          {/*     <div className="md:h-[602px] h-[654px] relative w-full"> */}
          {/*       <div className="absolute bg-white-A700 bottom-[0] flex flex-col inset-x-[0] items-center justify-center mx-auto p-[39px] sm:px-5 rounded-md shadow-bs1 w-full"> */}
          {/*         <div className="flex flex-col items-center justify-start mt-10"> */}
          {/*           <Text */}
          {/*             className="text-[22px] text-gray-900 sm:text-lg md:text-xl" */}
          {/*             size="txtChivoBold22Gray900" */}
          {/*           > */}
          {/*             Growth */}
          {/*           </Text> */}
          {/*           <Text */}
          {/*             className="mt-4 text-3xl sm:text-[26px] md:text-[28px] text-gray-900" */}
          {/*             size="txtChivoBold30" */}
          {/*           > */}
          {/*             <span className="md:text-[34px] sm:text-[32px] text-gray-900 font-chivo text-left text-4xl font-normal"> */}
          {/*               $99 */}
          {/*             </span> */}
          {/*             <span className="text-gray-900 font-chivo text-left text-lg font-normal"> */}
          {/*               /month */}
          {/*             </span> */}
          {/*           </Text> */}
          {/*           <Text */}
          {/*             className="leading-[26.00px] mt-2 text-base text-bluegray-600 text-center" */}
          {/*             size="txtChivoRegular16Bluegray600" */}
          {/*           > */}
          {/*             <> */}
          {/*               Suitable for growth-stage startups */}
          {/*               <br /> */}
          {/*               with advanced requirements. */}
          {/*             </> */}
          {/*           </Text> */}
          {/*         </div> */}
          {/*         <Button */}
          {/*           className="cursor-pointer min-w-[154px] mt-6 text-base text-center" */}
          {/*           shape="round" */}
          {/*           color="teal_401" */}
          {/*           size="xs" */}
          {/*           variant="fill" */}
          {/*         > */}
          {/*           Try for free */}
          {/*         </Button> */}
          {/*         <Line className="bg-gray-200 h-px mt-8 w-full" /> */}
          {/*         <div className="flex flex-col gap-5 items-start justify-start mt-[31px] pt-0.5 w-[96%] md:w-full"> */}
          {/*           <div className="flex flex-row gap-3 items-start justify-start w-[64%] md:w-full"> */}
          {/*             <Img */}
          {/*               className="h-6 w-6" */}
          {/*               src="content/images/img_checkmark.svg" */}
          {/*               alt="checkmark One" */}
          {/*             /> */}
          {/*             <Text */}
          {/*               className="mt-[3px] text-base text-gray-900" */}
          {/*               size="txtChivoRegular16" */}
          {/*             > */}
          {/*               <span className="text-gray-900 font-chivo text-left font-normal"> */}
          {/*                 All features{" "} */}
          {/*               </span> */}
          {/*               <span className="text-gray-900 font-chivo text-left font-normal"> */}
          {/*                 Free */}
          {/*               </span> */}
          {/*             </Text> */}
          {/*           </div> */}
          {/*           <div className="flex flex-row gap-3 items-start justify-start w-[78%] md:w-full"> */}
          {/*             <Img */}
          {/*               className="h-6 w-6" */}
          {/*               src="content/images/img_checkmark.svg" */}
          {/*               alt="checkmark One One" */}
          {/*             /> */}
          {/*             <Text */}
          {/*               className="mt-[3px] text-base text-gray-900" */}
          {/*               size="txtChivoRegular16" */}
          {/*             > */}
          {/*               Advanced Dashboard */}
          {/*             </Text> */}
          {/*           </div> */}
          {/*           <div className="flex flex-row gap-3 items-start justify-start w-full"> */}
          {/*             <Img */}
          {/*               className="h-6 w-6" */}
          {/*               src="content/images/img_checkmark.svg" */}
          {/*               alt="checkmark Two One" */}
          {/*             /> */}
          {/*             <Text */}
          {/*               className="mt-[3px] text-base text-gray-900" */}
          {/*               size="txtChivoRegular16" */}
          {/*             > */}
          {/*               Unlimited Roles & Permission */}
          {/*             </Text> */}
          {/*           </div> */}
          {/*           <div className="flex flex-row gap-3 items-start justify-start w-[86%] md:w-full"> */}
          {/*             <Img */}
          {/*               className="h-6 w-6" */}
          {/*               src="content/images/img_checkmark.svg" */}
          {/*               alt="checkmark Three One" */}
          {/*             /> */}
          {/*             <Text */}
          {/*               className="mt-1 text-base text-gray-900" */}
          {/*               size="txtChivoRegular16" */}
          {/*             > */}
          {/*               1 Enterprise integration */}
          {/*             </Text> */}
          {/*           </div> */}
          {/*           <div className="flex flex-row gap-3 items-start justify-start w-[91%] md:w-full"> */}
          {/*             <Img */}
          {/*               className="h-6 w-6" */}
          {/*               src="content/images/img_checkmark.svg" */}
          {/*               alt="checkmark Four One" */}
          {/*             /> */}
          {/*             <Text */}
          {/*               className="mt-1 text-base text-gray-900" */}
          {/*               size="txtChivoRegular16" */}
          {/*             > */}
          {/*               External API management */}
          {/*             </Text> */}
          {/*           </div> */}
          {/*         </div> */}
          {/*       </div> */}
          {/*       <div className="absolute bg-white-A700 h-[100px] md:h-[50px] inset-x-[0] mx-auto p-[25px] sm:px-5 rounded-md shadow-bs top-[0] w-[100px]"> */}
          {/*         <Img */}
          {/*           className="absolute h-[50px] inset-[0] justify-center m-auto w-[50px]" */}
          {/*           src="content/images/img_checkmark_50X50.svg" */}
          {/*           alt="checkmark Five" */}
          {/*         /> */}
          {/*       </div> */}
          {/*     </div> */}
          {/*     <div className="md:h-[602px] h-[654px] relative w-full"> */}
          {/*       <div className="absolute bg-white-A700 bottom-[0] flex flex-col inset-x-[0] items-center justify-center mx-auto p-[39px] sm:px-5 rounded-md shadow-bs1 w-full"> */}
          {/*         <div className="flex flex-col items-center justify-start mt-[42px]"> */}
          {/*           <Text */}
          {/*             className="text-[22px] text-gray-900 sm:text-lg md:text-xl" */}
          {/*             size="txtChivoBold22Gray900" */}
          {/*           > */}
          {/*             Enterprise */}
          {/*           </Text> */}
          {/*           <Text */}
          {/*             className="mt-3 text-4xl sm:text-[32px] md:text-[34px] text-gray-900" */}
          {/*             size="txtChivoBold36" */}
          {/*           > */}
          {/*             <span className="text-gray-900 font-chivo text-left font-normal"> */}
          {/*               $120 */}
          {/*             </span> */}
          {/*             <span className="text-gray-900 font-chivo text-left text-lg font-normal"> */}
          {/*               /month */}
          {/*             </span> */}
          {/*           </Text> */}
          {/*           <Text */}
          {/*             className="leading-[26.00px] mt-2 text-base text-bluegray-600 text-center w-full" */}
          {/*             size="txtChivoRegular16Bluegray600" */}
          {/*           > */}
          {/*             Suitable for Hyper-growth or Enterprise companies */}
          {/*           </Text> */}
          {/*         </div> */}
          {/*         <Button */}
          {/*           className="cursor-pointer min-w-[154px] mt-6 text-base text-center" */}
          {/*           shape="round" */}
          {/*           color="teal_401" */}
          {/*           size="xs" */}
          {/*           variant="fill" */}
          {/*         > */}
          {/*           Contact Sales */}
          {/*         </Button> */}
          {/*         <Line className="bg-gray-200 h-px mt-8 w-full" /> */}
          {/*         <div className="flex flex-col gap-5 items-start justify-start mt-[31px] pt-0.5 w-[96%] md:w-full"> */}
          {/*           <div className="flex flex-row gap-3 items-start justify-start w-4/5 md:w-full"> */}
          {/*             <Img */}
          {/*               className="h-6 w-6" */}
          {/*               src="content/images/img_checkmark.svg" */}
          {/*               alt="checkmark Two" */}
          {/*             /> */}
          {/*             <Text */}
          {/*               className="mt-1 text-base text-gray-900" */}
          {/*               size="txtChivoRegular16" */}
          {/*             > */}
          {/*               <span className="text-gray-900 font-chivo text-left font-normal"> */}
          {/*                 Every Thing in{" "} */}
          {/*               </span> */}
          {/*               <span className="text-gray-900 font-chivo text-left font-normal"> */}
          {/*                 Growth */}
          {/*               </span> */}
          {/*             </Text> */}
          {/*           </div> */}
          {/*           <div className="flex flex-row gap-3 items-start justify-start w-[92%] md:w-full"> */}
          {/*             <Img */}
          {/*               className="h-6 w-6" */}
          {/*               src="content/images/img_checkmark.svg" */}
          {/*               alt="checkmark One Two" */}
          {/*             /> */}
          {/*             <Text */}
          {/*               className="mt-[3px] text-base text-gray-900" */}
          {/*               size="txtChivoRegular16" */}
          {/*             > */}
          {/*               Advanced access controls */}
          {/*             </Text> */}
          {/*           </div> */}
          {/*           <div className="flex flex-row gap-3 items-start justify-start w-[90%] md:w-full"> */}
          {/*             <Img */}
          {/*               className="h-6 w-6" */}
          {/*               src="content/images/img_checkmark.svg" */}
          {/*               alt="checkmark Two Two" */}
          {/*             /> */}
          {/*             <Text */}
          {/*               className="mt-[3px] text-base text-gray-900" */}
          {/*               size="txtChivoRegular16" */}
          {/*             > */}
          {/*               Dedicated SaaS solutions */}
          {/*             </Text> */}
          {/*           </div> */}
          {/*           <div className="flex flex-row gap-3 items-start justify-start w-[56%] md:w-full"> */}
          {/*             <Img */}
          {/*               className="h-6 w-6" */}
          {/*               src="content/images/img_checkmark.svg" */}
          {/*               alt="checkmark Three Two" */}
          {/*             /> */}
          {/*             <Text */}
          {/*               className="mt-1 text-base text-gray-900" */}
          {/*               size="txtChivoRegular16" */}
          {/*             > */}
          {/*               24/7 Support{" "} */}
          {/*             </Text> */}
          {/*           </div> */}
          {/*           <div className="flex flex-row gap-3 items-start justify-start w-full"> */}
          {/*             <Img */}
          {/*               className="h-6 w-6" */}
          {/*               src="content/images/img_checkmark.svg" */}
          {/*               alt="checkmark Four Two" */}
          {/*             /> */}
          {/*             <Text */}
          {/*               className="mt-[3px] text-base text-gray-900" */}
          {/*               size="txtChivoRegular16" */}
          {/*             > */}
          {/*               Dedicated customer success */}
          {/*             </Text> */}
          {/*           </div> */}
          {/*         </div> */}
          {/*       </div> */}
          {/*       <div className="absolute bg-white-A700 h-[100px] md:h-[50px] inset-x-[0] mx-auto p-[25px] sm:px-5 rounded-md shadow-bs top-[0] w-[100px]"> */}
          {/*         <Img */}
          {/*           className="absolute h-[50px] inset-[0] justify-center m-auto w-[50px]" */}
          {/*           src="content/images/img_plus.svg" */}
          {/*           alt="plus" */}
          {/*         /> */}
          {/*       </div> */}
          {/*     </div> */}
          {/*   </List> */}
          {/* </div> */}
        </div>
        {/* <div className="flex flex-col gap-[50px] items-center justify-start max-w-[1112px] mt-[100px] mx-auto md:px-5 w-full"> */}
        {/*   <div className="flex flex-col gap-4 items-center justify-start"> */}
        {/*     <Text */}
        {/*       className="sm:text-[34px] md:text-[40px] text-[44px] text-gray-900" */}
        {/*       size="txtChivoBold44" */}
        {/*     > */}
        {/*       Learn what you get in every plan */}
        {/*     </Text> */}
        {/*     <Text */}
        {/*       className="leading-[30.00px] text-[22px] text-bluegray-600 text-center sm:text-lg md:text-xl w-[79%] sm:w-full" */}
        {/*       size="txtChivoRegular22" */}
        {/*     > */}
        {/*       <span className="text-bluegray-600 font-chivo font-normal"> */}
        {/*         Get{" "} */}
        {/*       </span> */}
        {/*       <span className="text-teal-401 font-chivo font-normal"> */}
        {/*         100+{" "} */}
        {/*       </span> */}
        {/*       <span className="text-bluegray-600 font-chivo font-normal"> */}
        {/*         features out of the box with Growit integrated per-transaction */}
        {/*         pricing */}
        {/*       </span> */}
        {/*     </Text> */}
        {/*   </div> */}
        {/*   <div className="flex flex-col items-center justify-start w-full"> */}
        {/*     <div className="md:gap-5 gap-[124px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center min-h-[auto] w-full"> */}
        {/*       <div className="flex flex-1 flex-col gap-6 items-start justify-start w-full"> */}
        {/*         <Img */}
        {/*           className="h-[50px] w-[50px]" */}
        {/*           src="content/images/img_google.svg" */}
        {/*           alt="google" */}
        {/*         /> */}
        {/*         <div className="flex flex-col gap-[18px] items-start justify-start pb-0.5 w-full"> */}
        {/*           <Text */}
        {/*             className="leading-[32.00px] text-[22px] text-gray-900 sm:text-lg md:text-xl w-full" */}
        {/*             size="txtChivoBold22Gray900" */}
        {/*           > */}
        {/*             Monitoring analytics data and alert */}
        {/*           </Text> */}
        {/*           <div className="flex flex-row gap-3 items-center justify-start w-2/5 md:w-full"> */}
        {/*             <Img */}
        {/*               className="h-6 w-6" */}
        {/*               src="content/images/img_checkmark.svg" */}
        {/*               alt="checkmark Three" */}
        {/*             /> */}
        {/*             <Text */}
        {/*               className="text-bluegray-600 text-lg" */}
        {/*               size="txtChivoRegular18Bluegray600" */}
        {/*             > */}
        {/*               Live view{" "} */}
        {/*             </Text> */}
        {/*           </div> */}
        {/*           <div className="flex flex-row gap-3 items-center justify-start w-[72%] md:w-full"> */}
        {/*             <Img */}
        {/*               className="h-6 w-6" */}
        {/*               src="content/images/img_checkmark.svg" */}
        {/*               alt="checkmark One Three" */}
        {/*             /> */}
        {/*             <Text */}
        {/*               className="text-bluegray-600 text-lg" */}
        {/*               size="txtChivoRegular18Bluegray600" */}
        {/*             > */}
        {/*               Custom dashboards */}
        {/*             </Text> */}
        {/*           </div> */}
        {/*           <div className="flex flex-row gap-3 items-center justify-start w-[66%] md:w-full"> */}
        {/*             <Img */}
        {/*               className="h-6 w-6" */}
        {/*               src="content/images/img_checkmark.svg" */}
        {/*               alt="checkmark Two Three" */}
        {/*             /> */}
        {/*             <Text */}
        {/*               className="text-bluegray-600 text-lg" */}
        {/*               size="txtChivoRegular18Bluegray600" */}
        {/*             > */}
        {/*               Alert Notifications */}
        {/*             </Text> */}
        {/*           </div> */}
        {/*         </div> */}
        {/*       </div> */}
        {/*       <div className="flex flex-1 flex-col gap-6 items-start justify-start w-full"> */}
        {/*         <Img */}
        {/*           className="h-[50px] w-[50px]" */}
        {/*           src="content/images/img_volume_50X50.svg" */}
        {/*           alt="volume" */}
        {/*         /> */}
        {/*         <div className="flex flex-col gap-[18px] items-start justify-start w-full"> */}
        {/*           <Text */}
        {/*             className="leading-[32.00px] text-[22px] text-gray-900 sm:text-lg md:text-xl w-full" */}
        {/*             size="txtChivoBold22Gray900" */}
        {/*           > */}
        {/*             Data collection and tracking analytics */}
        {/*           </Text> */}
        {/*           <div className="flex flex-row gap-3 items-center justify-start w-[57%] md:w-full"> */}
        {/*             <Img */}
        {/*               className="h-6 w-6" */}
        {/*               src="content/images/img_checkmark.svg" */}
        {/*               alt="checkmark Four" */}
        {/*             /> */}
        {/*             <Text */}
        {/*               className="text-bluegray-600 text-lg" */}
        {/*               size="txtChivoRegular18Bluegray600" */}
        {/*             > */}
        {/*               Data collection */}
        {/*             </Text> */}
        {/*           </div> */}
        {/*           <div className="flex flex-row gap-3 items-start justify-start w-[48%] md:w-full"> */}
        {/*             <Img */}
        {/*               className="h-6 mb-0.5 w-6" */}
        {/*               src="content/images/img_checkmark.svg" */}
        {/*               alt="checkmark One Four" */}
        {/*             /> */}
        {/*             <Text */}
        {/*               className="mt-1 text-bluegray-600 text-lg" */}
        {/*               size="txtChivoRegular18Bluegray600" */}
        {/*             > */}
        {/*               Data import */}
        {/*             </Text> */}
        {/*           </div> */}
        {/*           <div className="flex flex-row gap-3 items-start justify-start w-[49%] md:w-full"> */}
        {/*             <Img */}
        {/*               className="h-6 mb-0.5 w-6" */}
        {/*               src="content/images/img_checkmark.svg" */}
        {/*               alt="checkmark Two Four" */}
        {/*             /> */}
        {/*             <Text */}
        {/*               className="mt-1 text-bluegray-600 text-lg" */}
        {/*               size="txtChivoRegular18Bluegray600" */}
        {/*             > */}
        {/*               Integrations */}
        {/*             </Text> */}
        {/*           </div> */}
        {/*         </div> */}
        {/*       </div> */}
        {/*       <div className="flex flex-1 flex-col gap-6 items-start justify-start w-full"> */}
        {/*         <Img */}
        {/*           className="h-[50px] w-[50px]" */}
        {/*           src="content/images/img_lock_50X50.svg" */}
        {/*           alt="lock" */}
        {/*         /> */}
        {/*         <div className="flex flex-col items-start justify-start w-full"> */}
        {/*           <Text */}
        {/*             className="leading-[32.00px] text-[22px] text-gray-900 sm:text-lg md:text-xl w-full" */}
        {/*             size="txtChivoBold22Gray900" */}
        {/*           > */}
        {/*             Customer security and privacy */}
        {/*           </Text> */}
        {/*           <div className="flex flex-row gap-3 items-start justify-start mt-[18px] w-[45%] md:w-full"> */}
        {/*             <Img */}
        {/*               className="h-6 mb-0.5 w-6" */}
        {/*               src="content/images/img_checkmark.svg" */}
        {/*               alt="checkmark Five" */}
        {/*             /> */}
        {/*             <Text */}
        {/*               className="mt-1 text-bluegray-600 text-lg" */}
        {/*               size="txtChivoRegular18Bluegray600" */}
        {/*             > */}
        {/*               Encryption */}
        {/*             </Text> */}
        {/*           </div> */}
        {/*           <div className="flex flex-row gap-3 items-center justify-start mt-3.5 w-[91%] md:w-full"> */}
        {/*             <Img */}
        {/*               className="h-6 w-6" */}
        {/*               src="content/images/img_checkmark.svg" */}
        {/*               alt="checkmark One Five" */}
        {/*             /> */}
        {/*             <Text */}
        {/*               className="text-bluegray-600 text-lg" */}
        {/*               size="txtChivoRegular18Bluegray600" */}
        {/*             > */}
        {/*               Two-Factor Authentication */}
        {/*             </Text> */}
        {/*           </div> */}
        {/*           <div className="flex flex-row gap-3 items-start justify-start mt-4 w-[58%] md:w-full"> */}
        {/*             <Img */}
        {/*               className="h-6 mb-0.5 w-6" */}
        {/*               src="content/images/img_checkmark.svg" */}
        {/*               alt="checkmark Two Five" */}
        {/*             /> */}
        {/*             <Text */}
        {/*               className="mt-1 text-bluegray-600 text-lg" */}
        {/*               size="txtChivoRegular18Bluegray600" */}
        {/*             > */}
        {/*               User device log{" "} */}
        {/*             </Text> */}
        {/*           </div> */}
        {/*         </div> */}
        {/*       </div> */}
        {/*       <div className="flex flex-1 flex-col gap-6 items-start justify-start w-full"> */}
        {/*         <Img */}
        {/*           className="h-[50px] w-[50px]" */}
        {/*           src="content/images/img_icon_50X50.svg" */}
        {/*           alt="Icon" */}
        {/*         /> */}
        {/*         <div className="flex flex-col gap-[18px] items-start justify-start w-full"> */}
        {/*           <Text */}
        {/*             className="leading-[32.00px] text-[22px] text-gray-900 sm:text-lg md:text-xl w-full" */}
        {/*             size="txtChivoBold22Gray900" */}
        {/*           > */}
        {/*             Reporting and analytics sales data */}
        {/*           </Text> */}
        {/*           <div className="flex flex-row gap-3 items-center justify-start w-[67%] md:w-full"> */}
        {/*             <Img */}
        {/*               className="h-6 w-6" */}
        {/*               src="content/images/img_checkmark.svg" */}
        {/*               alt="checkmark Six" */}
        {/*             /> */}
        {/*             <Text */}
        {/*               className="text-bluegray-600 text-lg" */}
        {/*               size="txtChivoRegular18Bluegray600" */}
        {/*             > */}
        {/*               Customer records */}
        {/*             </Text> */}
        {/*           </div> */}
        {/*           <div className="flex flex-row gap-3 items-start justify-start w-[90%] md:w-full"> */}
        {/*             <Img */}
        {/*               className="h-6 mb-0.5 w-6" */}
        {/*               src="content/images/img_checkmark.svg" */}
        {/*               alt="checkmark One Six" */}
        {/*             /> */}
        {/*             <Text */}
        {/*               className="mt-1 text-bluegray-600 text-lg" */}
        {/*               size="txtChivoRegular18Bluegray600" */}
        {/*             > */}
        {/*               Core subscription metrics{" "} */}
        {/*             </Text> */}
        {/*           </div> */}
        {/*           <div className="flex flex-row gap-3 items-start justify-start w-[58%] md:w-full"> */}
        {/*             <Img */}
        {/*               className="h-6 mb-0.5 w-6" */}
        {/*               src="content/images/img_checkmark.svg" */}
        {/*               alt="checkmark Two Six" */}
        {/*             /> */}
        {/*             <Text */}
        {/*               className="mt-1 text-bluegray-600 text-lg" */}
        {/*               size="txtChivoRegular18Bluegray600" */}
        {/*             > */}
        {/*               Refund reports */}
        {/*             </Text> */}
        {/*           </div> */}
        {/*         </div> */}
        {/*       </div> */}
        {/*       <div className="flex flex-1 flex-col gap-6 items-start justify-start w-full"> */}
        {/*         <Img */}
        {/*           className="h-[50px] w-[50px]" */}
        {/*           src="content/images/img_map_50X50.svg" */}
        {/*           alt="map" */}
        {/*         /> */}
        {/*         <div className="flex flex-col items-start justify-start w-full"> */}
        {/*           <Text */}
        {/*             className="leading-[32.00px] text-[22px] text-gray-900 sm:text-lg md:text-xl w-full" */}
        {/*             size="txtChivoBold22Gray900" */}
        {/*           > */}
        {/*             Integration with any social media */}
        {/*           </Text> */}
        {/*           <div className="flex flex-row gap-3 items-start justify-start mt-[18px] w-[77%] md:w-full"> */}
        {/*             <Img */}
        {/*               className="h-6 mb-0.5 w-6" */}
        {/*               src="content/images/img_checkmark.svg" */}
        {/*               alt="checkmark Seven" */}
        {/*             /> */}
        {/*             <Text */}
        {/*               className="mt-1 text-bluegray-600 text-lg" */}
        {/*               size="txtChivoRegular18Bluegray600" */}
        {/*             > */}
        {/*               Advertising platforms{" "} */}
        {/*             </Text> */}
        {/*           </div> */}
        {/*           <div className="flex flex-row gap-3 items-start justify-start mt-3.5 w-[87%] md:w-full"> */}
        {/*             <Img */}
        {/*               className="h-6 mb-0.5 w-6" */}
        {/*               src="content/images/img_checkmark.svg" */}
        {/*               alt="checkmark One Seven" */}
        {/*             /> */}
        {/*             <Text */}
        {/*               className="mt-1 text-bluegray-600 text-lg" */}
        {/*               size="txtChivoRegular18Bluegray600" */}
        {/*             > */}
        {/*               Customer data platforms{" "} */}
        {/*             </Text> */}
        {/*           </div> */}
        {/*           <div className="flex flex-row gap-3 items-start justify-start mt-3.5 w-[63%] md:w-full"> */}
        {/*             <Img */}
        {/*               className="h-6 mb-0.5 w-6" */}
        {/*               src="content/images/img_checkmark.svg" */}
        {/*               alt="checkmark Two Seven" */}
        {/*             /> */}
        {/*             <Text */}
        {/*               className="mt-1 text-bluegray-600 text-lg" */}
        {/*               size="txtChivoRegular18Bluegray600" */}
        {/*             > */}
        {/*               Data governance */}
        {/*             </Text> */}
        {/*           </div> */}
        {/*         </div> */}
        {/*       </div> */}
        {/*       <div className="flex flex-1 flex-col gap-6 items-start justify-start w-full"> */}
        {/*         <Img */}
        {/*           className="h-[50px] w-[50px]" */}
        {/*           src="content/images/img_menu.svg" */}
        {/*           alt="menu" */}
        {/*         /> */}
        {/*         <div className="flex flex-col items-start justify-start w-full"> */}
        {/*           <Text */}
        {/*             className="leading-[32.00px] text-[22px] text-gray-900 sm:text-lg md:text-xl w-full" */}
        {/*             size="txtChivoBold22Gray900" */}
        {/*           > */}
        {/*             Task and activity tracking for dashboard */}
        {/*           </Text> */}
        {/*           <div className="flex flex-row gap-3 items-start justify-start mt-[18px] w-[74%] md:w-full"> */}
        {/*             <Img */}
        {/*               className="h-6 mb-0.5 w-6" */}
        {/*               src="content/images/img_checkmark.svg" */}
        {/*               alt="checkmark Eight" */}
        {/*             /> */}
        {/*             <Text */}
        {/*               className="mt-1 text-bluegray-600 text-lg" */}
        {/*               size="txtChivoRegular18Bluegray600" */}
        {/*             > */}
        {/*               Calendar integration */}
        {/*             </Text> */}
        {/*           </div> */}
        {/*           <div className="flex flex-row gap-3 items-center justify-start mt-3.5 w-[62%] md:w-full"> */}
        {/*             <Img */}
        {/*               className="h-6 w-6" */}
        {/*               src="content/images/img_checkmark.svg" */}
        {/*               alt="checkmark One Eight" */}
        {/*             /> */}
        {/*             <Text */}
        {/*               className="text-bluegray-600 text-lg" */}
        {/*               size="txtChivoRegular18Bluegray600" */}
        {/*             > */}
        {/*               Task automation */}
        {/*             </Text> */}
        {/*           </div> */}
        {/*           <div className="flex flex-row gap-3 items-start justify-start mt-4 w-[87%] md:w-full"> */}
        {/*             <Img */}
        {/*               className="h-6 mb-0.5 w-6" */}
        {/*               src="content/images/img_checkmark.svg" */}
        {/*               alt="checkmark Two Eight" */}
        {/*             /> */}
        {/*             <Text */}
        {/*               className="mt-1 text-bluegray-600 text-lg" */}
        {/*               size="txtChivoRegular18Bluegray600" */}
        {/*             > */}
        {/*               Task appointment setting */}
        {/*             </Text> */}
        {/*           </div> */}
        {/*         </div> */}
        {/*       </div> */}
        {/*     </div> */}
        {/*   </div> */}
        {/* </div> */}
        {/* <div className="flex flex-col gap-12 items-center justify-start max-w-[920px] mt-[137px] mx-auto md:px-5 w-full"> */}
        {/*   <Text */}
        {/*     className="sm:text-[34px] md:text-[40px] text-[44px] text-gray-900" */}
        {/*     size="txtChivoBold44" */}
        {/*   > */}
        {/*     Frequently Asked Question */}
        {/*   </Text> */}
        {/*   <div className="flex flex-col items-center justify-start w-full"> */}
        {/*     <div className="flex flex-col gap-[17px] items-start justify-start w-full"> */}
        {/*       <div className="flex flex-row sm:gap-10 items-start justify-between w-full"> */}
        {/*         <Text */}
        {/*           className="mt-[7px] text-[22px] sm:text-lg text-teal-401 md:text-xl" */}
        {/*           size="txtChivoBold22Teal401" */}
        {/*         > */}
        {/*           How secure is my data? */}
        {/*         </Text> */}
        {/*         <Img */}
        {/*           className="h-6 mb-[7px] w-6" */}
        {/*           src="content/images/img_videocamera.svg" */}
        {/*           alt="videocamera" */}
        {/*         /> */}
        {/*       </div> */}
        {/*       <Text */}
        {/*         className="leading-[28.00px] text-bluegray-600 text-lg w-[84%] sm:w-full" */}
        {/*         size="txtChivoRegular18Bluegray600" */}
        {/*       > */}
        {/*         We monitor our systems and code 24/7/365 with both automated */}
        {/*         tools and our experienced staff to prevent and eliminate attacks */}
        {/*         on our service and to protect our customers’ data. */}
        {/*       </Text> */}
        {/*     </div> */}
        {/*     <Line className="bg-bluegray-200 h-px mt-8 w-full" /> */}
        {/*     <div className="flex sm:flex-col flex-row sm:gap-10 items-start justify-between mt-[35px] w-full"> */}
        {/*       <Text */}
        {/*         className="sm:mt-0 mt-[3px] text-[22px] text-gray-900 sm:text-lg md:text-xl" */}
        {/*         size="txtChivoBold22Gray900" */}
        {/*       > */}
        {/*         What happens to my data after the trial? */}
        {/*       </Text> */}
        {/*       <Img */}
        {/*         className="h-6 mb-1 w-6" */}
        {/*         src="content/images/img_plus_24X24.svg" */}
        {/*         alt="plus One" */}
        {/*       /> */}
        {/*     </div> */}
        {/*     <Line className="bg-bluegray-200 h-px mt-8 w-full" /> */}
        {/*     <div className="flex flex-row sm:gap-10 items-start justify-between mt-[35px] w-full"> */}
        {/*       <Text */}
        {/*         className="mt-[3px] text-[22px] text-gray-900 sm:text-lg md:text-xl" */}
        {/*         size="txtChivoBold22Gray900" */}
        {/*       > */}
        {/*         Can I switch between plans? */}
        {/*       </Text> */}
        {/*       <Img */}
        {/*         className="h-6 mb-1 w-6" */}
        {/*         src="content/images/img_plus_24X24.svg" */}
        {/*         alt="plus Two" */}
        {/*       /> */}
        {/*     </div> */}
        {/*     <Line className="bg-bluegray-200 h-px mt-8 w-full" /> */}
        {/*     <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between mt-[35px] w-full"> */}
        {/*       <Text */}
        {/*         className="text-[22px] text-gray-900 sm:text-lg md:text-xl" */}
        {/*         size="txtChivoBold22Gray900" */}
        {/*       > */}
        {/*         Is there a limit on team members? */}
        {/*       </Text> */}
        {/*       <Img */}
        {/*         className="h-6 w-6" */}
        {/*         src="content/images/img_plus_24X24.svg" */}
        {/*         alt="plus Three" */}
        {/*       /> */}
        {/*     </div> */}
        {/*     <Line className="bg-bluegray-200 h-px mt-9 w-full" /> */}
        {/*     <div className="flex flex-row sm:gap-10 items-start justify-between mt-[35px] w-full"> */}
        {/*       <Text */}
        {/*         className="mt-[3px] text-[22px] text-gray-900 sm:text-lg md:text-xl" */}
        {/*         size="txtChivoBold22Gray900" */}
        {/*       > */}
        {/*         Can I cancel anytime? */}
        {/*       </Text> */}
        {/*       <Img */}
        {/*         className="h-6 mb-[3px] w-6" */}
        {/*         src="content/images/img_plus_24X24.svg" */}
        {/*         alt="plus Four" */}
        {/*       /> */}
        {/*     </div> */}
        {/*     <Line className="bg-bluegray-200 h-px mt-8 w-full" /> */}
        {/*     <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between mt-[35px] w-full"> */}
        {/*       <Text */}
        {/*         className="md:mt-0 mt-[3px] text-[22px] text-gray-900 sm:text-lg md:text-xl" */}
        {/*         size="txtChivoBold22Gray900" */}
        {/*       > */}
        {/*         Do you have any discounts for non-profits or educational */}
        {/*         institutions? */}
        {/*       </Text> */}
        {/*       <Img */}
        {/*         className="h-6 mb-1 w-6" */}
        {/*         src="content/images/img_plus_24X24.svg" */}
        {/*         alt="plus Five" */}
        {/*       /> */}
        {/*     </div> */}
        {/*     <Line className="bg-bluegray-200 h-px mt-8 w-full" /> */}
        {/*   </div> */}
        {/* </div> */}
        <Footer className="bg-gray-900 flex items-center justify-center mt-[120px] md:px-5 w-full" />
      </div>
    </>
  );
};

export default SearchPage;
