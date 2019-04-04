import { Content } from 'bloomer';
import * as React from 'react';

interface Props {}

export class Welcome extends React.Component<Props, {}> {
    public render(): React.ReactNode {
        return (
            <Content>
                The RigoBlock relay sandbox is strongly inspired by the 0x sandbox, which provides a runnable example of
                how to use and interact with 0x. In fact, it is a modified version of the original 0x sandbox. On top of
                the base 0x functionalities, the RigoBlock relayer allows you to send transactions for smart contracts
                using 0x.js "signatureType.Wallet". Be sure to check out the{' '}
                <a href="https://github.com/0xProject/0x-starter-project/">0x starter project</a> for more examples and
                scenarios. Our <a href="https://beta.rigoblock.com">Portal</a> provides a user on-boarding flow to get
                you started with the 0x ecosystem. Documentation for 0x.js can be found on our{' '}
                <a href="https://docs.rigoblock.com">website</a>.
            </Content>
        );
    }
}
