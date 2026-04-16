## 🌐 API Integration

This project uses the **OpenWeatherMap API** to fetch real-time weather data.

### 🔗 Base URL

```
https://api.openweathermap.org/data/2.5/weather
```

### 📥 Parameters Used

* `q` → City name
* `appid` → API key
* `units=metric` → Temperature in Celsius

---

## 📡 Example Request

```
https://api.openweathermap.org/data/2.5/weather?q=Delhi&appid=YOUR_API_KEY&units=metric
```

---

## 📤 Data Displayed

* 🌡️ Temperature
* 💧 Humidity
* 🌬️ Wind Speed
* 🌤️ Weather Condition (with icons)

---

## 🧠 Logic Overview

* Fetch weather data using `fetch()`
* Extract required fields from API response
* Update UI dynamically using DOM manipulation
* Change weather icon based on condition

---

