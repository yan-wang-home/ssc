import React, { useEffect, useState } from 'react';

import { useNavigate, useParams } from 'react-router-dom';

import { Img, Text } from '../../components';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import { getUsersAsAdmin, queryUsers } from 'app/modules/administration/user-management/user-management.reducer';
import { useAppDispatch, useAppSelector } from 'app/config/store';
import { IUser } from 'app/shared/model/user.model';
import { Translate } from 'react-jhipster';

const SearchResultPage: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const { searchQuery } = useParams();

  useEffect(() => {
    getUsers();
  }, []);

  const generateQuery = (userInput: string): string => {
    return userInput.split('%dot%').join('.');
  };

  const getUsers = () => {
    dispatch(queryUsers(generateQuery(searchQuery)));
  };

  const users = useAppSelector(state => state.userManagement.users);
  const totalItems = useAppSelector(state => state.userManagement.totalItems);
  const loading = useAppSelector(state => state.userManagement.loading);

  const isSubmitted = (user: IUser) => {
    return user.applicationStatus === 'Submitted';
  };

  const isApprovedWithCondition = (user: IUser) => {
    return user.applicationStatus === 'ApprovedWithCondition';
  };

  const isBrokerComplete = (user: IUser) => {
    return user.applicationStatus === 'BrokerComplete';
  };

  const isFunded = (user: IUser) => {
    return user.applicationStatus === 'Funded';
  };

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-chivo items-center justify-start mx-auto w-full">
        <div className="pt-8 h-[1056px] md:h-[1470px] sm:h-[2135px] md:px-5 relative w-full">
          <Header className="flex flex-col items-center justify-start w-full" />
          <div className="flex md:flex-col flex-row md:gap-10 gap-[75px] items-start justify-center max-w-[1350px] mt-[100px] mx-auto pb-[39px] pl-[39px] md:px-5 rounded-md w-full">
            {users.length === 0 && (
              <div className="flex flex-col items-center justify-start w-full">
                <Img src="content/images/not-found.png" alt="Background" className="w-full h-screen sm:h-[700px] object-fill" />
                {/* Home Page Main Picture */}
                <div className="absolute lg:top-1/2 md:top-1/5 sm:top-1/3 transform -translate-y-1/2 text-white w-full">
                  <Text className="text-3xl font-bold text-blue-900 mb-2 lg:text-center sm:text-center sm:backdrop-blur-sm animate-pulse">
                    <Translate contentKey="search.notFound.title" />
                  </Text>
                  <Text className="text-2xl text-blue-900 text-center mb-4 sm:backdrop-blur-sm">
                    <Translate contentKey="search.notFound.subTitle" />
                  </Text>
                  <div className="flex justify-center">
                    <button
                      onClick={() => navigate('/')}
                      className="block select-none rounded-md bg-blue-800 py-2.5 px-7 text-center align-middle font-sans text-lg font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                      type="button"
                    >
                      <Translate contentKey="search.goBack" />
                    </button>
                  </div>
                </div>
              </div>
            )}
            {users.length > 0 &&
              users.map((user, i) => (
                <div
                  key="found"
                  className="flex md:flex-1 flex-col items-start justify-start md:ml-[0] ml-[25px] md:mt-0 mt-12 rounded-md w-[60%] md:w-full"
                >
                  <div id={user.login} key={`user-${i}`}>
                    <Text className="sm:text-[34px] md:text-[40px] text-[44px] text-blue-900 pl-24" size="txtChivoBold44WhiteA700">
                      Application: {user.id}
                    </Text>
                    <div className="flex flex-col rounded-md w-full">
                      {isSubmitted(user) && (
                        <Img src="content/images/pro-sumbitted.png" alt="Avatar" className="object-cover w-full h-full" />
                      )}
                      {isApprovedWithCondition(user) && (
                        <Img src="content/images/pro-approved.png" alt="Avatar" className="object-cover w-full h-full" />
                      )}
                      {isBrokerComplete(user) && (
                        <Img src="content/images/pro-Cpmplted.png" alt="Avatar" className="object-cover w-full h-full" />
                      )}
                      {isFunded(user) && <Img src="content/images/pro-funded.png" alt="Avatar" className="object-cover w-full h-full" />}
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
        {/* Footer */}
        <Footer className="bg-gray-200 flex items-center justify-center mt-[120px] w-full" />
      </div>
    </>
  );
};

export default SearchResultPage;
