# 🏕️ TrekBag

**TrekBag** is a lightweight packing list app built with **React** that helps you organize items for your next trip. You can add, sort, complete, and manage your packing list with ease. Data is stored locally in the browser using **Zustand** with `localStorage` support, so your list stays intact even after refreshing or closing the tab.

You can access the live version of the app here: [TrekBag Live](https://trekbagg.netlify.app/)
---

## ✨ Features

- ✅ Add items to your packing list
- 🔀 Sort items by:
  - Packed
  - Unpacked
  - Default order
- 🗑️ Delete individual items
- ☑️ Mark all items as **completed**
- 🔄 Mark all items as **incomplete**
- 🧼 Reset list to initial state
- 💾 Persistent storage with `localStorage` using **Zustand**

---

## 🛠️ Tech Stack

- **React**
- **CSS**
- **Context API**
- **Zustand**

---

## 📦 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/saqibahmed13/TrekBag.git
cd trekbag
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start the development server

```bash
npm start
```

The app will run at [http://localhost:3000](http://localhost:3000)

---

## 📂 Project Structure

```
trekbag/
├── public/
├── src/
│   ├── components/
│   ├── context/
│   ├── store/          # Zustand store
│   ├── App.jsx
│   └── index.js
├── package.json
└── README.md
```

---

## 🧠 State Management

The app uses **Zustand** for global state management. The state is automatically synced to the browser's `localStorage` so your packing list persists across sessions.

---

## 📌 Future Enhancements

- [ ] Add item categories
- [ ] Drag-and-drop sorting
- [ ] Responsive mobile view improvements
- [ ] Export or share list feature

---

## 📃 License

This project is open source and free to use under the [MIT License](LICENSE).
