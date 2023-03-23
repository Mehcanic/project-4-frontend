
# GA SEI PROJECT 4 - A Flask + React App

This was a solo project created as a part of the General Assembly Software Engineering Immersive course.

Task was to create full stack application using  React, Python, Flask and PostrgreSQL.

The goal of the project was to create a full stack application using Python, Flask, PostgreSQL and React. The application had to be a complete product which most likely means few relationships and CRUD functionality for at least a couple of models. I decide to make it simple on the back-end and focus of the fron-end part of the project.

I decided to create simple todo list application. The application allows the user to create, read, update and delete tasks. The user can also mark the task as completed. The user can also filter the tasks by all, active and completed tasks or clear out all the completed tasks.

## Getting started and deployment

- This project is split into two repositories. One for the backend:  
  <https://github.com/Mehcanic/project-3-backend>  
  and one for the frontend:  
  <https://github.com/Mehcanic/project-4-frontend>

- The frontend is available to view [here](https://tosdos-apps.netlify.app/>)
- If you would like to take a look at the code please clone it and run:

- On the front-end:

```console
npm install

npm run dev
```

- On the back-end:

```console  
pipenv shell

pipenv install

pipenv install --dev

pipenv run flask run
```

## Timeframe

- The time frame for the project was 2 weeks.

## Technologies used for this project

### Frontend

- React
- TypeScript
- React Router
- Axios
- Styled Components

### Backend

- Python
- Flask
- PostgreSQL
- SQLAlchemy
- Marshmallow
- Bcrypt
- JWT

### Deployment

- Insomnia
- bit.io
- fly.io
- Netlify

## Brief

- Work in a team, using git to code collaboratively.
- Build a full-stack application by making our own backend and front-end
- Use an Express API to serve our data from a Mongo database
- Consume our API with a separate front-end built with React
- Be a complete product which most likely means multiple relationships and CRUD functionality for at least a couple of models
- Implement thoughtful user stories/wireframes that are significant enough to help us know which features are core MVP and which we can cut
- Have a visually impressive design to kick our portfolio up a notch and have something to wow future clients & employers. ALLOW time for this.
- Be deployed online so it's publicly accessible.
- Have automated tests for at least one RESTful resource on the back-end. Improve our employability by demonstrating a good understanding of testing principals.

## Planning and Development procces

1. My first step when planning this project was to decide which productivity tools use for this project. I decided to use Notion and Quick Database Diagrams:
    - Notion: <https://www.notion.so/Project-4-2c9e5f6161a45629acd481bb35f3318>
    

2. The first step was to determine the scope of the application. Given that I will be working on this project alone, I have decided to keep it simple. The application will enable users to create, read, update and delete tasks. Additionally, users can mark tasks as completed and filter them by all, active and completed tasks or clear out all completed tasks. For now, I have decided not to include login or signup until the MVP is done as I wanted to focus on the front-end (React) part of the application. Python with Flask was something completely new for me and two weeks was not enough time to learn back-end in a new technology and make a nice front-end.

3. I used a design from frontendmentor.io as a basis for the application. The app has a working theme switcher, with the dark theme set as default as it is easier on the eyes:
    ![Design](./readme-assets/app-dark.png)
    ![Design](./readme-assets/app-light.png)

    Using an existing design helped me focus on the structure of the application and ensure that all included features were working properly. However, one confusing aspect was that the design file did not provide proper descriptions for which colors should be used where. I had access to a Figma file with the design (which I cannot include due to licensing issues) and had to figure out which color should be used where.

4. I started building application by creating model for the back-end. I decided to create three models for the application: User, Product and Basket. I used Quick Database Diagrams to create the database diagram for the application:
    ![Quick Database Diagrams](./readme-assets/db-diagram.png)

    Here is example how the model for the user looks like:

    ```python
      class UserModel(db.Model, BaseModel):
      __tablename__ = "users"
      username = db.Column(db.String, unique=True, nullable=True)
      email = db.Column(db.Text, unique=True, nullable=True)
      password = db.Column(db.String, nullable=True)

      task = db.relationship("TaskModel", back_populates="user")
      lists_of_tasks = db.relationship("ListOfTasksModel", back_populates="user")

      def __repr__(self):
          return f"<User {self.username}>"
    ```

5. Next steo was to create fist simple user and product controllers to make sure the app is working:

    ```javascript

    ```

6. Next step was to create the routes for the application:

    ```javascript

    ```

7. Next step was to create the seed file for the application. All of the products are added in the seed file as the users will not be able to add products to the database.

    ```javascript

    ```

8. After creating the seed file I created the login and signup functionality for the application. For the login and signup functionality I used bcrypt to hash the password, mongoose hidden to hide elements of the user object from accesing by unauthorised user and jwt to create the token. The token is stored in the local storage of the browser.

    ```javascript

    ```

9. I also created the secure route for the application. The secure route is used to make sure that the user is logged in before they can access the protected routes.

    ```javascript

    ```

10. At this point I have created rest of the controllers and routes for the application.

## Challenges

- This was my first project backend project using MongoDB, Mongoose and ExpressJS. There was a lot of new information to get comfortable with to understand how the create controllers for the application.
- Making the removeFromBasket() controller for the user was a big headache. I spend a lot of time on it and I am still not happy with the result. I would like to improve it in the future.

## Wins

Writing simple but functioning CRUD application was a big win for me. I am happy that I managed to create, and more important understand the way the application works. The user controllers for the basket aren't perfect but they are working. I am happy that I managed to create the removeFromBasket() controller. It was a big win for me.

## Future improvements

- I’m currently working on fixing the removeFromBasket() controller as it’s not functioning as intended. I’ve identified a few issues that I’m addressing and I’ll keep you updated on my progress.
- I’m planning to create a separate basket model as having it inside the user model is not an optimal solution. I’d like to have a basket inside a basket model instead. This will help us keep our code organized and make it easier to maintain in the long run.

## Key Learnings


