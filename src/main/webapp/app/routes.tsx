import React from 'react';
import { Route } from 'react-router-dom';
import Loadable from 'react-loadable';

import Login from 'app/modules/login/login';
import Register from 'app/modules/account/register/register';
import Activate from 'app/modules/account/activate/activate';
import PasswordResetInit from 'app/modules/account/password-reset/init/password-reset-init';
import PasswordResetFinish from 'app/modules/account/password-reset/finish/password-reset-finish';
import Logout from 'app/modules/login/logout';
import Home from 'app/modules/home/home';
import EntitiesRoutes from 'app/entities/routes';
import PrivateRoute from 'app/shared/auth/private-route';
import ErrorBoundaryRoutes from 'app/shared/error/error-boundary-routes';
import PageNotFound from 'app/shared/error/page-not-found';
import { AUTHORITIES } from 'app/config/constants';
import About from 'app/modules/pages/About';
import Products from 'app/modules/pages/Product';
import Products_FirstTimeHomeBuyer from 'app/modules/pages/Product/FirstTimeHomeBuyer';
import Products_NewToCanada from 'app/modules/pages/Product/NewToCanada';
import Products_BusinessForSelf from 'app/modules/pages/Product/BusinessForSelf';
import Products_RefinanceForRenovation from 'app/modules/pages/Product/RefinanceForRenovation';
import Products_PurchaseImprovement from 'app/modules/pages/Product/PurchaseImprovement';
import Products_ConstructionLoan from 'app/modules/pages/Product/ConstructionLoan';
import Products_EquityTakeout from 'app/modules/pages/Product/EquityTakeout';
import Products_BuyRentalProperty from 'app/modules/pages/Product/BuyRentalProperty';
import Products_DebtsConsolidation from 'app/modules/pages/Product/DebtsConsolidation';
import Products_SwitchTransfer from 'app/modules/pages/Product/SwitchTransfer';
import Products_MortgageRenew from 'app/modules/pages/Product/MortgageRenew';
import Products_CommercialLoan from 'app/modules/pages/Product/CommercialLoan';
import Products_ReverseMortgage from 'app/modules/pages/Product/ReverseMortgage';
import Products_HomeEquityLineOfCredit from 'app/modules/pages/Product/HomeEquityLineOfCredit';
import Rates from 'app/modules/pages/Rates';
import Search from 'app/modules/pages/Search';
import WhatNew from 'app/modules/pages/WhatNew';
import AdminView from 'app/modules/home/admin';
import PrivacyPolicy from 'app/modules/pages/Homepage/PrivacyPolicy';
import ComingSoon from 'app/modules/pages/Common/ComingSoon';

const loading = <div>loading ...</div>;

const Account = Loadable({
  loader: () => import(/* webpackChunkName: "account" */ 'app/modules/account'),
  loading: () => loading,
});

const Admin = Loadable({
  loader: () => import(/* webpackChunkName: "administration" */ 'app/modules/administration'),
  loading: () => loading,
});
const AppRoutes = () => {
  return (
    <div className="view-routes">
      <ErrorBoundaryRoutes>
        <Route index element={<Home />} />
        <Route path="products" element={<Products />} />
        <Route path="products_firsttimehomebuyer" element={<Products_FirstTimeHomeBuyer />} />
        <Route path="products_newtocanada" element={<Products_NewToCanada />} />
        <Route path="products_businessforself" element={<Products_BusinessForSelf />} />
        <Route path="products_refinanceforreno" element={<Products_RefinanceForRenovation />} />
        <Route path="products_purchaseimprovement" element={<Products_PurchaseImprovement />} />
        <Route path="products_constructionloan" element={<Products_ConstructionLoan />} />
        <Route path="products_equitytakeout" element={<Products_EquityTakeout />} />
        <Route path="products_buyrentalproperty" element={<Products_BuyRentalProperty />} />
        <Route path="products_debtsconsolidation" element={<Products_DebtsConsolidation />} />
        <Route path="products_switchtransfer" element={<Products_SwitchTransfer />} />
        <Route path="products_mortgagerenew" element={<Products_MortgageRenew />} />
        <Route path="products_commercialloan" element={<Products_CommercialLoan />} />
        <Route path="products_reversemortgage" element={<Products_ReverseMortgage />} />
        <Route path="products_homeequitylineofcredit" element={<Products_HomeEquityLineOfCredit />} />
        <Route path="search" element={<Search />} />
        <Route path="rates" element={<Rates />} />
        <Route path="about" element={<About />} />
        <Route path="privacypolicy" element={<PrivacyPolicy />} />
        <Route path="comingsoon" element={<ComingSoon />} />
        <Route path="whatnew" element={<WhatNew />} />
        <Route path="admin" element={<AdminView />} />
        <Route path="login" element={<Login />} />
        <Route path="logout" element={<Logout />} />
        {/* <Route path="/contact" element={<Contact />} /> */}
        {/* <Route path="/dhiwise-dashboard" element={<Home />} /> */}
        <Route path="account">
          <Route
            path="*"
            element={
              <PrivateRoute hasAnyAuthorities={[AUTHORITIES.ADMIN, AUTHORITIES.USER]}>
                <Account />
              </PrivateRoute>
            }
          />
          <Route path="register" element={<Register />} />
          <Route path="activate" element={<Activate />} />
          <Route path="reset">
            <Route path="request" element={<PasswordResetInit />} />
            <Route path="finish" element={<PasswordResetFinish />} />
          </Route>
        </Route>
        <Route
          path="admin/*"
          element={
            <PrivateRoute hasAnyAuthorities={[AUTHORITIES.ADMIN]}>
              <Admin />
            </PrivateRoute>
          }
        />
        <Route
          path="*"
          element={
            <PrivateRoute hasAnyAuthorities={[AUTHORITIES.USER]}>
              <EntitiesRoutes />
            </PrivateRoute>
          }
        />
        <Route path="*" element={<PageNotFound />} />
      </ErrorBoundaryRoutes>
    </div>
  );
};

export default AppRoutes;
