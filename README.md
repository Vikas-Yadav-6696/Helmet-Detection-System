# 🛡️ Helmet Detection System

## 🚦 Complete AI-Powered Safety Compliance Monitoring Solution

This project is an advanced **Helmet Detection System** built with **React + TypeScript**, fully integrated with **Taskade’s automation and database infrastructure**.  
It provides real-time monitoring, automated safety alerts, and analytics dashboards for compliance management.

---

## 🌟 Features

### 🖼️ 1. Image Upload Detection
- Drag & drop or click to upload images  
- Real-time AI processing simulation  
- Automatic safety alert generation  
- Detection results automatically stored in the database  

### 🎥 2. Live Camera Detection
- Real-time camera feed access  
- Continuous helmet detection every 3 seconds  
- Live overlay displaying detection results  
- Start/Stop detection controls  

### 🧾 3. Detection Results Database
- Full history of all detections  
- Filter by helmet/no helmet status or risk level  
- Search functionality across all fields  
- Export results to CSV  
- Detailed detection view with real-time Taskade sync  

### 📊 4. Statistics & Analytics
- Real-time compliance metrics  
- Hourly and daily trend analysis  
- Confidence score distribution  
- Safety status and risk-level indicators  

### 🚨 5. Automated Safety Alerts
- AI-powered risk assessment (Critical, High, Medium, Low)  
- Automatic alert creation from detection results  
- Smart AI-generated alert messages  
- Integration with Taskade notification systems  

---

## 🏗️ System Architecture

### 🖥️ Frontend (React App)
- `App.tsx` – Main entry point  
- `HelmetDetectionApp.tsx` – Core detection interface  
- `ImageUpload.tsx` – Handles image uploads  
- `VideoStream.tsx` – Manages live camera detection  
- `DetectionResults.tsx` – Displays results and database integration  
- `Statistics.tsx` – Analytics and metrics dashboard  

### 🧠 Backend Integration
- **Taskade Database:** Stores detection records  
- **Safety Automation:** Sends automated alerts  
- **Daily Report Generator:** Produces daily compliance summaries  

---

## 🗃️ Database Schema

| Field | Type | Description |
|-------|------|-------------|
| Detection Status | Select | helmet-detected, no-helmet, uncertain |
| Confidence Score | Number | AI confidence level (0–1) |
| People Count | Number | Number of people detected |
| Detection Location | String | Physical detection location |
| Camera ID | String | Identifier for camera |
| Alert Sent | Select | yes, no, pending |
| Risk Level | Select | low, medium, high, critical |

---

## ⚡ Automation Workflows

### 1. 🧩 Safety Alert System (Webhook Trigger)
**Endpoint:** `/api/taskade/webhooks/01K4Q7YYZZJEMJKBP57Y7X5766/run`

#### Example Input:
```json
{
  "detectionId": "abc123",
  "status": "no-helmet",
  "confidence": 0.92,
  "peopleCount": 2,
  "location": "Factory Floor C",
  "cameraId": "CAM-005"
}
```

#### Process:
1. Creates a new detection record  
2. Determines risk level  
3. Generates AI-powered alert message  
4. Returns processed detection with alert status  

| Risk Level | Condition |
|-------------|------------|
| **Critical** | No helmet + confidence ≥ 80% |
| **High** | No helmet + multiple people |
| **Medium** | No helmet (single person) |
| **Low** | Helmet detected |

---

### 2. 📅 Daily Safety Report (Scheduled Trigger)
**Schedule:** Every day at 8:00 AM (America/New_York)

#### Process:
1. Fetches all detection data  
2. Generates AI summary & safety insights  
3. Stores results in Taskade database  
4. Sends compliance report and recommendations  

---

## 🔌 API Integration

### ➤ Get All Detections
```bash
GET /api/taskade/projects/pArVAbb3LzUmJxxr/nodes
```

### ➤ Create Detection Record
```bash
POST /api/taskade/projects/pArVAbb3LzUmJxxr/nodes
{
  "/text": "Detection description",
  "/attributes/@det01": "helmet-detected",
  "/attributes/@conf01": 0.95,
  "/attributes/@people": 2,
  "/attributes/@location": "Construction Site A",
  "/attributes/@camera": "CAM-001",
  "/attributes/@alert": "yes",
  "/attributes/@severity": "low"
}
```

### ➤ Trigger Safety Alert
```bash
POST /api/taskade/webhooks/01K4Q7YYZZJEMJKBP57Y7X5766/run
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js **v18+**
- Modern browser with camera access
- Taskade API access (workspace token required)

### Installation
```bash
npm install
npm run dev
```

### Configuration
| Setting | Default Value |
|----------|----------------|
| Database Project ID | `pArVAbb3LzUmJxxr` |
| Safety Alert Webhook | `01K4Q7YYZZJEMJKBP57Y7X5766` |
| Daily Report Workflow | `01K4Q84EN4841HR2WRD2T4XTWX` |

---

## 💻 Usage

### 🖼️ Image Detection
1. Go to **Image Upload** tab  
2. Drag & drop or select an image  
3. Click **Analyze Image**  
4. View detection & alert results  

### 🎥 Live Detection
1. Go to **Live Detection** tab  
2. Allow camera permissions  
3. Click **Start Detection**  
4. Watch real-time detection overlays  

### 📋 View Results
- Visit **Detection Results** tab  
- Filter or search results  
- Export data to CSV  

### 📈 Analytics
- View compliance metrics  
- Track trends & confidence distribution  
- Monitor overall safety score  

---

## 🔐 Security Features
- Real-time API validation  
- Secure webhook endpoints  
- Database connection monitoring  
- Error handling & safety logs  

---

## ⚙️ Performance
- Optimized React rendering  
- Efficient state management  
- Live database sync  
- Responsive and mobile-friendly UI  

---

## 🧰 Technology Stack
| Category | Tools |
|-----------|--------|
| Frontend | React 18, TypeScript, Tailwind CSS |
| UI Components | Radix UI, Lucide Icons |
| State Management | React Hooks |
| API Integration | Fetch API, Axios |
| Database | Taskade Projects |
| Automation | Taskade Workflows |
| AI | Taskade AI Actions |

---

## 📝 License
This project is part of the **Taskade Ecosystem**.  
Use is subject to the Taskade Developer Terms.

---

## 💬 Support
For issues or inquiries:
- Check [Taskade Documentation](https://help.taskade.com/)
- Review workflow & database logs  
- Verify API and connection settings  
- Contact Taskade Support  

---

**Built by [Vikas Yadav](https://github.com/Vikas-Yadav-6696) ❤️**
