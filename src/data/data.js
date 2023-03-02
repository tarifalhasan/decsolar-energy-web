export const navLinks = [
  {
    name: 'Home',
    slug: '/',
  },
  {
    name: 'About us',
    slug: 'about-us',
  },
  {
    name: 'Blog',
    slug: 'blog',
  },
  {
    name: 'White Paper',
    slug: 'white-paper',
  },
  {
    name: 'Help ',
    slug: 'help',
  },
];
import { HiHome } from 'react-icons/hi';
import {
  AiFillSetting,
  AiFillInteraction,
  AiFillAppstore,
} from 'react-icons/ai';
import { MdPayment } from 'react-icons/md';
// sideLinks
export const sideLinks = [
  {
    name: 'Staking',
    slug: '/staking',
    icon: <HiHome size={24} />,
  },
  {
    name: 'Projects',
    slug: '/projects',
    icon: <AiFillInteraction size={24} />,
  },
  {
    name: 'Buy/Sell',
    slug: '/buy/sell',
    icon: <AiFillAppstore size={24} />,
  },
  {
    name: 'Liquidity Pool ',
    slug: '/liquidity-pool',
    icon: <AiFillSetting size={24} />,
  },
  {
    name: 'Pay Bill',
    slug: '/pay-billing',
    icon: <MdPayment size={24} />,
  },
];

// StakingData
export const StakingData = [
  {
    title: 'P2P',
    StakingAPR: '15.9%',
    MaxSlashing: '30.00%',
    WalletBalance: '0',
    CooldownToUnstake: {
      totalStaked: 220,
      CooldownPeriod: '10d',
    },
    Claim: {
      totalClaimble: 10,
      cliamPerMonth: 20,
    },
  },
  {
    title: 'DEC',
    StakingAPR: '20.52%',
    MaxSlashing: '39.00%',
    WalletBalance: '0',
    CooldownToUnstake: {
      Staked: ' DEC',
      totalStaked: 200,
      CooldownPeriod: '10d',
    },
    Claim: {
      totalClaimble: 10,
      cliamPerMonth: 16,
    },
  },
];
// payBilling
import paybillImage from '@/../../public/img/pay-billing.svg';
export const payBilling = [
  {
    featureImage: paybillImage,
    billlingAddress: 'Hospital Of Baranquilla',
    address: 'Baranquilla, Colombia',
    TotalUsageKwh: 20000,
    Costper1Kwh: 0.17,
    billingMonth: 'July 2023',
  },
];
import product1 from '@/../../public/img/product1.svg';
import product2 from '@/../../public/img/product2.svg';
import product3 from '@/../../public/img/product3.svg';

import product4 from '@/../../public/img/product4.svg';

