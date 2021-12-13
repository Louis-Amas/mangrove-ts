import { Signer as AbstractSigner } from "@ethersproject/abstract-signer/lib/index";
import { FallbackProvider } from "@ethersproject/providers/lib/fallback-provider";
import {
  Provider,
  BlockTag,
  TransactionRequest,
  TransactionResponse,
} from "@ethersproject/abstract-provider";
import { Signer } from "@ethersproject/abstract-signer";
import { Deferrable } from "@ethersproject/properties";
import { BigNumber } from "@ethersproject/bignumber/lib/bignumber";
import type { MarkOptional } from "ts-essentials";
import type { Big } from "big.js";
import type * as MgvTypes from "./typechain/Mangrove";

export { MgvTypes };
export type { Signer, Provider };

import * as Typechain from "./typechain";
export { Typechain };

import type * as Market from "../market";
export { Market };

import type * as Eth from "../eth";
export { Eth };

import type * as Mangrove from "../mangrove";
export { Mangrove };

/* Mangrove */

export interface TokenInfo {
  name: string;
  address: string;
  decimals: number;
}

export interface MarketParams {
  base: string | MarkOptional<TokenInfo, "address" | "decimals">;
  quote: string | MarkOptional<TokenInfo, "address" | "decimals">;
}

export type Bigish = Big | number | string;

export type TradeParams =
  | { volume: Bigish; price: Bigish }
  | { wants: Bigish; gives: Bigish };
