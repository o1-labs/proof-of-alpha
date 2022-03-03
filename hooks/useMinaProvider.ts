import React, { useEffect, useState } from 'react';
export default () => {
  const [isAuro, setIsAuro] = useState(false);
  const [minaAccount, setMinaAccount] = useState('');
  const [accountHeaderDisplay, setAccountHeaderDisplay] =
    useState('0xABCD...1234');
  useEffect(() => {
    async function getAccount() {
      let minaAccounts;
      try {
        // No Auro wallet exists
        if (!window.mina) {
          // Redundate
          setIsAuro(false);
          return;
        }
        setIsAuro(true);

        minaAccounts = await window.mina.requestAccounts();
        setMinaAccount(minaAccounts[0]);

        // String showing only first 6 and last 4 characters of account for the header display
        const display = `${minaAccounts[0].slice(
          0,
          6
        )}...${minaAccounts[0].slice(-4)}`;
        setAccountHeaderDisplay(display);
      } catch (error) {
        // if user reject, requestAccounts will throw an error with code and message filed
        console.log(error.message, error?.code);
      }
    }
    getAccount();
  }, [isAuro, minaAccount, accountHeaderDisplay]);

  return [isAuro, minaAccount, accountHeaderDisplay];
};
