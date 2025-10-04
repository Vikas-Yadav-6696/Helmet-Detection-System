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
