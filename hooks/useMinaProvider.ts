import React, { useEffect, useState } from 'react';
export default () => {
  const [isAuro, setIsAuro] = useState(false);
  useEffect(() => {
    async function getAccount() {
      try {
        // No Auro wallet exists
        if (!window.mina) {
          // Redundate
          setIsAuro(false);
          return;
        }
        setIsAuro(true);
      } catch (error) {
        console.log(error);
      }
    }
    getAccount();
  }, []);

  return [isAuro];
};
