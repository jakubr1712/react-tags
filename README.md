
# Tag Management Application

## Introduction

This project is a React application for managing tags. It allows users to search, select, and remove tags in an easy and intuitive way.


## Installation Instructions

### Requirements

- Node.js v18.19.1 or newer
- yarn


### Running the Application

Install packages:
```bash
yarn 
```

Start the development server:

```bash
yarn start
```

The application will be available at `http://localhost:3000`.

## Project Structure

### Directory Structure

```
src/
├── @types/
├── components/
│   ├── ActiveTags/
│   ├── InputField/
│   ├── ProgressBar/
│   ├── Tag/
│   ├── TagApp/
│   ├── TagList/
│   ├── TagListItem/
│   ├── TagWarning/
│   ├── WarningText/
├── constans/
├── hooks/
├── pages/
├── styles/
├── utils/
├── App.tsx
├── index.tsx
```

### Key Files and Folders
- **components/**: Contains all the application components.
- **hooks/**: Contains custom hooks.
- **@types/**: Contains TypeScript type definition files extending external types or defining custom types for the application.
- **constants/**: Contains constant values used throughout the application
- **pages/**: Contains components representing various pages or views in the application.
- **utils/**: Contains utility functions used across different parts of the application, such as helper functions for data operations, text formatting, date handling, etc.
- **App.tsx**: Main application component responsible for rendering the core structure and managing routing and global state.

## Components

### TagApp

```tsx
/**
 * TagApp component
 *
 * @component
 * 
 * @param {Object} props - Component props
 * @param {Array} props.data - Array of tag data
 * 
 * @example
 * const data = [
 *   { id: 1, name: 'Tag1', count: 10, isActive: false },
 *   { id: 2, name: 'Tag2', count: 20, isActive: true },
 * ];
 * 
 * return <TagApp data={data} />;
 */
const TagApp: React.FC<ITagAppProps> = ({ data }) => {
  // ...
};
```

### InputField

```tsx
/**
 * InputField component
 *
 * @component
 * 
 * @param {Object} props - Component props
 * @param {string} props.input - Current input value
 * @param {function} props.onChange - Function to handle input change
 * @param {function} props.onKeyDown - Function to handle key down event
 * @param {function} props.onClear - Function to handle clearing the input
 * @param {function} props.onFocus - Function to handle input focus
 * 
 * @example
 * return <InputField
 *   input={input}
 *   onChange={handleChange}
 *   onKeyDown={handleKeyDown}
 *   onClear={handleClearInput}
 *   onFocus={() => setIsFocusInput(true)}
 * />;
 */
const InputField: React.FC<IInputFieldProps> = ({
  input,
  onChange,
  onKeyDown,
  onClear,
  onFocus,
}) => {
  // ...
};
```

### ActiveTags

```tsx
/**
 * ActiveTags component
 *
 * @component
 * 
 * @param {Object} props - Component props
 * @param {Array} props.tags - Array of active tag data
 * @param {function} props.removeTag - Function to remove a tag
 * 
 * @example
 * const activeTags = [
 *   { id: 1, name: 'Tag1', count: 10, isActive: true },
 * ];
 * 
 * return <ActiveTags tags={activeTags} removeTag={removeTagFunction} />;
 */
const ActiveTags: React.FC<IActiveTagsProps> = ({ tags, removeTag }) => {
  // ...
};
```

### TagList

```tsx
/**
 * TagList component
 *
 * @component
 * 
 * @param {Object} props - Component props
 * @param {Array} props.tags - Array of tag data
 * @param {string} props.filterText - Text to filter tags
 * @param {function} props.toggleTag - Function to toggle tag selection
 * 
 * @example
 * const tags = [
 *   { id: 1, name: 'Tag1', count: 10, isActive: false },
 *   { id: 2, name: 'Tag2', count: 20, isActive: true },
 * ];
 * 
 * return <TagList tags={tags} filterText={filterText} toggleTag={toggleTagFunction} />;
 */
const TagList: React.FC<ITagListProps> = ({ tags, filterText, toggleTag }) => {
  // ...
};
```

### TagListItem

```tsx
/**
 * TagListItem component
 *
 * @component
 * 
 * @param {Object} props - Component props
 * @param {Object} props.tag - Tag data
 * @param {number} props.index - Index of the tag in the list
 * @param {function} props.toggleTag - Function to toggle tag selection
 * 
 * @example
 * const tag = { id: 1, name: 'Tag1', count: 10, isActive: false };
 * 
 * return <TagListItem tag={tag} index={0} toggleTag={toggleTagFunction} />;
 */
const TagListItem: React.FC<ITagListItemProps> = ({ tag, index, toggleTag }) => {
  // ...
};
```

### TagWarning

```tsx
/**
 * TagWarning component
 *
 * @component
 * 
 * @param {Object} props - Component props
 * @param {number} props.currentTags - Number of current active tags
 * 
 * @example
 * return <TagWarning currentTags={2} />;
 */
const TagWarning: React.FC<ITagWarningProps> = ({ currentTags }) => {
  // ...
};
```

### WarningText

```tsx
/**
 * WarningText component
 *
 * @component
 * 
 * @param {Object} props - Component props
 * @param {string} props.message - Warning message to display
 * @param {string} [props.color] - Optional color of the message
 * 
 * @example
 * return <WarningText message="Too few tags. Add 2 more to improve article visibility." color="#f44336" />;
 */
const WarningText: React.FC<IWarningTextProps> = ({ message, color }) => {
  // ...
};
```

### ProgressBar

```tsx
/**
 * ProgressBar component
 *
 * @component
 * 
 * @param {Object} props - Component props
 * @param {number} props.progress - Progress percentage
 * @param {string} props.color - Color of the progress bar
 * 
 * @example
 * return <ProgressBar progress={40} color="#4caf50" />;
 */
const ProgressBar: React.FC<IProgressBarProps> = ({ progress, color }) => {
  // ...
};
```

## Testing

### How to Run Tests

Run the tests using the following command:

```bash
yarn test
```

### Test Documentation

Tests are written using `@testing-library/react`. Each component has its own unit tests located in the `__tests__` folder inside the component's directory.

## Deployment

### Production Deployment Instructions

To deploy the application to production, follow these steps:

1. Build the application and run server locally:

```bash
yarn prod
```

## Component Implementation Time Estimate

### Estimate:

1. Analysis and planning: 0.25 days
2. Components implementation: 1 day
3. Writing tests: 0.75 day
4. Documentation: 0.5 days
5. Testing and fixes: 0.5 day

Total: approximately 3 man days
