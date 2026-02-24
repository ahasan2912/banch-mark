import { Database, FileText, FileUp, LayoutGrid } from "lucide-react";
import workOne from '../../assets/images/work-1.png';
import workTwo from '../../assets/images/work-2.png';
import workThree from '../../assets/images/work-3.png';
import workFour from '../../assets/images/work-4.png';
import guidanceOne from '../../assets/images/guidance-1.png';
import guidanceTwo from '../../assets/images/guidance-2.png';
import guidanceThree from '../../assets/images/guidance-3.png';
import guidanceFour from '../../assets/images/guidance-4.png';
import guidanceFive from '../../assets/images/guidance-5.png';
import guidanceSix from '../../assets/images/guidance-6.png';

export const steps = [
  {
    number: 1,
    title: "Create a project",
    description: "Define monitoring for your project and set specific parameters.",
    icon: LayoutGrid,
    image: workOne,
    isOffset: false
  },
  {
    number: 2,
    title: "Upload Baseline Data",
    description: "Upload your initial reading in CSV format to establish baseline values (E, N, Z) for fixed point.",
    icon: Database,
    image: workTwo,
    isOffset: true
  },
  {
    number: 3,
    title: "Submit Monitoring Stages",
    description: "Periodically upload new readings (e.g. weekly) for comparison against baseline data.",
    icon: FileUp,
    image: workThree,
    isOffset: false
  },
  {
    number: 4,
    title: "Generate Reports",
    description: "The platform compares new data with the baseline and generates detailed PDF reports.",
    icon: FileText,
    image: workFour,
    isOffset: true
  }
];

export const tools = [
  {
    title: "Upload Survey via CSV",
    description: "Upload your initial reading in CSV format to establish baseline values (E, N, Z) for fixed point.",
    image: guidanceOne,
    badgeText: "CSV"
  },
  {
    title: "Project Creation",
    description: "Learn how to create a new monitoring project from scratch.",
    image: guidanceTwo,
    badgeText: "ES"
  },
  {
    title: "Upload Baseline Data",
    description: "Prepare and upload baseline readings to establish initial data.",
    image: guidanceThree,
    badgeText: "CS"
  },
  {
    title: "Submit Monitoring Stages",
    description: "Submit new monitoring stages for analysis and reporting.",
    image: guidanceFour,
  },
  {
    title: "Generate Reports",
    description: "Generate comprehensive PDF reports of monitoring results.",
    image: guidanceFive,
  },
  {
    title: "Generate Reports",
    description: "Guidance on setting up reports and export monitor.",
    image: guidanceSix,
  }
];