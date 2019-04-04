import { SignedOrder } from '@0x/types';
import { BigNumber } from '@0x/utils';

export function parseJSONSignedOrder(order: string): SignedOrder {
    const signedOrder = JSON.parse(order);
    signedOrder.salt = new BigNumber(signedOrder.salt);
    signedOrder.makerAssetAmount = new BigNumber(signedOrder.makerAssetAmount);
    signedOrder.takerAssetAmount = new BigNumber(signedOrder.takerAssetAmount);
    signedOrder.makerFee = new BigNumber(signedOrder.makerFee);
    signedOrder.takerFee = new BigNumber(signedOrder.takerFee);
    signedOrder.expirationTimeSeconds = new BigNumber(signedOrder.expirationTimeSeconds);
    return signedOrder;
}
export const NULL_ADDRESS = '0x0000000000000000000000000000000000000000';

export const ZERO = new BigNumber(0);
export const networkToRPCURI = {
    1: 'https://mainnet.infura.io/v3/10fb4f1af8334d06aad6e03c9156d120',
    3: 'https://ropsten.infura.io/v3/10fb4f1af8334d06aad6e03c9156d120',
    4: 'https://rinkeby.infura.io/v3/10fb4f1af8334d06aad6e03c9156d120',
    42: 'https://kovan.infura.io/v3/10fb4f1af8334d06aad6e03c9156d120',
    50: 'http://localhost:8545',
};
