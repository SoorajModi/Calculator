# Calculator - GCC Presentation

This is a demo to showcase build tools.

## Build Tools

### IDE

For this demo I used [JetBrains'](https://www.jetbrains.com/) WebStorm. Other popular IDEs include [Visual Studio](https://visualstudio.microsoft.com/),
[NetBeans](https://netbeans.org/), [Komodo IDE](https://www.activestate.com/products/komodo-ide/downloads/edit/), [Eclipse](https://www.eclipse.org/ide/), and more.

### Linter

For linting I used [ESLint](https://eslint.org/) with [AirBnB style plugin](https://github.com/airbnb/javascript) and
[Prettier](https://prettier.io/). These tools allow me to develop code to adhere to a coding style standard, save me 
time, and help reduce errors.

### Testing and TDD

My application was developed using Test Driven Development with [Jest](https://jestjs.io/) for testing.

### CI/CD Pipeline

This project uses [GitHub Pages](https://pages.github.com/), to ensure ever push passes both the linter and test harness.
You can the code for the pipeline in the `.github/workflows/pipeline.yml` file.

For more advanced applications you can configure the pipeline to automatically deploy once it passes the linter,
and test harness, and makes it easier to make changes to your application.

## How to Run

`git clone` the repository.

`npm ci` to install the dependencies.

`npm run lint` to run linter. 

`npm run test` to run test harness. You can view the configuration in the `jest.config.ts` file.

`npm run coverage` to run test harness with code coverage.

You can view the pipeline configuration in `.github/workflows` directory.