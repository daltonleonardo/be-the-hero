
import Constants from 'expo-constants';

import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1, // tamanho inteiro
        paddingHorizontal: 24, // padding 0 24 nas laterais, nao existe no react
        paddingTop: Constants.statusBarHeight + 20,

    },
    header: {
        flexDirection: 'row', // padrao na web e column
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    headerText: {
        fontSize: 15,
        color: '#737380',
    },

    headerTextBold: {
        fontWeight: 'bold'
    },

    title: {
        fontSize: 30,
        marginBottom: 16,
        marginTop: 48,
        color: '#13131a',
        fontWeight: 'bold'
    },

    description: {
        fontSize: 16,
        lineHeight: 24,
        color: '#737380'

    },

    incidentList: {
        marginTop: 32,
    },

    incident: {
        padding: 24,
        borderRadius: 8,
        backgroundColor: '#FFF',
        marginBottom: 16
    },

    incidentProperty: {
        fontSize: 14,
        color: '#41414d',
        fontWeight: 'bold'
    },

    incidentValue: {
        marginTop: 8,
        fontSize: 15,
        marginBottom: 24,
        color: '#737380'
    },

    detailsButton: {
        flexDirection: 'row', // deixa o icone do lado do texto
        justifyContent: 'space-between', // texto ao lado do icone
        alignItems: 'center'
    },

    detailsButtonText: {
        color: '#e02041',
        fontSize: 15,
        fontWeight: 'bold'
    }

})
