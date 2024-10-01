import React from 'react';
import { View, Text, Image, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

//Tuan6_21073911_NguyenBaMinhTriet_Lab4a


const products = [
  {
    id: '1',
    name: 'Ca nấu lẩu, nấu mì mini...',
    shop: 'Shop Devang',
    image: 'https://img.lazcdn.com/g/p/20631c217191bbbd164ea5d1caddd66c.jpg_720x720q80.jpg'
  },
  {
    id: '2',
    name: '1KG KHÔ GÀ BƠ TỎI...',
    shop: 'Shop LTD Food',
    image: 'https://mamifarm.com.vn/wp-content/uploads/2021/11/0-scaled.jpg'
  },
  {
    id: '3',
    name: 'Xe cần cẩu đa năng',
    shop: 'Shop Thế giới đồ chơi',
    image: 'https://product.hstatic.net/1000288177/product/upload_e6acb7057bcb4c0fb30a9d8a4527b7a0.jpg'
  },
  {
    id: '4',
    name: 'Đồ chơi dạng mô hình',
    shop: 'Shop Thế giới đồ chơi',
    image: 'https://www.mykingdom.com.vn/cdn/shop/products/BRU02765_1.jpg?v=1684842650'
  },
  {
    id: '5',
    name: 'Lãnh đạo giản đơn',
    shop: 'Shop Minh Long Book',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3eR7_s1D0s9Xbd1d-T8f9pDYPfhDZKM5Cww&s'
  },
  {
    id: '6',
    name: 'Hiểu lòng con trẻ',
    shop: 'Shop Minh Long Book',
    image: 'https://cdn0.fahasa.com/media/catalog/product/h/i/hieu_long_con_tre_tieu_hoc_1_2020_05_15_13_50_44.jpg'
  },
];

const GridItem = ({ item }) => (
  <View style={styles.itemContainer}>
    
    <Image source={{ uri: item.image }} style={styles.itemImage} />

    
    <View style={styles.itemInfo}>
      <Text style={styles.itemName}>{item.name}</Text>
      <Text style={styles.itemShop}>Shop {item.shop}</Text>
    </View>

   
    <TouchableOpacity style={styles.chatButton}>
      <Text style={styles.chatButtonText}>Chat</Text>
    </TouchableOpacity>
  </View>
);

const ChatGridScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>
        Bạn có thắc mắc với sản phẩm vừa xem. Đừng ngại chat với shop!
      </Text>

      <FlatList
        data={products}
        renderItem={({ item }) => <GridItem item={item} />}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fff',
  },
  headerText: {
    fontSize: 16,
    marginBottom: 10,
    textAlign: 'center',
  },
  itemContainer: {
    flexDirection: 'row', 
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
    padding: 10,
    marginBottom: 15,
    alignItems: 'center',
    justifyContent: 'space-between', 
  },
  itemImage: {
    width: 60,
    height: 60,
    resizeMode: 'contain',
    marginRight: 10,
  },
  itemInfo: {
    flex: 1, 
    marginLeft: 10,
  },
  itemName: {
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'left',
  },
  itemShop: {
    fontSize: 12,
    color: '#888',
    textAlign: 'left',
  },
  chatButton: {
    backgroundColor: 'red',
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderRadius: 5,
  },
  chatButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 14,
  },
});

export default ChatGridScreen;
