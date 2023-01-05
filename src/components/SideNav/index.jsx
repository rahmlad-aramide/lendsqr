import React from 'react'
import './index.scss'
import briefcase from '../../assets/icons/briefcase.svg'
import arrDown from '../../assets/icons/down-arrow.svg'
import dashboard from '../../assets/icons/home.svg'
import usersIcon from '../../assets/icons/customers/users.svg'
import decisionModel from '../../assets/icons/customers/decision-model.svg'
import guarantor from '../../assets/icons/customers/guarantor.svg'
import karma from '../../assets/icons/customers/karma.svg'
import loanRequest from '../../assets/icons/customers/loan-request.svg'
import loan from '../../assets/icons/customers/loan.svg'
import saving from '../../assets/icons/customers/savings.svg'
import whitelist from '../../assets/icons/customers/whitelist.svg'
import organization from '../../assets/icons/briefcase.svg'
import loanProduct from '../../assets/icons/businesses/loan-product.svg'
import savingsProduct from '../../assets/icons/businesses/savings-product.svg'
import feesCharges from '../../assets/icons/businesses/fees-charges.svg'
import transaction from '../../assets/icons/businesses/transactions.svg'
import services from '../../assets/icons/businesses/services.svg'
import servicesAccount from '../../assets/icons/businesses/services-account.svg'
import settlement from '../../assets/icons/businesses/settlement.svg'
import report from '../../assets/icons/businesses/report.svg'
import preferences from '../../assets/icons/settings/preferences.svg'
import feesPricing from '../../assets/icons/settings/fees-pricing.svg'
import auditLog from '../../assets/icons/settings/audit-log.svg'


const index = () => {
  const customersData = [
    {
      icon: usersIcon,
      name: 'Users'
    },
    {
      icon: guarantor,
      name: 'Guarantor'
    },
    {
      icon: loan,
      name: 'Loans'
    },
    {
      icon: decisionModel,
      name: 'Decision Models'
    },
    {
      icon: saving,
      name: 'Savings'
    },
    {
      icon: loanRequest,
      name: 'Loan Requests'
    },
    {
      icon: whitelist,
      name: 'Whitelist'
    },
    {
      icon: karma,
      name: 'Karma'
    }
  ]
  const businessesData = [
    {
      name: 'Organization',
      icon: organization
    },
    {
      name: 'Loan Products',
      icon: loanProduct
    },
    {
      name: 'Savings Products',
      icon: savingsProduct
    },
    {
      name: 'Fees and Charges',
      icon: feesCharges
    },
    {
      name: 'Transactions',
      icon: transaction
    },
    {
      name: 'Services',
      icon: services
    },
    {
      name: 'Services Account',
      icon: servicesAccount
    },
    {
      name: 'Settlements',
      icon: settlement
    },
    {
      name: 'Reports',
      icon: report
    }
  ]
  const settingsData = [
    {
      name: 'Preferences',
      icon: preferences
    },
    {
      name: 'Fees and Pricing',
      icon: feesPricing
    },
    {
      name: 'Audit Logs',
      icon: auditLog
    }
  ]
  return (
    <div className='sidenav'>
      <div className='flex sidenav-link active'>
        <img src={briefcase} alt="Briefcase" />
        <div className='sidenav-link-name'>Switch Organization</div>
        <img className='arrow-down' src={arrDown} alt="Arrow Down" />
      </div>
      <ul>
        <li className='flex sidenav-link'>
          <img src={dashboard} alt="Briefcase" />
          <div className='sidenav-link-name'>Dashboard</div>
        </li>
        <div className='sidenav-heading'>CUSTOMERS</div>
        {customersData.map((data, index)=>(
          <li key={index} className={data.name==='Users' ? `active flex sidenav-link` : `flex sidenav-link` }>
            <img src={data.icon} alt={data.name} />
            <div className='sidenav-link-name'>{data.name}</div>
          </li>
          ))}
        <div className='sidenav-heading'>BUSINESSES</div>
        {businessesData.map((data, index)=>(
          <li key={index} className={`flex sidenav-link`}>
            <img src={data.icon} alt={data.name} />
            <div className='sidenav-link-name'>{data.name}</div>
          </li>
          ))}
        <div className='sidenav-heading'>SETTINGS</div>
        {settingsData.map((data, index)=>(
          <li key={index} className={`flex sidenav-link`}>
            <img src={data.icon} alt={data.name} />
            <div className='sidenav-link-name'>{data.name}</div>
          </li>
          ))}
      </ul>
    </div>
  )
}

export default index