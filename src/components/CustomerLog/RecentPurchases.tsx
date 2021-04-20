import * as React from 'react';
import { Anchor } from '@twilio-paste/core/anchor';
import { Box } from '@twilio-paste/core/box';
import { Heading } from '@twilio-paste/core/heading';
import {
  MediaObject,
  MediaFigure,
  MediaBody,
} from '@twilio-paste/core/media-object';
import { Paragraph } from '@twilio-paste/core/dist/paragraph';
import { Separator } from '@twilio-paste/core/dist/separator';

interface PurchaseProps {
  children: NonNullable<React.ReactNode>;
}

const Purchase: React.FC<PurchaseProps> = ({ children }) => {
  return (
    <MediaObject as="div">
      <MediaFigure as="div" spacing="space40">
        <Box
          backgroundColor="colorBackground"
          borderRadius="borderRadius20"
          height="sizeIcon100"
          width="sizeIcon100"
        />
      </MediaFigure>
      <MediaBody as="div">{children}</MediaBody>
    </MediaObject>
  );
};

const RecentPurchases: React.FC = () => {
  return (
    <Box backgroundColor="colorBackgroundBody" padding="space60">
      <Heading as="h4" variant="heading40">
        Recent Purchases
      </Heading>
      <Box>
        <Purchase>
          <Heading as="h5" variant="heading50" marginBottom="space0">
            Oven / Cooktop Combo
          </Heading>
          <Paragraph marginBottom="space0">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </Paragraph>
        </Purchase>
        <Separator orientation="horizontal" verticalSpacing="space50" />
        <Purchase>
          <Heading as="h5" variant="heading50" marginBottom="space0">
            Ice Cream Machine
          </Heading>
          <Paragraph marginBottom="space0">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </Paragraph>
        </Purchase>
        <Separator orientation="horizontal" verticalSpacing="space50" />
        <Purchase>
          <Heading as="h5" variant="heading50" marginBottom="space0">
            Napkin Holders
          </Heading>
          <Paragraph marginBottom="space0">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </Paragraph>
        </Purchase>
        <Separator orientation="horizontal" verticalSpacing="space50" />
        <Purchase>
          <Heading as="h5" variant="heading50" marginBottom="space0">
            Horse Camp
          </Heading>
          <Paragraph marginBottom="space0">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </Paragraph>
        </Purchase>
        <Separator orientation="horizontal" verticalSpacing="space50" />
      </Box>
      <Anchor href="#">More purchase history</Anchor>
    </Box>
  );
};

export default RecentPurchases;
