import React, { useState } from "react";
import { StyleSheet } from "react-native";
import * as Yup from "yup";

import CategoryPickerItem from "../components/CategoryPickerItem";

import {
  AppForm,
  AppFormField,
  AppFormPicker,
  FormImagePicker,
  SubmitButton,
} from "../components/forms";

import listingApi from "../api/listings";
import Screen from "../components/Screen";
import useLocation from "../hooks/useLocation";
import UploadScreen from "./UploadScreen";

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(3).label("Title"),
  price: Yup.number().required().min(1).max(10000).label("Price"),
  category: Yup.object().required().label("Category"),
  description: Yup.string().nullable().label("Description"),
  images: Yup.array().min(1, "Please select at least one image"),
});

const items = [
  {
    id: 1,
    label: "Food",
    backgroundColor: "#ef5350",
    icon: "cards",
  },
  { id: 2, label: "Feed", backgroundColor: "#fb8c00", icon: "cards" },
  { id: 3, label: "Fiber", backgroundColor: "#ffc107", icon: "cards" },
  { id: 4, label: "Oil", backgroundColor: "#388e3c", icon: "cards" },
  { id: 5, label: "Ornamental", backgroundColor: "#00796b", icon: "cards" },
  { id: 6, label: "Industrial", backgroundColor: "#1565c0", icon: "cards" },
];

export default function ListingEditScreen() {
  const location = useLocation();
  const [uploadVisible, setUploadVisible] = useState(false);
  const [progress, setProgress] = useState(0);

  const handleSubmit = async (listings, { resetForm }) => {
    setProgress(0);
    setUploadVisible(true);
    const result = await listingApi.addListings(
      { ...listings, location },
      (progress) => setProgress(progress)
    );
    console.log("result", result);

    if (!result.ok) {
      setUploadVisible(false);
      return alert("Not saved");
    }

    resetForm();
  };

  return (
    <Screen style={styles.container}>
      <UploadScreen
        onDone={() => setUploadVisible(false)}
        visible={uploadVisible}
        progress={progress}
      />
      <AppForm
        initialValues={{
          title: "",
          price: "",
          description: "",
          category: null,
          images: [],
        }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <FormImagePicker name="images" />
        <AppFormField maxLength={255} name="title" placeholder="Title" />
        <AppFormField
          maxLength={8}
          name="price"
          keyboardType="numeric"
          placeholder="Price"
          width={120}
        />
        <AppFormPicker
          name="category"
          items={items}
          numberOfColumns={3}
          PickerItemComponent={CategoryPickerItem}
          placeholder="Category"
          width="50%"
        />
        <AppFormField
          numberOfLines={3}
          multiline
          maxLength={255}
          name="description"
          keyboardType="default"
          placeholder="Description"
        />
        <SubmitButton title="post" />
      </AppForm>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});
