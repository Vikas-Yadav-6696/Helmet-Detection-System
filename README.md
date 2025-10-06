# 🛡️ Helmet Detection System

## 🚦 AI-Powered Safety Compliance Monitoring Solution

The **Helmet Detection System** is a full-stack AI-based safety compliance solution designed to monitor and analyze helmet usage through image and live camera inputs.  
Built using **React + TypeScript**, it integrates seamlessly with **Taskade's database** and **automation workflows** to ensure real-time detection, risk assessment, and reporting.
<p align="center">
  <a href="https://vikas-yadav-6696.github.io/Helmet-Detection-System/">
    <img src="https://img.shields.io/badge/View%20Live%20Website-Visit-blue?style=for-the-badge&logo=github" alt="View Live Website">
  </a>
</p>


---

## 📦 Project Overview

### 🧠 Features
- 🖼️ **Image Upload Detection** – Upload images for AI-based helmet detection.
- 🎥 **Live Camera Detection** – Detect helmets in real-time using the webcam.
- 🗄️ **Detection Database** – Store, filter, and analyze detection data.
- 📊 **Analytics Dashboard** – View statistics, confidence scores, and risk trends.
- ⚡ **Automation Workflows** – AI-driven alert system and daily safety reports.
- 🔐 **Security** – Encrypted endpoints and database validation.

---

## 🧩 System Architecture

```text
React App Interface
├── Image Upload
├── Live Camera Detection
├── Detection Results
├── Analytics Dashboard
│
├── API Integration
│   ├── Taskade Project Database
│   ├── Safety Alert Webhook
│   └── Daily Report Workflow
│
└── Automation
    ├── Risk Assessment (Critical, High, Medium, Low)
    └── AI-Powered Safety Alerts
```

---

## 🧠 React Components

### 1️⃣ `src/App.tsx`
```tsx
import React from 'react';
import HelmetDetectionApp from './components/HelmetDetectionApp';

function App() {
  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <HelmetDetectionApp />
    </div>
  );
}

export default App;
```

### 2️⃣ `src/components/HelmetDetectionApp.tsx`
```tsx
import React, { useState } from 'react';
import ImageUpload from './ImageUpload';
import VideoStream from './VideoStream';
import DetectionResults from './DetectionResults';
import Statistics from './Statistics';

export default function HelmetDetectionApp() {
  const [activeTab, setActiveTab] = useState('upload');

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">🛡️ Helmet Detection System</h1>

      <div className="flex gap-4 mb-4">
        <button onClick={() => setActiveTab('upload')}>Image Upload</button>
        <button onClick={() => setActiveTab('live')}>Live Detection</button>
        <button onClick={() => setActiveTab('results')}>Detection Results</button>
        <button onClick={() => setActiveTab('stats')}>Statistics</button>
      </div>

      {activeTab === 'upload' && <ImageUpload />}
      {activeTab === 'live' && <VideoStream />}
      {activeTab === 'results' && <DetectionResults />}
      {activeTab === 'stats' && <Statistics />}
    </div>
  );
}
```

### 3️⃣ `src/components/ImageUpload.tsx`
```tsx
import React, { useState } from 'react';

export default function ImageUpload() {
  const [image, setImage] = useState<File | null>(null);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) setImage(e.target.files[0]);
  };

  return (
    <div className="border border-gray-700 p-4 rounded-lg">
      <h2 className="text-xl mb-3">🖼️ Image Upload Detection</h2>
      <input type="file" accept="image/*" onChange={handleImageUpload} />
      {image && <p className="mt-2 text-green-400">Image ready for detection: {image.name}</p>}
    </div>
  );
}
```

### 4️⃣ `src/components/VideoStream.tsx`
```tsx
import React, { useRef, useState } from 'react';

export default function VideoStream() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [active, setActive] = useState(false);

  const toggleStream = async () => {
    if (active) {
      const stream = videoRef.current?.srcObject as MediaStream;
      stream?.getTracks().forEach(track => track.stop());
      setActive(false);
    } else {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      if (videoRef.current) videoRef.current.srcObject = stream;
      setActive(true);
    }
  };

  return (
    <div className="border border-gray-700 p-4 rounded-lg">
      <h2 className="text-xl mb-3">🎥 Live Camera Detection</h2>
      <button onClick={toggleStream} className="mb-3 bg-blue-600 px-4 py-2 rounded">
        {active ? 'Stop Detection' : 'Start Detection'}
      </button>
      <video ref={videoRef} autoPlay muted className="w-full border rounded" />
    </div>
  );
}
```

