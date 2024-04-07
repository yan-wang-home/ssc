import React, { useState } from 'react';

import { Link, useNavigate } from 'react-router-dom';

import { Button, Img, Input, List, Text } from '../../components';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import { Card, Carousel, Checkbox, FloatingLabel, Label, Modal, TextInput, ToggleSwitch } from 'flowbite-react';
import { Translate } from 'react-jhipster';

const HomepagePage: React.FC = () => {
  const navigate = useNavigate();
  const [openContactUsModal, setOpenContactUsModal] = useState(false);
  const [openFillFormModal, setOpenFillFormModal] = useState(false);

  const [email, setEmail] = useState('');
  const [subscribe, setSubscribe] = useState(false);

  function onCloseModal() {
    setOpenFillFormModal(false);
    setEmail('');
  }

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-chivo gap-[0px] /*items-center*/ justify-start mx-auto w-full">
        <Header className="flex items-center justify-center md:px-0 mx-auto w-full" />
        <div className="flex flex-col items-center justify-start w-full">
          <Img src="content/images/landing_page.jpeg" alt="Background" className="w-full h-screen object-cover" />
          {/* Home Page Main Picture */}
          <div className="absolute top-1/2 transform -translate-y-1/2 text-white p-8 w-full">
            <Text className="text-4xl font-bold text-blue-900 mb-4 lg:text-left sm:text-center">
              <Translate contentKey="homepage.title1" />
              <br />
              <Translate contentKey="homepage.title2" />
            </Text>
            <Text className="text-2xl text-blue-900 sm:text-center mt-4">
              <Translate contentKey="homepage.searchTitle" />
            </Text>
            <div className="bg-gray-50 border border-solid border-teal-400 flex sm:flex-col flex-row mt-2 gap-[22px] items-center justify-end p-1.5 rounded-md w-2/5 sm:w-full">
              <Input
                name="box"
                placeholder='<Translate contentKey="homepage.searchTitle" />'
                className="p-0 placeholder:text-bluegray-200 text-base text-left w-full"
                wrapClassName="sm:flex-1 sm:mt-0 my-[9px] w-3/5 sm:w-full"
                type="email"
                shape="square"
                color="gray_50"
                size="sm"
              ></Input>
              <Button
                className="cursor-pointer min-w-[150px] sm:mt-0 my-0.5 text-base text-center"
                shape="round"
                color="blue_900"
                size="xs"
                variant="fill"
              >
                <Translate contentKey="homepage.search" />
              </Button>
            </div>
          </div>
        </div>

        {/* 3 Steps */}
        <div className="flex flex-col items-center justify-start w-full">
          <div className="flex flex-col gap-12 items-center justify-start max-w-[1112px] mt-[130px] mx-auto md:px-5 w-full">
            <div className="flex flex-col gap-0 items-center justify-start max-w-[1112px] w-full">
              <Text
                className="leading-[54.00px] sm:text-[34px] md:text-[40px] text-[50px] text-center text-blue-900 w-[80%] sm:w-full"
                size="txtChivoBold44"
              >
                <Translate contentKey="homepage.stepTitle" />
              </Text>
              <Text
                className="leading-[54.00px] text-[20px] text-center text-blue-900 w-[80%] sm:w-full"
                size="txtChivoRegular18Bluegray600"
              >
                <Translate contentKey="homepage.stepSubtTitle" />
              </Text>
            </div>
            <div className="hidden lg:flex sm:flex-col lg:flex-row gap-[5px] items-start justify-evenly w-full">
              <div className="flex flex-col gap-3 items-center justify-center">
                <Card className="w-80 h-80 shadow-2xl rounded-3xl relative">
                  <h5 className="absolute top-5 left-5 text-2xl font-bold tracking-tight text-gray-600 dark:text-white">
                    <Translate contentKey="homepage.step1" />
                  </h5>
                  <div className="flex items-center justify-center">
                    <Img className="w-[200px] h-[200px]" src="content/images/edit.svg" alt="call" />
                  </div>
                  <p className="font-normal text-gray-700 dark:text-gray-400 text-xl text-center">
                    <Translate contentKey="homepage.step1Action" />
                  </p>
                </Card>
              </div>
              <Img className="h-5 md:mt-0 mt-[111px] max-md:hidden" src="content/images/img_directionline.svg" alt="DirectionLine" />
              <div className="flex flex-col gap-6 items-center justify-center">
                <Card className="w-80 h-80 shadow-2xl rounded-3xl relative">
                  <h5 className="absolute top-5 left-5 text-2xl font-bold tracking-tight text-gray-600 dark:text-white">
                    <Translate contentKey="homepage.step2" />
                  </h5>
                  <div className="flex items-center justify-center">
                    <Img
                      className="w-[200px] h-[200px]"
                      // src="content/images/chat-svgrepo-com.svg"
                      src="content/images/chat.svg"
                      alt="call"
                    />
                  </div>
                  <p className="font-normal text-gray-700 dark:text-gray-400 text-xl text-center">
                    <Translate contentKey="homepage.step2Action" />
                  </p>
                </Card>
              </div>
              <Img className="h-5 md:mt-0 mt-[114px] max-md:hidden " src="content/images/img_directionline.svg" alt="DirectionLine One" />
              <div className="flex flex-col gap-6 items-center justify-center">
                <Card className="w-80 h-80 shadow-2xl rounded-3xl relative">
                  <h5 className="absolute top-5 left-5 text-2xl font-bold tracking-tight text-gray-600 dark:text-white">
                    <Translate contentKey="homepage.step3" />
                  </h5>
                  <div className="flex items-center justify-center">
                    <Img className="w-[200px] h-[200px]" src="content/images/coffee.svg" alt="call" />
                  </div>
                  <p className="font-normal text-gray-700 dark:text-gray-400 text-xl text-center">
                    <Translate contentKey="homepage.step3Action" />
                  </p>
                </Card>
              </div>
            </div>
            <div className="lg:hidden mx-auto w-8/12 pb-8 h-[600px] sm:h-100">
              <Carousel pauseOnHover>
                <Card className="w-3/4 h-3/4 shadow-2xl rounded-3xl relative">
                  <h5 className="absolute top-5 left-5 text-2xl font-bold tracking-tight text-gray-600 dark:text-white">
                    <Translate contentKey="homepage.step1" />
                  </h5>
                  <div className="flex items-center justify-center">
                    <Img
                      className="w-[200px] h-[200px]"
                      // src="content/images/edit-file-svgrepo-com.svg"
                      src="content/images/edit.svg"
                      alt="call"
                    />
                  </div>
                  <p className="font-normal text-gray-700 dark:text-gray-400 text-xl text-center">
                    <Translate contentKey="homepage.step1Action" />
                  </p>
                </Card>
                <Card className="w-3/4 h-3/4 shadow-2xl rounded-3xl relative">
                  <h5 className="absolute top-5 left-5 text-2xl font-bold tracking-tight text-gray-600 dark:text-white">
                    <Translate contentKey="homepage.step2" />
                  </h5>
                  <div className="flex items-center justify-center">
                    <Img className="w-[200px] h-[200px]" src="content/images/chat.svg" alt="call" />
                  </div>
                  <p className="font-normal text-gray-700 dark:text-gray-400 text-xl text-center">
                    <Translate contentKey="homepage.step2Action" />
                  </p>
                </Card>
                <Card className="w-3/4 h-3/4 shadow-2xl rounded-3xl relative">
                  <h5 className="absolute top-5 left-5 text-2xl font-bold tracking-tight text-gray-600 dark:text-white">
                    <Translate contentKey="homepage.step3" />
                  </h5>
                  <div className="flex items-center justify-center">
                    <Img className="w-[200px] h-[200px]" src="content/images/coffee.svg" alt="call" />
                  </div>
                  <p className="font-normal text-gray-700 dark:text-gray-400 text-xl text-center">
                    <Translate contentKey="homepage.step3Action" />
                  </p>
                </Card>
              </Carousel>
            </div>
          </div>

          <div className="flex lg:flex-row sm:flex-col items-center justify-start w-full mt-[130px] mx-auto">
            <div className="flex sm:flex-col lg:flex-row items-center justify-center w-full relative">
              <Img src="content/images/get_in_touch.jpg" alt="Background" className="w-full object-cover" />
              <div className="absolute top-1/2 transform -translate-y-1/2 text-white p-8">
                <Text className="text-5xl text-center font-bold text-white-A700">
                  <Translate contentKey="homepage.contactUsTitle1" /> <br /> <Translate contentKey="homepage.contactUsTitle2" /> <br />{' '}
                  <Translate contentKey="homepage.contactUsTitle3" />
                </Text>
              </div>
              <div className="absolute top-1/2 pt-10 items-center">
                <button
                  onClick={() => setOpenContactUsModal(true)}
                  className="block w-full select-none rounded-lg bg-red-800 sm:mt-0 mt-5 py-3.5 px-7 text-center align-middle font-sans text-lg font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                  type="button"
                >
                  <Translate contentKey="homepage.contactUs" />
                </button>
              </div>
            </div>
            <div className="flex sm:flex-col lg:flex-row items-center justify-center w-full relative">
              <Img src="content/images/fill-form.jpg" alt="Background" className="w-full object-cover" />
              <div className="absolute top-1/2 transform -translate-y-1/2 text-white p-8">
                <Text className="text-5xl text-center font-bold text-white-A700">
                  <Translate contentKey="homepage.fillFormTitle1" /> <br /> <Translate contentKey="homepage.fillFormTitle2" />
                </Text>
              </div>
              <div className="absolute top-1/2 pt-10 items-center">
                <button
                  onClick={() => setOpenFillFormModal(true)}
                  className="block w-full select-none rounded-lg bg-blue-800 sm:mt-0 mt-5 py-3.5 px-7 text-center align-middle font-sans text-lg font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                  type="button"
                >
                  <Translate contentKey="homepage.fillForm" />
                </button>
                <Modal position="center" show={openFillFormModal} size="2xl" onClose={onCloseModal} popup>
                  <Modal.Header />
                  <Modal.Body>
                    <div className="bg-white-A700 flex flex-col font-chivo gap-[0px] items-center justify-start mx-auto w-full">
                      <div className="pt-2 pb-2 flex flex-row gap-2 items-end justify-center transform hover:scale-110 hover:border-white transition-transform duration-3000 ease-in-out">
                        <Link to="/" className="alert-link">
                          <Img className="h-[60px] w-[60px]" src="content/images/logo.png" alt="Group448" />
                        </Link>
                        <Link to="/" className="pl-2 alert-link">
                          <Text className="mb-[12px] text-[25px] text-sky-800" size="txtCinzelDecorativeBold16">
                            <Translate contentKey="global.title">
                              <Translate contentKey="homepage.fillFormModal.title" />
                            </Translate>
                          </Text>
                        </Link>
                      </div>
                      <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 text-lg sm:text-xl">
                        <Translate contentKey="homepage.fillFormModal.subTitle" />
                      </p>
                      <form action="#" className="space-y-5">
                        <div className="sm:col-span-2">
                          <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                            <Translate contentKey="homepage.fillFormModal.email" />
                          </label>
                          <input
                            type="email"
                            id="email"
                            className="shadow-sm bg-blue-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                            placeholder="Enter a valid email address"
                            required
                          />
                        </div>
                        <div className="sm:col-span-2">
                          <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                            <Translate contentKey="homepage.fillFormModal.subject" />
                          </label>
                          <select
                            id="subject"
                            className="block p-3 w-full text-sm text-gray-900 bg-blue-100 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                            placeholder="Let us know how we can help you"
                            required
                          >
                            <option value="purchase">
                              <Translate contentKey="homepage.fillFormModal.subject1" />
                            </option>
                            <option value="refinance">
                              <Translate contentKey="homepage.fillFormModal.subject2" />
                            </option>
                            <option value="renewal">
                              <Translate contentKey="homepage.fillFormModal.subject3" />
                            </option>
                          </select>
                        </div>
                        <div className="sm:col-span-2">
                          <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">
                            <Translate contentKey="homepage.fillFormModal.message" />
                          </label>
                          <textarea
                            id="message"
                            rows={6}
                            className="block p-2.5 w-full text-sm text-gray-900 bg-blue-100 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                            placeholder="Enter your message"
                          ></textarea>
                        </div>
                        <button
                          type="button"
                          className="mt-8 flex items-center justify-center text-sm w-full rounded px-4 py-2.5 font-semibold bg-sky-800 text-white hover:bg-[#222]"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16px"
                            height="16px"
                            fill="#fff"
                            className="mr-2"
                            viewBox="0 0 548.244 548.244"
                          >
                            <path
                              fillRule="evenodd"
                              d="M392.19 156.054 211.268 281.667 22.032 218.58C8.823 214.168-.076 201.775 0 187.852c.077-13.923 9.078-26.24 22.338-30.498L506.15 1.549c11.5-3.697 24.123-.663 32.666 7.88 8.542 8.543 11.577 21.165 7.879 32.666L390.89 525.906c-4.258 13.26-16.575 22.261-30.498 22.338-13.923.076-26.316-8.823-30.728-22.032l-63.393-190.153z"
                              clipRule="evenodd"
                              data-original="#000000"
                            />
                          </svg>
                          <Translate contentKey="homepage.fillFormModal.sendMessage" />
                        </button>
                        <div className="flex gap-x-4 sm:col-span-2">
                          <div className="flex h-[38px] w-[38px] items-center justify-center">
                            <ToggleSwitch checked={subscribe} label="" onChange={setSubscribe} />
                          </div>
                          <div>
                            <label className="text-sm leading-6 text-gray-600" id="switch-1-label">
                              <Translate contentKey="homepage.fillFormModal.subscribeMessage" />
                            </label>
                          </div>
                        </div>
                      </form>
                    </div>
                  </Modal.Body>
                </Modal>
              </div>
            </div>
          </div>

          <div className="flex sm:flex-col flex-row sm:gap-5 items-center justify-start max-w-[1112px] mt-24 mx-auto p-0.5 md:px-5 w-full">
            <Img className="h-[30px] ml-1 sm:ml-[0] w-[13%]" src="content/images/img_microsoft1.svg" alt="MicrosoftOne" />
            <Img className="h-[30px] sm:ml-[0] ml-[65px] w-[11%]" src="content/images/img_vector.svg" alt="Vector" />
            <Img className="h-9 sm:ml-[0] ml-[101px] w-[7%]" src="content/images/img_trash.svg" alt="trash" />
            <Img className="h-[35px] ml-24 sm:ml-[0] w-[12%]" src="content/images/img_shopify.svg" alt="Shopify" />
            <Img className="h-[33px] sm:ml-[0] ml-[63px] w-[13%]" src="content/images/img_group.svg" alt="Group" />
            <Img className="h-[30px] sm:ml-[0] ml-[88px] w-[7%]" src="content/images/img_intel.svg" alt="Intel" />
          </div>
          <Footer className="bg-gray-200 flex items-center justify-center mt-[120px] md:px-5 w-full" />
        </div>
      </div>
    </>
  );
};

export default HomepagePage;
