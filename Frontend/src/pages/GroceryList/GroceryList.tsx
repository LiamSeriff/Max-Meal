import React, { useState } from "react";
import {
  PageContainer,
  IngredientsContainer,
  HeadingContainer,
  MyGroceryListContainer,
  InputContainer,
  Input,
  Heading,
  FilterButton,
  IngredientItem,
  GrocerySection,
} from "./GroceryList_Data";

const ingredients = [
  "Mozzarella Cheese",
  "Marinara Sauce",
  "Cucumbers",
  "Flour",
  "Banana",
  "Tomatoes",
  "Basil",
  "Pizza Dough",
  "Chicken Breast",
  "Alfredo Sauce",
  "Fettuccine",
  "BBQ Sauce",
  "Onions",
  "Garlic",
  "Bell Peppers",
  "Olive Oil",
  "Salt",
  "Pepper",
  "Oregano",
  "Ground Beef",
  "Parmesan Cheese",
  "Spinach",
  "Broccoli",
  "Rice",
  "Pasta",
  "Eggs",
  "Milk",
  "Butter",
  "Bread",
];

const initialGroceryList = [
  {
    title: "Ingredients for Cheese Pizza",
    items: ["Mozzarella Cheese", "Marinara Sauce", "Pizza Dough"],
    image: "https://via.placeholder.com/100",
  },
  {
    title: "Ingredients for BBQ Chicken Pizza",
    items: ["Chicken Breast", "Mozzarella Cheese", "Pizza Dough", "Onions", "BBQ Sauce"],
    image: "https://via.placeholder.com/100",
  },
  {
    title: "Chicken Alfredo",
    items: ["Chicken Breast", "Alfredo Sauce", "Fettuccine"],
    image: "https://via.placeholder.com/100",
  },
];

const GroceryList = () => {
  const [myGroceryList, setMyGroceryList] = useState(initialGroceryList);
  const [searchQuery, setSearchQuery] = useState("");

  const handleAddIngredient = (ingredient: string) => {
    setMyGroceryList((prevList) => {
      const customListIndex = prevList.findIndex(
        (section) => section.title === "Custom Ingredients"
      );

      if (customListIndex === -1) {
        return [
          ...prevList,
          {
            title: "Custom Ingredients",
            items: [ingredient],
            image: "",
          },
        ];
      } else {
        const updatedList = [...prevList];
        const customItems = updatedList[customListIndex].items;
        if (!customItems.includes(ingredient)) {
          customItems.push(ingredient);
        }
        return updatedList;
      }
    });
  };

  const handleRemoveIngredient = (ingredient: string, sectionTitle: string) => {
    setMyGroceryList((prevList) =>
      prevList
        .map((section) => {
          if (section.title === sectionTitle) {
            return {
              ...section,
              items: section.items.filter((item) => item !== ingredient),
            };
          }
          return section;
        })
        .filter((section) => section.items.length > 0) // Remove empty sections
    );
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const filteredIngredients = ingredients.filter((ingredient) =>
    ingredient.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <PageContainer>
      <HeadingContainer>
        <Heading>GROCERY LIST</Heading>
      </HeadingContainer>
      <IngredientsContainer>
        <InputContainer>
          <Input 
            type="text" 
            placeholder="Search ingredients" 
            value={searchQuery}
            onChange={handleSearchChange} 
          />
        </InputContainer>
        {filteredIngredients.map((ingredient, index) => (
          <IngredientItem key={index}>
            <span
              style={{ cursor: "pointer" }}
              onClick={() => handleAddIngredient(ingredient)}
            >
              ★ {ingredient}
            </span>
          </IngredientItem>
        ))}
      </IngredientsContainer>
      <MyGroceryListContainer>
        <h2>My Grocery List</h2>
        {myGroceryList.map((section, index) => (
          <GrocerySection key={index}>
            <div style={{ borderBottom: "1px solid black", paddingBottom: "5px" }}>
              <h3>{section.title}</h3>
            </div>
            <div style={{ display: "flex", alignItems: "flex-start", gap: "20px" }}>
              <div>
                {section.items.map((item, idx) => (
                  <IngredientItem key={idx}>
                    <span>★ {item}</span>
                    <span
                      style={{ cursor: "pointer", marginLeft: "10px", color: "red" }}
                      onClick={() => handleRemoveIngredient(item, section.title)}
                    >
                      ✕
                    </span>
                  </IngredientItem>
                ))}
              </div>
              {section.image && (
                <img
                  src={section.image}
                  alt={section.title}
                  style={{ width: "100px", height: "100px", borderRadius: "8px" }}
                />
              )}
            </div>
          </GrocerySection>
        ))}
        <FilterButton>Filter Dishes</FilterButton>
      </MyGroceryListContainer>
    </PageContainer>
  );
};

export default GroceryList;
