*Component Hierarchy*

#AuthFormContainer
  AuthForm

#HomeContainer
  Home
  SearchContainer
    - SearchBar
  CategoriesContainer
    - Locations
  Footer

#SearchContainer
  SearchBar

#SearchPageContainer
  SearchHeader
  LocationsContainer
    - Locations
    - LocationsReviews
  SearchMapContainer
    - not sure how this works yet

#SearchMapContainer
  Map

#UserProfileContainer
  UserForm
  UserListingContainer

#UserListingContainer
  UserListings
  UserReservations

#LocationDetailContainer
  MinimalSearch
  LocationDetail
  LocationReviews
  LocationDetailMap


  *ROUTES*
  "/"              |  "HomeContainer"
  "/sign-up"       |  "AuthFormContainer"
  "/sign-in"       |  "AuthFormContainer"
  "/search"        |  "SearchPageContainer"
  "/user/:id"      |  "UserProfileContainer"
  "/location/:id"  |  "LocationDetailContainer"
