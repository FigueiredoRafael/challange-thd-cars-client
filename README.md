# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
   parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
   },
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list

# How to Run
1. Start the Node Server:
 *Before running the React application, make sure to start the Node.js server attached to this project.

2. Create an Environment File:
   * Copy the contents of the .env.example file and create a new file named .env in the root directory of the project.
   * In the .env file, replace the placeholder values with your actual API URL and any other required configurations.

3. Install Dependencies
   * Open your terminal and navigate to the project directory.
   * Run the following command to install project dependencies:
     ```bash
     npm install
     ```

4. Start the React Application:
   * Run the following command to start the React application:
     ```bash
     npm run dev
     ```

5. Access the Application:
   * Open your web browser and navigate to the URL provided by Vite. The application should now be running.

# IMPORTANT

Don't forget to run the Node server attached with this project.

Replace the `npm run dev` command with the actual command you use to start the Vite development server. This improved section provides clear step-by-step instructions on setting up and running your project while also emphasizing the importance of running the Node server.

   
