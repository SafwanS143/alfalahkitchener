# 🕌 Al-Falah Masjid — Prayer Times Display

A real-time prayer times display app built in **Flutter**, originally deployed as an **Android APK on an Orange Pi** wired to a TV inside **Al-Falah Masjid in Kitchener, ON**. Later compiled to **Flutter Web** and hosted on GitHub Pages for public viewing and testing — though the masjid itself continued running the APK build.

The Orange Pi / APK build served as the mosque's sole prayer time display from **October 2022 to October 2024**, seen by hundreds of worshippers walking into the masjid daily, with peak traffic on Fridays.

🔗 **[Live Demo](https://safwans143.github.io/alfalahkitchener/)**

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

This is a **frontend-only** app — no database, no backend, no external API calls. Prayer times are stored as a **hardcoded yearly schedule** (a Dart `Map` of dates to times) directly in the codebase. This made the app fully self-contained and offline-capable, which mattered for the masjid deployment where internet consistency wasn't guaranteed.

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
| Primary Deployment | Android APK on Orange Pi (Android OS), wired to TV |
| Public Deployment | Flutter Web → GitHub Pages (added later for public access) |
| Data | Hardcoded yearly prayer schedule (Dart Map) |
| Target Display | 16:9 TV screen |

---

## 🚀 Running Locally

```bash
# Clone the repo
git clone https://github.com/SafwanS143/alfalahkitchener.git
cd alfalahkitchener

# Run in Chrome (web build)
flutter run -d chrome

# Or build the Android APK (the version actually deployed at the masjid)
flutter build apk
```

Or just open the hosted GitHub Pages link in any browser — the layout will scale to fit your window automatically.

> **Note on display:** The app was designed for a fixed 16:9 TV at the masjid, so the layout has a fixed aspect ratio rather than reflowing for arbitrary screen shapes. The web build scales the whole UI proportionally to fill the viewport while preserving that aspect ratio — so on screens that aren't 16:9 you'll see matching dark bars on the off-axis (top/bottom on tall windows, left/right on ultrawide). This is intentional letterboxing: it keeps the display visually identical to what hangs on the wall at the masjid, regardless of where you view it from.

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

- ✅ **Deployed live** at Al-Falah Masjid, Kitchener, ON — Android APK on an Orange Pi connected to the masjid's TV
- ✅ **2 years of continuous operation** (Oct 2022 – Oct 2024)
- ✅ **Sole prayer time display** in the masjid during that period
- ✅ Seen by **hundreds of worshippers daily** as they entered the masjid, with peak attendance on Fridays (Jummah)
- ✅ Later released as a **public Flutter Web build** on GitHub Pages for community access and testing
- ✅ Built, deployed, and maintained **solo**

---

## 🕰️ A Note on Context

This was built back in 2022, well before AI coding assistants were any good at frontend work — Copilot could barely autocomplete a `setState`, and asking an LLM to lay out a Flutter widget tree was a fast track to nonsense. Every pixel, every layout decision, every styling tweak in this app was hand-written and hand-tuned. Looking back at frontend code from that era is a bit humbling now that the tooling has caught up, but it's also a reminder of how much of this UI was figured out the slow way: trial, error, and a lot of hot-reloads on a TV in the masjid.

---

## 👤 Author

**Safwan Shiblee**
[github.com/SafwanS143](https://github.com/SafwanS143) · [linkedin.com/in/safwan-shiblee](https://linkedin.com/in/safwan-shiblee)

---

## 📄 License

Built for community use. Feel free to adapt for your own masjid or community display.
