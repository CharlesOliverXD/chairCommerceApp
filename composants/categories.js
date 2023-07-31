import React from "react";
import { FlatList, ScrollView, View, Text, StyleSheet } from "react-native";


DATA = [{
    id: '1',
    title: 'Living room',
},
{
    id: '2',
    title: 'Kitchen & dinig',
},
{
    id: '3',
    title: 'Home office',
},

{
    id: '4',
    title: 'Bed room',
},
{
    id: '5',
    title: 'Others',
}


    ,];

const Item = ({ title }) => (
    <View>
        <Text style={Styles.element}>{title}</Text>
    </View>
);

const Categories = () => {
    const renderItem = ({ item }) => (
        <Item title={item.title} />
    );

    return (
        <ScrollView style={Styles.elements}>
            <FlatList 
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                data={DATA}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
        </ScrollView>
    );
}

const Styles = StyleSheet.create({
    elements: {
        marginTop: 40,
        marginBottom : 40 ,
    },

    element: {
        backgroundColor: '#eeeeee',
        marginRight: 10,
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 5,
        paddingBottom: 5,
        fontSize: 20,

    },


});

export default Categories;