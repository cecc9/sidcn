import React, { useState } from 'react';
import { Alert, Modal, StyleSheet, Text, Pressable, View } from 'react-native';
import { styled } from 'nativewind';

const ModifiedView = styled(View)
const TextStyled = styled(Text);

function isText(child) {
    if (React.isValidElement(child)) {
        return false
    } else if (typeof child === 'string' || typeof child === 'number') {
        return true
    }
}

const AlertDialog = ({ ...props }) => {
    const [modalVisible, setModalVisible] = useState(false);

    const trigger = props.children[0]
    const content = React.cloneElement(props.children[1], { onClose: () => setModalVisible(!modalVisible), closeModal: () => setModalVisible(false) });

    return (
        <View style={styles.centeredView}>
            <Modal
                animationType="fade"
                transparent={true}
                collapsable
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(!modalVisible);
                }}>
                <View style={styles.centeredView}>
                    {content}
                </View>
            </Modal>
            <Pressable onPress={() => setModalVisible(!modalVisible)} style={styles.pressable}>
                {({ pressed }) => (
                    <View>
                        {React.cloneElement(trigger, { onClose: () => setModalVisible(!modalVisible) })}
                    </View>
                )}
            </Pressable>
        </View>
    );
};

const AlertDialogTrigger = ({ ...props }) => {
    return (
        <>
            {props.children}
        </>
    );
};

const AlertDialogClose = ({ onClose, closeModal, children }: any) => {
    const handleClose = () => {
        console.log("Hit");
        onClose();
        closeModal(); // Call the closeModal function
    };

    return (
        <View className='ml-auto'>
            <Pressable onPress={handleClose} style={styles.pressable}>
                {children}
            </Pressable>
        </View>
    );
};

const AlertDialogTitle = ({ ...props }) => {
    return (
        <View className='w-full'>
            {isText(props.children)
                &&
                <TextStyled style={[styles.title, props.style]}>
                    {props.children}
                </TextStyled>
            }
        </View>
    );
};

const AlertDialogContent = ({ ...props }) => {
    console.log(props.children[2])

    return (
        <ModifiedView style={[styles.modalView, props.style]}>
            {isText(props.children)
                &&
                <TextStyled>
                    {props.children}
                </TextStyled>
            }
            {!isText(props.children)
                &&
                <>
                    {props.children[0]}
                    {props.children[1]}
                    {React.cloneElement(props.children[2], { onClose: props.onClose, closeModal: props.closeModal })}
                </>
            }
        </ModifiedView>
    );
};

const AlertDialogDescription = ({ ...props }) => {
    return (
        <View className='w-full mt-4'>
            {isText(props.children)
                &&
                <TextStyled style={[styles.description, props.style]}>
                    {props.children}
                </TextStyled>
            }
        </View>
    );
};

const styles = StyleSheet.create({
    pressable: {
        pointerEvents: 'box-only',
        marginLeft: 'auto'
    },
    container: {
        padding: 10,
    },
    innerView: {
        flex: 1,
        pointerEvents: 'box-none', // Capture all touch events
    },
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
    },
    modalView: {
        margin: 20,
        backgroundColor: '#000',
        borderRadius: 10,
        padding: 20,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.4,
        shadowRadius: 60,
        elevation: 5,
    },
    title: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '600',
        letterSpacing: -0.5
    },
    description: {
        color: '#fff',
        fontSize: 14,
        fontWeight: '300',
        letterSpacing: -0.5
    }
});

export { AlertDialog, AlertDialogTrigger, AlertDialogContent, AlertDialogTitle, AlertDialogClose, AlertDialogDescription };
