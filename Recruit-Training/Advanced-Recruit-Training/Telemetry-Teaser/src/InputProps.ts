// Define the props type
export interface InputProps {
  value: number | string; // Expecting a string for the input value
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void; // Function to handle changes
}
