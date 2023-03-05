import { Link } from "react-router-dom";
import { RiDashboardFill } from "react-icons/ri";

const Sidebar = () => {
  return (
    <section className="sidebar">
      <h5>POS Monitoring</h5>
      <Link>
        <RiDashboardFill />
        <h4>Dashboard</h4>
      </Link>
      <div>
        <Link></Link>
      </div>
    </section>
  );
};

export default Sidebar;
