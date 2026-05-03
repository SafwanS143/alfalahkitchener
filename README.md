# 🕌 Al-Falah Masjid — Prayer Times Display

A real-time prayer times display app built in **Flutter**, deployed as a web app via **GitHub Pages** and run on a TV inside **Al-Falah Masjid in Kitchener, ON**. The app served as the mosque's sole source of displayed prayer times from **October 2022 to October 2024**, relied upon by hundreds of worshippers daily — and significantly more on Fridays.

🔗 **[Live Demo]([https://safwans143.github.io/alfalahkitchener](https://safwans143.github.io/alfalahkitchener/)** ← *(best viewed at 1097 × 617)*

---

## 📸 Preview

<img width="1379" height="848" alt="image" src="https://github.com/user-attachments/assets/406f8b70-93d3-4534-9786-ccd291c44524" />


---

## ✨ Features

### 🗓️ Main Display *(always-on)*
- All 5 daily prayer times shown with both **Adhan** and **Iqamah** times
- **Live clock** updating every second
- **Countdown to next Iqamah** (hours + minutes)
- **3 Jummah prayer times** displayed every Friday with location notes
- **Sunrise & Sunset** times
- Current **date** displayed prominently

### ⏰ Pre-Prayer Screen *(T-minus 5 minutes)*
- Automatically transitions to an alert screen 5 minutes before each prayer's Iqamah
- Notifies worshippers that prayer is about to begin

### 🙏 Prayer-in-Progress Screen *(10 minutes)*
- Displays a dedicated screen for the duration of the prayer
- Automatically returns to the main display afterward

All screen transitions are fully automatic — no user interaction required.

---

## 🏗️ How It Works

Prayer times are stored as a **hardcoded yearly schedule** (a map of dates to times) directly in the codebase — no database or external API required. This makes the app fully self-contained, offline-capable, and reliable for a TV deployment where internet consistency cannot be guaranteed.

The app continuously checks the current time against the schedule and manages screen state accordingly:

```
Current Time → Check Schedule Map → Determine State → Render Screen
                                          │
                          ┌───────────────┼───────────────┐
                     Main Display    Pre-Prayer       Prayer Active
                     (default)       (T-5 min)        (10 min window)
```

---

## 🧩 Tech Stack

| Layer | Technology |
|---|---|
| Framework | Flutter (Dart) |
| Deployment | Flutter Web → GitHub Pages |
| Data | Hardcoded yearly prayer schedule (Dart Map) |
| Hosting | GitHub Pages |
| Target Display | 1097 × 617 TV screen |

---

## 🚀 Running Locally

```bash
# Clone the repo
git clone https://github.com/SafwanS143/alfalahkitchener.git
cd alfalahkitchener

# Run at the target resolution (Chrome)
flutter run -d chrome --web-browser-flag "--window-size=1097,617"
```

Or open the hosted GitHub Pages link in a browser window sized to **1097 × 617**.

> **Note on resolution:** The layout is currently designed for a fixed 1097 × 617 display. A planned improvement is to wrap the root widget in a `FittedBox` + `Transform.scale` to make it resolution-independent while preserving the aspect ratio — allowing it to scale correctly on any screen size.

---

## 📁 Project Structure

```
alfalahkitchener/
│
├── main.dart.js                # Compiled Flutter web output
├── flutter.js                  # Flutter web engine bootstrapper
├── flutter_service_worker.js   # PWA service worker (offline support)
├── index.html                  # Web entry point
├── manifest.json               # PWA manifest
├── version.json                # Build version info
├── assets/                     # Fonts and static assets
├── canvaskit/                  # Flutter CanvasKit renderer
├── icons/                      # App icons
└── README.md
```

---

## 🌍 Real-World Impact

- ✅ **Deployed live** at Al-Falah Masjid, Kitchener, ON
- ✅ **2 years of continuous operation** (Oct 2022 – Oct 2024)
- ✅ **Sole prayer time display** relied upon by the mosque community
- ✅ Served **hundreds of worshippers daily**, with peak usage on Fridays (Jummah)
- ✅ Built, deployed, and maintained entirely **solo**

---

## 👤 Author

**Safwan Shiblee**
[github.com/SafwanS143](https://github.com/SafwanS143) · [linkedin.com/in/safwan-shiblee](https://linkedin.com/in/safwan-shiblee)

---

## 📄 License

Built for community use. Feel free to adapt for your own masjid or community display.
