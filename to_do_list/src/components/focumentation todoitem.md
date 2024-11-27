Here is the `ToDoItem.js Documentation` formatted properly for Markdown:

```markdown
# ToDoItem.js Documentation

## Overview

The `ToDoItem` component is a React functional component designed to represent a single task in a to-do list. It provides features for editing, marking tasks as complete, and deleting tasks. The component uses state and props to manage interactions and task updates.

---

## Props

The `ToDoItem` component expects the following props:

### 1. **task**
- **Type**: `Object`
- **Structure**:
  ```javascript
  {
    id: string | number,
    name: string,
    completed: boolean
  }
  ```
- **Description**: Represents the task data.

### 2. **deleteTask**
- **Type**: `Function`
- **Arguments**:
  - `id` (string | number): The ID of the task to delete.
- **Description**: Deletes the specified task.

### 3. **toggleComplete**
- **Type**: `Function`
- **Arguments**:
  - `id` (string | number): The ID of the task to toggle.
- **Description**: Marks the task as completed or uncompleted based on its current state.

### 4. **updateTask**
- **Type**: `Function`
- **Arguments**:
  - `id` (string | number): The ID of the task to update.
  - `newName` (string): The updated name for the task.
- **Description**: Updates the task name.

---

## Component State

### 1. **isEditing**
- **Type**: `boolean`
- **Initial Value**: `false`
- **Description**: Tracks whether the task is in editing mode.

### 2. **newName**
- **Type**: `string`
- **Initial Value**: `task.name`
- **Description**: Stores the edited name of the task.

---

## Functions

### 1. **handleEditToggle**
- **Description**: Toggles the `isEditing` state. If exiting editing mode, updates the task name using `updateTask`.
- **Behavior**:
  - If `isEditing` is `true`, calls `updateTask` with the updated task name.
  - Toggles the `isEditing` state.

---

## JSX Structure

The `ToDoItem` component returns an `<li>` element styled conditionally based on whether the task is marked as completed. It contains the following elements:

### 1. **Task Name/Input Field**
- **Behavior**:
  - Displays a `<span>` with the task name if not in editing mode.
  - Displays an `<input>` field with the task name if in editing mode.

### 2. **Buttons**
- **Edit Button**:
  - Toggles between "Save" and "Edit" based on `isEditing` state.
  - Calls `handleEditToggle` on click.
- **Complete/Unmark Button**:
  - Toggles between "Complete" and "Unmark" based on `task.completed`.
  - Calls `toggleComplete` with the task ID on click.
- **Delete Button**:
  - Deletes the task.
  - Calls `deleteTask` with the task ID on click.

---

## Styling

Inline styles are applied to elements:
- **Task Text**: Uses `textDecoration: 'line-through'` if the task is completed.
- **Margins**: Adds spacing between elements for better UI.
```

