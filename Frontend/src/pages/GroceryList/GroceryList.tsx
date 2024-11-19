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

const Dropdown = styled.select`
  width: 100%;
  padding: 10px;
  margin-top: 10px;
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

const GroceryList = () => {
  const ingredients = [
    { name: "Mozzarella Cheese", calories: 85, category: "Dairy" },
    { name: "Marinara Sauce", calories: 40, category: "Condiments" },
    { name: "Cucumbers", calories: 15, category: "Vegetables" },
    { name: "Flour", calories: 364, category: "Baking" },
    { name: "Banana", calories: 105, category: "Fruits" },
    { name: "Tomatoes", calories: 22, category: "Vegetables" },
    { name: "Chicken Breast", calories: 165, category: "Meats" },
    { name: "Butter", calories: 102, category: "Dairy" },
    { name: "Blueberries", calories: 84, category: "Fruits" },
    { name: "Alfredo Sauce", calories: 400, category: "Condiments" },
  { name: "Fettuccine", calories: 220, category: "Pasta" },
  { name: "BBQ Sauce", calories: 70, category: "Condiments" },
  { name: "Onions", calories: 40, category: "Vegetables" },
  { name: "Garlic", calories: 4, category: "Vegetables" },
  { name: "Bell Peppers", calories: 24, category: "Vegetables" },
  { name: "Olive Oil", calories: 119, category: "Oils" },
  { name: "Salt", calories: 0, category: "Seasonings" },
  { name: "Pepper", calories: 0, category: "Seasonings" },
  { name: "Oregano", calories: 6, category: "Herbs" },
  { name: "Parmesan Cheese", calories: 110, category: "Dairy" },
  { name: "Spinach", calories: 23, category: "Vegetables" },
  { name: "Broccoli", calories: 31, category: "Vegetables" },
  { name: "Ground Beef", calories: 250, category: "Meats" },
  { name: "Rice", calories: 206, category: "Grains" },
  { name: "Pasta", calories: 131, category: "Pasta" },
  { name: "Eggs", calories: 78, category: "Dairy" },
  { name: "Milk", calories: 149, category: "Dairy" },
  { name: "Butter", calories: 102, category: "Dairy" },
  { name: "Bread", calories: 80, category: "Baking" },
  { name: "Apple", calories: 95, category: "Fruits" },
  { name: "Strawberries", calories: 4, category: "Fruits" },
  { name: "Blueberries", calories: 84, category: "Fruits" },
  { name: "Oranges", calories: 62, category: "Fruits" },
  { name: "Grapes", calories: 62, category: "Fruits" },
  { name: "Watermelon", calories: 85, category: "Fruits" },
  { name: "Pineapple", calories: 82, category: "Fruits" },
  { name: "Kiwi", calories: 42, category: "Fruits" },
  { name: "Peach", calories: 58, category: "Fruits" },
  { name: "Mango", calories: 201, category: "Fruits" },
  { name: "Pear", calories: 101, category: "Fruits" },
  { name: "Carrots", calories: 25, category: "Vegetables" },
  { name: "Celery", calories: 10, category: "Vegetables" },
  { name: "Zucchini", calories: 20, category: "Vegetables" },
  { name: "Cauliflower", calories: 25, category: "Vegetables" },
  { name: "Sweet Potatoes", calories: 112, category: "Vegetables" },
  { name: "Potatoes", calories: 161, category: "Vegetables" },
  { name: "Lemon Juice", calories: 12, category: "Condiments" },
  { name: "Honey", calories: 64, category: "Condiments" },
  { name: "Maple Syrup", calories: 52, category: "Condiments" },
  { name: "Soy Sauce", calories: 9, category: "Condiments" },
  { name: "Shrimp", calories: 99, category: "Seafood" },
  { name: "Salmon", calories: 206, category: "Seafood" },
  { name: "Tuna", calories: 179, category: "Seafood" },
  { name: "Tilapia", calories: 96, category: "Seafood" },
  { name: "Scallops", calories: 137, category: "Seafood" },
  { name: "Crab Meat", calories: 97, category: "Seafood" },
  { name: "Lobster", calories: 129, category: "Seafood" },
  { name: "Ham", calories: 113, category: "Meats" },
  { name: "Bacon", calories: 43, category: "Meats" },
  { name: "Sausage", calories: 300, category: "Meats" },
  { name: "Tofu", calories: 70, category: "Protein Alternatives" },
  { name: "Chickpeas", calories: 164, category: "Protein Alternatives" },
  { name: "Quinoa", calories: 120, category: "Grains" },
  { name: "Couscous", calories: 112, category: "Grains" },
  { name: "Oats", calories: 389, category: "Grains" },
  { name: "Granola", calories: 471, category: "Grains" },
  { name: "Yogurt", calories: 59, category: "Dairy" },
  { name: "Cheddar Cheese", calories: 113, category: "Dairy" },
  { name: "Swiss Cheese", calories: 111, category: "Dairy" },
  { name: "Provolone Cheese", calories: 98, category: "Dairy" },
  { name: "Feta Cheese", calories: 75, category: "Dairy" },
  { name: "Blue Cheese", calories: 100, category: "Dairy" },
  { name: "Cream Cheese", calories: 99, category: "Dairy" },
  { name: "Ricotta Cheese", calories: 174, category: "Dairy" },
  { name: "Whipped Cream", calories: 52, category: "Dairy" },
  { name: "Ice Cream", calories: 137, category: "Desserts" },
  { name: "Black Beans", calories: 227, category: "Protein Alternatives" },
  { name: "Beef Stock", calories: 15, category: "Condiments" },
  { name: "Chicken Stock", calories: 12, category: "Condiments" },
  { name: "Tomato Sauce", calories: 29, category: "Condiments" },
  { name: "Ground Turkey", calories: 120, category: "Meats" },
  { name: "Pine Nuts", calories: 191, category: "Nuts" },
  { name: "Coconut Milk", calories: 150, category: "Dairy Alternatives" },
  { name: "Dark Chocolate", calories: 155, category: "Desserts" },
  { name: "Marshmallows", calories: 100, category: "Desserts" },
  { name: "Ginger", calories: 2, category: "Herbs" },
  { name: "Thyme", calories: 3, category: "Herbs" },
  { name: "Parsley", calories: 5, category: "Herbs" },
  { name: "Basil Leaves", calories: 2, category: "Herbs" },
    // Add more categorized ingredients as needed
  ];

  const initialGroceryList = [
    {
      title: "Cheese Pizza",
      items: [
        { name: "Mozzarella Cheese", calories: 85 },
        { name: "Marinara Sauce", calories: 40 },
        { name: "Pizza Dough", calories: 275 },
      ],
    },
    {
      title: "Tropical Fruit Salad",
      items: [
        { name: "Pineapple", calories: 82 },
        { name: "Mango", calories: 201 },
        { name: "Kiwi", calories: 42 },
        { name: "Strawberries", calories: 4 },
        { name: "Blueberries", calories: 84 },
      ],
    },
    {
      title: "Healthy Veggie Bowl",
      items: [
        { name: "Spinach", calories: 23 },
        { name: "Carrots", calories: 25 },
        { name: "Zucchini", calories: 20 },
        { name: "Avocado", calories: 240 },
        { name: "Quinoa", calories: 120 },
      ],
    },
    {
      title: "BBQ Chicken Plate",
      items: [
        { name: "Chicken Breast", calories: 165 },
        { name: "BBQ Sauce", calories: 70 },
        { name: "Sweet Potatoes", calories: 112 },
        { name: "Broccoli", calories: 31 },
      ],
    },
  ];

  const [myGroceryList, setMyGroceryList] = useState(initialGroceryList);
  const [searchQuery, setSearchQuery] = useState("");
  const [filterCategory, setFilterCategory] = useState("All");
  const [totalCalories, setTotalCalories] = useState(() =>
    initialGroceryList.reduce(
      (sum, section) =>
        sum + section.items.reduce((sectionSum, item) => sectionSum + item.calories, 0),
      0
    )
  );

  const handleAddIngredient = (ingredient) => {
    setMyGroceryList((prevList) => {
      const customListIndex = prevList.findIndex(
        (section) => section.title === "Custom Ingredients"
      );
      if (customListIndex === -1) {
        return [...prevList, { title: "Custom Ingredients", items: [ingredient] }];
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

  const filteredIngredients = ingredients.filter((ingredient) => {
    return (
      (filterCategory === "All" || ingredient.category === filterCategory) &&
      ingredient.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  });

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
            <Dropdown
              onChange={(e) => setFilterCategory(e.target.value)}
              value={filterCategory}
            >
              <option value="All">All</option>
              <option value="Dairy">Dairy</option>
              <option value="Meats">Meats</option>
              <option value="Vegetables">Vegetables</option>
              <option value="Fruits">Fruits</option>
              <option value="Condiments">Condiments</option>
            </Dropdown>
          </InputContainer>
          {filteredIngredients.map((ingredient, index) => (
            <IngredientItem key={index} onClick={() => handleAddIngredient(ingredient)}>
              ★ {ingredient.name} - {ingredient.calories} cal
            </IngredientItem>
          ))}
        </IngredientsContainer>
        <MyGroceryListContainer>
          <CalorieTracker>Total Calories: {totalCalories} cal</CalorieTracker>
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
        </MyGroceryListContainer>
      </ContentWrapper>
    </PageContainer>
  );
};

export default GroceryList;
