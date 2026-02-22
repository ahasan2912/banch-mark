import { Database, FileText, FileUp, LayoutGrid } from "lucide-react";
import workOne from '../../assets/images/work-1.png'
import workTwo from '../../assets/images/work-2.png'
import workThree from '../../assets/images/work-3.png'
import workFour from '../../assets/images/work-4.png'

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