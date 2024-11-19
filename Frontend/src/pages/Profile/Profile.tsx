import React, { useState } from "react";
import styled from "styled-components";

// Styled Components
const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  background-color: #2e2e2e;
  color: #ffffff;
  height: 100vh;
  padding: 20px;
  overflow-y: auto;
`;

const Heading = styled.h1`
  background-color: #00c2b8;
  padding: 15px 30px;
  border-radius: 12px;
  color: #ffffff;
  font-size: 32px;
  margin-bottom: 20px;
`;

const Section = styled.div`
  width: 80%;
  background-color: #ffffff;
  color: #000000;
  border-radius: 12px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.3);
  padding: 20px;
  margin-bottom: 20px;
`;

const SectionTitle = styled.h2`
  font-size: 24px;
  margin-bottom: 15px;
`;

const InputRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
`;

const Label = styled.label`
  font-size: 18px;
  font-weight: bold;
`;

const Input = styled.input`
  width: 60%;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ddd;
  border-radius: 8px;
`;

const Slider = styled.input`
  width: 100%;
  margin: 10px 0;
`;

const Select = styled.select`
  width: 60%;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ddd;
  border-radius: 8px;
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: #00c2b8;
  color: #ffffff;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    background-color: #009f97;
  }
`;

const ProgressBar = styled.div`
  width: 100%;
  background-color: #ddd;
  border-radius: 8px;
  overflow: hidden;
  margin-top: 10px;
`;

const Progress = styled.div`
  width: ${(props) => props.progress || 0}%;
  background-color: #00c2b8;
  height: 20px;
  transition: width 0.3s ease;
`;

const MealSuggestion = styled.div`
  background-color: #f9f9f9;
  padding: 15px;
  border-radius: 8px;
  margin-bottom: 10px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const MealDetails = styled.div``;

const MealActions = styled.div`
  display: flex;
  gap: 10px;
`;

const MealButton = styled.button`
  padding: 8px 15px;
  background-color: ${(props) => (props.favorited ? "#ffb400" : "#00c2b8")};
  color: #ffffff;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 14px;

  &:hover {
    background-color: ${(props) => (props.favorited ? "#d99b00" : "#009f97")};
  }
