import React from "react";
import "./index.scss";
import Layout from "../../components/Layout";
import usersIcon from "../../assets/icons/users/users.svg";
import activeUsers from "../../assets/icons/users/active.svg";
import loanUsers from "../../assets/icons/users/loan.svg";
import savingUsers from "../../assets/icons/users/savings.svg";

const index = () => {
  const gridData = [
    {
      icon: usersIcon,
      iconBg: "#DF18FF20",
      title: "Users",
      value: "2,450",
    },
    {
      icon: activeUsers,
      iconBg: "#5718FF20",
      title: "Active Users",
      value: "2,451",
    },
    {
      icon: loanUsers,
      iconBg: "#F55F4420",
      title: "Users with Loan",
      value: "2,452",
    },
    {
      icon: savingUsers,
      iconBg: "#FF336620",
      title: "Users with savings",
      value: "2,453",
    },
  ];
  return (
    <Layout>
      <div className="dashboard-content">
        <h1>Users</h1>
        <div className="users-grid">
          {gridData.map((data, index) => (
            <div key={index} className="users-grid-card flex-col flex-around">
              <div
                style={{ backgroundColor: data.iconBg }}
                className="users-grid-card-icon flex justify-center"
              >
                <img src={data.icon} alt="UserIcon" />
              </div>
              <div className="users-grid-card-title">{data.title}</div>
              <div className="users-grid-card-value">{data.value}</div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default index;
