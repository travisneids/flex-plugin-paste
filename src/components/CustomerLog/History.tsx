import * as React from 'react';
import { Anchor } from '@twilio-paste/core/anchor';
import { Box } from '@twilio-paste/core/box';
import { Heading } from '@twilio-paste/core/heading';
import { Table, THead, TBody, Tr, Th, Td } from '@twilio-paste/core/table';
import { Text } from '@twilio-paste/core/text';

interface BadgeProps {
  variant?: 'call' | 'message';
}

const Badge: React.FC<BadgeProps> = ({ variant = 'call' }) => {
  return (
    <Box
      backgroundColor={
        variant === 'call'
          ? 'colorBackgroundDestructiveLighter'
          : 'colorBackgroundPrimaryLighter'
      }
      borderRadius="borderRadius30"
      display="inline-block"
      paddingX="space30"
      paddingY="space10"
      textAlign="center"
    >
      <Text
        as="span"
        color="colorText"
        fontSize="fontSize20"
        fontWeight="fontWeightSemibold"
      >
        {variant}
      </Text>
    </Box>
  );
};

const History: React.FC = () => {
  return (
    <Box
      backgroundColor="colorBackgroundBody"
      borderTopColor="colorBorderLight"
      borderTopStyle="solid"
      borderTopWidth="borderWidth10"
      padding="space60"
    >
      <Heading as="h4" variant="heading40">
        Call/Messaging History
      </Heading>
      <Table>
        <THead>
          <Tr>
            <Th>Customer</Th>
            <Th>Date/Time</Th>
            <Th>Agent</Th>
            <Th>Log</Th>
          </Tr>
        </THead>
        <TBody>
          <Tr>
            <Td>
              <Text as="span" marginRight="space30">
                Bobs Belcher
              </Text>
              <Badge />
            </Td>
            <Td>Saturday, April 3 | 10:00 AM</Td>
            <Td>
              <Anchor href="#">Agent Green</Anchor>
            </Td>
            <Td>
              <Anchor href="#">Open Log</Anchor>
            </Td>
          </Tr>
          <Tr>
            <Td>
              <Text as="span" marginRight="space30">
                Tina Belcher
              </Text>
              <Badge />
            </Td>
            <Td>Saturday, April 3 | 10:00 AM</Td>
            <Td>
              <Anchor href="#">Agent Green</Anchor>
            </Td>
            <Td>
              <Anchor href="#">Open Log</Anchor>
            </Td>
          </Tr>
          <Tr>
            <Td>
              <Text as="span" marginRight="space30">
                Linda Belcher
              </Text>
              <Badge variant="message" />
            </Td>
            <Td>Saturday, April 3 | 10:00 AM</Td>
            <Td>
              <Anchor href="#">Agent Green</Anchor>
            </Td>
            <Td>
              <Anchor href="#">Open Log</Anchor>
            </Td>
          </Tr>
          <Tr>
            <Td>
              <Text as="span" marginRight="space30">
                Gene Belcher
              </Text>
              <Badge />
            </Td>
            <Td>Saturday, April 3 | 10:00 AM</Td>
            <Td>
              <Anchor href="#">Agent Green</Anchor>
            </Td>
            <Td>
              <Anchor href="#">Open Log</Anchor>
            </Td>
          </Tr>
          <Tr>
            <Td>
              <Text as="span" marginRight="space30">
                Louise Belcher
              </Text>
              <Badge variant="message" />
            </Td>
            <Td>Saturday, April 3 | 10:00 AM</Td>
            <Td>
              <Anchor href="#">Agent Green</Anchor>
            </Td>
            <Td>
              <Anchor href="#">Open Log</Anchor>
            </Td>
          </Tr>
          <Tr>
            <Td>
              <Text as="span" marginRight="space30">
                Teddy
              </Text>
              <Badge variant="message" />
            </Td>
            <Td>Saturday, April 3 | 10:00 AM</Td>
            <Td>
              <Anchor href="#">Agent Green</Anchor>
            </Td>
            <Td>
              <Anchor href="#">Open Log</Anchor>
            </Td>
          </Tr>
        </TBody>
      </Table>
    </Box>
  );
};

export default History;
