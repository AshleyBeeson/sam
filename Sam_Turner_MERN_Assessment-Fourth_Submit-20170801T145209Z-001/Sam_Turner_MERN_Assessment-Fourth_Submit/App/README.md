To run this application:
	
	Node setup:
		Download and install Node.js (v.8.2.1) from https://nodejs.org/en/ . 
		Copy/clone "App" folder onto your machine.
		Delete "package-lock.json" in \App and also in \App\client if present.
		Open a command terminal and navigate to the \App folder.
		Run "npm install" in \App and also \App\client (this will install the required node modules).
		Leave this terminal open in the \App directory.
		
	MongoDB setup:
		Download and install mongoDB from https://www.mongodb.com/download-center#community .
		Also reccomend download and install of Robo-3T from https://robomongo.org/download .
		Create a directory C:\data\db.
		In windows explorer, right click "My Computer"/"This PC" and select properties -> Advanced System Settings -> Environment Variables.
		Under "System Variables" select "Path" and click edit.
		Add the complete file path of the \bin folder found in \MongoDB\Server\3.4, wherever you saved the MongoDB files (most likely C:\Program Files).
		To run Mongo open a command terminal, navigate to C:\Program Files\MongoDB\Server\3.4\bin and run the command "mongod".
				
	Start the app:
		Before starting, drop the "bugs" collection in Robo 3T. A new one is created each time the app starts.
		Run "npm start" in \App. The application should automatically load in your default browser (Chrome recommended).
		This may take a minute depending on your system specs. It should be quicker if you already have your browser open.
		Check that a new "bugs" collection has been generated by connecting to localhost in Robo 3T, under New Connection\System\local\Collections.

To perform Selenium tests:
	Ensure latest version of Java is installed and your machine's environet path is correctly configured.
	Ensure the latest verson of Eclipse is installed.
	Add all provided SeleniumJars and ExtentJars to the project's build path in Eclipse (right click on the project while in Eclipse, select properties, build path and add external jars).
	You will need to change the file path of the web driver in the tests to the file path of the chrome webdriver found in SeleniumJars folder.

Progress Report:
	
	Initially struggled to decide how to initiate this project. Whether to reverse-engineer a pre-existing project or start from scratch.
	After attempting to reverse-engineer a project (adding and removing files to try and re-create it with the new application)
	without success, I decided to start from scratch.
	
	Drew wire-frame model of main page in Word.
	
	Created a react app framework by running "npm install -g create-react-app" then "create-react-app client".
	
	Changed favicon simply by changing the file and keeping the filename.
	
	Changed css stylesheet from file generated during app creating with MDL.
	Changed stylesheet name in index.html (:6).
	Also added App.js script in html body (:26).
	
	Installed 'react-router-dom' and 'react-dom'.
	Edit index.js to include BrowserRouter component containing the App component and ensure the querySelector has the parameter of '#root'.
	
	Created Header component containing Title and Navbar components.
	Created Title component.
	Created NavBar component with links to main page and NewBug page.
	Continually update MainRoutes to render different views when links are used.
	
	Create bugs page to load in bugs json file and display them in individual components.
	Struggling to display 2D array "actions".
	Implemented a little MDL css classNames to visually organise each field a little better.
	
	Applied filters using radio buttons and sort buttons to the bugs page. 
	Unsure of how to implement the use of seperate components and call methods accross classes, so kept everything in one class.
	Sort by date not functioning correctly. 01/07 comes before 12/05 (sorts by day only).
	Interference between filter and sort (i.e. cannot select new filter after a sort).
			Partial fix: Now need to re-apply the sort after a new filter.
	Cannot select multiple filters.
			Partial fix: Allows for multiple filters, but buttons have to be clicked twice to change filter selection.
			i.e. you have to make each selection for each set of options one at a time.
			Tried to alter the filter method to check that each radio button is "checked" in order to display filtered data - unsuccessful, code commented out.
			
	Added a reset button which errases "filterBugs" array, forcing the whole bugs array to be displayed in ID order (calls sortId function).
	Doesn't reset radio buttons...
	
	Attempted to write some Selenium Tests. Could not adequetley remember procedures and commands. 
	Decided to focus on other tasks more likely to be successful.
	Applied more classNames to improve styling.
	
	Returned to Selenium tests, with a little more success.
	
	Successfully deployed a back-end express server, gulp (though don't fully understand it yet) and added a mongoose Schema which successfully maps the bugs data to a server-side mongoDB collection.
	Successfully loaded the mongoDB collection into the bugs component through an api fetch function.
	 