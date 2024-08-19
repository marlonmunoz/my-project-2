# WARNINGS!

One of your dependencies, babel-preset-react-app, is importing the
"@babel/plugin-proposal-private-property-in-object" package without
declaring it in its dependencies. This is currently working because
"@babel/plugin-proposal-private-property-in-object" is already in your
node_modules folder for unrelated reasons, but it may break at any time.

babel-preset-react-app is part of the create-react-app project, which
is not maintianed anymore. It is thus unlikely that this bug will
ever be fixed. Add "@babel/plugin-proposal-private-property-in-object" to
your devDependencies to work around this error. This will make this message
go away.

## How to fix this bug

To add `@babel/plugin-proposal-private-property-in-object` to your `devDependencies`, follow these steps:

1. Open your terminal.
2. Run the following command:

`npm install --save-dev @babel/plugin-proposal-private-property-in-object`

This will add the package to your devDependencies in package.json and ensure it is available for Babel to use.