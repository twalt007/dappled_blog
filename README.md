# Dappled Personal Blog Site

### <a href="http://dappled.twalt007.com/">VIEW LIVE SITE</a> 

<p align="center">
  <img height="600" alt="Create Post Sample Screenshot" src="https://github.com/twalt007/dappled_blog/blob/master/client/src/assets/images/dappled_square.JPG">
</p>

## Description
This is a **Full-stack personal blog** site that enables users to publish, edit, delete, and view their personal content.  

Client built in **React JS** using **JSX**. State managed through **life-cycle fuctions** and **class components**. **Personally built and handled forms**, upgrading from Formik as feature expansion required specialized file upload. Data validated with **Yup/jquense**. Styled with **Flexbox** and **media queries** on **SCSS** for smooth transition between viewing media. 

Server **CRUD** abilities built in **Node.js** using **Express** for efficient routing. Database built with **MySQL**, using **placeholders** and **'execute'** commands to prevent SQL injections. 

**U-Auth and image upload features still in development.*


## Technologies
### Client
+ Flexbox
+ React.js
+ JSX
+ Yup

### Server
+ Node.js
+ Express
+ MySQL

## Clone and Code (Set-up)
### 1. System Requirements
This project requires that the latest versions of Node.js and MySql be installed on your machine.
#### Dev Environment
This project was coded in a dev environment configured with the assistance of LearningFuze Coding School.  If desired, the below link contains instructions for duplicating this environment. Repo cloned from their official github.

[LearningFuze Coding School - Sample Dev Environment](https://github.com/twalt007/lfz-dev "LearningFuze Coding School - Dev Environment")

### 2. Fork and Install Dependencies
1. Fork this repository by clicking the "Fork" button at top right.
2. Clone the just-forked repository into the the directory containing your dev environment.
    - `git clone https://github.com/twalt007/dappled_blog.git`
3. Change directories into the newly cloned repo
    - `dappled_blog`
4. Install dependencies for 
    - **client:** `npm --prefix client install`
    - **server:** `npm install`

### 3. Set up Local Database for Backend Development
1. This project used **phpMyAdmin**, which requires **Apache** and **MySQL** to be running. If you are using the dev environment recommended above, you will already have these installed. 
    - To start, into your commander type:       
        - `sudo service apache2 start` 
        - `sudo service mysql start` 
    - Go to [phpMyAdmin Login Page](http://localhost/phpmyadmin/ "PhpMyAdmin Login Page")
    - From sweet_corner_ecommerce repo, get database data from 'db' --> 'sql' --> *'db_dump'* file.
    - Import into database
2. Create Config Files for database
    - In the **config** folder create the below file. (Reference template file 'db.json.template' for format.)
        - db.json

### 4. Run the Code!
 1. `npm run dev` will run the full site, **both client and server**.
    - **Client Only:** `npm run dev:client`
    - **Server Only** `npm run dev:server`
 2. The project will start at **localhost:3000**, and should render a page with the logoand background depicted in the image above, along with a welcome message and four buttons to create, edit, delete or view blog content.

### 5. Build For Deployment
1. To deploy, run webpack in the client directory to build project. From the command line type:
    - `npm --prefix client run build`

## Credits
### LearningFuze Coding Camp Dev Environment
[Sample Dev Environment Configuration Guide](https://github.com/twalt007/lfz-dev "LearningFuze Coding School - Dev Environment")

## Enjoy Dappled!
