import React from 'react';
import {Modal, Pressable, View, Text} from 'react-native';

import {useGlobalModalContext} from '../../hooks/useGlobalModalContext';

import styles from './ErrorModal.styles';

const ErrorModal = ({title, description, onConfirm}) => {
  const {hideModal} = useGlobalModalContext();

  const handleConfirm = () => {
    onConfirm();
    hideModal();
  };

  return (
    <Modal animationType="fade" transparent={true}>
      <Pressable onPress={hideModal} style={styles.modalLayout}>
        <Pressable style={styles.container}>
          <View style={styles.textContainer}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.description}>{description}</Text>
          </View>
          <View style={styles.buttonsContainer}>
            <Pressable
              onPress={hideModal}
              style={[styles.button, styles.firstButton]}>
              <Text style={styles.firstButton.text}>Cancel</Text>
            </Pressable>
            <Pressable
              onPress={handleConfirm}
              style={[styles.button, styles.secondButton]}>
              <Text style={styles.secondButton.text}>Confirm</Text>
            </Pressable>
          </View>
        </Pressable>
      </Pressable>
    </Modal>
  );
};

export default ErrorModal;