### 5️⃣ `src/components/DetectionResults.tsx`
```tsx
import React from 'react';

export default function DetectionResults() {
  return (
    <div className="border border-gray-700 p-4 rounded-lg">
      <h2 className="text-xl mb-3">📋 Detection Results</h2>
      <p>Displays all detections, alerts, and risk levels from the Taskade database.</p>
    </div>
  );
}
```

### 6️⃣ `src/components/Statistics.tsx`
```tsx
import React from 'react';

export default function Statistics() {
  return (
    <div className="border border-gray-700 p-4 rounded-lg">
      <h2 className="text-xl mb-3">📊 Safety Analytics</h2>
      <p>View compliance metrics, confidence distribution, and trend analysis.</p>
    </div>
  );
}
```

---

## ⚙️ Backend & API Integration

### 🧾 Database Project (Taskade)
**Project ID:** `pArVAbb3LzUmJxxr`  
**Custom Fields:**
- Detection Status (helmet-detected | no-helmet | uncertain)
- Confidence Score
- People Count
- Location
- Camera ID
- Alert Sent
- Risk Level

### ⚡ Webhook (Safety Alert System)
**Endpoint:**  
`/api/taskade/webhooks/01K4Q7YYZZJEMJKBP57Y7X5766/run`

**Sample Payload:**
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

**Risk Assessment Logic:**
| Level | Condition |
|--------|------------|
| Critical | No helmet + confidence ≥ 80% |
| High | No helmet + multiple people |
| Medium | No helmet (single person) |
| Low | Helmet detected |

---

## 🧮 Daily Safety Report Workflow

**Trigger:** 8:00 AM (America/New_York)  
**Actions:**
1. Fetch detection history from Taskade project  
2. Generate AI-powered compliance summary  
3. Create daily task in Taskade database  
4. Notify safety officers with risk metrics  

---

## 🚀 Getting Started

### Prerequisites
- Node.js v18+
- Browser with camera access
- Taskade API access

### Installation
```bash
npm install
npm run dev
```

### Environment Configuration
```env
TASKADE_PROJECT_ID=pArVAbb3LzUmJxxr
TASKADE_WEBHOOK_ID=01K4Q7YYZZJEMJKBP57Y7X5766
TASKADE_DAILY_REPORT_ID=01K4Q84EN4841HR2WRD2T4XTWX
```

---

## 📈 Analytics Dashboard
- Real-time safety compliance metrics  
- Confidence score visualization  
- Hourly & daily detection trends  
- Risk-level categorization  

---

## 🧰 Technology Stack
| Category | Tools |
|-----------|--------|
| Frontend | React 18, TypeScript, Tailwind CSS |
| UI | Radix UI, Lucide Icons |
| API | Fetch API, Axios |
| Database | Taskade Projects |
| Automation | Taskade Workflows |
| AI | Taskade AI Actions |

---

## 📝 License
This project is part of the **Taskade Ecosystem**.  
Use is subject to the Taskade Developer Terms.

---
## 🔔 Automation & Webhooks
POST /api/taskade/webhooks/01K4Q7YYZZJEMJKBP57Y7X5766/run
Payload example:
```json
{ "detectionId": "16956348570", "status": "no-helmet", "confidence": 0.87, "peopleCount": 2, "location": "Site B", "cameraId": "CAM-102" }
```
---
## 🔐 Security & Risk Levels
| Risk | Description |
|------|-------------|
| 🟥 Critical | No helmet, multiple people, high confidence |
| 🟧 High | No helmet, confidence > 80% |
| 🟨 Medium | Helmet uncertain |
| 🟩 Low | Helmet detected |



## 💬 Support
For issues or questions:  
- Check [Taskade Docs](https://help.taskade.com/)  
- Review automation logs  
- Verify API connection  
- Contact Taskade support  
License: MIT © 2025  
Support: [Open GitHub Issue](https://github.com/Vikas-Yadav-6696/helmet-detection-system/issues)
---



## 🙏 Special Thanks

A huge **thank you to [Taskade](https://www.taskade.com/)** for providing the powerful platform and API infrastructure that made this **Helmet Detection System** possible.  

Your tools for **project management, database integration, AI workflows, and automation** have been invaluable in building a **real-time, AI-powered safety compliance solution**.  

We are grateful for the support, documentation, and flexibility that Taskade offers, enabling developers to **create smarter, safer, and more efficient applications**.  

**Thank you for empowering innovation! ❤️**

---

**Built by [Vikas Yadav](https://github.com/Vikas-Yadav-6696) 
<p align="center">
  <a href="https://vikas-yadav-6696.github.io/Helmet-Detection-System/">
    <img src="https://img.shields.io/badge/View%20Live%20Website-Visit-orange?style=plastic&logo=github" alt="View Live Website">
  </a>
</p>


