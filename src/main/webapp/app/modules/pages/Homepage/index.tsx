import React, { useEffect, useState } from 'react';
import { generatePath } from 'react-router-dom';

import { Link, useNavigate } from 'react-router-dom';

import { Button, Img, Input, List, Text } from '../../components';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import { Card, Carousel, Checkbox, FloatingLabel, Label, Modal, TextInput, ToggleSwitch } from 'flowbite-react';
import { Translate, translate } from 'react-jhipster';
import { createEntity } from 'app/entities/contact-form/contact-form.reducer';
import { useAppDispatch, useAppSelector } from 'app/config/store';
import { IContactForm } from 'app/shared/model/contact-form.model';
import { toast } from 'react-toastify';
import Seo from 'app/modules/pages/Seo';

const HomepagePage: React.FC = () => {
  const navigate = useNavigate();

  const [openContactUsModal, setOpenContactUsModal] = useState(false);
  const [openFillFormModal, setOpenFillFormModal] = useState(false);

  const [searchQuery, setSearchQuery] = useState('');
  const [contactForm, setContactForm] = useState<IContactForm>({ subject: 'purchase' } as IContactForm);
  const dispatch = useAppDispatch();

  function onCloseModal() {
    setOpenFillFormModal(false);
  }

  const performSearch = () => {
    navigate(getArtifactUrlPath(generateQuery(searchQuery)));
  };

  const getArtifactUrlPath = (query: string): string =>
    generatePath('/search/:query', {
      query,
    });

  const generateQuery = (userInput: string): string => {
    return userInput.split('.').join('%dot%');
  };

  const updateSuccess = useAppSelector(state => state.contactForm.updateSuccess);

  useEffect(() => {
    if (updateSuccess) {
      toast.success(translate('homepage.sentContactForm'));
    }
  }, [updateSuccess]);

  const sendContactForm = () => {
    dispatch(createEntity(contactForm));
    onCloseModal();
  };

  const handleChange = event => {
    const { id, value } = typeof event === 'boolean' ? { id: 'subscribe', value: event } : event.target;
    setContactForm(prevFormData => ({ ...prevFormData, [id]: value }));
  };

  const isSentContactFormDisabled = () => {
    return contactForm.email === undefined || contactForm.subject === undefined;
  };

  return (
    <>
      <Seo
        title="Smart Solutions Capital | 聪达资本 | SSC | ssc"
        description="Smart Solutions Capital (SSC) | 聪达资本 has a mortgage just for you."
        keywords="Smart Solutions Capital, SSC, 聪达资本, Connie Xie Toronto, 谢聪, 谢聪多伦多, 加拿大房屋贷款, CMHC贷款申请, 房屋再融资, 反向抵押贷款, 多套物业贷款, 华人贷款顾问多伦多, 加拿大贷款中介, 多伦多贷款公司, 多伦多靠谱贷款经纪, 多伦多商业贷款专家, Canada home mortgage, CMHC application, Mortgage refinancing in Canada, Reverse mortgage in Canada, Multi-property mortgage, Chinese mortgage advisor in Toronto, Mortgage broker in Canada, Toronto mortgage company, the best mortgage agent in Toronto, Commercial mortgage agent in Toronto"
        url="https://ssc.finance/"
        image="https://ssc.finance/content/images/landing_page.jpeg"
      />
      <div className="bg-white-A700 flex flex-col font-chivo gap-[0px] /*items-center*/ justify-start mx-auto w-full">
        <Header className="flex items-center justify-center md:px-0 mx-auto w-full" />
        <div className="flex flex-col items-center justify-start w-full">
          <Img src="content/images/landing_page.jpeg" alt="Background" className="sm:hidden w-full h-screen sm:h-[700px] object-cover" />
          <Img
            src="content/images/landing_small.png"
            alt="Background"
            className="lg:hidden md:hidden w-full h-screen sm:h-[700px] object-cover"
          />
          {/* Home Page Main Picture */}
          <div className="absolute top-3/4 lg:top-1/2 md:top-1/2 transform -translate-y-1/2 text-white p-8 w-full">
            <Text className="lg:text-4xl md:text-3xl sm:text-xl font-bold text-blue-900 mb-4 lg:text-left md:text-left sm:text-center sm:backdrop-blur-sm">
              <Translate contentKey="homepage.title1" />
              <br />
              <Translate contentKey="homepage.title2" />
            </Text>
            <Text className="lg:text-2xl md:text-xl sm:text-lg text-blue-900 lg:text-left md:text-left sm:text-center mt-4 sm:backdrop-blur-sm">
              <Translate contentKey="homepage.searchTitle" />
            </Text>
            <div className="bg-gray-50 border border-solid border-teal-400 flex sm:flex-col flex-row mt-2 gap-[22px] items-center justify-end p-1.5 rounded-md lg:w-2/5 md:w-3/5 sm:w-full">
              <Input
                name="box"
                placeholder={translate('homepage.searchPlaceholder')}
                className="p-0 placeholder:text-bluegray-200 text-base text-left w-full"
                wrapClassName="sm:flex-1 sm:mt-0 my-[9px] w-4/5 sm:w-full"
                type="email"
                shape="square"
                color="gray_50"
                size="sm"
                onChange={setSearchQuery}
              />
              <Button
                className="cursor-pointer min-w-[150px] sm:mt-0 my-0.5 text-base text-center"
                shape="round"
                color="blue_900"
                size="xs"
                variant="fill"
                onClick={performSearch}
              >
                <Translate contentKey="homepage.search" />
              </Button>
            </div>
          </div>
        </div>

        {/* 3 Steps */}
        <div className="flex flex-col items-center justify-start w-full">
          <div className="flex flex-col gap-12 items-center justify-start max-w-[1112px] lg:mt-[130px] md:mt-[80px] sm:mt-8 mx-auto md:px-5 w-full">
            <div className="flex flex-col gap-0 items-center justify-start max-w-[1112px] w-full">
              <Text className="leading-[54.00px] lg:text-[50px] md:text-3xl sm:text-2xl text-center text-blue-900 w-[90%]">
                <Translate contentKey="homepage.stepTitle" />
              </Text>
              <Text className="lg:leading-[54.00px] lg:text-[20px] md:text-lg sm:text-sm text-center text-blue-900 w-[90%]">
                <Translate contentKey="homepage.stepSubTitle" />
              </Text>
            </div>
            <div className="hidden lg:flex sm:flex-col lg:flex-row gap-[5px] items-start justify-evenly w-full">
              <div className="flex flex-col gap-3 items-center justify-center">
                <Card className="w-80 h-80 shadow-2xl rounded-3xl relative">
                  <h5 className="absolute top-5 text-2xl font-bold tracking-tight text-gray-600 dark:text-white">
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
              <div className="flex flex-col w-32">
                <Img className="h-5 md:mt-0 mt-[111px] max-md:hidden" src="content/images/img_directionline.svg" alt="DirectionLine" />
              </div>
              <div className="flex flex-col gap-6 items-center justify-center">
                <Card className="w-80 h-80 shadow-2xl rounded-3xl relative">
                  <h5 className="absolute top-5 text-2xl font-bold tracking-tight text-gray-600 dark:text-white">
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
              <div className="flex flex-col w-32">
                <Img className="h-5 md:mt-0 mt-[114px] max-md:hidden " src="content/images/img_directionline.svg" alt="DirectionLine One" />
              </div>
              <div className="flex flex-col gap-6 items-center justify-center">
                <Card className="w-80 h-80 shadow-2xl rounded-3xl relative">
                  <h5 className="absolute top-5 text-2xl font-bold tracking-tight text-gray-600 dark:text-white">
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
            <div className="lg:hidden mx-auto md:w-[70%] sm:w-[85%] sm:h-full">
              <Carousel draggable pauseOnHover>
                <Card className="w-full md:h-[600px] sm:h-[400px] shadow-2xl rounded-2xl relative">
                  <h5 className="absolute top-5 left-5 text-2xl font-bold tracking-tight text-gray-600 dark:text-white">
                    <Translate contentKey="homepage.step1" />
                  </h5>
                  <div className="flex items-center justify-center">
                    <Img
                      className="md:w-[250px] sm:w-[200px]"
                      // src="content/images/edit-file-svgrepo-com.svg"
                      src="content/images/edit.svg"
                      alt="call"
                    />
                  </div>
                  <p className="font-normal text-gray-700 dark:text-gray-400 text-xl text-center">
                    <Translate contentKey="homepage.step1Action" />
                  </p>
                </Card>
                <Card className="w-full md:h-[600px] sm:h-[400px] shadow-2xl rounded-2xl relative">
                  <h5 className="absolute top-5 left-5 text-2xl font-bold tracking-tight text-gray-600 dark:text-white">
                    <Translate contentKey="homepage.step2" />
                  </h5>
                  <div className="flex items-center justify-center">
                    <Img className="md:w-[250px] sm:w-[200px]" src="content/images/chat.svg" alt="call" />
                  </div>
                  <p className="font-normal text-gray-700 dark:text-gray-400 text-xl text-center">
                    <Translate contentKey="homepage.step2Action" />
                  </p>
                </Card>
                <Card className="w-full md:h-[600px] sm:h-[400px] shadow-2xl rounded-2xl relative">
                  <h5 className="absolute top-5 left-5 text-2xl font-bold tracking-tight text-gray-600 dark:text-white">
                    <Translate contentKey="homepage.step3" />
                  </h5>
                  <div className="flex items-center justify-center">
                    <Img className="md:w-[250px] sm:w-[200px]" src="content/images/coffee.svg" alt="call" />
                  </div>
                  <p className="font-normal text-gray-700 dark:text-gray-400 text-xl text-center">
                    <Translate contentKey="homepage.step3Action" />
                  </p>
                </Card>
              </Carousel>
            </div>
          </div>

          {/* Get in touch & Fill in form */}
          <div className="flex lg:flex-row md:flex-col sm:flex-col items-center justify-start w-full lg:mt-[130px] md:mt-20 sm:mt-14 mx-auto">
            <div className="flex sm:flex-col lg:flex-row items-center justify-center w-full relative">
              <Img src="content/images/get_in_touch.jpg" alt="Background" className="w-full object-cover" />
              <div className="absolute top-1/2 transform -translate-y-1/2 text-white p-8">
                <Text className="lg:text-5xl md:text-3xl sm:text-xl text-center font-bold text-white-A700">
                  <Translate contentKey="homepage.contactUsTitle1" /> <br /> <Translate contentKey="homepage.contactUsTitle2" /> <br />{' '}
                  <Translate contentKey="homepage.contactUsTitle3" />
                </Text>
              </div>
              <div className="absolute top-1/2 lg:pt-10 md:pt-5 sm:pt-5 items-center">
                <button
                  // onClick={() => setOpenContactUsModal(true)}
                  onClick={() => navigate('/contactus')}
                  className="block w-full select-none rounded-lg bg-red-800 sm:mt-0 mt-5 py-3.5 px-7 text-center align-middle font-sans text-lg font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                  type="button"
                >
                  <Translate contentKey="homepage.contactUs" />
                </button>
              </div>
            </div>
            <div className="flex sm:flex-col md:flex-col lg:flex-row items-center justify-center w-full relative">
              <Img src="content/images/fill-form.jpg" alt="Background" className="w-full object-cover" />
              <div className="absolute top-1/2 transform -translate-y-1/2 text-white p-8">
                <Text className="lg:text-5xl md:text-3xl sm:text-xl text-center font-bold text-white-A700">
                  <Translate contentKey="homepage.fillFormTitle1" /> <br /> <Translate contentKey="homepage.fillFormTitle2" />
                </Text>
              </div>
              <div className="absolute top-1/2 lg:pt-10 md:pt-5 sm:pt-5 items-center">
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
                      <div className="pt-2 pb-2 flex flex-row gap-2 items-center justify-center transform hover:scale-110 hover:border-white transition-transform duration-3000 ease-in-out">
                        <Link to="/" className="alert-link">
                          <Img className="lg:w-[60px] md:w-[50px] sm:w-[40px]" src="content/images/logo.png" alt="Group448" />
                        </Link>
                        <Link to="/" className="pl-2 alert-link text-center">
                          <Text className="lg:text-[25px] md:text-[20px] sm:text-[18px] text-sky-800" size="txtCinzelDecorativeBold16">
                            <Translate contentKey="global.title">
                              <Translate contentKey="homepage.fillFormModal.title" />
                            </Translate>
                          </Text>
                        </Link>
                      </div>
                      <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 lg:text-xl md:text-lg sm:text-sm">
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
                            placeholder={translate('homepage.fillFormModal.emailPlaceHolder')}
                            required
                            value={contactForm.email}
                            onChange={handleChange}
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
                            value={contactForm.subject}
                            onChange={handleChange}
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
                            required
                            className="block p-2.5 w-full text-sm text-gray-900 bg-blue-100 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                            placeholder={translate('homepage.fillFormModal.messagePlaceHolder')}
                            value={contactForm.message}
                            onChange={handleChange}
                          ></textarea>
                        </div>
                        <button
                          type="button"
                          onClick={sendContactForm}
                          disabled={isSentContactFormDisabled()}
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
                            <ToggleSwitch id="subscribe" checked={contactForm.subscribe} label="" onChange={handleChange} />
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

          {/* <div className="flex sm:flex-col flex-row sm:gap-5 items-center justify-start max-w-[1112px] mt-24 mx-auto p-0.5 md:px-5 w-full"> */}
          {/*   <Img className="h-[30px] ml-1 sm:ml-[0] w-[13%]" src="content/images/img_microsoft1.svg" alt="MicrosoftOne" /> */}
          {/*   <Img className="h-[30px] sm:ml-[0] ml-[65px] w-[11%]" src="content/images/img_vector.svg" alt="Vector" /> */}
          {/*   <Img className="h-9 sm:ml-[0] ml-[101px] w-[7%]" src="content/images/img_trash.svg" alt="trash" /> */}
          {/*   <Img className="h-[35px] ml-24 sm:ml-[0] w-[12%]" src="content/images/img_shopify.svg" alt="Shopify" /> */}
          {/*   <Img className="h-[33px] sm:ml-[0] ml-[63px] w-[13%]" src="content/images/img_group.svg" alt="Group" /> */}
          {/*   <Img className="h-[30px] sm:ml-[0] ml-[88px] w-[7%]" src="content/images/img_intel.svg" alt="Intel" /> */}
          {/* </div> */}
          <Footer className="bg-gray-200 flex items-center justify-center mt-[120px] md:px-5 w-full" />
        </div>
      </div>
    </>
  );
};

export default HomepagePage;
