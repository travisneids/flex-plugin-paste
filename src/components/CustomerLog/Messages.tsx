import * as React from 'react';
import { useUID } from '@twilio-paste/core/uid-library';
import { Avatar } from '@twilio-paste/core/avatar';
import { Box } from '@twilio-paste/core/box';
import { Button } from '@twilio-paste/core/button';
import { Heading } from '@twilio-paste/core/heading';
import { Stack } from '@twilio-paste/core/stack';
import { Text } from '@twilio-paste/core/text';
import { TextArea } from '@twilio-paste/core/textarea';

interface MessageProps {
  variant?: 'outgoing' | 'incoming';
  name: string;
}

const Message: React.FC<MessageProps> = ({
  children,
  name,
  variant = 'incoming',
}) => {
  return (
    <Box display="flex">
      {variant === 'incoming' && (
        <Box marginRight="space30">
          <Avatar size="sizeIcon50" name={name} />
        </Box>
      )}
      <Box
        backgroundColor={
          variant === 'incoming'
            ? 'colorBackground'
            : 'colorBackgroundPrimaryLightest'
        }
        borderRadius="borderRadius30"
        marginLeft={variant === 'outgoing' ? 'space200' : 'space0'}
        marginRight={variant === 'incoming' ? 'space200' : 'space0'}
        padding="space60"
      >
        <Text as="span">{children}</Text>
      </Box>
      {variant === 'outgoing' && (
        <Box marginLeft="space30">
          <Avatar size="sizeIcon50" name={name} />
        </Box>
      )}
    </Box>
  );
};

const Messages: React.FC = () => {
  const textareaId = useUID();
  return (
    <Box
      backgroundColor="colorBackgroundBody"
      borderLeftColor="colorBorderLight"
      borderLeftStyle="solid"
      borderLeftWidth="borderWidth10"
      paddingTop="space60"
      paddingBottom="space0"
    >
      <Box marginLeft="space60" marginRight="space60">
        <Heading as="h4" variant="heading40">
          Current Messages
        </Heading>
      </Box>
      <Box display="flex" flexDirection="column" height="calc(100vh - 100px)">
        <Box
          boxShadow="shadowLow"
          flex={1}
          marginLeft="space60"
          marginRight="space60"
          marginBottom="space60"
          padding="space60"
        >
          <Stack orientation="vertical" spacing="space70">
            <Message name="Bobs Burgers">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </Message>
            <Message name="Rich Bachman" variant="outgoing">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit.
            </Message>
            <Message name="Rich Bachman" variant="outgoing">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit.
            </Message>
            <Message name="Bobs Burgers">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </Message>
            <Message name="Rich Bachman" variant="outgoing">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </Message>
          </Stack>
        </Box>
        <Box
          display="flex"
          backgroundColor="colorBackground"
          marginTop="auto"
          padding="space60"
        >
          <Box flex={1} marginRight="space40">
            <TextArea id={textareaId} />
          </Box>
          <Button variant="primary">Send</Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Messages;