`;

const Profile = () => {
  // States
  const [userInfo, setUserInfo] = useState({
    name: "John Doe",
    email: "johndoe@example.com",
    phone: "123-456-7890",
    address: "123 Main Street, Springfield",
  });

  const [preferences, setPreferences] = useState("None");
  const [healthGoals, setHealthGoals] = useState({
    calories: 2000,
    protein: 120,
    carbs: 250,
  });

  const [weightProgress, setWeightProgress] = useState({
    currentWeight: 180,
    targetWeight: 160,
    progress: 50, // Simulated progress percentage
  });

  const [mealSuggestions, setMealSuggestions] = useState([
    { title: "Grilled Chicken Salad", description: "High protein, low carb", favorited: false },
    { title: "Quinoa Bowl", description: "Rich in fiber and low in calories", favorited: false },
    { title: "Vegan Tofu Stir-fry", description: "Packed with protein and vegetables", favorited: false },
  ]);

  // Handle user input changes
  const handleInputChange = (field, value) => {
    setUserInfo((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  // Handle dietary preference changes
  const handlePreferencesChange = (value) => {
    setPreferences(value);
    // Simulate updating meal suggestions based on preferences
    if (value === "Vegetarian") {
      setMealSuggestions([
        { title: "Vegetable Stir-fry", description: "Rich in fiber and vitamins", favorited: false },
        { title: "Greek Salad", description: "Fresh and nutrient-dense", favorited: false },
      ]);
    } else if (value === "Keto") {
      setMealSuggestions([
        { title: "Avocado Egg Bowl", description: "High fat, low carb", favorited: false },
        { title: "Grilled Salmon", description: "Rich in omega-3s and protein", favorited: false },
      ]);
    } else {
      setMealSuggestions([
        { title: "Grilled Chicken Salad", description: "High protein, low carb", favorited: false },
        { title: "Quinoa Bowl", description: "Rich in fiber and low in calories", favorited: false },
        { title: "Vegan Tofu Stir-fry", description: "Packed with protein and vegetables", favorited: false },
      ]);
    }
  };

  // Toggle favorite meal
  const toggleFavorite = (index) => {
    setMealSuggestions((prev) =>
      prev.map((meal, i) =>
        i === index ? { ...meal, favorited: !meal.favorited } : meal
      )
    );
  };

  // Handle weight progress updates
  const handleWeightProgressUpdate = (field, value) => {
    const numericValue = Math.max(0, value); // Ensure no negative values
    setWeightProgress((prev) => ({
      ...prev,
      [field]: numericValue,
      progress: Math.min(
        100,
        ((numericValue - prev.targetWeight) / (prev.currentWeight - prev.targetWeight)) * 100
      ),
    }));
  };

  return (
    <PageContainer>
      <Heading>User Profile</Heading>

      {/* Personal Information Section */}
      <Section>
        <SectionTitle>Personal Information</SectionTitle>
        {Object.keys(userInfo).map((field) => (
          <InputRow key={field}>
            <Label>{field.charAt(0).toUpperCase() + field.slice(1)}:</Label>
            <Input
              value={userInfo[field]}
              onChange={(e) => handleInputChange(field, e.target.value)}
            />
          </InputRow>
        ))}
      </Section>

      {/* Dietary Preferences Section */}
      <Section>
        <SectionTitle>Dietary Preferences</SectionTitle>
        <InputRow>
          <Label>Preferences:</Label>
          <Select
            value={preferences}
            onChange={(e) => handlePreferencesChange(e.target.value)}
          >
            <option value="None">None</option>
            <option value="Vegetarian">Vegetarian</option>
            <option value="Vegan">Vegan</option>
            <option value="Keto">Keto</option>
          </Select>
        </InputRow>
      </Section>

      {/* Health Goals Section */}
      <Section>
        <SectionTitle>Health Goals</SectionTitle>
        {Object.keys(healthGoals).map((goal) => (
          <InputRow key={goal}>
            <Label>{goal.charAt(0).toUpperCase() + goal.slice(1)}:</Label>
            <Slider
              type="range"
              min={goal === "calories" ? 1200 : 50}
              max={goal === "calories" ? 3000 : 300}
              value={healthGoals[goal]}
              onChange={(e) => setHealthGoals({ ...healthGoals, [goal]: e.target.value })}
            />
            <span>{healthGoals[goal]} {goal === "calories" ? "kcal" : "g"}</span>
          </InputRow>
        ))}
      </Section>

      {/* Weight Goal Progress Section */}
      <Section>
        <SectionTitle>Weight Goal Progress</SectionTitle>
        <InputRow>
          <Label>Current Weight (lbs):</Label>
          <Input
            type="number"
            value={weightProgress.currentWeight}
            onChange={(e) =>
              handleWeightProgressUpdate("currentWeight", Number(e.target.value))
            }
          />
        </InputRow>
        <InputRow>
          <Label>Target Weight (lbs):</Label>
          <Input
            type="number"
            value={weightProgress.targetWeight}
            onChange={(e) =>
              handleWeightProgressUpdate("targetWeight", Number(e.target.value))
            }
          />
        </InputRow>
        <ProgressBar>
          <Progress progress={weightProgress.progress} />
        </ProgressBar>
        <span>{`Progress: ${Math.round(weightProgress.progress)}%`}</span>
      </Section>

      {/* Meal Suggestions Section */}
      <Section>
        <SectionTitle>Meal Suggestions</SectionTitle>
        {mealSuggestions.map((meal, index) => (
          <MealSuggestion key={index}>
            <MealDetails>
              <h4>{meal.title}</h4>
              <p>{meal.description}</p>
            </MealDetails>
            <MealActions>
              <MealButton
                favorited={meal.favorited}
                onClick={() => toggleFavorite(index)}
              >
                {meal.favorited ? "Unfavorite" : "Favorite"}
              </MealButton>
            </MealActions>
          </MealSuggestion>
        ))}
      </Section>
    </PageContainer>
  );
};

export default Profile;
