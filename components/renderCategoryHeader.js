import React from "react";
import { View, Text } from "react-native";
import { COLORS, FONTS, SIZES, icons, images } from "../constants";


const [selectedCategory, setSelectedCategory] = React.useState(1);


export default function renderCategoryHeader() {
  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity
        style={{ flex: 1, marginRight: SIZES.padding }}
        onPress={() => setSelectedCategory(item.id)}
      >
        {selectedCategory == item.id && (
          <Text style={{ ...FONTS.h2, color: COLORS.white }}>
            {item.categoryName}
          </Text>
        )}
        {selectedCategory != item.id && (
          <Text style={{ ...FONTS.h2, color: COLORS.lightGray }}>
            {item.categoryName}
          </Text>
        )}
      </TouchableOpacity>
    );
  };

  return (
    <View style={{ flex: 1, paddingLeft: SIZES.padding }}>
      <FlatList
        data={categories}
        showsHorizontalScrollIndicator={false}
        renderItem={renderItem}
        keyExtractor={(item) => `${item.id}`}
        horizontal
      />
    </View>
  );
}
