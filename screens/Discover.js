import { Image, SafeAreaView , ScrollView, StyleSheet, Text, View,TextInput, } from 'react-native'
import React from 'react'
import { Attractions, Avatar, Hotels, Image1, Image2, Image3, Image4, Restaurants } from '../assets'
import MenuConatainer from '../components/MenuConatainer'
import ItemContainer from '../components/ItemContainer'
import Icon from 'react-native-vector-icons/MaterialIcons';



const Discover = ({ navigation }) => {
    
    return (
        <SafeAreaView className="bg-white flex-1 relative">
            <View className="flex-row items-center justify-between px-8 mt-8">
                <View>
                <Text className="text-[32px] text-[#161617] font-bold">Where would</Text>
                <Text className="text-[28px] text-[#161617] font-bold">you like to travel ?</Text>
                </View>

                <View className="h-12 w-12 bg-gray-400 rounded-md items-center justify-center shadow-lg">
                    <Image
                        source={Avatar}
                        className="w-full h-full rounded-md object-cover"
                    />
                </View>
            </View>
            <View
                style={{
                marginTop: 40,
                flexDirection: 'row',
                paddingHorizontal: 20,
                }}>
                <View style={style.inputContainer}>
                    <TextInput
                        style={{flex: 1, fontSize: 18}}
                        placeholder="Search"
                    />
                    <Icon name="tune" size={28} color={'#E8E6E9 '} />
                </View>
            </View>

        

            {/* Menu container */}
            <ScrollView>
                <View className="flex-row items-center justify-between px-8 mt-8">
                
                    <MenuConatainer
                        key={"F"}
                        title="Flight"
                        imageSrc={Hotels}

                    // type={type}
                    // setType={setType}                    
                    />

                    <MenuConatainer
                        key={"c"}
                        title="Cruise"
                        imageSrc={Attractions}
                    // type={type}
                    // setType={setType}                    
                    />
                    <MenuConatainer
                        key={"t"}
                        title="Train"
                        imageSrc={Restaurants}
                    // type={type}
                    // setType={setType}                    
                    />
                </View>
                

                <View className="px-2 mt-8 flex-row items-center justify-evenly flex-wrap">
                    <ItemContainer
                        key={"101"}
                        imageSrc={Image1}
                        title="100$"
                        location="Paris"
                        
                    />
                    <ItemContainer
                        key={"102"} 
                        imageSrc={Image2} 
                        title="100$" 
                        location="Bali" 
                    />
                    <ItemContainer 
                        key={"103"} 
                        imageSrc={Image3} 
                        title="100$" 
                        location="Spain" 
                        
                    />    
                    <ItemContainer 
                        key={"104"} 
                        imageSrc={Image4} 
                        title="100$" 
                        location="Rome" 
                        
                     />
                     
                </View>
            </ScrollView>




        </SafeAreaView>

    )
}

export default Discover

const style = StyleSheet.create({
    
    inputContainer: {
        flex: 1,
        height: 50,
        borderRadius: 10,
        flexDirection: 'row',
        backgroundColor: '#EFEFEF' ,
        alignItems: 'center',
        paddingHorizontal: 20,
      },
      
})