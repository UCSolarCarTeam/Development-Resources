# Basic Telemetry Training

Introduction project to learn the basics of React, Typescript and Tailwind

## Installations

For this project and any future telemetry projects, you will need the
following:

1.  NodeJS

    - On Windows, NodeJS installer can also be downloaded here, we use Node.js LTS:
      <https://nodejs.org/en/download/>

    - If you are using Mac or Linux, NodeJS can be downloaded by using the
      following commands in your terminal:

          curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.5/install.sh | bash
          nvm install node 18

    - Once the installation is complete, restart your terminal and use
      the following command to check the version of node that you have
      installed:

          node -v

2.  Yarn Package Manager

    - Using NPM, yarn can now be installed via the command line using
      the following command:

          npm install -g yarn

    - To check the version of Yarn, the command can be used:

          yarn -v

    - To ensure that you are using all the correct dependencies and
      version for the project, make sure that you have changed directory into the
      Telemetry-Teaser folder and use the following command:

          yarn

3.  A Text Editor

    - To edit the web-app, you will need to use a text editor. You may
      use any text editor that you prefer, however we use [Visual Studio
      Code](https://code.visualstudio.com)

## Running the React App

To test your program, you can run the web-app locally via the command
line. Make sure that you have changed to the Telemetry-Teaser directory
within your terminal and use the following command:

    yarn dev

When the program begins compiling, your terminal will display a message
like the following:

```
  VITE v4.4.9  ready in 160 ms
  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
  ➜  press h to show help
```

By using the link specified in your terminal in your browser, you will
be able to view the react app locally once the project has finished
compiling.

## Objectives

The purpose of this training program is to create an app that
calculates the predicted range of the Elysia. Currently the app only
accepts inputs for the speed, battery percentage, and weather
(percentage of visible sunlight). You must implement the following to
complete this calculator program:

1.  Add a button below the inputs labeled _Calculate_.

    - When this button is clicked, the calculateRange function in
      App.tsx should be called.
    - Style this button using Tailwind, the button should be blue, have rounded corners, centered text, and rectangular.

2.  Implement the calculateRange function

    - Since we do not have enough data to determine the range of the
      Elysia at this moment, we will have to use an equation that does
      not relate to the statistics of the Elysia car but simulates how
      the range may change with the input variables instead. The
      following equation may be used to simulate the range of the car:

          range = -(s * s * b / 2500) + (4 * b) + w
          Where s = speed, b = battery percentage w = weather

3.  Validate Inputs

    - For both the speed and battery percentage inputs, a number must be
      sent. You must implement input validation for both of these input
      fields so that:

      - Both inputs are `required`. The messages "Speed is required"
        or "Battery percentage is required" should be shown directly
        below the specifc input if the fields stay empty.

      - The battery percentage should be
        `within the range of 0 to 100`. If this is not true, the
        message "The battery percentage should be with the range of 0 to
        100" needs to be displayed below the battery percentage input.

      - The speed should be `within the range of 0 to 90`. If this is
        not true, the message "The speed should be with the range of 0
        to 90" needs to be displayed below the speed input.

4.  Display the Result

    - If all of the inputs are valid and the calculate button has been
      clicked, the calculated range should be displayed below the
      calculate button in the following message: "The predicted range of
      the Eylsia is x km." where x is the calculated result.

    - Otherwise, no message should be displayed below the calculate
      button.

## Extra Help

There are many resources online that can help you learn more about how
to use React and Tailwind. The [React](https://react.dev/) and [Tailwind](https://tailwindcss.com/) website has a lot of useful and reliable information that may be helpful. Feel free to ask any members for help!