// Projects
export const projects = [
  {
    featureImage: product1,
    projectName: 'Hospital Of Baranquilla',
    slug: 'hospital-ofbaranquilla',
    location: 'Baranquilla, Colombia',
    projectCost: {
      dollar: '$500,000 ',
      twoP2: '1,000,000 P2P',
    },
    APR: '12.2%',
    Date: '28/09/23',
    Completed: 30.2,
    descripetion:
      'Optimize the effectiveness of our solar farms and enhance conditions for all stakeholders, we have decided to situate the University Of Cape Town, South Africa, which will result in increased radiation and improved security measures for the project.',
    services: [
      {
        name: 'Paneles',
        qualtity: '2.496',
      },
      {
        name: 'CO2 Avoided',
        qualtity: '23.987 ton',
      },
      {
        name: 'Trees Saved',
        qualtity: '344.118',
      },
      {
        name: 'Contract',
        qualtity: '30 Years',
      },
      {
        name: 'Energy Installed',
        qualtity: '1.380 KWP',
      },
      {
        name: '# of Investors',
        qualtity: '157',
      },
    ],
    CostOf1P2P: '.50 USD',
    NetProfit: 14.7,
    StartOfInstallation: '22/02/23',
    EstimatedStartOfOperation: '11/08/23',
    FirstEstimatedProfitability: '15/09/23',
    EstimateYourProfits: {
      NetProfit: 938613.18,
      BonusProfit: 0,
    },
    graph: {
      PreSaleDescount: '0.00%',
      contributed: '20%',
      TotalInvested: '$100,000',
      APR: '14.7%',
    },
  },
  {
    featureImage: product2,
    projectName: 'BTC Mining Texas',
    slug: 'btc-miningtexas',
    location: 'Houston, USA',
    projectCost: {
      dollar: '$500,000 ',
      twoP2: '1,000,000 P2P',
    },
    APR: '12.2%',
    Date: '28/12/23',
    Completed: 34.2,
    descripetion:
      'Optimize the effectiveness of our solar farms and enhance conditions for all stakeholders, we have decided to situate the University Of Cape Town, South Africa, which will result in increased radiation and improved security measures for the project.',
    services: [
      {
        name: 'Paneles',
        qualtity: '2.496',
      },
      {
        name: 'CO2 Avoided',
        qualtity: '23.987 ton',
      },
      {
        name: 'Trees Saved',
        qualtity: '344.118',
      },
      {
        name: 'Contract',
        qualtity: '30 Years',
      },
      {
        name: 'Energy Installed',
        qualtity: '1.380 KWP',
      },
      {
        name: '# of Investors',
        qualtity: '157',
      },
    ],
    CostOf1P2P: '.50 USD',
    NetProfit: 44.7,
    StartOfInstallation: '22/02/23',
    EstimatedStartOfOperation: '11/08/23',
    FirstEstimatedProfitability: '15/09/23',
    EstimateYourProfits: {
      NetProfit: 938613.18,
      BonusProfit: 0,
    },
    graph: {
      PreSaleDescount: '0.00%',
      contributed: '20%',
      TotalInvested: '$100,000',
      APR: '14.7%',
    },
  },
  {
    featureImage: product3,
    projectName: 'University of Cape Town',
    slug: 'university-of-cape-town',
    location: 'Cape Town, South Africa',
    projectCost: {
      dollar: '$500,000 ',
      twoP2: '1,000,000 P2P',
    },
    APR: '12.2%',
    Date: '28/09/23',
    Completed: 14.7,
    descripetion:
      'Optimize the effectiveness of our solar farms and enhance conditions for all stakeholders, we have decided to situate the University Of Cape Town, South Africa, which will result in increased radiation and improved security measures for the project.',
    services: [
      {
        name: 'Paneles',
        qualtity: '2.496',
      },
      {
        name: 'CO2 Avoided',
        qualtity: '23.987 ton',
      },
      {
        name: 'Trees Saved',
        qualtity: '344.118',
      },
      {
        name: 'Contract',
        qualtity: '30 Years',
      },
      {
        name: 'Energy Installed',
        qualtity: '1.380 KWP',
      },
      {
        name: '# of Investors',
        qualtity: '157',
      },
    ],
    CostOf1P2P: '.50 USD',
    NetProfit: 14.7,
    StartOfInstallation: '22/02/23',
    EstimatedStartOfOperation: '11/08/23',
    FirstEstimatedProfitability: '15/09/23',
    EstimateYourProfits: {
      NetProfit: 938613.18,
      BonusProfit: 0,
    },
    graph: {
      PreSaleDescount: '0.00%',
      contributed: '20%',
      TotalInvested: '$100,000',
      APR: '14.7%',
    },
  },
  {
    featureImage: product4,
    projectName: 'Silver Trail Middle School',
    slug: 'silver-trail-middle-school',

    location: 'Houston, USA',
    projectCost: {
      dollar: '$500,000 ',
      twoP2: '1,000,000 P2P',
    },
    APR: '12.2%',
    Date: '28/12/23',
    Completed: 34.2,
    descripetion:
      'Optimize the effectiveness of our solar farms and enhance conditions for all stakeholders, we have decided to situate the University Of Cape Town, South Africa, which will result in increased radiation and improved security measures for the project.',
    services: [
      {
        name: 'Paneles',
        qualtity: '2.496',
      },
      {
        name: 'CO2 Avoided',
        qualtity: '23.987 ton',
      },
      {
        name: 'Trees Saved',
        qualtity: '344.118',
      },
      {
        name: 'Contract',
        qualtity: '30 Years',
      },
      {
        name: 'Energy Installed',
        qualtity: '1.380 KWP',
      },
      {
        name: '# of Investors',
        qualtity: '157',
      },
    ],
    CostOf1P2P: '.50 USD',
    NetProfit: 60,
    StartOfInstallation: '22/02/23',
    EstimatedStartOfOperation: '11/08/23',
    FirstEstimatedProfitability: '15/09/23',
    EstimateYourProfits: {
      NetProfit: 938613.18,
      BonusProfit: 0,
    },
    graph: {
      PreSaleDescount: '0.00%',
      contributed: '20%',
      TotalInvested: '$100,000',
      APR: '14.7%',
    },
  },
];
// graph https://codesandbox.io/s/github/reactchartjs/react-chartjs-2/tree/master/sandboxes/bar/vertical?from-embed=&file=/App.tsx
