# Calculator - GCC Presentation

This is a demo to showcase build tools.

## Build Tools

### IDE

For this demo I used JetBrains' WebStorm. I chose to use typescript.

### Linter

I use eslint with AirBnB style plugin to enforce consistency in style and formatting.

### Testing and TDD

My application was developed using Test Driven Development with Jest for testing.

### CI/CD Pipeline

I have integrated this application with a git pipeline to run the linter and test harness to double check 
if the code is up to standard.

For more advanced applications you can configure the pipeline to automatically deploy once it passes the linter,
and test harness, and makes it easier to make changes to your application.

## How to Run

`git clone` the repository.

`npm ci` to install the dependencies.

`npm run lint` to run linter. 

`npm run test` to run test harness. You can view the configuration in the `jest.config.ts` file.

`npm run coverage` to run test harness with code coverage.

You can view the pipeline configuration in `.github/workflows` directory.