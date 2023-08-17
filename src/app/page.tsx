import TokenDynamics from "../classComponents/TokenDynamics";
import { Account } from "../components/Account";
import { Balance } from "../components/Balance";
import { BlockNumber } from "../components/BlockNumber";
import { Connected } from "../components/Connected";
import { NetworkSwitcher } from "../components/NetworkSwitcher";
import { ReadContract } from "../components/ReadContract";
import { ReadContracts } from "../components/ReadContracts";
import { ReadContractsInfinite } from "../components/ReadContractsInfinite";
import { SendTransaction } from "../components/SendTransaction";
import { SendTransactionPrepared } from "../components/SendTransactionPrepared";
import { SignMessage } from "../components/SignMessage";
import { SignTypedData } from "../components/SignTypedData";
import { Token } from "../components/Token";
import { WatchContractEvents } from "../components/WatchContractEvents";
import { WatchPendingTransactions } from "../components/WatchPendingTransactions";
import { Web3Button } from "../components/Web3Button";
import { WriteContract } from "../components/WriteContract";
import { WriteContractPrepared } from "../components/WriteContractPrepared";

export function Page() {
  return (
    <>
      <header className="flex flex-row justify-between px-12 items-center py-4">
        <h1 className="text-center text-blue-400">My first dapp</h1>

        <Web3Button />
      </header>

      <Connected>
        <TokenDynamics />
      </Connected>
    </>
  );
}

export default Page;
