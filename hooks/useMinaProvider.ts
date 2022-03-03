import React, { useEffect, useState } from 'react';
export default () => {
  const [isAuro, setIsAuro] = useState(false);
  const [minaAccount, setMinaAccount] = useState('');
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

        minaAccounts = await window?.mina.requestAccounts();
        setMinaAccount(minaAccounts[0]);
        console.log('minaaccounts', minaAccounts[0]);
      } catch (error) {
        console.log(error);
      }
    }
    getAccount();
  }, []);

  return [isAuro, minaAccount];
};
