import React, { useState, useEffect } from "react";
import { useInfiniteQuery } from "@tanstack/react-query";
import { MdOutlineClose } from "react-icons/md";
import {
  PageContainer,
  Input,
  InputContainer,
  StyledButton,
  RecipeListContainer,
  StyledRecipeCard,
  StyledRecipeButton,
  BlurredDiv,
  CloseButton,
  PopupDiv,
  RecipeCardContainer,
  FilterDiv,
  CheckboxInput,
  FilterLabel,
  FilterFieldset,
  FilterHeader,
  StyledForm,
} from "./Recipes_Data";
import { useIntersection } from "@mantine/hooks";
import axios from "axios";
import api_attribution_img from "../../images/Edamam_Badge_Transparent.svg";

const RecipeList = [
  {
    image: "src/images/bbq-chicken-pizza.jpeg",
    header: "BBQ Chicken Pizza",
    body: "BBQ Chicken pizza is...",
    tags: [],
  },
];

const FetchRecipes = async (page: number) => {
  await new Promise((resolve) => setTimeout(resolve, 500));
  return RecipeList.slice((page - 1) * 6, page * 6);
};

const Recipes = () => {
  const [open, setOpen] = useState(false);
  const [currRecipe, setCurrRecipe] = useState(0);
  const [filterOpen, setFilterOpen] = useState(false);
  const [query, setQuery] = useState("chicken");
  const [recipes, setRecipes] = useState<any[]>([]);
  const [next, setNext] = useState("");
  const [search, setSearch] = useState("");

  const getRecipes = async () => {
    const response = await axios.get(`http://localhost:5001/recipes/${query}`);

    console.log(response.data);
    setRecipes(response.data.hits);
    setNext(response.data._links.next.href);
  };

  React.useEffect(() => {
    getRecipes();
  }, [query]);

  const getSearch = (e: any) => {
    e.preventDefault();
    setRecipes([]);
    setQuery(search);
    setSearch("");
  };

  const { data, fetchNextPage, isFetchingNextPage } = useInfiniteQuery({
    queryKey: ["query"],
    queryFn: async ({ pageParam = 1 }) => {
      const response = await FetchRecipes(pageParam);
      return response;
    },
    initialPageParam: 1,
    getNextPageParam: (_, pages) => {
      return pages.length + 1;
    },
    initialData: {
      pages: [RecipeList.slice(0, 6)],
      pageParams: [1],
    },
  });

  const getNextRecipes = async () => {
    const response = await axios.get(next);
    setNext(response.data._links.next.href);
    response.data.hits.map((hit: any) => recipes.push(hit));
    console.log(recipes);
    return response;
  };

  const lastRecipeRef = React.useRef<HTMLElement>(null);

  const { ref, entry } = useIntersection({
    root: lastRecipeRef.current,
    threshold: 1,
  });

  React.useEffect(() => {
    if (entry?.isIntersecting) getNextRecipes();
  }, [entry]);

  const _recipes = data?.pages.flatMap((page) => page);

  return (
    <>
      <PageContainer>
        {open && (
          <BlurredDiv>
            <CloseButton className={CloseButton} onClick={() => setOpen(!open)}>
              <MdOutlineClose />
            </CloseButton>
            <PopupDiv>
              <h1>{recipes[currRecipe].recipe.label}</h1>
              <p>
                Recipe Instructions:{" "}
                <a
                  href={recipes[currRecipe].recipe.url}
                  title="Recipe Instructions"
                >
                  {recipes[currRecipe].recipe.source}
                </a>
              </p>
              <hr />
              <p>
                <strong>Calories:</strong> {recipes[currRecipe].recipe.calories}
              </p>
              <p>
                <strong>Glycemic Index:</strong>{" "}
                {recipes[currRecipe].recipe.glycemicIndex}
              </p>
              <hr />
              <h2>Ingredients: </h2>
              <ol>
                {recipes[currRecipe].recipe.ingredients.map(
                  (ingredient: any) => (
                    <li>{ingredient.text}</li>
                  )
                )}
              </ol>
              <hr />
              <h2>Diet Labels: </h2>
              <ul>
                {recipes[currRecipe].recipe.dietLabels.map((dietLabel: any) => (
                  <li>{dietLabel}</li>
                ))}
              </ul>
              <hr />
              <h2>Health Labels: </h2>
              <ul>
                {recipes[currRecipe].recipe.healthLabels.map(
                  (healthLabel: any) => (
                    <li>{healthLabel}</li>
                  )
                )}
              </ul>
            </PopupDiv>
          </BlurredDiv>
        )}
        {filterOpen && (
          <FilterDiv>
            <form>
              <FilterFieldset>
                <FilterLabel>
                  <CheckboxInput
                    type="checkbox"
                    id="filter1"
                    name="isVegetarian"
                  />
                  Vegetarian
                </FilterLabel>
                <FilterLabel>
                  <CheckboxInput type="checkbox" id="filter2" name="isVegan" />
                  Vegan
                </FilterLabel>
                <FilterLabel>
                  <CheckboxInput
                    type="checkbox"
                    id="filter3"
                    name="isGlutenFree"
                  />
                  Gluten-free
                </FilterLabel>
                <FilterLabel>
                  <CheckboxInput
                    type="checkbox"
                    id="filter4"
                    name="isDairyFree"
                  />
                  Dairy-free
                </FilterLabel>
              </FilterFieldset>
            </form>
          </FilterDiv>
        )}
        <InputContainer>
          {/* FILTER BUTTON - INCOMPLETE
            <StyledButton
            className={StyledButton}
            onClick={() => setFilterOpen(!filterOpen)}
          >
            Filter
          </StyledButton>
          */}
          <StyledForm onSubmit={getSearch} className="search-form">
            <Input
              type="text"
              value={search}
              placeholder="Search Recipes"
              onChange={(e) => setSearch(e.target.value)}
            ></Input>
            <StyledButton className={StyledButton}>Search</StyledButton>
          </StyledForm>
          <img src={api_attribution_img} alt="Edamam attribution"></img>
        </InputContainer>
        <RecipeListContainer>
          {recipes.map((recipe, i) => (
            <RecipeCardContainer ref={ref} key={i}>
              <StyledRecipeButton
                className={StyledRecipeButton}
                onClick={() => {
                  setOpen(!open);
                  setFilterOpen(false);
                  setCurrRecipe(i);
                }}
              >
                <StyledRecipeCard
                  className={StyledRecipeCard}
                  image={recipe.recipe.image}
                  header={recipe.recipe.label}
                  ingredients={""}
                ></StyledRecipeCard>
              </StyledRecipeButton>
            </RecipeCardContainer>
          ))}
          ;
          {/*OLD RECIPE MAPPING
          
            {_recipes?.map((recipe, i) => {
              return (
                <RecipeCardContainer ref={ref} key={i}>
                  <StyledRecipeButton
                    className={StyledRecipeButton}
                    onClick={() => {
                      setOpen(!open);
                      setFilterOpen(false);
                    }}
                  >
                    <StyledRecipeCard
                      className={StyledRecipeCard}
                      image={recipe.image}
                      header={recipe.header}
                      ingredients={recipe.body}
                    ></StyledRecipeCard>
                  </StyledRecipeButton>
                </RecipeCardContainer>
              );
            })}

          */}
        </RecipeListContainer>
        {/* 
        Manual button for fetching pages of recipes

        <button onClick={() => fetchNextPage()} disabled={isFetchingNextPage}>
          {isFetchingNextPage
            ? "Loading more"
            : (data?.pages.length ?? 0) < 6
            ? "Load more"
            : "Nothing more to load"}
        </button>
        */}
      </PageContainer>
    </>
  );
};

export default Recipes;
