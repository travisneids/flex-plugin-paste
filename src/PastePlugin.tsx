import React from 'react';
import * as Flex from '@twilio/flex-ui';
import { FlexPlugin } from 'flex-plugin';
import { ProductLogsIcon } from '@twilio-paste/icons/esm/ProductLogsIcon';

import CustomerLog from './components/CustomerLog/CustomerLog';
import reducers, { namespace } from './states';

const PLUGIN_NAME = 'AhoyPlugin';

export default class PastePlugin extends FlexPlugin {
  constructor() {
    super(PLUGIN_NAME);
  }

  /**
   * This code is run when your plugin is being started
   * Use this to modify any UI components or attach to the actions framework
   *
   * @param flex { typeof Flex }
   * @param manager { Flex.Manager }
   */
  init(flex: typeof Flex, manager: Flex.Manager) {
    this.registerReducers(manager);

    flex.ViewCollection.Content.add(
      <Flex.View name="customer-log" key="customer-log">
        <CustomerLog key="message-log" />
      </Flex.View>
    );

    Flex.SideNav.Content.add(
      <Flex.SideLink
        showLabel={true}
        icon={<ProductLogsIcon decorative={false} title="Customer Log" />}
        isActive={true}
        onClick={() => {
          Flex.Actions.invokeAction('HistoryPush', `/customer-log/`);
        }}
        key="customerLog"
      >
        Customer Log
      </Flex.SideLink>
    );
  }

  /**
   * Registers the plugin reducers
   *
   * @param manager { Flex.Manager }
   */
  private registerReducers(manager: Flex.Manager) {
    if (!manager.store.addReducer) {
      // tslint: disable-next-line
      console.error(
        `You need FlexUI > 1.9.0 to use built-in redux; you are currently on ${Flex.VERSION}`
      );
      return;
    }

    manager.store.addReducer(namespace, reducers);
  }
}
