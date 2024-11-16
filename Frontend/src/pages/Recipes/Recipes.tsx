import React, { useState } from "react";
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
} from "./Recipes_Data";
import { useIntersection } from "@mantine/hooks";

const RecipeList = [
  {
    image: "src/images/bbq-chicken-pizza.jpeg",
    header: "BBQ Chicken Pizza",
    body: "BBQ Chicken pizza is...",
    tags: [],
  },
  {
    image: "src/images/cheese-pizza.jpg",
    header: "Cheese Pizza",
    body: "Cheese pizza is...",
    tags: ["Vegetarian"],
  },
  {
    image: "src/images/pepperoni-pizza.jpeg",
    header: "Pepperoni Pizza",
    body: "Pepperoni pizza is...",
    tags: [],
  },
  {
    image: "src/images/sausage-pizza.jpeg",
    header: "Sausage Pizza",
    body: "Sausage pizza is...",
    tags: [],
  },
  {
    image: "src/images/supreme-pizza.jpeg",
    header: "Supreme Pizza",
    body: "Supreme pizza is...",
    tags: [],
  },
  {
    image: "src/images/veggie-pizza.jpeg",
    header: "Veggie Pizza",
    body: "Veggie pizza is...",
    tags: ["Vegetarian"],
  },
  {
    image: "src/images/bbq-chicken-pizza.jpeg",
    header: "BBQ Chicken Pizza",
    body: "BBQ Chicken pizza is...",
    tags: [],
  },
  {
    image: "src/images/cheese-pizza.jpg",
    header: "Cheese Pizza",
    body: "Cheese pizza is...",
    tags: ["Vegetarian"],
  },
  {
    image: "src/images/pepperoni-pizza.jpeg",
    header: "Pepperoni Pizza",
    body: "Pepperoni pizza is...",
    tags: [],
  },
  {
    image: "src/images/sausage-pizza.jpeg",
    header: "Sausage Pizza",
    body: "Sausage pizza is...",
    tags: [],
  },
  {
    image: "src/images/supreme-pizza.jpeg",
    header: "Supreme Pizza",
    body: "Supreme pizza is...",
    tags: [],
  },
  {
    image: "src/images/veggie-pizza.jpeg",
    header: "Veggie Pizza",
    body: "Veggie pizza is...",
    tags: ["Vegetarian"],
  },
  {
    image: "src/images/bbq-chicken-pizza.jpeg",
    header: "BBQ Chicken Pizza",
    body: "BBQ Chicken pizza is...",
    tags: [],
  },
  {
    image: "src/images/cheese-pizza.jpg",
    header: "Cheese Pizza",
    body: "Cheese pizza is...",
    tags: ["Vegetarian"],
  },
  {
    image: "src/images/pepperoni-pizza.jpeg",
    header: "Pepperoni Pizza",
    body: "Pepperoni pizza is...",
    tags: [],
  },
  {
    image: "src/images/sausage-pizza.jpeg",
    header: "Sausage Pizza",
    body: "Sausage pizza is...",
    tags: [],
  },
  {
    image: "src/images/supreme-pizza.jpeg",
    header: "Supreme Pizza",
    body: "Supreme pizza is...",
    tags: [],
  },
  {
    image: "src/images/veggie-pizza.jpeg",
    header: "Veggie Pizza",
    body: "Veggie pizza is...",
    tags: ["Vegetarian"],
  },
  {
    image: "src/images/bbq-chicken-pizza.jpeg",
    header: "BBQ Chicken Pizza",
    body: "BBQ Chicken pizza is...",
    tags: [],
  },
  {
    image: "src/images/cheese-pizza.jpg",
    header: "Cheese Pizza",
    body: "Cheese pizza is...",
    tags: ["Vegetarian"],
  },
  {
    image: "src/images/pepperoni-pizza.jpeg",
    header: "Pepperoni Pizza",
    body: "Pepperoni pizza is...",
    tags: [],
  },
  {
    image: "src/images/sausage-pizza.jpeg",
    header: "Sausage Pizza",
    body: "Sausage pizza is...",
    tags: [],
  },
  {
    image: "src/images/supreme-pizza.jpeg",
    header: "Supreme Pizza",
    body: "Supreme pizza is...",
    tags: [],
  },
  {
    image: "src/images/veggie-pizza.jpeg",
    header: "Veggie Pizza",
    body: "Veggie pizza is...",
    tags: ["Vegetarian"],
  },
  {
    image: "src/images/bbq-chicken-pizza.jpeg",
    header: "BBQ Chicken Pizza",
    body: "BBQ Chicken pizza is...",
    tags: [],
  },
  {
    image: "src/images/cheese-pizza.jpg",
    header: "Cheese Pizza",
    body: "Cheese pizza is...",
    tags: ["Vegetarian"],
  },
  {
    image: "src/images/pepperoni-pizza.jpeg",
    header: "Pepperoni Pizza",
    body: "Pepperoni pizza is...",
    tags: [],
  },
  {
    image: "src/images/sausage-pizza.jpeg",
    header: "Sausage Pizza",
    body: "Sausage pizza is...",
    tags: [],
  },
  {
    image: "src/images/supreme-pizza.jpeg",
    header: "Supreme Pizza",
    body: "Supreme pizza is...",
    tags: [],
  },
  {
    image: "src/images/veggie-pizza.jpeg",
    header: "Veggie Pizza",
    body: "Veggie pizza is...",
    tags: ["Vegetarian"],
  },
  {
    image: "src/images/bbq-chicken-pizza.jpeg",
    header: "BBQ Chicken Pizza",
    body: "BBQ Chicken pizza is...",
    tags: [],
  },
  {
    image: "src/images/cheese-pizza.jpg",
    header: "Cheese Pizza",
    body: "Cheese pizza is...",
    tags: ["Vegetarian"],
  },
  {
    image: "src/images/pepperoni-pizza.jpeg",
    header: "Pepperoni Pizza",
    body: "Pepperoni pizza is...",
    tags: [],
  },
  {
    image: "src/images/sausage-pizza.jpeg",
    header: "Sausage Pizza",
    body: "Sausage pizza is...",
    tags: [],
  },
];

