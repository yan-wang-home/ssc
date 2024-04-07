import React from 'react';

import { Text } from '../../components';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import { Translate } from 'react-jhipster';

const ProductsPage: React.FC = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-chivo sm:gap-10 md:gap-10 gap-[70px] items-center justify-start mx-auto w-full">
        <Header className="flex items-center justify-center md:px-5 w-full" />
        <div className="flex flex-col items-center justify-start w-full">
          {/* Top */}
          <div className="flex flex-col gap-12 items-center justify-start mx-auto w-full px-10">
            <div className="flex flex-col gap-0 items-center justify-start mb-3">
              <Text
                className="leading-[54.00px] sm:text-[34px] md:text-[40px] text-[50px] text-center text-blue-900 w-[80%] sm:w-full"
                size="txtChivoBold44"
              >
                <Translate contentKey="product.title" />
              </Text>
              <Text className="text-[20px] text-justify mt-2 text-gray-500 w-full" size="txtChivoRegular18Bluegray600">
                <Translate contentKey="product.subTitle" />
              </Text>
            </div>
          </div>

          {/* First Time Homebuyer & New to Canada */}
          <div className="flex flex-col gap-12 items-center justify-start md:px-5 w-full">
            <div className="flex lg:flex-row sm:flex-col md:gap-10 gap-3 items-center justify-between w-full">
              <div className="flex flex-col bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <a href="/products_firsttimehomebuyer">
                  <img className="rounded-t-lg" src="content/images/firsttimehomebuyer.png" alt="" />
                </a>
                <div className="p-4">
                  <a>
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-center text-gray-900 dark:text-white">
                      <Translate contentKey="product.firsttimehomebuyer.title" />
                    </h5>
                  </a>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 text-center">
                    <Translate contentKey="product.firsttimehomebuyer.description" />
                  </p>
                  <div className="flex justify-end">
                    <a
                      href="/products_firsttimehomebuyer"
                      className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                      Read more
                      <svg
                        className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 14 10"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M1 5h12m0 0L9 1m4 4L9 9"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
              <div className="flex flex-col bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <a href="/products_newtocanada">
                  <img className="rounded-t-lg" src="content/images/new2canada.png" alt="" />
                </a>
                <div className="p-4">
                  <a>
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-center text-gray-900 dark:text-white">
                      <Translate contentKey="product.newtocanada.title" />
                    </h5>
                  </a>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 text-center">
                    <Translate contentKey="product.newtocanada.description" />
                  </p>
                  <div className="flex justify-end">
                    <a
                      href="/products_newtocanada"
                      className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                      Read more
                      <svg
                        className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 14 10"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M1 5h12m0 0L9 1m4 4L9 9"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Business for Self / Refinance for Renovation / Purchase + Improvement / Construction Loan */}
          <div className="flex flex-col gap-12 items-center justify-start mx-auto md:px-5 mt-4 w-full">
            <div className="flex sm:flex-col lg:flex-row md:gap-10 gap-3 items-center justify-between w-full">
              <div className="bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <a href="/products_businessforself">
                  <img className="rounded-t-lg" src="content/images/businessforself.png" alt="" />
                </a>
                <div className="p-4">
                  <a>
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-center text-gray-900 dark:text-white">
                      <Translate contentKey="product.businessforself.title" />
                    </h5>
                  </a>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 text-center">
                    <Translate contentKey="product.businessforself.description" />
                  </p>
                  <div className="flex justify-end">
                    <a
                      href="/products_businessforself"
                      className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                      Read more
                      <svg
                        className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 14 10"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M1 5h12m0 0L9 1m4 4L9 9"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <a href="/products_refinanceforreno">
                  <img className="rounded-t-lg" src="content/images/refinanceforreno.png" alt="" />
                </a>
                <div className="p-4">
                  <a>
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-center text-gray-900 dark:text-white">
                      <Translate contentKey="product.refinanceforreno.title" />
                    </h5>
                  </a>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 text-center">
                    <Translate contentKey="product.refinanceforreno.description" />
                  </p>
                  <div className="flex justify-end">
                    <a
                      href="/products_refinanceforreno"
                      className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                      Read more
                      <svg
                        className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 14 10"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M1 5h12m0 0L9 1m4 4L9 9"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <a href="/products_purchaseimprovement">
                  <img className="rounded-t-lg" src="content/images/purchaseimprovement.png" alt="" />
                </a>
                <div className="p-4">
                  <a>
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-center text-gray-900 dark:text-white">
                      <Translate contentKey="product.purchaseimprovement.title" />
                    </h5>
                  </a>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 text-center">
                    <Translate contentKey="product.purchaseimprovement.description" />
                  </p>
                  <div className="flex justify-end">
                    <a
                      href="/products_purchaseimprovement"
                      className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                      Read more
                      <svg
                        className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 14 10"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M1 5h12m0 0L9 1m4 4L9 9"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <a href="/products_constructionloan">
                  <img className="rounded-t-lg" src="content/images/constructionloan.jpeg" alt="" />
                </a>
                <div className="p-4">
                  <a>
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-center text-gray-900 dark:text-white">
                      <Translate contentKey="product.constructionloan.title" />
                    </h5>
                  </a>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 text-center">
                    <Translate contentKey="product.constructionloan.description" />
                  </p>
                  <div className="flex justify-end">
                    <a
                      href="/products_constructionloan"
                      className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                      Read more
                      <svg
                        className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 14 10"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M1 5h12m0 0L9 1m4 4L9 9"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Equity take out/ Buy a rental property / Debts Consolidation / Switch & Transfer */}
          <div className="flex flex-col gap-12 items-center justify-start mx-auto md:px-5 mt-4 w-full">
            <div className="flex sm:flex-col lg:flex-row md:gap-10 gap-3 items-center justify-between w-full">
              <div className="bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <a href="/products_equitytakeout">
                  <img className="rounded-t-lg" src="content/images/equitytakeout.png" alt="" />
                </a>
                <div className="p-4">
                  <a>
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-center text-gray-900 dark:text-white">
                      <Translate contentKey="product.equitytakeout.title" />
                    </h5>
                  </a>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 text-center">
                    <Translate contentKey="product.equitytakeout.description" />
                  </p>
                  <div className="flex justify-end">
                    <a
                      href="/products_equitytakeout"
                      className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                      Read more
                      <svg
                        className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 14 10"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M1 5h12m0 0L9 1m4 4L9 9"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <a href="/products_buyrentalproperty">
                  <img className="rounded-t-lg" src="content/images/buyrentalproperty.png" alt="" />
                </a>
                <div className="p-4">
                  <a>
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-center text-gray-900 dark:text-white">
                      <Translate contentKey="product.buyrentalproperty.title" />
                    </h5>
                  </a>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 text-center">
                    <Translate contentKey="product.buyrentalproperty.description" />
                  </p>
                  <div className="flex justify-end">
                    <a
                      href="/products_buyrentalproperty"
                      className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                      Read more
                      <svg
                        className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 14 10"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M1 5h12m0 0L9 1m4 4L9 9"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <a href="/products_debtsconsolidation">
                  <img className="rounded-t-lg" src="content/images/debtsconsolidation.png" alt="" />
                </a>
                <div className="p-4">
                  <a>
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-center text-gray-900 dark:text-white">
                      <Translate contentKey="product.debtsconsolidation.title" />
                    </h5>
                  </a>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 text-center">
                    <Translate contentKey="product.debtsconsolidation.description" />
                  </p>
                  <div className="flex justify-end">
                    <a
                      href="/products_debtsconsolidation"
                      className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                      Read more
                      <svg
                        className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 14 10"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M1 5h12m0 0L9 1m4 4L9 9"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <a href="/products_switchtransfer">
                  <img className="rounded-t-lg" src="content/images/switchtransfer.png" alt="" />
                </a>
                <div className="p-4">
                  <a>
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-center text-gray-900 dark:text-white">
                      <Translate contentKey="product.switchtransfer.title" />
                    </h5>
                  </a>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 text-center">
                    <Translate contentKey="product.switchtransfer.description" />
                  </p>
                  <div className="flex justify-end">
                    <a
                      href="/products_switchtransfer"
                      className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                      Read more
                      <svg
                        className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 14 10"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M1 5h12m0 0L9 1m4 4L9 9"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Mortgage Renew / Commercial Loan / Reverse Mortgage / Home Equity Line of Credit */}
          <div className="flex flex-col gap-12 items-center justify-start mx-auto md:px-5 mt-4 w-full">
            <div className="flex sm:flex-col lg:flex-row md:gap-10 gap-3 items-center justify-between w-full">
              <div className="bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <a href="/products_mortgagerenew">
                  <img className="rounded-t-lg" src="content/images/mortgagerenew.png" alt="" />
                </a>
                <div className="p-4">
                  <a>
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-center text-gray-900 dark:text-white">
                      <Translate contentKey="product.mortgagerenew.title" />
                    </h5>
                  </a>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 text-center">
                    <Translate contentKey="product.mortgagerenew.description" />
                  </p>
                  <div className="flex justify-end">
                    <a
                      href="/products_mortgagerenew"
                      className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                      Read more
                      <svg
                        className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 14 10"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M1 5h12m0 0L9 1m4 4L9 9"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <a href="/products_commercialloan">
                  <img className="rounded-t-lg" src="content/images/commercialloan.png" alt="" />
                </a>
                <div className="p-4">
                  <a>
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-center text-gray-900 dark:text-white">
                      <Translate contentKey="product.commercialloan.title" />
                    </h5>
                  </a>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 text-center">
                    <Translate contentKey="product.commercialloan.description" />
                  </p>
                  <div className="flex justify-end">
                    <a
                      href="/products_commercialloan"
                      className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                      Read more
                      <svg
                        className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 14 10"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M1 5h12m0 0L9 1m4 4L9 9"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <a href="/products_reversemortgage">
                  <img className="rounded-t-lg" src="content/images/reversemortgage.png" alt="" />
                </a>
                <div className="p-4">
                  <a>
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-center text-gray-900 dark:text-white">
                      <Translate contentKey="product.reversemortgage.title" />
                    </h5>
                  </a>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 text-center">
                    <Translate contentKey="product.reversemortgage.description" />
                  </p>
                  <div className="flex justify-end">
                    <a
                      href="/products_reversemortgage"
                      className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                      Read more
                      <svg
                        className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 14 10"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M1 5h12m0 0L9 1m4 4L9 9"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <a href="/products_homeequitylineofcredit">
                  <img className="rounded-t-lg" src="content/images/homeequitylineofcredit.png" alt="" />
                </a>
                <div className="p-4">
                  <a>
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-center text-gray-900 dark:text-white">
                      <Translate contentKey="product.homeequitylineofcredit.title" />
                    </h5>
                  </a>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 text-center">
                    <Translate contentKey="product.homeequitylineofcredit.description" />
                  </p>
                  <div className="flex justify-end">
                    <a
                      href="/products_homeequitylineofcredit"
                      className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                      Read more
                      <svg
                        className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 14 10"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M1 5h12m0 0L9 1m4 4L9 9"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Footer className="bg-gray-200 flex items-center justify-center mt-[120px] md:px-5 w-full" />
        </div>
      </div>
    </>
  );
};

export default ProductsPage;
