import React from 'react'
import { Text, View, Image, ScrollView } from 'react-native'

import Styles from './styleAccueil';

import Categories from '../../composants/categories';
import ListeProduits from '../../composants/listeproduits';

const Produits = () => {
    return (
        <ScrollView style={Styles.cadre}>
            <View style={Styles.titre}>
                <Text style={Styles.logo} >Discover</Text>
                <Image style={Styles.panier} source={require('../../assets/ajoutes/panier.png')} />

            </View>

            <Categories/>

            <ListeProduits/>
            
        </ScrollView>

    );
}

export default Produits;