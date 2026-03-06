import React from 'react';
import { Smartphone, Cpu, Database, Code } from 'lucide-react';

import objectDetectionImg from '../assets/object-detection.png';
import quickBillImg from '../assets/QuickBill.png';
import GrownFund from '../assets/GrownFund.png';
import QuickHire from '../assets/QuickHire.png';
import quickBitesImg from '../assets/quickbites.png';
import BVS from '../assets/BVS.jpg';

export const projects = [
  {
    id: "growfund-app",
    title: "GrowFund App",
    description: "Secure investment platform with Gmail OTP verification and real-time portfolio tracking.",
    longDescription: "GrowFund is a comprehensive investment tracking platform designed to give users real-time insights into their portfolios. Built with security in mind, it features Gmail OTP verification. The application leverages a robust Flutter frontend and a Laravel backend API, seamlessly integrated with Firebase for real-time capabilities.",
    tags: ["Flutter", "Laravel", "REST API", "Firebase"],
    image: GrownFund,
    screenshots: [
      "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=600&h=1200&fit=crop",
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=1200&fit=crop",
      "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=600&h=1200&fit=crop"
    ],
    githubLink: "https://github.com/MohitLengure/growfund-app",
    liveLink: "/apk/growfund.apk",
    icon: <Smartphone className="h-5 w-5 text-primary-500" />
  },
  {
    id: "quickhire-recruiter",
    title: "QuickHire Recruiter",
    description: "Recruiter dashboard with advanced candidate filtering and analytics.",
    longDescription: "QuickHire Recruiter streamlines the hiring process by providing recruitment professionals with a powerful dashboard. It features advanced candidate filtering, intuitive analytics, and seamless state management. The app is crafted with Flutter and Dart, ensuring a native-like experience on all devices.",
    tags: ["Flutter", "Dart", "Laravel", "State Mgmt"],
    image: QuickHire,
    screenshots: [
      "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=600&h=1200&fit=crop",
      "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&h=1200&fit=crop",
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=1200&fit=crop"
    ],
    githubLink: "https://github.com/MohitLengure/quickhire-recruiter",
    liveLink: "/apk/quickhire-recruiter.apk",
    icon: <Cpu className="h-5 w-5 text-secondary-500" />
  },
  {
    id: "quickbill-app",
    title: "QuickBill App",
    description: "POS solution with inventory management and thermal printing support.",
    longDescription: "QuickBill is a versatile Point of Sale (POS) application tailored for small to medium businesses. It includes detailed inventory management features and local SQLite data storage for offline capabilities. A standout feature is its seamless integration with thermal printers for instant receipt generation.",
    tags: ["Flutter", "Laravel", "Printing", "SQLite"],
    image: quickBillImg,
    screenshots: [
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=1200&fit=crop",
      "https://images.unsplash.com/photo-1556740758-90de374c12ad?w=600&h=1200&fit=crop",
      "https://images.unsplash.com/photo-1556741533-6e4a6213b1e3?w=600&h=1200&fit=crop"
    ],
    githubLink: "https://github.com/MohitLengure/quickbill-app",
    liveLink: "/apk/quickbill.apk",
    icon: <Database className="h-5 w-5 text-accent-teal" />
  },
  {
    id: "realtime-object-detection",
    title: "Realtime Object Detection",
    description: "Android app utilizing ML Kit for live object recognition.",
    longDescription: "This Android application harnesses the power of Google's ML Kit to perform real-time object detection through the device's camera. Built with Kotlin and CameraX, it offers highly performant, live bounding box overlays and object classification directly on the mobile device.",
    tags: ["ML Kit", "Android", "Kotlin", "CameraX"],
    image: objectDetectionImg,
    screenshots: [
      "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=600&h=1200&fit=crop",
      "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=1200&fit=crop",
      "https://images.unsplash.com/photo-1607734834519-d8576ae60ea6?w=600&h=1200&fit=crop"
    ],
    githubLink: "https://github.com/MohitLengure/realtime-object-detection",
    liveLink: "/apk/realtime-object-detection.apk",
    icon: <Code className="h-5 w-5 text-accent-rose" />
  },
  {
    id: "bvs-app",
    title: "BVS App",
    description: "Lead management with real-time GPS tracking and analytics.",
    longDescription: "BVS App is an enterprise-grade lead management tool that integrates real-time GPS tracking and background services. It allows field agents to log leads interactively while providing managers with accurate location analytics. The UI is built entirely in Flutter for a smooth cross-platform experience.",
    tags: ["Flutter", "GPS", "Background Services"],
    image: BVS,
    screenshots: [
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=1200&fit=crop",
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=1200&fit=crop",
      "https://images.unsplash.com/photo-1535223289827-42f1e9919769?w=600&h=1200&fit=crop"
    ],
    githubLink: "https://github.com/MohitLengure/bvs-app",
    liveLink: "/apk/bvs.apk",
    icon: <Smartphone className="h-5 w-5 text-primary-500" />
  },
  {
    id: "quickbites-food",
    title: "QuickBites Food",
    description: "Food delivery platform with real-time order tracking.",
    longDescription: "QuickBites Food is a feature-rich, native Android food delivery app adhering to MVVM architectural guidelines. It integrates seamlessly with Firebase for backend services, providing robust real-time order tracking, push notifications, and user authentication.",
    tags: ["Android", "Kotlin", "Firebase", "MVVM"],
    image: quickBitesImg,
    screenshots: [
      "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&h=1200&fit=crop",
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&h=1200&fit=crop",
      "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=600&h=1200&fit=crop"
    ],
    githubLink: "https://github.com/MohitLengure/quickbites-food-app",
    liveLink: "#",
    icon: <Code className="h-5 w-5 text-secondary-500" />
  }
];
