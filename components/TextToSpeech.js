import React, { useState } from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Modal } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Switch, TextInput, RadioButton } from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Soundplayer from './Soundplayer';


const TextToSpeech = () => {




    const [activeMenu, setActiveMenu] = useState(null);
    const [selection, setSelection] = useState({ start: 0, end: 0 });
    const showNavBar = selection.start == selection.end;
    const showAppBar = selection.start !== selection.end;
    const showListenButton = selection.start !== selection.end;
    const [breakDuration, setBreakDuration] = useState(0);
    const [breakUnit, setBreakUnit] = useState('s');
    const [modalBreakVisible, setModalBreakVisible] = useState(false);
    const [selectedOption, setSelectedOption] = useState(null);
    const [value, setValue] = useState('evenSeconds');


    const [text, setText] = useState('');
    console.log(text)
    console.log(selection.start, selection.end)
    const handleMenuClick = (menuIndex) => {
        if (activeMenu === menuIndex) {
            setActiveMenu(null);
        } else {
            setActiveMenu(menuIndex);
        }
    };
    const onBreakPress = () => {
       
        setModalBreakVisible(true);
        setSelectedOption('break');
    };


    const onBreakDurationChange = (value) => {
        setBreakDuration(value);
    };

    const handleValueChange = (newValue) => {
        setValue(newValue);
        console.log(newValue);
    };
    const onBreakSubmit = () => {
        // Do something with break duration and unit
        console.log('Break duration:', breakDuration);
        console.log('Break unit:', breakUnit);
        console.log('config name', selectedOption)
        // Close modal
        setModalBreakVisible(false);
    };

    const renderSubMenu = (menuIndex) => {
        if (activeMenu === 0) {
            return (
                <View style={[styles.subMenu, { left: 1 }]}>
                    <View style={styles.subMenuHeader}>
                        <Icon name="reader-outline" size={24} color="#2B3270" />
                        <Text style={styles.subMenuHeaderText}>Text Structur</Text>
                    </View>
                    <View style={styles.subMenuContent}>
                        <TouchableOpacity style={styles.subMenuItem}>
                            <Text style={styles.subMenuItemText}>Paragraph </Text>
                            <Icon name="reorder-three-outline" size={24} color="#2B3270" />

                        </TouchableOpacity>
                        <TouchableOpacity style={styles.subMenuItem}>
                            <Text style={styles.subMenuItemText}>Sentence </Text>
                            <Icon name="code-working-outline" size={24} color="#2B3270" />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => handleMenuClick(0)}>
                            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                            <Icon name="chevron-up-outline" size={24} color="#2B3270" />
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            );
        }

        else if (activeMenu === 1) {

            return (

                <View style={[styles.subMenu, { left: 90 }]}>
                    <View style={styles.subMenuHeader}>
                        <Icon name="radio-outline" size={24} color="#2B3270" />
                        <Text style={styles.subMenuHeaderText}>Voice</Text>
                    </View>
                    <View style={styles.subMenuContent}>
                        <TouchableOpacity style={styles.subMenuItem}>
                            <Text style={styles.subMenuItemText}>Languge</Text>
                            <Icon name="language-outline" size={24} color="#2B3270" />

                        </TouchableOpacity>
                        <TouchableOpacity style={styles.subMenuItem}>
                            <Text style={styles.subMenuItemText}>Voice Gender</Text>
                            <Icon name="md-male-female-outline" size={24} color="#2B3270" />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.subMenuItem}>
                            <Text style={styles.subMenuItemText}>Volume</Text>
                            <Icon name="volume-medium-outline" size={24} color="#2B3270" />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.subMenuItem}>
                            <Text style={styles.subMenuItemText}>Speed</Text>
                            <Icon name="speedometer-outline" size={24} color="#2B3270" />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.subMenuItem}>
                            <Text style={styles.subMenuItemText}>Tone</Text>
                            <Icon name="stats-chart-outline" size={24} color="#2B3270" />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.subMenuItem}>
                            <Text style={styles.subMenuItemText}>Sound Effect</Text>
                            <Icon name="language-outline" size={24} color="#2B3270" />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.subMenuItem}>
                            <Text style={styles.subMenuItemText}>Default</Text>
                            <Icon name="build-outline" size={24} color="#2B3270" />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => handleMenuClick(1)}>
                            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                                <Icon name="chevron-up-outline" size={24} color="#2B3270" />
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            );


        }


        else if (activeMenu === 2) {

            return (
               
                    <View style={[styles.subMenu, { left: 180 }]}>
                        <View style={styles.subMenuHeader}>
                            <Icon name="ear-outline" size={24} color="#2B3270" />
                            <Text style={styles.subMenuHeaderText}>Pronounciation</Text>
                        </View>
                        <View style={styles.subMenuContent}>
                            <TouchableOpacity style={styles.subMenuItem}>
                                <Text style={styles.subMenuItemText}>Abbreviation</Text>
                                <Icon name="ios-text-outline" size={24} color="#2B3270" />

                            </TouchableOpacity>
                            <TouchableOpacity style={styles.subMenuItem}>
                                <Text style={styles.subMenuItemText}>Spell Out</Text>
                                <Icon name="md-chatbubble-ellipses-outline" size={24} color="#2B3270" />
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.subMenuItem}>
                                <Text style={styles.subMenuItemText}>Date</Text>
                                <Icon name="ios-calendar-outline" size={24} color="#2B3270" />
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.subMenuItem}>
                                <Text style={styles.subMenuItemText}>Time</Text>
                                <Icon name="ios-time-outline" size={24} color="#2B3270" />
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.subMenuItem}>
                                <Text style={styles.subMenuItemText}>Cardinal number</Text>
                                <Icon name="stats-chart-outline" size={24} color="#2B3270" />
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.subMenuItem}>
                                <Text style={styles.subMenuItemText}>Ordinal number</Text>
                                <Icon name="build-outline" size={24} color="#2B3270" />
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.subMenuItem}>
                                <Text style={styles.subMenuItemText}>Default</Text>
                                <Icon name="build-outline" size={24} color="#2B3270" />
                            </TouchableOpacity>
                        <TouchableOpacity onPress={() => handleMenuClick(2)}>
                            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                            <Icon name="chevron-up-outline" size={24} color="#2B3270" />
                            </View>
                        </TouchableOpacity>
                        </View>


                    </View>



               
            );


        }
        return null;
    };

    return (
        <View style={styles.container}>

          {/* <MyDropdown style={!showAppBar && styles.hidden}></MyDropdown>*/}

            <View style={showNavBar ? styles.navbar : styles.hidden}>
                <TouchableOpacity onPress={() => handleMenuClick(0)} style={styles.menuItem}>
                    <Icon name="reader-outline" size={24} color="#fff" />
                    <Text style={styles.menuItemText}>Text Structur</Text>
                </TouchableOpacity>
                {renderSubMenu(0)}
                <TouchableOpacity onPress={() => handleMenuClick(1)} style={styles.menuItem}>
                    <Icon name="radio-outline" size={24} color="#fff" />
                    <Text style={styles.menuItemText}>Voice</Text>
                </TouchableOpacity>
                {renderSubMenu(1)}
                <TouchableOpacity onPress={() => handleMenuClick(2)} style={styles.menuItem}>
                    <Icon name="ear-outline" size={24} color="#fff" />
                    <Text style={styles.menuItemText}>Pronounciation</Text>
                </TouchableOpacity>
                {renderSubMenu(2)}
                {/*  <TouchableOpacity onPress={() => handleMenuClick(3)} style={styles.menuItem}>
                    <Icon name="pause-circle-outline" size={24} color="#fff" />
                <Text style={styles.menuItemText}>Break</Text>
            </TouchableOpacity>
            {renderSubMenu(3)}*/}
            </View>

             
            <TextInput //text input 
                onSelectionChange={(event) => {
                    setSelection(event.nativeEvent.selection);
                }}
                placeholder="Enter text here..."
                placeholderTextColor="#ccc"
                selectionColor='#89CFF0'
                activeUnderlineColor='transparent'
                numberOfLines={13}
                multiline={true}
                onChangeText={(text) => setText(text)}
                value={text}
                mode="flat"
                dense
                style={styles.input}
                underlineColor="#FFF"
            />
            
            <View >
                <View >
                    <TouchableOpacity style={styles.breakcircleButtonContainer} onPress={() => {
                        onBreakPress();}} >
                        <Icon name={"pause"} size={24} color={"#fff"} style={styles.breakIconContainer} />
                        <Text style={styles.buttonText}>Break</Text>
                    </TouchableOpacity>
                    </View>
                    <View style={!showListenButton && styles.hidden}>
                    <TouchableOpacity style={styles.playcircleButtonContainer}>
                        <Icon name={"play"} size={24} color={"#fff"} style={styles.playIconContainer} />
                        <Text style={styles.buttonText}>Listen</Text>
                    </TouchableOpacity>
                </View>
                <Soundplayer></Soundplayer>
            </View>
           



            <Modal
                animationType='slide'
                transparent={true}
                visible={modalBreakVisible}
            >
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <Text style={styles.modalTitle}>Set Break Point Time</Text>

                        <View style={styles.modalBreakInputContainer}>
                            <View style={styles.modalBreakDurationContainer}>
                                <TouchableOpacity
                                    style={styles.modalBreakDurationButton}
                                    onPress={() => onBreakDurationChange(breakDuration - 1)}
                                >
                                    <Icon name="remove" size={16} color="#2B3270" />
                                </TouchableOpacity>

                                <View >
                                    <TextInput
                                        keyboardType='decimal-pad'
                                        placeholder='0'
                                        onChangeText={onBreakDurationChange}
                                        value={breakDuration.toString()}
                                        mode='outlined'
                                        
                                    />

                                </View>

                                <TouchableOpacity
                                    style={styles.modalBreakDurationButton}
                                    onPress={() => onBreakDurationChange(breakDuration + 1)}
                                >
                                    <Icon name="add" size={16} color="#2B3270" />
                                </TouchableOpacity>
                            </View>

                            <View style={styles.modalBreakUnitContainer}>
                                <RadioButton.Group onValueChange={setValue} value={value}>
                                    <View style={styles.modalBreakUnitButtonContainer}>
                                        <RadioButton.Item label="Seconds" value="s" color="#6CA4FC" />
                                        <RadioButton.Item label="Milliseconds" value="ms" color="#6CA4FC" />
                                    </View>
                                </RadioButton.Group>
                            </View>
                        </View>

                        <View style={styles.modalButtonContainer}>
                            <TouchableOpacity style={styles.modalButton} onPress={() => setModalBreakVisible(false)}>
                                <Text style={styles.modalButtonText}>Cancel</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.modalButton} onPress={onBreakSubmit}>
                                <Text style={styles.modalButtonText}>Submit</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>



















        </View>








    );
};

