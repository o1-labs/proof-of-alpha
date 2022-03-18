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

        minaAccounts = await window.mina.requestAccounts();

        // If window.mina exists but no accounts are returned, Auro wallet is installed but not connected to an account
        if (minaAccounts.length === 0) {
          setAccountHeaderDisplay('Not Connected');
          setStatus('yellow');
        } else {
          // Auro is installed and connected to an account
          // String showing only first 6 and last 4 characters of account for the header display
          // TODO: Handle case when user has multiple accounts.
          setMinaAccount(minaAccounts[0]);
          const display = `${minaAccounts[0].slice(
            0,
            6
          )}...${minaAccounts[0].slice(-4)}`;
          setAccountHeaderDisplay(display);
          setStatus('green');
        }
      } catch (error) {
        // if user reject, requestAccounts will throw an error with code and message filed
        console.log(error.message, error?.code);
      }
    }
    getAccount();
  }, [isAuro, minaAccount, accountHeaderDisplay, status]);

  return [isAuro, minaAccount, accountHeaderDisplay, status];
};
