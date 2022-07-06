import { StatusBar } from "expo-status-bar";
import { Platform, StyleSheet } from "react-native";

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
} from "native-base";
import { useState } from "react";

export default function ModalScreen({ navigation }) {
  const [Username, setUsername] = useState("");
  const [Password, setPassword] = useState("");

  const triggerAuthentication = async () => {
    // await setDoc(doc(db, "characters", "mario"), {
    //   employment: "plumber",
    //   outfitColor: "red",
    //   specialAttack: "fireball",
    // });
    // console.log("started");
    // const UsersQuery = await query(
    //   collection(db, "users"),
    //   where("username", "==", Username)
    // );
    // const snapshot = await getDocs(UsersQuery);
    // console.log(Username, snapshot);
    // var snapshot = Firebase.firestore().collection("users").get();
    // console.log(snapshot);
    // console.log(db);
    // Firebase.firestore();
    console.log("Here");
    // snapshot.forEach((doc) => {
    //   list.push(doc.data());
    // });

    console.log("ended");
  };

  return (
    <View style={styles.container}>
      <Center w="100%">
        <Box safeArea p="2" py="8" w="90%" maxW="290">
          <Heading
            size="lg"
            fontWeight="600"
            color="coolGray.800"
            _dark={{
              color: "warmGray.50",
            }}
          >
            Welcome
          </Heading>
          <Heading
            mt="1"
            _dark={{
              color: "warmGray.200",
            }}
            color="coolGray.600"
            fontWeight="medium"
            size="xs"
          >
            Verify your identity to continue!
          </Heading>

          <VStack space={3} mt="5">
            <FormControl>
              <FormControl.Label>Username</FormControl.Label>
              <Input value={Username} onChange={(e) => setUsername(e)} />
            </FormControl>
            <FormControl>
              <FormControl.Label>Password</FormControl.Label>
              <Input
                type="password"
                value={Password}
                onChange={(e) => setPassword(e)}
              />
              {/* <Link
                _text={{
                  fontSize: "xs",
                  fontWeight: "500",
                  color: "indigo.500",
                }}
                alignSelf="flex-end"
                mt="1"
              >
                Forget Password?
              </Link> */}
            </FormControl>
            <Button
              mt="2"
              colorScheme="indigo"
              onPress={() => triggerAuthentication()}
            >
              Authenticate
            </Button>
            {/* <HStack mt="6" justifyContent="center">
              <Text
                fontSize="sm"
                color="coolGray.600"
                _dark={{
                  color: "warmGray.200",
                }}
              >
                I'm a new user.{" "}
              </Text>
              <Link
                _text={{
                  color: "indigo.500",
                  fontWeight: "medium",
                  fontSize: "sm",
                }}
                href="#"
              >
                Sign Up
              </Link>
            </HStack> */}
          </VStack>
        </Box>
      </Center>

      {/* Use a light status bar on iOS to account for the black space above the modal */}
      <StatusBar style={Platform.OS === "ios" ? "light" : "auto"} />
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
