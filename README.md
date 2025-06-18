# Fundvis Overlay Drawer
Fundvis Reusable Overlay Drawer - A modular and configurable right slide-in overlay component for displaying dynamic sectioned data with
support for data loading for each section. User can access further drill down of individual data without disrupting the core workflows.

Project Demo can be found at https://fundvis-overlay-demo.vercel.app/

# Architecture Highlights
 - **Component Flow**: App Component -> Overlay Component -> section component -> list component
 - **Data Flow** : Takes input from paraent; Fetch data from service
 - **Config Driven**: A centralized config to manage and cutomize Section level UI elements(Merging Config and dynamic data from service)
 - **Service Layer**: Service Layer Implementation to populate dynamic data. (As of now Mock stubs are placed in asset)

  This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.2.15.

## Getting Started (Local Setup)

Follow the steps below to set up and run the project on your local machine.

### 1.Prerequisites

Ensure the following software is installed:

- **Node.js** (v18 or above recommended) – [Download Node.js](https://nodejs.org/)
- **npm** (comes with Node.js)
- **Angular CLI** – install globally if not already:


```bash
npm install -g @angular/cli
```

- **To Check Node and CLI are installed** - Use the below commands. It will be display node and angular with its version else you will get error

```bash
node -v
ng v
```

- **NG not found issue** - If you encounter this issue, you have to define your environment variables
- Open control panel -> click on system variables -> environment variables -> "path" from User variables ->Edit  
- **Angular Path** - "C:\Users\Divya\AppData\Roaming\npm"(example, change it according to your profile)
- **ng Path** - "C:\Users\Divya\AppData\Roaming\npm\node_modules\@angular\cli\bin"(example, change it according to your profile)

### 2.Clone the Repository 

- Navigate to your project work space directory in terminal or Right click and open terminal in your project repository
- Executing the below command will clone the git repository to your local workspace

```bash
git clone https://github.com/divyamanivannan92/fundvis-overlay-demo.git
cd fundvis-overlay-demo
```

## 3. Install dependencies and project related libraries

```bash
npm install
```

**Doing npm install should install all the dependencies like tailwind and fontawesome. If there are any issues, below are the commands to install it 

**Tailwind** - Installing tailwind
```bash
npm install -D tailwindcss@3.4 postcss autoprefixer
```

**font awesome icons** - Installing fontawesome for icons
```bash
npm install @fortawesome/fontawesome-free
```

## 4. To start the local development server, run the below command

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. 

The application will automatically reload whenever you modify any of the files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
