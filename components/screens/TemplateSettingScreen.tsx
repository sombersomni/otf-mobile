// import React, { useState } from 'react';
// import { View, Text, Switch, Button, Modal, StyleSheet } from 'react-native';
// import { Icon, ListItem } from '@rneui/themed';

// export default function SettingsComponent() {
//   const [isActive, setIsActive] = useState(false);
//   const [colorModalVisible, setColorModalVisible] = useState(false);
//   const [fontModalVisible, setFontModalVisible] = useState(false);
//   const [selectedColor, setSelectedColor] = useState('');
//   const [selectedFont, setSelectedFont] = useState('');

//   const toggleStatus = () => {
//     setIsActive(!isActive);
//   };

//   const openColorModal = () => {
//     setColorModalVisible(true);
//   };

//   const closeColorModal = () => {
//     setColorModalVisible(false);
//   };

//   const openFontModal = () => {
//     setFontModalVisible(true);
//   };

//   const closeFontModal = () => {
//     setFontModalVisible(false);
//   };

//   const selectColor = (color) => {
//     setSelectedColor(color);
//     closeColorModal();
//   };

//   const selectFont = (font) => {
//     setSelectedFont(font);
//     closeFontModal();
//   };

//   const removeAccount = () => {
//     // Logic to remove the user's account goes here
//   };

//   return (
//     <View style={styles.container}>
//       <Text>Status: {isActive ? 'Active' : 'Inactive'}</Text>
//       <Switch value={isActive} onValueChange={toggleStatus} />

//       <Button title="Choose Color" onPress={openColorModal} />

//       <Button title="Choose Font" onPress={openFontModal} />

//       <Icon
//         name="trash"
//         type="font-awesome"
//         color="red"
//         onPress={removeAccount}
//       />

//       {/* Color Modal */}
//       <Modal visible={colorModalVisible} animationType="slide">
//         <View style={styles.modalContainer}>
//           <Text style={styles.modalTitle}>Choose a Color</Text>
//           {/* Color wheel component or library can be used here */}
//           {/* Example of a color selection option */}
//           <ListItem
//             title="Red"
//             onPress={() => selectColor('red')}
//             chevron
//           />
//           {/* More color options */}
//           {/* ... */}
//           <Button title="Cancel" onPress={closeColorModal} />
//         </View>
//       </Modal>

//       {/* Font Modal */}
//       <Modal visible={fontModalVisible} animationType="slide">
//         <View style={styles.modalContainer}>
//           <Text style={styles.modalTitle}>Choose a Font</Text>
//           <ListItem
//             title="Arial"
//             onPress={() => selectFont('Arial')}
//             chevron
//           />
//           <ListItem
//             title="Times New Roman"
//             onPress={() => selectFont('Times New Roman')}
//             chevron
//           />
//           <ListItem
//             title="Verdana"
//             onPress={() => selectFont('Verdana')}
//             chevron
//           />
//           <Button title="Cancel" onPress={closeFontModal} />
//         </View>
//       </Modal>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   modalContainer: {
//     flex: 1,
//     justifyContent: 'center',
//     padding: 16,
//   },
//   modalTitle: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     marginBottom: 16,
//   },
// });

// export default SettingsComponent;
