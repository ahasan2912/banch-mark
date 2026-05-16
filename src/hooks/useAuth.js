import { useSelector } from "react-redux";
import Cookies from "js-cookie";

const useAuth = () => {
    const { user } = useSelector((state) => state.auth);
    const token = Cookies.get("accessToken");
    if (token && user) {
        return true;
    }
};

export default useAuth;
