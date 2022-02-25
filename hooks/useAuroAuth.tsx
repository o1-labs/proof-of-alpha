import React, { useEffect, useState } from 'react';
export default () => {
  const [isAuro, setIsAuro] = useState(false);
  const [minaAccount, setMinaAccount] = useState('');
  const [accountHeaderDisplay, setAccountHeaderDisplay] =
    useState('0xABCD...1234');
  useEffect(() => {
    async function getAccount() {
      // setIsAuro(window?.mina?.isAuro);
      let minaAccounts;
      // if (isAuro) {
      try {
        minaAccounts = await window?.mina.requestAccounts();
        if (minaAccounts[0]) {
          setAccountHeaderDisplay(minaAccounts[0]);
          const display = `${minaAccounts[0].slice(
            0,
            6
          )}...${minaAccounts[0].slice(-4)}`;
          setAccountHeaderDisplay(display);
        }
      } catch (error) {
        // if user reject, requestAccounts will throw an error with code and message filed
        console.log(error?.message, error?.code);
      }
    }
    getAccount();
  }, [minaAccount, accountHeaderDisplay]);
  // console.log('mina', minaAccount, 'accountDisplay', accountDisplay);
  return [minaAccount, accountHeaderDisplay];
};
