import React from "react";
import { StyleSheet } from "react-native";

import EditScreenInfo from "../components/EditScreenInfo";
import { View } from "../components/Themed";
import {
  Box,
  Text,
  Heading,
  VStack,
  FormControl,
  Input,
  Link,
  Button,
  HStack,
  Center,
  NativeBaseProvider,
  Radio,
  ScrollView,
} from "native-base";

export default function TabTwoScreen() {
  const [value, setValue] = React.useState("one");
  return (
    <View style={styles.container}>
      <ScrollView style={{ width: "100%" }}>
        <Center w="100%">
          <Box safeArea p="2" py="8" w="90%" maxW="290">
            <Heading
              mt="1"
              _dark={{
                color: "warmGray.200",
              }}
              color="coolGray.600"
              fontWeight="medium"
              size="xs"
            >
              Add your pitch details
            </Heading>

            <VStack space={3} mt="5">
              <FormControl>
                <FormControl.Label>Company Name *</FormControl.Label>
                <Input />
              </FormControl>
              <FormControl>
                <FormControl.Label>Concern Person Name *</FormControl.Label>
                <Input />
              </FormControl>
              <FormControl>
                <FormControl.Label>Mobile Number *</FormControl.Label>
                <Input />
              </FormControl>
              <FormControl>
                <FormControl.Label>Address *</FormControl.Label>
                <Input />
              </FormControl>
              <FormControl>
                <FormControl.Label>Client's Remarks *</FormControl.Label>
                <Input />
              </FormControl>
              <Radio.Group
                name="myRadioGroup"
                accessibilityLabel="favorite number"
                value={value}
                onChange={(nextValue) => {
                  setValue(nextValue);
                }}
              >
                <Radio colorScheme="emerald" value="interested" my={1}>
                  <FormControl.Label>Interested</FormControl.Label>
                </Radio>
                <Radio colorScheme="emerald" value="not-interested" my={1}>
                  <FormControl.Label>Not Interested</FormControl.Label>
                </Radio>
                <Radio colorScheme="emerald" value="decide-later" my={1}>
                  <FormControl.Label>Decide Later</FormControl.Label>
                </Radio>
              </Radio.Group>

              <Button
                mt="2"
                colorScheme="indigo"
                onPress={() => navigation.navigate("Root")}
              >
                Submit
              </Button>
            </VStack>
          </Box>
        </Center>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
