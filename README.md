** WEATHER DASHBOARD PROJECT **

- In this project I include everything requirement I have so check it out.
  ** Feature **
  So in this project I include fearture like toggle light to dark, and style UI design to be responsive.

** API & Functionality **

- First thing first I fetch weather api and create useState hook while I'm fetch them. Then I decide create useContext which allow me to pass each data from that API to another file.
- Seconds things I go to Header File to pass that useState by using useContext as well and create function call handleSubmit when the search bar is submit it show the data result. And I also create another function call convertDegree which allow me to toggle degree C and F.

- Third things is I fetch one more API which call foreday to show next 5 days for that city. Which I also do exact same things like weather api. But I also create another function call fetchAllWeatherData which I use Promise.all which allow me to call 2 API at once.

** My API **
my API endpoint = 92e8f4d9c2ae3108523a8fe757c6363c
https://api.openweathermap.org/data/2.5/weather?q={city}&appid=92e8f4d9c2ae3108523a8fe757c6363c
`https://api.openweathermap.org/data/2.5/forecast?q={city}&appid=92e8f4d9c2ae3108523a8fe757c6363c

** Final **

- So that's pretty much I can do in this project.
  Thanks!
