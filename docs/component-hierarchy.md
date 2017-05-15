*Component Hierarchy*

#AuthFormContainer
  AuthForm

#HomeContainer
  Home
  SearchContainer
    - SearchBar
  CategoriesContainer
    - Posts
  Footer

#SearchContainer
  SearchBar

#SearchPageContainer
  SearchHeader
  PostsContainer
    - Posts
    - PostReviews
  SearchMap

#UserProfileContainer
  UserForm
  UserListingContainer

#UserListingContainer
  UserListings
  UserReservations

#PostDetailContainer
  MinimalSearch
  PostDetail
  PostReviews
  PostDetailMap


  *ROUTES*
  "/sign-up"       |  "AuthFormContainer"
  "/sign-in"       |  "AuthFormContainer"
  "/home"          |  "HomeContainer"
  "/search"        |  "SearchPageContainer"
  "/user/:id"      |  "UserProfileContainer"
  "/post/:id"      |  "PostDetailContainer"
