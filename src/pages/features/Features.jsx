import { images } from "../../assets/image";
import HeadingTitle from "../../components/shared/HeadingTitle";
import FeaturesContent from "./components/FeaturesContent";

const Features = () => {
    return (
        <div className="selection:bg-blue-500/15" style={{
            background: 'radial-gradient(circle at 20% 30%, #1a2332 0%, #0a0c10 100%)'
        }}>
            <div
                className="min-h-screen w-full text-white relative overflow-hidden">
                <div className="absolute -right-100 inset-0 opacity-10 bg-image z-50 -rotate-20 bg-center lg:bg-right bg-cover lg:bg-contain pointer-events-none bg-fixed"></div>
                <div className="max-w-7xl mx-auto px-4 pb-20 pt-24 sm:pt-32">
                    <HeadingTitle
                        title='Features of Our Platform'
                        description='Discover the powerful capabilities of our movement monitoring and reporting software designed to steamilne your workflow and deliver accurate insights.'
                        maxWidth='max-w-[740px]'
                        position=''
                        text='text-left'
                    />
                    {/* 1st features */}
                    <div className="pt-13 flex flex-col lg:flex-row justify-center items-center gap-10">
                        <div className="w-full lg:w-1/2">
                            <img className="w-full rounded-lg overflow-hidden" src={images.featuresOne} alt="automated-analysis" />
                        </div>
                        <FeaturesContent
                            title='Automated Data Analysis & Comparison'
                            descriptionOne='Effortlessly analyze movement data by automatically comparing baseline and monitoring stages. Our platform streamlines the process, allowing for quick, accurate comparisons without manual effort. It generates precise deviation reports that highlight critical changes and trends, ensuring you stay ahead of potential issues.'
                            descriptionTwo='Leverage time-series analysis, anomaly detection, and visual summaries to gain deeper insights into your data. The system helps identify anomalies early, enabling proactive action before risks arise. Clear charts and graphs make complex data easy to understand, while historical tracking offers a comprehensive view of trends over time.'
                            descriptionThree='Support faster, data-driven decisions with clear comparisons, historical tracking, and actionable performance indicators. By continuously monitoring key metrics, you can optimize operations, mitigate risks, and ensure long-term success with confidence.'
                        />
                    </div>
                </div>
            </div>
            <div className="relative z-10 max-w-7xl mx-auto px-4">
                {/* 2nd features  */}
                <div className="flex flex-col-reverse lg:flex-row justify-center items-center gap-10">
                    <FeaturesContent
                        title='Comprehensive 3D Movement Tracking'
                        descriptionOne='Monitor positional changes across the East, North, and Elevation axes in full 3D, providing a comprehensive view of spatial movements. Our platform offers interactive, real-time 3D models and graphs that allow you to visualize movement data with high accuracy, making it easier to interpret and understand.'
                        descriptionTwo='With features that let you rotate, zoom, and explore spatial movements from any angle, you can gain deeper insights into the data, ensuring clearer interpretation of complex patterns. Track displacement patterns over time and instantly identify anomalies, trends, and structural behavior to stay ahead of potential issues.'
                        descriptionThree='Enhance your situational awareness with intuitive, easy-to-understand visuals that transform intricate data into clear, actionable insights. This approach empowers you to make informed decisions faster and optimize project outcomes by detecting potential risks early.'
                    />
                    <div className="w-full lg:w-1/2">
                        <img className="w-full rounded-lg overflow-hidden" src={images.featuresTwo} alt="automated-analysis" />
                    </div>
                </div>
                <div className="pt-16 lg:pt-36 flex flex-col lg:flex-row justify-center items-start gap-10">
                    <div className="w-full lg:w-1/2">
                        <img className="w-full rounded-lg overflow-hidden" src={images.featuresThree} alt="automated-analysis" />
                    </div>
                    <FeaturesContent
                        title='Detailed PDF Report Generation'
                        descriptionOne='Generate comprehensive PDF reports with all your movement data, graphs, and analysis, ensuring that all key information is compiled in a professional, accessible format. Our platform makes it simple to download, share, and archive reports, enabling easy access and collaboration.'
                        descriptionTwo='Automatically include charts, tables, deviation summaries, and key insights in each report, ensuring that every critical detail is presented in a clear and well-organized manner. Customize the layout, time ranges, and data views to match the specific needs of your project or stakeholders, providing flexibility in report presentation.'
                        descriptionThree='With the ability to create tailored reports, you can ensure consistent, presentation-ready documentation for audits, reviews, and decision-making. This streamlined approach guarantees that all reports are ready for professional use, whether for internal analysis or external presentations.'
                    />
                </div>
                <div className="pt-16 lg:pt-36 flex flex-col-reverse lg:flex-row justify-center items-start gap-10">
                    <FeaturesContent
                        title='Bulk Data Import & CSV Upload'
                        descriptionOne='Easily bulk import baseline survey data by uploading CSV files, streamlining the initial data setup process. The platform allows you to quickly and securely import XYZ displacement values (E, N, Z) without hassle, saving you time on data entry.'
                        descriptionTwo='Support for large datasets ensures that even extensive information can be processed efficiently, while automated validation checks for accuracy and consistency, minimizing the risk of errors. The system automatically maps imported data to the corresponding monitoring points, removing the need for manual intervention and ensuring seamless integration.'
                        descriptionThree='Reduce setup time and eliminate data-entry errors with a fast, reliable, and user-friendly data import process, empowering you to get up and running quickly with complete confidence in the integrity of your data.'
                    />
                    <div className="w-full lg:w-1/2">
                        <img className="w-full rounded-lg overflow-hidden" src={images.featuresFour} alt="automated-analysis" />
                    </div>
                </div>
                <div className="pt-8 md:pt-16 lg:pt-36">
                    <HeadingTitle
                        title='Ready to get started?'
                        description='Request a demo today and experience the power of our Movement Monitoring & Reporting Platform.'
                        maxWidth='max-w-173.75'
                        position='mx-auto'
                        text='text-center'
                    />
                    <div className="pt-10 lg:pt-16 flex flex-col sm:flex-row gap-4 sm:justify-center">
                        <button className="bg-[#1A3155]/80 text-white backdrop-blur-md 
                            px-6 py-3 rounded-md font-semibold 
                            border border-white/20 
                            hover:scale-105 transition-all duration-300 cursor-pointer">
                            Start Monitoring
                        </button>
                        <button className="bg-[#B7D8FF]/90 text-[#1A3155] 
                            px-6 py-3 rounded-md font-bold 
                            hover:scale-105 transition-all duration-300 cursor-pointer">
                            Contact Us
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Features;