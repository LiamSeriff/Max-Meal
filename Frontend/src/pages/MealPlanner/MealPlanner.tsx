import React, { useState } from "react";
import styled from "styled-components";

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #2e2e2e;
  color: #ffffff;
  height: 100vh;
  padding: 20px;
`;

const Heading = styled.h1`
  background-color: #00c2b8;
  padding: 15px 30px;
  border-radius: 12px;
  color: #ffffff;
  font-size: 32px;
  margin-bottom: 30px;
`;

const Table = styled.table`
  width: 90%;
  border-collapse: collapse;
  background-color: #ffffff;
  color: #000000;
  border-radius: 12px;
  overflow: hidden;
`;

const TableHeader = styled.th`
  background-color: #00c2b8;
  color: #ffffff;
  padding: 15px;
  text-align: center;
  font-size: 18px;
`;

const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #f9f9f9;
  }
`;

const TableCell = styled.td`
  border: 1px solid #ddd;
  padding: 15px;
  text-align: center;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #00c2b8;
    color: #ffffff;
  }
`;

const Modal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #ffffff;
  color: #000000;
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.3);
  width: 400px;
  text-align: center;
  z-index: 10;
`;

const ModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 5;
`;

const ModalInput = styled.input`
  width: 100%;
  padding: 10px;
  margin-top: 15px;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 16px;
`;

const ModalButton = styled.button`
  margin-top: 20px;
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

const MealPlanner = () => {
  const [mealPlan, setMealPlan] = useState({
    Monday: {
      Breakfast: "Steak & Cheese Omelette",
      Lunch: "Steak & Fries",
      Dinner: "Chicken Alfredo",
    },
    Tuesday: {
      Breakfast: "Miso Pickling",
      Lunch: "Spicy Tuna Roll",
      Dinner: "Steak Quesadillas",
    },
    Wednesday: {
      Breakfast: "Eggs & Sausage",
      Lunch: "Salmon",
      Dinner: "Kimchi Fried Rice",
    },
    Thursday: {
      Breakfast: "Avocado Toast & Yogurt",
      Lunch: "Egg Pesto Melt",
      Dinner: "Shrimp Pasta",
    },
    Friday: {
      Breakfast: "Spam & Rice",
      Lunch: "Grilled Chicken & Rice",
      Dinner: "Papusa",
    },
    Saturday: {
      Breakfast: "Pancake & Hashbrowns",
      Lunch: "Cheese Pizza",
      Dinner: "Beef Stew",
    },
    Sunday: {
      Breakfast: "Cereal",
      Lunch: "Caesar Salad",
      Dinner: "Tikka Masala",
    },
  });

  const [selectedDay, setSelectedDay] = useState("");
  const [selectedMealType, setSelectedMealType] = useState("");
  const [selectedMeal, setSelectedMeal] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleMealClick = (day, mealType, meal) => {
    setSelectedDay(day);
    setSelectedMealType(mealType);
    setSelectedMeal(meal);
    setIsModalOpen(true);
  };

  const handleModalSave = () => {
    setMealPlan((prevPlan) => ({
      ...prevPlan,
      [selectedDay]: {
        ...prevPlan[selectedDay],
        [selectedMealType]: selectedMeal,
      },
    }));
    setIsModalOpen(false);
  };

  return (
    <PageContainer>
      <Heading>Interactive Meal Planner</Heading>
      <Table>
        <thead>
          <tr>
            <TableHeader>Day</TableHeader>
            <TableHeader>Breakfast</TableHeader>
            <TableHeader>Lunch</TableHeader>
            <TableHeader>Dinner</TableHeader>
          </tr>
        </thead>
        <tbody>
          {Object.keys(mealPlan).map((day) => (
            <TableRow key={day}>
              <TableCell>{day}</TableCell>
              <TableCell
                onClick={() =>
                  handleMealClick(day, "Breakfast", mealPlan[day].Breakfast)
                }
              >
                {mealPlan[day].Breakfast}
              </TableCell>
              <TableCell
                onClick={() =>
                  handleMealClick(day, "Lunch", mealPlan[day].Lunch)
                }
              >
                {mealPlan[day].Lunch}
              </TableCell>
              <TableCell
                onClick={() =>
                  handleMealClick(day, "Dinner", mealPlan[day].Dinner)
                }
              >
                {mealPlan[day].Dinner}
              </TableCell>
            </TableRow>
          ))}
        </tbody>
      </Table>

      {isModalOpen && (
        <>
          <ModalBackdrop onClick={() => setIsModalOpen(false)} />
          <Modal>
            <h2>Edit Meal</h2>
            <p>
              <strong>{selectedMealType}</strong> for <strong>{selectedDay}</strong>
            </p>
            <ModalInput
              value={selectedMeal}
              onChange={(e) => setSelectedMeal(e.target.value)}
            />
            <ModalButton onClick={handleModalSave}>Save</ModalButton>
          </Modal>
        </>
      )}
    </PageContainer>
  );
};

export default MealPlanner;
