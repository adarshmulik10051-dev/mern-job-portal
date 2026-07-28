# 14_Redux_Persist

🎯 Goal of Today

Persist the Redux state so that important application data remains available after refreshing the browser.

---

# 🛠️ What I Did Today

Installed:

npm install redux-persist

Configured Redux Persist with the Redux Store.

Used it to persist authentication-related state.

---

# 💡 Key Concept Learned

## Redux Persist

Redux Persist saves selected Redux state in browser storage so that the state is restored after a page refresh.

Without persistence:

Login
  ↓
Refresh Page
  ↓
Redux State Reset
  ↓
User may need to login again

With Redux Persist:

Login
  ↓
State Saved
  ↓
Refresh Page
  ↓
State Restored
  ↓
User Remains Logged In

---

# 🎤 Interview Questions

### 1. Why did you use Redux Persist?

To persist important Redux state across browser refreshes.

### 2. What problem does Redux Persist solve?

Normally Redux state is lost when the page is refreshed. Redux Persist saves the selected state and restores it after refresh.

### 3. Does Redux Persist replace the backend authentication?

No. It only persists frontend state. Actual authentication and authorization are still handled by the backend using JWT.

---

# ⚡ Quick Revision

✅ Installed Redux Persist

✅ Configured Redux Store

✅ Persisted Authentication State

✅ State Restored After Refresh

✅ Improved User Experience