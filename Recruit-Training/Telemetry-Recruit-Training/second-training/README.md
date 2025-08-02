# Telemetry Team Second Training

## Running the preview

To start this project, make sure you're in the proper working directory by using `cd`:

```
# example

cd Recruit-Training/Telemetry-Recruit-Training/second-training
```

You can start the project by running:

```
yarn
# then
yarn dev
```

If you don't already have the yarn CLI (command line interface): https://classic.yarnpkg.com/en/docs/install#windows-stable

## Requirements

There is a serious problem with the current way that `App.jsx` is formatted. All the telemetry data is hardcoded and repeated multiple times, which violates React patterns since React code should be manageable through the use of reusable components and proper data structures.

### The Current Problems:

1. **Massive code duplication** - The same JSX structure is repeated 7 times for different components
2. **Hardcoded data** - All telemetry values are hardcoded instead of being in a data structure
3. **No reusable components** - Everything is in one giant component
4. **Poor maintainability** - Adding a new telemetry component would require copying and pasting more code

### Your Task:

Refactor this messy code into a clean, maintainable React application by:

1. **Creating a data structure**: Move all the hardcoded telemetry data into an array of objects
2. **Building reusable components**: Create components that can render any telemetry data
3. **Using React patterns**: Implement proper component composition and data mapping

### Before putting this up for PR, you should have:

- **App.jsx should be less than 10 lines of JSX** (just the main container and component calls)
- **A TelemetryCard component** that can render any type of telemetry data (battery, motor, solar)
- **A data structure** containing all telemetry information that can be easily modified
- **Use `.map()`** to render the telemetry cards from your data array
- **Maintain all existing functionality** (alert counters, status displays, etc.)

### Example Data Structure You Should Create:

Your data should look something like this:

```javascript
const telemetryData = [
  {
    id: "battery-1",
    type: "battery",
    name: "Battery Pack 1",
    metrics: [
      { label: "Voltage", value: "48.2V", status: "good" },
      { label: "Current", value: "12.4A", status: "good" },
      // ...
    ],
  },
  // ...
];
```

This training exercise will teach you:

- How to identify and eliminate code duplication
- Proper data structure design for React applications
- Component reusability and composition
- The power of `.map()` for rendering dynamic lists
- Clean code organization principles
