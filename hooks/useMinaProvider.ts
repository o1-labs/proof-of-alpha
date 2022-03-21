import React, { useEffect, useState } from 'react';

type statusType = 'green' | 'yellow' | 'red' | '';

export default () => {
  const [isAuro, setIsAuro] = useState(false);
  const [minaAccount, setMinaAccount] = useState('');
  const [status, setStatus] = useState<statusType>('');
  const [accountHeaderDisplay, setAccountHeaderDisplay] = useState('');

  useEffect(() => {
    async function getAccount() {
      let minaAccounts;
      try {
        // No Auro wallet exists
        if (!window.mina) {
          // Redundate
          setIsAuro(false);
          setStatus('red');
          setAccountHeaderDisplay('Not Connected');
          return;
        }

        setIsAuro(true);

        // If Auro wallet is installed but not connected to an account this will throw an exception
        minaAccounts = await window.mina.requestAccounts();

        // Auro is installed and connected to an account
        // TODO: Handle case when user has multiple accounts.
        setMinaAccount(minaAccounts[0]);
        setStatus('green');

        // String showing only first 6 and last 4 characters of account for the header display
        const display = `${minaAccounts[0].slice(
          0,
          6
        )}...${minaAccounts[0].slice(-4)}`;
        setAccountHeaderDisplay(display);
      } catch (error) {
        // If Auro wallet is installed but not connected to an account set display as not connected
        if (isAuro) {
          setStatus('yellow');
          setAccountHeaderDisplay('Not Connected');
        }
        // if user reject, requestAccounts will throw an error with code and message filed
        console.log(error.message, error?.code);
      }
    }
    getAccount();
  }, [isAuro, minaAccount, accountHeaderDisplay, status]);

  return { isAuro, minaAccount, accountHeaderDisplay, status };
};
