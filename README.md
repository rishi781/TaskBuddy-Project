# 📝 TaskBuddy

**TaskBuddy** is a simple and elegant React-based task manager app that helps users manage their daily to-do lists efficiently. It allows users to add, complete, and delete tasks, with a progress tracker to visualize task completion. All data is saved in your browser using localStorage.

---

## 🚀 Features

- **Add Tasks:** Users can add new tasks to the list.
- **Update Tasks:** Users can mark tasks as completed or undo them.
- **Delete Tasks:** Users can remove tasks from the list.
- **Clear All Tasks:** Users can clear all tasks with a single click.
- **Progress Tracker:** Visual representation of the task completion status.

---

## 🎮 Usage

- **Adding Tasks:** Enter task details and click **"Add Task"** to add a new task.
- **Updating Tasks:** Click **"Complete"** to mark a task done, or **"Undo"** to unmark.
- **Deleting Tasks:** Click the **"Delete"** button next to a task to remove it.
- **Clearing All Tasks:** Click the **"Clear All Tasks"** button to remove all tasks at once.
- **Progress Tracker:** Check the progress bar at the bottom to view how many tasks you've completed.

---

## 📁 Folder Structure
 ```
taskbuddy/
├── components/
│   ├── TaskForm.jsx
│   ├── TaskList.jsx
│   └── ProgressTracker.jsx
├── App.jsx
├── Style.css
├── main.jsx
└── index.html
 ```

---

## 🛠️ Tech Stack

- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- JavaScript (ES6+)
- Custom CSS (Tailwind-style utility classes)
- HTML5 + DOM APIs
- Browser `localStorage`

---

## ⚙️ Getting Started

Follow the steps below to run the project locally:

### 1️⃣ Clone the Repository

```
git clone https://github.com/your-username/taskbuddy.git
cd taskbuddy
```

### 2️⃣ Install Dependencies
```
npm install
```

### 3️⃣ Run the App
```
npm run dev
```

---

## 📸 Screenshots


<img width="1920" height="875" alt="Screenshot (504)" src="https://github.com/user-attachments/assets/a224e545-45fb-465b-9716-313fe9a73805" />

---


## 🧠 Component Overview

| Component             | Description                                    |
| --------------------- | ---------------------------------------------- |
| `App.jsx`             | Root component that manages state and logic    |
| `TaskForm.jsx`        | Handles adding new tasks                       |
| `TaskList.jsx`        | Renders list of tasks with action buttons      |
| `ProgressTracker.jsx` | Displays progress bar based on completed tasks |
| `Style.css`           | Responsive and clean UI using utility classes  |

---

## 📦 Local Storage Key

All tasks are stored in your browser under the key:

```
task-buddy-tasks
```

No backend required — works offline too!

---

## 👨‍💻 Author

Built by Rishi S. as a beginner-friendly React project.

---

## 📄 License

This project is open source and free to use under the MIT License.

---

Happy Tasking with TaskBuddy 🎯
