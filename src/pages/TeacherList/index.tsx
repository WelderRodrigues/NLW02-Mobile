import React, { useState } from "react";
import { View, ScrollView, Text } from "react-native";
import { Feather } from "@expo/vector-icons";
import styles from "./styles";
import PageHeader from "../../components/PageHeader";
import TeacherItem from "../../components/TeacherItem";
import {
  TextInput,
  BorderlessButton,
  RectButton,
} from "react-native-gesture-handler";

function TeacherList() {
  const [isFilterVisible, setIsFilterVisible] = useState(false);

  function handleToggleFiltersVisible() {
    setIsFilterVisible(!isFilterVisible);
  }
  return (
    <View style={styles.container}>
      <PageHeader
        title="Proffys disponívies"
        headerRight={
          <BorderlessButton onPress={handleToggleFiltersVisible}>
            <Feather name="filter" size={30} color="#fff" />
          </BorderlessButton>
        }
      >
        {isFilterVisible && (
          <View style={styles.searchForm}>
            <Text style={styles.label}>Matéria</Text>
            <TextInput
              style={styles.input}
              placeholderTextColor="#c1bccc"
              placeholder="Qual a matéria?"
            />

            <View style={styles.inputGroup}>
              <View style={styles.inputBlock}>
                <Text style={styles.label}>Dia da semana</Text>
                <TextInput
                  style={styles.input}
                  placeholderTextColor="#c1bccc"
                  placeholder="Qual o dia?"
                />
              </View>

              <View style={styles.inputBlock}>
                <Text style={styles.label}>Horário</Text>
                <TextInput
                  style={styles.input}
                  placeholderTextColor="#c1bccc"
                  placeholder="Qual o horário?"
                />
              </View>
            </View>
            <RectButton style={styles.submitButton}>
              <Text style={styles.submitButtonText}>Filtrar</Text>
            </RectButton>
          </View>
        )}
      </PageHeader>

      <ScrollView
        style={styles.teacherList}
        contentContainerStyle={{
          paddingHorizontal: 16,
          paddingBottom: 16,
        }}
      >
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
      </ScrollView>
    </View>
  );
}

export default TeacherList;
