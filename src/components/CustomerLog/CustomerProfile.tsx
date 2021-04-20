import * as React from 'react';
import { Avatar } from '@twilio-paste/core/avatar';
import { Box } from '@twilio-paste/core/box';
import { Heading } from '@twilio-paste/core/heading';
import { Paragraph } from '@twilio-paste/core/paragraph';
import { Stack } from '@twilio-paste/core/stack';
import { Text } from '@twilio-paste/core/text';

const CustomerProfile: React.FC = () => {
  return (
    <Box
      backgroundColor="colorBackgroundBody"
      padding="space60"
      borderRightStyle="solid"
      borderRightWidth="borderWidth10"
      borderRightColor="colorBorderLight"
    >
      <Heading as="h4" variant="heading40">
        Customer Profile
      </Heading>
      <Stack orientation="vertical" spacing="space60">
        <Box display="flex" justifyContent="center">
          <Avatar
            size="sizeIcon110"
            name="Bob Belcher"
            src="https://static.wikia.nocookie.net/bobsburgerpedia/images/b/bb/Bsbs_Bob_2F.jpg/revision/latest/top-crop/width/300/height/300?cb=20120520151811"
          />
        </Box>
        <Box as="dl">
          <Box display="flex">
            <Text as="dt" fontWeight="fontWeightBold">
              Name:
            </Text>
            <Text as="dd" marginLeft="space20">
              Bob Belcher
            </Text>
          </Box>
          <Box display="flex">
            <Text as="dt" fontWeight="fontWeightBold">
              Occupation:
            </Text>
            <Text as="dd" marginLeft="space20">
              Owner, Bobs Burgers
            </Text>
          </Box>
          <Box display="flex">
            <Text as="dt" fontWeight="fontWeightBold">
              Phone:
            </Text>
            <Text as="dd" marginLeft="space20">
              555-555-5555
            </Text>
          </Box>
          <Box display="flex">
            <Text as="dt" fontWeight="fontWeightBold">
              Email:
            </Text>
            <Text as="dd" marginLeft="space20">
              bob@bobsburgers.com
            </Text>
          </Box>
        </Box>
        <Box>
          <Text as="span" display="block" fontWeight="fontWeightBold">
            Biography:
          </Text>
          <Paragraph marginBottom="space0">
            Robert "Bob" Belcher Jr. is a third-generation restaurateur, and the
            main protagonist of the Fox animated series, Bob's Burgers. Bob runs
            Bob's Burgers with the help of his wife, Linda Belcher, and their
            three kids, Tina Belcher, Louise Belcher, and Gene Belcher.
          </Paragraph>
        </Box>
      </Stack>
    </Box>
  );
};

export default CustomerProfile;
