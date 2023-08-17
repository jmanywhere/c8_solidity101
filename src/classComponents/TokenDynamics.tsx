"use client";
import { useEffect } from "react";
import { formatEther, zeroAddress, BaseError } from "viem";
import {
  useContractRead,
  useContractWrite,
  usePrepareContractWrite,
  useToken,
  useWaitForTransaction,
} from "wagmi";
import clmAbi from "abi/CLMAbi";
import { useAccount } from "wagmi";
import classNames from "classnames";

const clmTokenAddress = "0x441EcD79A06501900a166Bb4BC7AA127e26e8507";

const TokenDynamics = () => {
  const { address } = useAccount();
  const { data, refetch: tokenBalanceRefetch } = useToken({
    address: clmTokenAddress,
  });

  const { data: userWalletBalance, refetch: balanceRefetch } = useContractRead({
    address: clmTokenAddress,
    abi: clmAbi,
    functionName: "balanceOf",
    args: [address || zeroAddress],
  });

  const { config, error: prepError } = usePrepareContractWrite({
    address: clmTokenAddress,
    abi: clmAbi,
    functionName: "claim",
  });

  const {
    write,
    data: claimData,
    isError,
    error,
    isSuccess,
    isLoading: writeLoading,
  } = useContractWrite(config);
  const { isLoading: claimLoading, data: txData } = useWaitForTransaction({
    hash: claimData?.hash,
  });

  console.log({ prepError, isError, error, isSuccess, writeLoading });

  useEffect(() => {
    if (!address) return;
    const interval = setInterval(() => {
      balanceRefetch();
      tokenBalanceRefetch();
    }, 10_000);
    return () => clearInterval(interval);
  }, [balanceRefetch, tokenBalanceRefetch, address]);

  // useEffect( () => {
  //   if(txData?.status === "success")
  //     balanceRefetch();
  // }, [txData, balanceRefetch])

  return (
    <section className="flex flex-col justify-center items-center w-full">
      <h2>Clase 8 Solidity 101</h2>
      <div className="rounded-xl border-2 border-slate-600 bg-slate-300 px-6 py-8">
        <div className="text-sm flex flex-row items-center justify-between gap-x-6">
          <div>Total Supply of CLM</div>
          <div>{formatEther(data?.totalSupply?.value || 0n)}</div>
        </div>
        <div className="text-sm flex flex-row items-center justify-between gap-x-6">
          <div>Wallet CLM</div>
          <div>{formatEther(userWalletBalance || 0n)}</div>
        </div>
        <div>Wallet Balance ETH</div>
        <div>
          {!prepError ? (
            <button
              className={classNames(
                "btn btn-primary",
                claimLoading ? "loading loading-spinner text-red-600" : ""
              )}
              onClick={() => write?.() || console.log("issue with write")}
            >
              Claim
            </button>
          ) : (
            <div className="text-red-600">
              Error: {(prepError as any)?.metaMessages[0]}
            </div>
          )}
        </div>
        <div>Transfer UI</div>
      </div>
    </section>
  );
};

export default TokenDynamics;
