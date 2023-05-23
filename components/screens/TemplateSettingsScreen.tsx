import React, { useState } from 'react';
import { View, Text, Switch, Modal, StyleSheet } from 'react-native';
import { Button, ButtonGroup, Icon, ListItem } from '@rneui/themed';

const buttonContainerStyle = {
  width: 200,
  marginHorizontal: 50,
  marginVertical: 10,
};

export default function TemplateSettingsComponent() {
  const [isActive, setIsActive] = useState(false);
  const [colorModalVisible, setColorModalVisible] = useState(false);
  const [fontModalVisible, setFontModalVisible] = useState(false);
  const [selectedColor, setSelectedColor] = useState('');
  const [selectedFont, setSelectedFont] = useState('');
  const [deleteTemplateModalVisible, setDeleteTemplateModalVisible] = useState(false);

  const toggleStatus = () => {
    setIsActive(!isActive);
  };

  const openColorModal = () => {
    setColorModalVisible(true);
  };

  const closeColorModal = () => {
    setColorModalVisible(false);
  };

  const openFontModal = () => {
    setFontModalVisible(true);
  };

  const closeFontModal = () => {
    setFontModalVisible(false);
  };

  const selectColor = (color) => {
    setSelectedColor(color);
    closeColorModal();
  };

  const selectFont = (font) => {
    setSelectedFont(font);
    closeFontModal();
  };

  const openDeleteTemplateModal = () => {
    setDeleteTemplateModalVisible(true)
  }

  const closeDeleteTemplateModal = () => {
    setDeleteTemplateModalVisible(false)
  }

  const confirmDeleteTemplate = () => {
    // Logic to remove the user's account goes here
  };
  const fontOptions = ["Roboto", "Times New Roman", "Verdana"]

  return (
    <View style={styles.container}>
      <Text>Status: {isActive ? 'Active' : 'Inactive'}</Text>
      <Switch value={isActive} onValueChange={toggleStatus} />

      <Button 
        containerStyle={buttonContainerStyle}
        type="outline"
        title="Choose Color"
        onPress={openColorModal}
      />

      <Button
        containerStyle={buttonContainerStyle}
        type="outline"
        title="Choose Font"
        onPress={openFontModal}
      />
      <Button
          title="Delete"
          buttonStyle={{ backgroundColor: 'rgba(214, 61, 57, 1)' }}
          icon={{
            name: "trash",
            type: "font-awesome",
            color: "white"
          }}
          containerStyle={{
            height: 40,
            width: 200,
            marginHorizontal: 50,
            marginVertical: 10,
          }}
          titleStyle={{ color: 'white', marginHorizontal: 20 }}
          onPress={openDeleteTemplateModal}
        />

      {/* Color Modal */}
      <Modal visible={colorModalVisible} animationType="slide">
        <View style={styles.modalContainer}>
          <Text style={styles.modalTitle}>Choose a Color</Text>
          {/* Color wheel component or library can be used here */}
          {/* Example of a color selection option */}
          <Button title="Cancel" onPress={closeColorModal} />
        </View>
      </Modal>

      {/* Font Modal */}
      <Modal visible={fontModalVisible} animationType="slide">
        <View style={styles.modalContainer}>
          <Text style={styles.modalTitle}>Choose a Font</Text>
          {fontOptions.map((option, idx)=> (
            <ListItem
              key={`${option}-${idx}`}
              onPress={() => selectFont(option)}
            >
              <ListItem.Title>{option}</ListItem.Title>
            </ListItem>
          ))}
          <Button title="Cancel" onPress={closeFontModal} />
        </View>
      </Modal>

      {/* Delete Template Modal */}
      <Modal visible={deleteTemplateModalVisible} animationType="slide">
        <View style={styles.modalContainer}>
          <Text style={styles.modalTitle}>Delete Template</Text>
          <Text>Are you sure you want to delete this template?</Text>
          {/* Color wheel component or library can be used here */}
          {/* Example of a color selection option */}
          <View style={styles.modalButtonGroup}>
            <View style={styles.modalButtonLeft}>
              <Button containerStyle={{ width: '100%' }} type="outline" title="Cancel" onPress={closeDeleteTemplateModal} />
            </View>
            <View style={styles.modalButtonRight}>
              <Button  containerStyle={{ width: '100%' }} title="Confirm" onPress={confirmDeleteTemplate} />
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    width: '100%'
  },
  modalButtonGroup: {
    flex: 1,
    flexDirection: "row",
    width: '100%',
    marginTop: 10
  },
  modalButtonLeft: {
    flex: 1,
    alignItems: 'flex-start',
    marginRight: 5
  },
  modalButtonRight: {
    flex: 1,
    alignItems: 'flex-end',
    marginLeft: 5
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16,
  },
});
