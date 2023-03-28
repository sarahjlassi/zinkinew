import React, { useState } from 'react';
import {
    StyleSheet, Text, View, TouchableOpacity, Modal,  TouchableHighlight,} from 'react-native';
import { TextInput, Appbar } from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';


const TextToSpeech = () => {
    const [selection, setSelection] = useState({ start: 0, end: 0 });
    const [text, setText] = useState('');
    const [showNavBar, setShowNavBar] = useState(false);

    //const showNavBar = selection.start !== selection.end;
    const [modalVisible, setModalVisible] = useState(false);
    const [breakDuration, setBreakDuration] = useState(0);
    const [breakUnit, setBreakUnit] = useState('s');
    const [menuVisible, setMenuVisible] = useState(false);
    const [selectedOption, setSelectedOption] = useState(null);
    console.log('Selected option:', selectedOption);
    console.log(text)
    console.log(selection.start, selection.end)


    const onTextStructurePress = () => {
        setMenuVisible(false);
        setModalVisible(true);
        setSelectedOption('break');
    };
    const onBreakDurationChange = (value) => {
        setBreakDuration(value);
    };

    const onBreakUnitChange = (value) => {
        setBreakUnit(value);
    };

    const onBreakSubmit = () => {
        // Do something with break duration and unit
        console.log('Break duration:', breakDuration);
        console.log('Break unit:', breakUnit);

        // Close modal
        setModalVisible(false);
    };
  

    return (
        <View style={styles.container}>
<SafeAreaProvider>
            <Appbar.Header>
                <Appbar.BackAction  />
                <Appbar.Content title="Text To Speech" />
            
            </Appbar.Header>

            <View style={showNavBar ? styles.navBar : styles.hidden}>
                <Text style={styles.navText} onPress={() => setMenuVisible(true)}>Text Structure</Text>
                <Text style={styles.navText}>Voice</Text>
                <Text style={styles.navText}>Pronunciation</Text>
                <Text style={styles.navText}>Listen</Text>

            </View>
            <View>
                
            <TextInput
                    onLongPress={() => setShowNavBar(true)}
                    onSelectionChange={(event) => {
                            setSelection(event.nativeEvent.selection);
                            setShowNavBar(event.nativeEvent.selection.start !== event.nativeEvent.selection.end);
                        }}
                    style={styles.textInput}
                    selectionColor='#89CFF0'
                    activeOutlineColor='#CCD8EE'
                    numberOfLines={15}
                    mode='outlined'
                    multiline={true}
                    //onSelectionChange={({ nativeEvent: { selection } }) => {
                    //setSelection(selection);
                //}}
                onChangeText={(text) => setText(text)}
                value={text}
            />


            </View>
            </SafeAreaProvider>    



            <Modal
                animationType="slide"
                transparent={true}
                visible={menuVisible}
                onRequestClose={() => {
                    setMenuVisible(false);
                }}
            >
                <View style={styles.modalView}>
                    <TouchableHighlight
                        onPress={() => {
                            setMenuVisible(!menuVisible);
                        }}
                    >
                        <Text style={styles.closeButton}>X</Text>
                    </TouchableHighlight>
                    <Text style={styles.menuOption} onPress={() => {
                        onTextStructurePress();
                        setSelectedOption('break');
                    }} >Break point time</Text>
                    <Text style={styles.menuOption}>paragraph</Text>
                    <Text style={styles.menuOption}>sentence</Text>
                </View>
            </Modal>















            <Modal
                animationType='slide'
                transparent={true}
                visible={modalVisible}
            >
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <Text style={styles.modalTitle}>Set Break point Time</Text>



                        

                        {modalVisible && (
                            <View style={styles.modalBreakInputContainer}>
                                <TextInput
                                    style={styles.modalBreakInput}
                                    keyboardType='numeric'
                                    placeholder='Enter duration'
                                    onChangeText={onBreakDurationChange}
                                />

                                <View style={styles.modalBreakUnitContainer}>
                                    <TouchableOpacity
                                        style={[styles.modalBreakUnitButton, breakUnit === 's' ? styles.modalBreakUnitButtonActive : null]}
                                        onPress={() => onBreakUnitChange('s')}
                                    >
                                        <Text style={styles.modalBreakUnitButtonText}>s</Text>
                                    </TouchableOpacity>

                                    <TouchableOpacity
                                        style={[styles.modalBreakUnitButton, breakUnit === 'ms' ? styles.modalBreakUnitButtonActive : null]}
                                        onPress={() => onBreakUnitChange('ms')}
                                    >
                                        <Text style={styles.modalBreakUnitButtonText}>ms</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        )}
                        <View style={styles.modalButtonContainer}>
                            <TouchableOpacity style={styles.modalButton} onPress={() => setModalVisible(false)}>
                                <Text style={styles.modalButtonText}>Cancel</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.modalButton} onPress={onBreakSubmit}>
                                <Text style={styles.modalButtonText}>Submit</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    
                </View>
            </Modal >
        




        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    navBar: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '97%',
        backgroundColor: 'lightblue',
        padding: 10,
        marginTop: 0,
        borderRadius:10,
        paddingVertical: 13,
    },
    navText: {
        fontWeight: 'bold',
        color: 'white',
    },
    hidden: {
        display: 'none',
    },

    textInput: {
        width: 350,
        height: 250,
        backgroundColor: '#F5F5F5',
        borderColor: '#CCD8EE',
        paddingHorizontal: 10,
        paddingVertical: 5,
        fontSize: 16,
        fontWeight: 'bold',
        color: '#4A4A4A',
        marginTop:100,
    },
    modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
    },
    closeButton: {
        alignSelf: 'flex-end',
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    menuOption: {
        fontSize: 18,
        marginVertical: 10,
    },
    modalContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
        backgroundColor: '#fff',
        padding: 20,
        borderRadius: 5,
        width: '90%',
        alignItems: 'center',
    },
    modalTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    modalOptions: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    modalOption: {
        backgroundColor: '#89CFF0',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        margin: 5,
    },
    modalOptionText: {
        color: '#fff',
        fontWeight: 'bold',
    },
    modalButtonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        marginTop: 20,
    },
    modalButton: {
        backgroundColor: '#89CFF0',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        width: '45%',
    },
    modalButtonText: {
        color: '#fff',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    modalBreakInputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 20,
    },
    modalBreakInput: {
        borderColor: 'gray',
        borderWidth: 1,
        padding: 10,
        borderRadius: 5,
        width: '60%',
    },
    modalBreakUnitContainer: {
        flexDirection: 'row',
        marginLeft: 10,
    },
    modalBreakUnitButton: {
        backgroundColor: '#CCD8EE', 
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        marginHorizontal: 5,
    },
    modalBreakUnitButtonActive: {
        backgroundColor: '#89CFF0',
    },
    modalBreakUnitButtonText: {
        color: '#fff',
        fontWeight: 'bold',
    },
});

export default TextToSpeech;
