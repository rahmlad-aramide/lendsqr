import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios';
import Layout from "../../components/Layout";
import ArrowBack from '../../assets/icons/arrow.svg'
import FilledStar from '../../assets/icons/users/star-filled.svg'
import Star from '../../assets/icons/users/star.svg'
// import { data } from './data';

const User = () => {
    const params = useParams();
    const {id} = params;
    const [user, setUser] = useState([]);
    
    useEffect(() => {
        const url = `https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users/${id}`
        axios.get(url).then(res => {
          const userData = res.data;
          setUser(userData);
        })
    }, [id]);
    
    // const userData = data;
    // setUser(userData);

  return (
    <Layout>
        <div className='user'>
            <Link to='/dashboard'>
                <div>
                    <img src={ArrowBack} alt="Back" />
                    Back to Users
                </div>
            </Link>
            <div>
                <div><h1>User Details</h1></div>
                <div>
                    <button>Blacklist User</button>
                    <button>Activate User</button>
                </div>
            </div>
            <div>
                {user.map((u)=>(
                    <div>
                        <div>
                            <div>
                                <img src={u.profile.avatar} alt={`${u.profile.firstName} ${u.profile.lastName}`} />
                            </div>
                            <div>
                                <div>{u.profile.firstName} {u.profile.lastName}</div>
                                <div>{u.accountNumber}</div>
                            </div>
                            <div>
                                <div>User's Tier</div>
                                <div>
                                    <img src={FilledStar} alt="#" />
                                    <img src={Star} alt="#" />
                                    <img src={Star} alt="#" />
                                </div>
                                <div>
                                    <div><s>N</s>{u.accountBalance}</div>
                                    <div>{u.profile.bvn}/Providus Bank</div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div>General Details</div>
                            <div>Documents</div>    
                            <div>Bank Details</div>
                            <div>Loans</div>
                            <div>Savings</div>
                            <div>App and System</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </Layout>
  )
}

export default User