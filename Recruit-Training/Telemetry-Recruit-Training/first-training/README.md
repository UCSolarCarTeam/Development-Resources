# Telemetry Team First Training

## Runnning the preview

To start this project, make sure you're in the proper working directory by using `cd`:

```
# example

cd Recruit-Training/Telemetry-Recruit-Training/first-training
```

You can start the project by running:

```
yarn
# then
yarn dev
```

If you don't already have the yarn CLI (command line interface): https://classic.yarnpkg.com/en/docs/install#windows-stable

## Requirements

Show a bunch of snow leopards in an image gallery that is web responsive.

There should be a clear title on the top of the page, and each image should have a smaller tile above the image with a 5px gap between the image and image title.

### Grid Configuration

- **Desktop (lg)**: 3 columns × 2 rows = 6 images
- **Tablet (md)**: 2 columns × 3 rows = 6 images
- **Mobile**: 1 column × 6 rows = 6 images

### Visual Layout

\`\`\`
Desktop (2x3 Grid):
┌─────────┬─────────┬─────────┐
│ Image 1 │ Image 2 │ Image 3 │
├─────────┼─────────┼─────────┤
│ Image 4 │ Image 5 │ Image 6 │
└─────────┴─────────┴─────────┘

Tablet (3x2 Grid):
┌─────────┬─────────┐
│ Image 1 │ Image 2 │
├─────────┼─────────┤
│ Image 3 │ Image 4 │
├─────────┼─────────┤
│ Image 5 │ Image 6 │
└─────────┴─────────┘

Mobile (6x1 Grid):
┌─────────┐
│ Image 1 │
├─────────┤
│ Image 2 │
├─────────┤
│ Image 3 │
├─────────┤
│ Image 4 │
├─────────┤
│ Image 5 │
├─────────┤
│ Image 6 │
└─────────┘
\`\`\`
