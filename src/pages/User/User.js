import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios';
import './index.scss'
import Layout from "../../components/Layout";
import ArrowBack from '../../assets/icons/arrow.svg'
import Avatar from '../../assets/icons/avatar.svg'
import FilledStar from '../../assets/icons/users/star-filled.svg'
import Star from '../../assets/icons/users/star.svg'
import preloader from "../../assets/preloader.gif";
// import { data } from './data';

const User = () => {
    const params = useParams();
    const {id} = params;
    const [user, setUser] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const url = `https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users/${id}`
        axios.get(url).then(res => {
            console.log(res.data)
          setUser(res.data);
          setLoading(false);
        })
    }, [id]);
    
    // const user = data;

  return (
    <Layout>
      <div className="user">
        <Link to="/dashboard">
          <div className="back">
            <img src={ArrowBack} alt="Back" />
            <span>Back to Users</span>
          </div>
        </Link>
        <div className="header flex-between">
          <div>
            <h1>User Details</h1>
          </div>
          <div className="flex">
            <button className="blacklist">
              Blacklist <span>User</span>
            </button>
            <button className="activate">
              Activate <span>User</span>
            </button>
          </div>
        </div>
        <div className="overview">
          {loading ? (
            <div className="preloader">
              <img src={preloader} alt="Loading..." />
            </div>
          ) : (
            <div className="overview-content">
              <div className="overview-content-head">
                <div className="overview-content-head-info flex">
                  <div className="dpix flex">
                    <img
                      src={!user?.profile?.avatar? user.profile.avatar : Avatar}
                      alt={`${user?.profile?.firstName} ${user?.profile?.lastName}`}
                    />
                  </div>
                  <div>
                    <div className='username'>
                      {user?.profile?.firstName} {user?.profile?.lastName}
                    </div>
                    <div className='ac-number'>{user?.accountNumber}</div>
                  </div>
                  <div className='line-right'></div>
                  <div className='user-tier'>
                    <div className='head'>User's Tier</div>
                    <div>
                      <img src={FilledStar} alt="#" />
                      <img src={Star} alt="#" />
                      <img src={Star} alt="#" />
                    </div>
                  </div>
                  <div className='line-right'></div>
                  <div className='ac-balance'>
                    <div className='balance'>
                      <s>N</s>
                      {user?.accountBalance}
                    </div>
                    <div className='details'>{user?.profile?.bvn}/Providus Bank</div>
                  </div>
                </div>
                <div className="overview-content-head-tabs">
                  <div className='active'>General Details</div>
                  <div>Documents</div>
                  <div>Bank Details</div>
                  <div>Loans</div>
                  <div>Savings</div>
                  <div>App and System</div>
                </div>
              </div>
              <div className="overview-content-body">
                <h2>
                  Personal Information
                </h2>
                <div className='details-grids'>
                  <div className='details-grids-grid'>
                    <div className='que'>FULL NAME</div>
                    <div className='ans'>{user?.profile?.firstName} {user?.profile?.lastName}</div>
                  </div>
                  <div className='details-grids-grid'>
                    <div className='que'>PHONE NUMBER</div>
                    <div className='ans'>{user?.profile?.phoneNumber}</div>
                  </div>
                  <div className='details-grids-grid'>
                    <div className='que'>EMAIL ADDRESS</div>
                    <div className='ans'>{user?.email}</div>
                  </div>
                  <div className='details-grids-grid'>
                    <div className='que'>BVN</div>
                    <div className='ans'>{user?.profile?.bvn}</div>
                  </div>
                  <div className='details-grids-grid'>
                    <div className='que'>GENDER</div>
                    <div className='ans'>{user?.profile?.gender}</div>
                  </div>
                  <div className='details-grids-grid'>
                    <div className='que'>MARITAL STATUS</div>
                    <div className='ans'>Single</div>
                  </div>
                  <div className='details-grids-grid'>
                    <div className='que'>CHILDREN</div>
                    <div className='ans'>None</div>
                  </div>
                  <div className='details-grids-grid'>
                    <div className='que'>TYPE OF RESIDENCE</div>
                    <div className='ans'>Parent's Apartment</div>
                  </div>
                </div>
                <div className='horizontal-line'></div>
                <h2>
                  Education and Employment
                </h2>
                <div className='details-grids'>
                  <div className='details-grids-grid'>
                    <div className='que'>LEVEL OF EDUCATION</div>
                    <div className='ans'>{user?.education?.level} {user?.profile?.lastName}</div>
                  </div>
                  <div className='details-grids-grid'>
                    <div className='que'>EMPLOYMENT STATUS</div>
                    <div className='ans'>{user?.education?.employmentStatus}</div>
                  </div>
                  <div className='details-grids-grid'>
                    <div className='que'>SECTOR OF EMPLOYMENT</div>
                    <div className='ans'>{user?.education?.sector}</div>
                  </div>
                  <div className='details-grids-grid'>
                    <div className='que'>DURATION OF EMPLOYMENT</div>
                    <div className='ans'>{user?.education?.duration}</div>
                  </div>
                  <div className='details-grids-grid'>
                    <div className='que'>OFFICE EMAIL</div>
                    <div className='ans'>{user?.education?.officeEmail}</div>
                  </div>
                  <div className='details-grids-grid'>
                    <div className='que'>MONTHLY INCOME</div>
                    <div className='ans'><s>N</s>{user.education.monthlyIncome[0]}- <s>N</s>{user.education.monthlyIncome[1]}</div>
                  </div>
                  <div className='details-grids-grid'>
                    <div className='que'>LOAN REPAYMENT</div>
                    <div className='ans'>{user?.education?.loanRepayment}</div>
                  </div>
                </div>
                <div className='horizontal-line'></div>
                <h2>Socials</h2>
                <div className='details-grids'>
                  <div className='details-grids-grid'>
                    <div className='que'>TWITTER</div>
                    <div className='ans'>{user?.socials?.twitter}</div>
                  </div>
                  <div className='details-grids-grid'>
                    <div className='que'>FACEBOOK</div>
                    <div className='ans'>{user?.socials?.facebook}</div>
                  </div>
                  <div className='details-grids-grid'>
                    <div className='que'>INSTAGRAM</div>
                    <div className='ans'>{user?.socials?.instagram}</div>
                  </div>
                </div>
                <div className='horizontal-line'></div>
                <h2>Guarantor</h2>
                <div className='details-grids'>
                  <div className='details-grids-grid'>
                    <div className='que'>FULL NAME</div>
                    <div className='ans'>{user?.guarantor?.firstName} {user?.guarantor?.lastName}</div>
                  </div>
                  <div className='details-grids-grid'>
                    <div className='que'>PHONE NUMBER</div>
                    <div className='ans'>{user?.guarantor?.phoneNumber}</div>
                  </div>
                  <div className='details-grids-grid'>
                    <div className='que'>ADDRESS</div>
                    <div className='ans'>{user?.guarantor?.address}</div>
                  </div>
                  <div className='details-grids-grid'>
                    <div className='que'>GENDER</div>
                    <div className='ans'>{user?.guarantor.gender}</div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
}

export default User