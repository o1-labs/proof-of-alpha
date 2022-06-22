# Proof of Alpha Back-end RFC

## Summary
[summary]: #summary

This RFC proposes a back-end API for Proof of Alpha.  

## Motivation
[motivation]: #motivation

Proof of Alpha (PoA) offers users a unique value proposition, the ability to prove their crypto trading abilities. Additionally PoA is intended to convey the utility of and generate excitement around zkApps to the Mina and wider crypto communities. While a more extensible back-end solution, specifically [Faux zk Oracle](https://github.com/MinaProtocol/mina/blob/rfc/faux-zk-oracle/rfcs/0045-faux-zk-oracle.md), would enable developers to build apps which have O(1) notarize responses for PoA's supported exchange(s)and eventually other data providers, some challenges exist which make this approach impractical at present. The primary challenges are:
1.  Available time and engineering resources to develop PoA AND Faux zk Oracle in time for testnet are limited
2.  Functionality which enables parsing of HTTP responses in-SNARK, does not yet exist (array lookups) has questionable performance given the use case ([SnarkyJS `String` type](https://github.com/o1-labs/snarkyjs/pull/155)).
3. Parsing HTTP responses in-circuit presents a number of significant problems and limitations. Notably: 
    a. at least one unique circuit would be required per PoA-supported crypto exchange
    b. supporting new or multilple crypto exchanges will necessitate new or signifantly more complex circuits and therfore increase technical overhead
    c. `b` likeley also applies when supporting new or multiple trading pairs
    d. an upper threshold of trades must be set when parsing and calculating alpha in-circuit. This upper threshold may need to be prohibitively low (currently 500 trades in the UI) to maintain  or even feasible client-side proving performance. This may necessitate multiple proofs or the use of recursion when users select a time frame in which they executed more trades than the max
4. Legal liabilities presented by potential financial losses for those who use such a service provided by O(1), are not clear. 
5. The lack of known, adequate technical solutions, outside whitelisting outbound addresses, for reducing the abuse of a free and open proxy, along with the overhead of building and maintaining a likely complex solution once defined.


## Detailed design
[detailed-design]: #detailed-design
Generally the short-term alternative to *Faux zk Oracles* proposed here, is simply a back-end API which takes a `cryptoExchange`, `apiToken`,`timeFrame`, and `tradingPair`, all defined by the user in the PoA UI, and performs as follow: 

1. Given these parameters, the API structures and makes a request to retrieve applicable trades from the `cryptoExchange` API. 
2. **Given the response to 1), structures and returns a response including at least:
    a. `alpha: field`, calculated % of trade returns
    b. `date: field`, final date used to calculate `alpha`
    c. `timeFrame: field`
    d. `cryptoExchange: field`
    e. `tradingPair: field`
    f. `notary: field`, a Mina public key representing PoA's authority
    g. `signature: field`, a signature using the private key corresponding to `notary`, over `a-f`. 

** While it is implied here that this service encodes these values as SnarkyJS-compatible field elements, these values can alternatively be returned in JSON and easily encoded as field elements client-side. 

More specifically given the example request body:
```
{
    cryptoExchange: 'binance',
    apiToken: 'abc123',
    tradingPair: 'btcusd',
    timeFrame: '30', /* UI accepts 30, 90, or 365 days */
}
```
the following, expressed as a JS serverless function, is performed

```
export default async function handler(req, res) {
    async function getTrades() {
        // structure request for trades between:
            // today() - 1 and today() - (timeFrame + 1) 
        // parse and return array of trades as promise
    }
    
    function calculateAlpha(tradesArr) {
        // accumulate buy/sell totals from tradesArr
        // calculate alpha(buyTotals, sellTotals)
    }

    async function constructPoa(alphaArr, request) {
        // given alpha and request body, encode values as fields and construct something like:
        const unsignedPoa = [alpha: field, date: field, timeFrame: field, cryptoExchange: field, tradingPair: field, notary: field];

        // sign fields
        const signedPoa = await signWithMina(process.env.SIGNING_KEY, poa);
        return signedPoa;
    }

    const trades = await getTrades();
    const alpha = calculateAlpha(trades);
    const proofOfAlpha = await constructPoa(alpha, req);

  res.status(200).json({
    payload: proofOfAlpha
  });
}
``` 

## Drawbacks
[drawbacks]: #drawbacks

- Compared to `Faux zk Oracles`, this approach cannot be used by developers external to O(1). 
- The specific approach expressed above does not include the return of all trades during the given time frame, which is currently displayed in the UI. These trades can easily be included in the response for display in the UI however the author believes that revealing their trade size via a discoverable URL is an unacceptable breach of privacy for many traders, and is therefore not necessary.
    - Alternatively a field representing total trade volume over a series of thresholds (ex. volume: <100k, >1M, >10M, etc) could be included in the response and verified by the smart contract circuit. 

## Rationale and alternatives
[rationale-and-alternatives]: #rationale-and-alternatives

This proposed approach results in more value for the end users of Proof of Alpha and therefore the Mina community more broadly by providing the following benefits:
- Adding support for additional crypto exchange API's becomes trivial
    * **the importance of this cannot be overstated as adding only one U.S. based exchange, like Coinbase, in addition to already planned Binance, likely more than doubles the pool of potential PoA users.**
- Adding support for additional or multiple-trading pair proofs becomes trivial
    - ...more value and excitement and excitement for users -> more use of PoA -> more excitement about Mina and zkApps
- There doesn't need to be any practical limit enforced for the number of trades which can be included in the calculation of a user's alpha, providing a significantly improved UX for power users who execute many trades.
- PoA's in-circuit logic can be reduced to verifying a signature: reducing the engineering overhead for the PoA smart contract circuit, and reducing client-side proving costs, which may represent a real problem for users. 
- Preventing most abuse becomes as trivial as inspecting request headers to enforce allowed request address(es) or disabling CORS to enforce same-origin requests if co-hosted with the front end.
    - Further, [reCaptcha](https://developers.google.com/recaptcha/docs/display) or a more privacy oriented alternative like [hCaptcha](https://docs.hcaptcha.com/) can be trivially implemented to further prevent abuse.



## Prior art
[prior-art]: #prior-art

As mentioned in **Motivation** above: [Faux zk Oracle](https://github.com/MinaProtocol/mina/blob/rfc/faux-zk-oracle/rfcs/0045-faux-zk-oracle.md)
The current PRD for Proof of Alpha: [Proof of Alpha demo v2](https://www.notion.so/minaprotocol/Proof-of-Alpha-demo-v2-PRD-88c7609f1f334f78aa29a8a18c12f812)

## Unresolved questions
[unresolved-questions]: #unresolved-questions

- The design of PoA's smart contract circuit, which is beyond the scope of this document, is not known but somewhat implied by this approach. If the circuit is developed such that this approach is no longer compatible, this document should be updated or disgarded...whichever is appropriate. 