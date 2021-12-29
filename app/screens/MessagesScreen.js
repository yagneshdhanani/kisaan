import React, { useState } from "react";
import { FlatList } from "react-native";

import Screen from "../components/Screen";
import ListItem from "../components/lists/ListItem";
import ListItemSeparator from "../components/lists/ListItemSeparator";
import ListItemDeleteAction from "../components/lists/ListItemDeleteAction";

const initialMessages = [
  {
    id: "id1",
    title:
      "Allows you to customize the default messages used by Yup, when no message is provided with a validation test. If any message is missing in the custom dictionary the error message will default to Yup's one.",
    description:
      "Yup is a JavaScript schema builder for value parsing and validation. Define a schema, transform a value to match, validate the shape of an existing value, or both. Yup schema are extremely expressive and allow modeling complex, interdependent validations, or value transformations.",
    image: require("../assets/mosh.jpg"),
  },
  {
    id: "id2",
    title: "Message",
    description: "Dummy Message",
    image: require("../assets/mosh.jpg"),
  },
  {
    id: "id3",
    title: "t3",
    description: "d3",
    image: require("../assets/mosh.jpg"),
  },
];

const afterRefreshMessage = [
  {
    id: "id2",
    title: "t2",
    description: "d2",
    image: require("../assets/mosh.jpg"),
  },
  {
    id: "id3",
    title: "t3",
    description: "d3",
    image: require("../assets/mosh.jpg"),
  },
];

function MessagesScreen() {
  const [messages, setMessages] = useState(initialMessages);
  const [refreshing, setRefreshing] = useState(false);

  const handleDelete = (message) => {
    setMessages(messages.filter((m) => m.id !== message.id));
  };

  return (
    <Screen>
      <FlatList
        data={messages}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            subTitle={item.description}
            image={item.image}
            onPress={() => console.log(item)}
            renderRightActions={() => (
              <ListItemDeleteAction onPress={() => handleDelete(item)} />
            )}
          />
        )}
        keyExtractor={(item) => item.id.toString()}
        ItemSeparatorComponent={ListItemSeparator}
        refreshing={refreshing}
        onRefresh={() => setMessages(afterRefreshMessage)}
      />
    </Screen>
  );
}

export default MessagesScreen;
