import React, { useState } from "react";
import styled from "styled-components";

// Styled Components
const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f4f4f4;
  padding: 20px;
  height: 100vh;
  overflow: hidden; /* Prevent entire page scrolling */
`;

const HeadingContainer = styled.div`
  margin-bottom: 20px;
`;

const Heading = styled.h1`
  font-size: 2rem;
  color: #00aaff;
  text-align: center;
`;

const ContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: calc(100% - 60px); /* Adjust for the heading */
`;

const IngredientsContainer = styled.div`
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
  width: 40%;
  overflow-y: auto; /* Add vertical scroll */
  max-height: 100%; /* Restrict height */
`;

const InputContainer = styled.div`
  margin-bottom: 10px;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const IngredientItem = styled.div`
  margin: 5px 0;
  padding: 10px;
  background-color: #e0f7fa;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background-color: #b2ebf2;
  }
`;

const MyGroceryListContainer = styled.div`
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
  width: 50%;
  overflow-y: auto; /* Add vertical scroll */
  max-height: 100%; /* Restrict height */
`;

const GrocerySection = styled.div`
  margin-bottom: 20px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: #e3f2fd;
`;

const CalorieTracker = styled.div`
  background-color: #ffd700;
  padding: 10px;
  margin-top: 20px;
  font-size: 1.2rem;
  border-radius: 8px;
  text-align: center;
`;

const FilterButton = styled.button`
  background-color: #00aaff;
  color: #ffffff;
  border: none;
  border-radius: 4px;
  padding: 10px 20px;
  cursor: pointer;
  font-size: 1rem;
  &:hover {
    background-color: #0077cc;
  }