const styles = StyleSheet.create({
    container: {

        backgroundColor: '#F2F2F2',

    },
    navbar: {
        backgroundColor: '#2B3270',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderBottomRightRadius: 15,
        borderBottomLeftRadius: 15,

    },
    menuItem: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 10,
    },
    menuItemText: {
        color: '#fff',
        fontSize: 12,
        marginTop: 5,
    },
    subMenu: {
        position: 'absolute',
        top: 65,
        backgroundColor: '#fff',
        borderRadius: 10,
        width: 175,
        elevation: 3,
        paddingVertical: 5,

    },
    subMenuHeader: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingHorizontal: 10,
        paddingBottom: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#2B3270',
    },
    subMenuHeaderText: {
        fontSize: 16,
        fontWeight: 'bold',
        marginLeft: 10,
        color: '#333',
    },
    subMenuContent: {
        paddingHorizontal: 10,
    },
    subMenuItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 10,
        borderBottomWidth: 2,
        borderBottomColor: '#6CA4FC',
    },
    subMenuItemText: {
        fontSize: 14,
        color: '#333',
    },
    hidden: {
        display: 'none',
    },
    input: {
        backgroundColor: '#fff',
        color: '#fff',
        marginTop: 20,
        paddingHorizontal: 10,
        paddingVertical: 30,
        fontSize: 16,
        fontWeight: 'bold',
        justifyContent: 'space-between',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
    },

    breakcircleButtonContainer: {
        height: 60,
        width: 60,
        borderRadius: 30,
        backgroundColor: '#E57373',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        bottom: 1,
        right: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 5,
    },
    playcircleButtonContainer: {
        height: 60,
        width: 60,
        borderRadius: 30,
        backgroundColor: '#6CA4FC',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        bottom: 100,
        right: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 5,
    },
    breakIconContainer: {
        height: 27,
        width: 25,
        alignItems: 'center',
        justifyContent: 'center',
    },
    playIconContainer: {
        height: 27,
        width: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        color: '#fff',
        fontSize: 12,
        fontWeight: 'bold',
    },
    modalContainer: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalContent: {
        width: '80%',
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 20,
    },
    modalTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    modalInputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },
    modalInput: {
        flex: 1,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 10,
        paddingVertical: 8,
        paddingHorizontal: 12,
        marginRight: 10,
    },
    modalInputButtonsContainer: {
        flexDirection: 'row',
    },
    modalInputButton: {
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 10,
        paddingVertical: 6,
        paddingHorizontal: 12,
        marginRight: 10,
    },
    modalInputButtonText: {
        fontSize: 16,
        color: 'gray',
    },
    modalInputButtonTextActive: {
        color: 'black',
    },
    modalButtonContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems:'center'
    },
    modalButton: {
        backgroundColor: '#2196F3',
        borderRadius: 10,
        paddingVertical: 8,
        paddingHorizontal: 12,
        marginLeft: 10,
        justifyContent:'center'
    },
    modalButtonText: {
        color: 'white',
        fontSize: 14,
    },
});

export default TextToSpeech;
