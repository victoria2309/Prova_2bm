import React, { Component } from 'react'
import { Text, StyleSheet, ScrollView, Image, View } from 'react-native';

import api from './api';

class inicio extends Component {
    state = {
        dados: []
    }

    async componentDidMount() {
        const response = await api.get('/v2/list');


        await this.setState({
            dados: response.data
        })

    }

    render() {
        return (
            <ScrollView>
                <View style={styles.container}>
                    {
                        this.state.dados.map(item => (
                            <View style={styles.card} key={item.id}>
                                <Text style={styles.title}>{item.author}</Text>
                                <Image style={styles.image}  source={({ uri: item.download_url })} alt={item.author} />
                                <View style={styles.button}>
                                    <Text style={styles.text}>{item.url}</Text>
                                </View>
                            </View>
                        ))
                    }
                </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"#D9E8EE"
    },  
    image: {
        flexGrow:1,
        width:"100%"

    },
    card:{
        width:"90%",
        height:400,
        margin:10,
        borderRadius:10,
        backgroundColor:"white",
        borderWidth:1,
        borderColor:"black",
        justifyContent:"center",
        alignItems:"center"
    },
    button:{
        width:"80%",
        height:40,
        backgroundColor:"#009494",
        justifyContent:"center",
        margin:5,
        borderRadius:10,
        alignItems:"center"
    },
    text:{
        color:"white",
        fontWeight:"bold",
        fontSize:10
    },
    title:{
        textTransform:"uppercase",
        fontWeight:"bold",
        textAlign:"center",
        color:"black",
        fontSize:20,
        margin:5

    }
})

export default inicio;
