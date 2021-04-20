import * as React from 'react';
import { styled } from '@twilio-paste/core/styling-library';
import { Box } from '@twilio-paste/core/box';
import { CustomizationProvider } from '@twilio-paste/core/customization';
import CustomTheme from '../../theme/theme.json';

import { History, Messages, CustomerProfile, RecentPurchases } from '.';

const StyledDiv = styled.div`
  flex: 1;
`;

const StyledOuterGrid = styled(Box)`
  display: grid;
  grid-template-columns: 1.3fr 0.7fr;
`;

const StyledInnerGrid = styled(Box)`
  display: grid;
  grid-template-rows: 1fr 1fr;
`;

const StyledTopGrid = styled(Box)`
  display: grid;
  grid-template-columns: 0.7fr 1.3fr;
`;

const CustomerLog: React.FC = () => {
  return (
    <StyledDiv>
      <CustomizationProvider theme={CustomTheme}>
        <StyledOuterGrid height="calc(100vh - 44px)">
          <StyledInnerGrid>
            <StyledTopGrid>
              <CustomerProfile />
              <RecentPurchases />
            </StyledTopGrid>
            <History />
          </StyledInnerGrid>
          <Messages />
        </StyledOuterGrid>
      </CustomizationProvider>
    </StyledDiv>
  );
};

export default CustomerLog;