const FetchRecipes = async (page: number) => {
  await new Promise((resolve) => setTimeout(resolve, 500));
  return RecipeList.slice((page - 1) * 6, page * 6);
};

function RecipePopup() {
  return console.log("clicked");
}

const Recipes = () => {
  const [open, setOpen] = useState(false);
  const [filterOpen, setFilterOpen] = useState(false);
  //const [recipeList, setRecipeList] = useState(RecipeList);

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

  const lastRecipeRef = React.useRef<HTMLElement>(null);
  const { ref, entry } = useIntersection({
    root: lastRecipeRef.current,
    threshold: 1,
  });

  React.useEffect(() => {
    if (entry?.isIntersecting) fetchNextPage();
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
            <PopupDiv></PopupDiv>
          </BlurredDiv>
        )}
        {filterOpen && (
          <FilterDiv>
            <form>
              <label>
                <input
                  type="checkbox"
                  id="filter1"
                  name="isVegetarian"
                  value="Vegetarian"
                />
                Vegetarian
              </label>
            </form>
          </FilterDiv>
        )}
        <InputContainer>
          <Input
            type="search"
            className="form-control"
            id="recipe search"
            placeholder="Search Recipes"
          ></Input>
          <StyledButton
            className={StyledButton}
            onClick={() => setFilterOpen(!filterOpen)}
          >
            Filter
          </StyledButton>
        </InputContainer>
        <RecipeListContainer>
          {_recipes?.map((recipe, i) => {
            return (
              <RecipeCardContainer ref={ref} key={i}>
                <StyledRecipeButton
                  className={StyledRecipeButton}
                  onClick={() => setOpen(!open)}
                >
                  <StyledRecipeCard
                    className={StyledRecipeCard}
                    image={recipe.image}
                    header={recipe.header}
                    body={recipe.body}
                  ></StyledRecipeCard>
                </StyledRecipeButton>
              </RecipeCardContainer>
            );
          })}
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
