import React from "react";
import { StyleSheet, Text, ScrollView, View } from 'react-native';
import { displayTime} from "./util";

// pirnt the lap time

function Result({results }) {
    return (
        <ScrollView>
            <View style={styles.resultItem} />
            {results.map((item, index) => (
                <View key={index} style={styles.resultItem}>
                    <Text style={styles.resultItemText}>
                        Set { results.length - index}
                    </Text>

                    <Text style={styles.resultItemText}>{displayTime(item)}</Text>
                </View>
            ))}
        </ScrollView>

    );
};

const styles = StyleSheet.create({
    resultItem: {
        flexDirection:'row',
        justifyContent: 'space-between',
        alignContent: 'center',
        borderBottomWidth: 1,
        borderColor: '#313131',
        height: 50,
        paddingHOrizontal: 15,
    },
    resultItemText: {color: '#fff'},
});

export default React.memo(Result);
