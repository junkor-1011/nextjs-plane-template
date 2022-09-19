import { ComponentStory, ComponentMeta } from '@storybook/react';
import { rest } from 'msw';

import { ClientIpv4 } from './fetch-ipv4';

/**
 * by RFC5737
 * {@link https://datatracker.ietf.org/doc/html/rfc5737}
 */
const dummyIp = '234.192.0.2';

export default {
  title: 'msw-test/axios/fetch-ipv4',
  component: ClientIpv4,
} as ComponentMeta<typeof ClientIpv4>;

export const SuccessBehavier: ComponentStory<typeof ClientIpv4> = (args) => <ClientIpv4 {...args} />;
SuccessBehavier.parameters = {
  msw: {
    handlers: [rest.get('https://checkip.amazonaws.com', (req, res, ctx) => res(ctx.text(`${dummyIp}\n`)))],
  },
};

export const FailureBehavier: ComponentStory<typeof ClientIpv4> = (args) => <ClientIpv4 {...args} />;
FailureBehavier.parameters = {
  msw: {
    handlers: [rest.get('https://checkip.amazonaws.com', (req, res, ctx) => res(ctx.status(403)))],
  },
};

export const Loading: ComponentStory<typeof ClientIpv4> = (args) => <ClientIpv4 {...args} />;
Loading.parameters = {
  msw: {
    handlers: [
      rest.get('https://checkip.amazonaws.com', async (req, res, ctx) => {
        // eslint-disable-next-line no-promise-executor-return
        await new Promise((resolve) => setTimeout(resolve, 60 * 60 * 1000)); // wait 1 hour
        return res(ctx.text(`${dummyIp}\n`));
      }),
    ],
  },
};