`;

const GroceryList = () => {
  const ingredients = [
    { name: "Mozzarella Cheese", calories: 85 },
    { name: "Marinara Sauce", calories: 40 },
    { name: "Cucumbers", calories: 15 },
    { name: "Flour", calories: 364 },
    { name: "Banana", calories: 105 },
    { name: "Tomatoes", calories: 22 },
    { name: "Basil", calories: 1 },
    { name: "Pizza Dough", calories: 275 },
    { name: "Chicken Breast", calories: 165 },
    { name: "Alfredo Sauce", calories: 400 },
    { name: "Fettuccine", calories: 220 },
    { name: "BBQ Sauce", calories: 70 },
    { name: "Onions", calories: 40 },
    { name: "Garlic", calories: 4 },
    { name: "Bell Peppers", calories: 24 },
    { name: "Olive Oil", calories: 119 },
    { name: "Salt", calories: 0 },
    { name: "Pepper", calories: 0 },
    { name: "Oregano", calories: 6 },
    { name: "Parmesan Cheese", calories: 110 },
    { name: "Spinach", calories: 23 },
    { name: "Broccoli", calories: 31 },
    { name: "Ground Beef", calories: 250 },
    { name: "Rice", calories: 206 },
    { name: "Pasta", calories: 131 },
    { name: "Eggs", calories: 78 },
    { name: "Milk", calories: 149 },
    { name: "Butter", calories: 102 },
    { name: "Bread", calories: 80 },
    { name: "Apple", calories: 95 },
    { name: "Strawberries", calories: 4 },
    { name: "Blueberries", calories: 84 },
    { name: "Oranges", calories: 62 },
    { name: "Grapes", calories: 62 },
    { name: "Watermelon", calories: 85 },
    { name: "Pineapple", calories: 82 },
    { name: "Kiwi", calories: 42 },
    { name: "Peach", calories: 58 },
    { name: "Mango", calories: 201 },
    { name: "Pear", calories: 101 },
    { name: "Carrots", calories: 25 },
    { name: "Celery", calories: 10 },
    { name: "Zucchini", calories: 20 },
    { name: "Cauliflower", calories: 25 },
    { name: "Sweet Potatoes", calories: 112 },
    { name: "Potatoes", calories: 161 },
    { name: "Lemon Juice", calories: 12 },
    { name: "Honey", calories: 64 },
    { name: "Maple Syrup", calories: 52 },
    { name: "Soy Sauce", calories: 9 },
    { name: "Shrimp", calories: 99 },
    { name: "Salmon", calories: 206 },
    { name: "Tuna", calories: 179 },
    { name: "Tilapia", calories: 96 },
    { name: "Scallops", calories: 137 },
    { name: "Crab Meat", calories: 97 },
    { name: "Lobster", calories: 129 },
    { name: "Ham", calories: 113 },
    { name: "Bacon", calories: 43 },
    { name: "Sausage", calories: 300 },
    { name: "Tofu", calories: 70 },
    { name: "Chickpeas", calories: 164 },
    { name: "Quinoa", calories: 120 },
    { name: "Couscous", calories: 112 },
    { name: "Oats", calories: 389 },
    { name: "Granola", calories: 471 },
    { name: "Yogurt", calories: 59 },
    { name: "Cheddar Cheese", calories: 113 },
    { name: "Swiss Cheese", calories: 111 },
    { name: "Provolone Cheese", calories: 98 },
    { name: "Feta Cheese", calories: 75 },
    { name: "Blue Cheese", calories: 100 },
    { name: "Cream Cheese", calories: 99 },
    { name: "Ricotta Cheese", calories: 174 },
    { name: "Whipped Cream", calories: 52 },
    { name: "Ice Cream", calories: 137 },
    // Add more real ingredients as needed
  ];

  const initialGroceryList = [
    {
      title: "Ingredients for Cheese Pizza",
      items: [
        { name: "Mozzarella Cheese", calories: 85 },
        { name: "Marinara Sauce", calories: 40 },
        { name: "Pizza Dough", calories: 275 },
      ],
    },
  ];

  const [myGroceryList, setMyGroceryList] = useState(initialGroceryList);
  const [searchQuery, setSearchQuery] = useState("");
  const [totalCalories, setTotalCalories] = useState(() =>
    initialGroceryList.reduce(
      (sum, section) =>
        sum + section.items.reduce((sectionSum, item) => sectionSum + item.calories, 0),
      0
    )
  );

  const handleAddIngredient = (ingredient) => {
    setMyGroceryList((prevList) => {
      const customListIndex = prevList.findIndex((section) => section.title === "Custom Ingredients");

      if (customListIndex === -1) {
        return [
          ...prevList,
          {
            title: "Custom Ingredients",
            items: [ingredient],
          },
        ];
      } else {
        const updatedList = [...prevList];
        const customItems = updatedList[customListIndex].items;
        if (!customItems.find((item) => item.name === ingredient.name)) {
          customItems.push(ingredient);
        }
        return updatedList;
      }
    });
    setTotalCalories((prev) => prev + ingredient.calories);
  };

  const handleRemoveIngredient = (ingredientName, sectionTitle) => {
    setMyGroceryList((prevList) =>
      prevList
        .map((section) => {
          if (section.title === sectionTitle) {
            return {
              ...section,
              items: section.items.filter((item) => item.name !== ingredientName),
            };
          }
          return section;
        })
        .filter((section) => section.items.length > 0)
    );
    const ingredient = myGroceryList
      .flatMap((section) => section.items)
      .find((item) => item.name === ingredientName);
    if (ingredient) {
      setTotalCalories((prev) => prev - ingredient.calories);
    }
  };

  const filteredIngredients = ingredients.filter((ingredient) =>
    ingredient.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <PageContainer>
      <HeadingContainer>
        <Heading>GROCERY LIST</Heading>
      </HeadingContainer>
      <ContentWrapper>
        <IngredientsContainer>
          <InputContainer>
            <Input
              type="text"
              placeholder="Search ingredients"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </InputContainer>
          {filteredIngredients.map((ingredient, index) => (
            <IngredientItem key={index} onClick={() => handleAddIngredient(ingredient)}>
              ★ {ingredient.name} - {ingredient.calories} cal
            </IngredientItem>
          ))}
        </IngredientsContainer>
        <MyGroceryListContainer>
          <h2>My Grocery List</h2>
          {myGroceryList.map((section, index) => (
            <GrocerySection key={index}>
              <h3>{section.title}</h3>
              {section.items.map((item, idx) => (
                <IngredientItem key={idx}>
                  ★ {item.name} - {item.calories} cal
                  <span
                    style={{ cursor: "pointer", marginLeft: "10px", color: "red" }}
                    onClick={() => handleRemoveIngredient(item.name, section.title)}
                  >
                    ✕
                  </span>
                </IngredientItem>
              ))}
            </GrocerySection>
          ))}
          <CalorieTracker>Total Calories: {totalCalories} cal</CalorieTracker>
          <FilterButton>Filter Dishes</FilterButton>
        </MyGroceryListContainer>
      </ContentWrapper>
    </PageContainer>
  );
};

export default GroceryList;
