import { Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { useSelector } from "react-redux";

const AdminRoute = ({ children }) => {
    const isLoggedIn = useAuth();
    const { user } = useSelector((state) => state?.auth);

    if (!isLoggedIn) {
        return <Navigate to="/login" replace />;
    }

    if(user?.role !== "ADMIN") {
        return <Navigate to="/" replace />;
    }

    return children;
};

export default AdminRoute;
