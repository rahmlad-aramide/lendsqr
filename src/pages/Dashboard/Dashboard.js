import React, { useEffect, useState } from "react";
import "./index.scss";
import axios from "axios";
import Layout from "../../components/Layout";
import filter from "../../assets/icons/users/filter.svg";
import dotsIcon from "../../assets/icons/users/dots.svg";
import usersIcon from "../../assets/icons/users/users.svg";
import activeUsers from "../../assets/icons/users/active.svg";
import loanUsers from "../../assets/icons/users/loan.svg";
import savingUsers from "../../assets/icons/users/savings.svg";
import arrowDown from "../../assets/icons/down-arrow.svg";
import rightArrow from "../../assets/icons/right-arrow.svg";
import leftArrow from "../../assets/icons/left-arrow.svg";
import view from "../../assets/icons/view.svg";
import blacklist from "../../assets/icons/blacklist.svg";
import activate from "../../assets/icons/activate.svg";
import preloader from "../../assets/preloader.gif";
import { Link } from "react-router-dom";
import { FaTimes } from 'react-icons/fa';
// import { data } from "./data";

const Dashboard = () => {
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
  const statusDataStyling = [
    {
      name: "Select",
      color: "#545F7D70",
      bg: "#545F7D70",
    },
    {
      name: "Active",
      color: "#39CD62",
      bg: "#39CD6270",
    },
    {
      name: "Inactive",
      color: "#545F7D",
      bg: "#545F7D70",
    },
    {
      name: "Pending",
      color: "#E9B200",
      bg: "#E9B20060",
    },
    {
      name: "Blacklisted",
      color: "#E4033B",
      bg: "#E4033B70",
    },
  ];

  const statusData = Array.from({ length: 100 }, (_, i) => ({ id: i, name: "Inactive" }));
  const PER_PAGE = 10;
  const [page, setPage] = useState(1);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [total, setTotal] = useState(null);
  const [filterForm, setFilterForm] = useState(false);
  const [activeDot, setActiveDot] = useState(null);
  // const [activeStatus, setActiveStatus] = useState(null);
  const [updateStatus, setUpdateStatus] = useState(statusData);
  const [organizationValue, setOrganizationValue] = useState("");
  const [usernameValue, setUsernameValue] = useState("");
  const [emailValue, setEmailValue] = useState("");
  const [dateValue, setDateValue] = useState("");
  const [numberValue, setNumberValue] = useState("");
  const [statusValue, setStatusValue] = useState("");
  // const [filterBy, setFilterBy] = useState({});

  
  const filterByObject = {}

  const showing = page * PER_PAGE;
  useEffect(() => {
    const skip = page * PER_PAGE - PER_PAGE;
    const url = 'https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users'
    axios.get(url).then(res => {
      const userData = res.data;
      setUsers(userData?.slice(skip, skip + PER_PAGE));
      setLoading(false);
      setTotal(userData.length);  
    })
    // const userData = data;
    // setUsers(userData?.slice(skip, skip + PER_PAGE));
    // setTimeout(() => {
    //   setLoading(false);
    // }, 2000);
    // setTotal(userData.length);
  }, [page, total]);
  let pages = Math.ceil(total / PER_PAGE);

  const modifyStatus = (id, newName) => {
    const newData = updateStatus.map(item => {
      if (item.id === id) {
        return { ...item, name: newName };
      }
      return item;
    });
    setUpdateStatus(newData);
  }
  const handleFilter = () => {
    setFilterForm(!filterForm);
  };
  const handleChange = (e) => {
    e.preventDefault();
    if(e.target.name ==='username'){
      setUsernameValue(e.target.value);
    } else if(e.target.name ==='email'){
      setEmailValue(e.target.value);
    } else if(e.target.name ==='phone'){
      setNumberValue(e.target.value);
    } else if(e.target.name ==='date'){
      setDateValue(e.target.value);
    } else if(e.target.name ==='organization'){
      setOrganizationValue(e.target.value);
    } else if(e.target.name ==='status'){
      setStatusValue(e.target.value);
    }
  }
  const handleSubmitFilter = (e) => {
    e.preventDefault();
      filterByObject['username'] = usernameValue;
      filterByObject['email'] = emailValue;
      filterByObject['phone'] = numberValue;
      filterByObject['organization'] = organizationValue;
      filterByObject['status'] = statusValue;
      filterByObject['date'] = dateValue

      console.log(filterByObject);
  }
  const handleResetFilter = (e) => {
    e.preventDefault();
    setDateValue("");
    setEmailValue("");
    setNumberValue("");
    setOrganizationValue("");
    setStatusValue("");
    setUsernameValue("");
  }
  const handleNext = () => {
    setLoading(true);
    setPage((prev) => prev + 1);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };
  const handlePrev = () => {
    setLoading(true);
    setPage((prev) => prev - 1);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };
  const handlePages = (value) => {
    setLoading(true);
    setPage(value);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };
  const handleDots = (id) => {
    setActiveDot(id)
  };
  // const handleStatus = (id, stat) => {
  //   // setActiveStatus(id)
  //   setUpdateStatus(stat)
  //   modifyData(id, stat)
  // }
 
  const dateFunc = (dataDate) => {
    const date = new Date(dataDate);
    const day = `${date.getDate()}`.padStart(2, 0);
    const month = date.getMonth() + 1;
    const year = `${date.getFullYear()}`;
    const hour = `${date.getHours()}`.padStart(2, 0);
    const min = `${date.getMinutes()}`.padStart(2, 0);

    let mon = "";
    switch (month) {
      case 1:
        mon = "Jan";
        break;
      case 2:
        mon = "Feb";
        break;
      case 3:
        mon = "Mar";
        break;
      case 4:
        mon = "Apr";
        break;
      case 5:
        mon = "May";
        break;
      case 6:
        mon = "Jun";
        break;
      case 7:
        mon = "Jul";
        break;
      case 8:
        mon = "Aug";
        break;
      case 9:
        mon = "Sept";
        break;
      case `01`:
        mon = "Jan";
        break;
      case "02":
        mon = "Feb";
        break;
      case "03":
        mon = "Mar";
        break;
      case "04":
        mon = "Apr";
        break;
      case "05":
        mon = "May";
        break;
      case "06":
        mon = "Jun";
        break;
      case "07":
        mon = "Jul";
        break;
      case "08":
        mon = "Aug";
        break;
      case "09":
        mon = "Sept";
        break;
      default:
        break;
    }
    return `${mon} ${day - 1}, ${year} ${hour > 12 ? hour - 12 : hour}:${min}${
      hour > 12 ? "PM" : "AM"
    }`;
  };

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
        <div className="table-div">
          <div className="table flex">
            {loading ? (
              <div className="preloader">
                <img src={preloader} alt="Loading..." />
              </div>
            ) : (
              <table className="table-table flex-col w-full">
                <thead>
                  <tr>
                    <th>
                      <div>
                        Organization
                        <button onClick={handleFilter} className="filter">
                          <img src={filter} alt="filter" />
                        </button>
                      </div>
                    </th>
                    <th>
                      <div>
                        Username
                        <button onClick={handleFilter} className="filter">
                          <img src={filter} alt="filter" />
                        </button>
                      </div>
                    </th>
                    <th>
                      <div>
                        Email
                        <button onClick={handleFilter} className="filter">
                          <img src={filter} alt="filter" />
                        </button>
                      </div>
                    </th>
                    <th>
                      <div>
                        Phone Number
                        <button onClick={handleFilter} className="filter">
                          <img src={filter} alt="filter" />
                        </button>
                      </div>
                    </th>
                    <th>
                      <div>
                        Date Joined
                        <button onClick={handleFilter} className="filter">
                          <img src={filter} alt="filter" />
                        </button>
                      </div>
                    </th>
                    <th>
                      <div>
                        Status
                        <button onClick={handleFilter} className="filter">
                          <img src={filter} alt="filter" />
                        </button>
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((user) => (
                    <tr key={user.id}>
                      <td className={user.id === "1" ? `first` : ``}>
                        <div>{user.orgName}</div>
                      </td>
                      <td className={user.id === "1" ? `first` : ``}>
                        <div>{user.userName}</div>
                      </td>
                      <td className={user.id === "1" ? `first` : ``}>
                        <div>{user.email}</div>
                      </td>
                      <td className={user.id === "1" ? `first` : ``}>
                        <div>{user.phoneNumber}</div>
                      </td>
                      <td className={user.id === "1" ? `first` : ``}>
                        <div>{dateFunc(user.createdAt)}</div>
                      </td>
                      <td
                        className={user.id === "1" ? `first status` : `status`}
                      >
                        <div
                          className={
                            `${user.id}` === "1" ? `first status ${updateStatus[user.id-1].name}` : `status ${updateStatus[user.id-1].name}`
                          }
                        >
                            {updateStatus[user.id-1].name}
                        </div>
                      </td>
                         
                      <td
                        className={
                          user.id === "1" ? `first td-dots` : `td-dots`
                        }
                      >
                        <button onClick={()=>handleDots(user.id)} className="dots">
                          <img src={dotsIcon} alt="dotsIcon" />
                        </button>
                        {activeDot === user.id ? (
                          <div key={user.id} className="td-dots-pop">
                            <div className="close-modal" onClick={()=>handleDots(null)}><FaTimes size={20} /></div>
                            <Link to={`/dashboard/${user.id}`}>
                              <button>
                                <img src={view} alt="View" />
                                View Details
                              </button>
                            </Link>
                            <button onClick={()=>modifyStatus(user.id-1, "Blacklisted")}>
                              <img src={blacklist} alt="Blacklist" />
                              Blacklist User
                            </button>
                            <button onClick={()=>modifyStatus(user.id-1, "Active")}>
                              <img src={activate} alt="Activate" />
                              Activate User
                            </button>
                          </div>
                        ): ""}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
            {filterForm && (
              <div className="popup">
                <form onSubmit={handleSubmitFilter}>
                  <label htmlFor="organization">Organization</label>
                  <div>
                    <select 
                      className="organization" 
                      name="organization"
                      value={organizationValue}
                      onChange={handleChange}
                      >
                      {users.map((user) => (
                        <option key={user.id}>{user.orgName}</option>
                      ))}
                    </select>
                  </div>
                  <label htmlFor="username">Username</label>
                  <div>
                    <input
                      type="text"
                      placeholder="User"
                      name="username"
                      id="username"
                      value={usernameValue}
                      onChange={handleChange}
                    />
                  </div>
                  <label htmlFor="email">Email</label>
                  <div>
                    <input
                      type="email"
                      placeholder="Email"
                      name="email"
                      id="email"
                      value={emailValue}
                      onChange={handleChange}
                    />
                  </div>
                  <label htmlFor="date">Date</label>
                  <div>
                    <input
                      type="date"
                      placeholder="Date"
                      name="date"
                      id="date"
                      value={dateValue}
                      onChange={handleChange}
                    />
                  </div>
                  <label htmlFor="phone">Phone Number</label>
                  <div>
                    <input
                      type="tel"
                      placeholder="Phone number"
                      name="phone"
                      id="phone"
                      value={numberValue}
                      onChange={handleChange}
                    />
                  </div>
                  <label htmlFor="status">Status</label>
                  <div>
                    <select 
                      className="organization" 
                      name="status"
                      value={statusValue}
                      onChange={handleChange}
                      >
                      {statusDataStyling.map((s) => (
                        <option
                          value={s.name==="Select"? "": s.name}
                          style={s.name === "Select" ? { color: s.color } : {}}
                        >
                          {s.name}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="flex"> 
                    <button onClick={handleResetFilter} className="btn-reset">Reset</button>
                    <button type="submit" className="btn-filter">Filter</button>
                  </div>
                </form>
              </div>
            )}
          </div>
        </div>
        <div className="flex-between pagination">
          <div className="pagination-showing">
            Showing{" "}
            <span className="pagination-showing-span">
              {showing} <img src={arrowDown} alt="Arrow down" />
            </span>{" "}
            out of {total}
          </div>
          <div className="pagination-pages">
            <button
              className={page <= 1 ? `less` : `less active`}
              disabled={page <= 1}
              onClick={handlePrev}
            >
              <img src={leftArrow} alt="Arrow down" />
            </button>
            <div>
            {Array.from({ length: pages }, (_, index) => index + 1).map(
              (value) => (
                <button
                  className={value === page ? `active` : ``}
                  onClick={() => handlePages(value)}
                >
                  {value}
                </button>
              )
            )}</div>
            <button
              className={page >= pages ? `greater` : `greater active`}
              disabled={page >= pages}
              onClick={handleNext}
            >
              <img src={rightArrow} alt="Arrow down" />
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
