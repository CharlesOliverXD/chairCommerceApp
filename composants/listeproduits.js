import React from "react";
import { FlatList, ScrollView, View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";


DATA = [{
    id: '1',
    description: 'Mod Hop Chair',
    lien: "../assets/ajoutes/chaise.jpg",
    couleur: "red",
    prix: "45 000F",
},
{
    id: '2',
    description: 'Eiffel Style Chair',
    lien: "../assets/ajoutes/chaiseJaune.jpg",
    couleur: "Set of 2 Orange",
    prix: "34 000F",


},
{
    id: '3',
    description: 'Plus Accent Chair',
    lien: "chaiseJaune.jpg",
    couleur: "Light Gray",
    prix: "60 000F",


},

{
    id: '4',
    description: 'Royal Chair',
    lien: "chaiseJaune.jpg",
    couleur: "Yellow",
    prix: "40 000F",


},
{
    id: '5',
    description: 'Remork Arm Chair',
    lien: "chaiseJaune.jpg",
    couleur: "",
    prix: "23 000F",


},

{
    id: '6',
    description: 'Remork Arm Chair',
    lien: "chaiseJaune.jpg",
    couleur: "",
    prix: "23 000F",


},


{
    id: '7',
    description: 'Remork Arm Chair',
    lien: "chaiseJaune.jpg",
    couleur: "",
    prix: "23 000F",


},


{
    id: '8',
    description: 'Remork Arm Chair',
    lien: "chaiseJaune.jpg",
    couleur: "",
    prix: "23 000F",


},

];


const Item = ({ description , couleur , prix , lien}) => (
    <TouchableOpacity style={Styles.article}>

        <View>
            <View>
                <Image style={Styles.image} source={require("../assets/ajoutes/chaise.jpg")} />
                <Text style={Styles.ajouter}>+</Text>

            </View>

            <View style={Styles.information}>
                <View>
                    <Text >{description}</Text>
                    <Text >{couleur}</Text>
                </View>

                <View >
                    <Text style={Styles.prix}>{prix}</Text>
                </View>
            </View>
        </View>

    </TouchableOpacity>
    
);

const ListeProduits = () => {
    const renderItem = ({ item }) => (
        <Item description={item.description} prix={item.prix} couleur={item.couleur} lien={item.lien} />
    );

    return (
        <View>
            <FlatList
                data={DATA}
                keyExtractor={item => item.id}
                showsVerticalScrollIndicator={false}
                renderItem={renderItem}
                numColumns={2}
            />
        </View>
    );
}

const Styles = StyleSheet.create({
    article: {
        // backgroundColor: "red",
        marginRight: 5,
        marginBottom: 15,
        padding: 5,


    },

    image: {
        width: 200,
        height: 200,

    },

    information: {

    },


    ajouter: {
        backgroundColor: "#fab951",
        height: 50,
        width: 50,
        color: "white",
        fontSize: 25,
        fontWeight: "bold",
        position: "relative",
        left: 150,
        top: -20,
        borderRadius: 50,
        textAlignVertical: "center",
        textAlign: "center",


    },

    prix: {
        fontWeight: "bold",
    }

});

export default ListeProduits;