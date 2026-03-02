import { Bell, Shield, User } from "lucide-react";
import TitleSection from "../components/TitleSection";
import { useState } from "react";
import Profile from "./components/Profile";
import Notification from "./components/Notification";
import Security from "./components/Security";

const Settings = () => {
    const [activeTab, setActiveTab] = useState('profile');
    console.log(activeTab);
    return (
        <div className="">
            <TitleSection
                title='Settings'
                description='Manage your account preferences and configurations'
            />
            <div className="bg-[#1C448033]/20 max-w-110 py-2 flex items-center gap-4 mt-6 overflow-x-auto no-scrollbar ">
                <button onClick={() => setActiveTab('profile')} className={`flex items-center gap-0.5 text-lg ${activeTab === 'profile' ? 'bg-[#4473BA] text-[#E9F6FF] px-2 py-1 rounded-sm' : 'text-[#64748B] px-2 py-1'}`}> <User size={20} className="-mt-2" /> Profile</button>
                <button onClick={() => setActiveTab('notification')} className={`flex items-center gap-0.5 text-lg ${activeTab === 'notification' ? 'bg-[#4473BA] text-[#E9F6FF] px-2 py-1 rounded-sm' : 'text-[#64748B] px-2 py-1'}`}> <Bell size={20} className="" /> Notification</button>
                <button onClick={() => setActiveTab('security')} className={`flex items-center gap-0.5 text-lg ${activeTab === 'security' ? 'bg-[#4473BA] text-[#E9F6FF] px-2 py-1 rounded-sm' : 'text-[#64748B] px-2 py-1'}`}> <Shield size={20} className="" /> Security</button>
            </div>
            <div>
                {
                    activeTab==='profile' && <Profile />
                }
                {
                    activeTab==='notification' && <Notification />
                }
                {
                    activeTab==='security' && <Security />
                }
            </div>
        </div>
    );
};

export default Settings;