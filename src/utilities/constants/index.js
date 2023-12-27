import {Dimensions} from 'react-native';
import {colors} from '../colors';

const listData = [
  {
    id: '1',
    name: 'John Smith ',
    title: 'Manager',
    leadStatus: 'Working',
    account: 'Valero Energy',
    source: 'Website',
    phone: '(210) 345-2000',
    email: 'johnsmith@gmail.com',
    rating: 5,
    probabilty: '10%',
    region: 'North',
    customer: 'Jordan',
    requester: 'Jordan',
    priority: 'High',
    kam: 'John Smith',
    lob: 'Valero Energy',
    followUpDate: 'May 08, 2022',
    details: '',
  },
  {
    id: '2',
    name: 'Maria Gardner',
    title: 'Manager',
    leadStatus: 'Nurturing',
    account: 'Meta Platforms',
    source: 'Website',
    phone: '(210) 345-2000',
    email: 'gardner@gmail.com',
    rating: 4,
    probabilty: '5%',
    region: 'South',
    customer: 'Jordan',
    requester: 'Jordan',
    priority: 'High',
    kam: 'John Smith',
    lob: 'Valero Energy',
    followUpDate: 'May 08, 2022',
    details: '',
  },
  {
    id: '3',
    name: 'David Adelson',
    title: 'Manager',
    leadStatus: 'New',
    account: 'Bank of America',
    source: 'Website',
    phone: '(210) 065-2150',
    email: 'david@gmail.com',
    rating: 5,
    probabilty: '7%',
    region: 'Central',
    customer: 'Jordan',
    requester: 'Jordan',
    priority: 'High',
    kam: 'John Smith',
    lob: 'Valero Energy',
    followUpDate: 'May 08, 2022',
    details: '',
  },

  {
    id: '4',
    name: 'John Steele',
    title: 'Accountant',
    leadStatus: 'Converted',
    account: 'Synergy',
    source: 'Website',
    phone: '(210) 065-2150',
    email: 'johnsteele@gmail.com',
    rating: 3.5,
    probabilty: '8%',
    region: 'North',
    customer: 'Jordan',
    requester: 'Jordan',
    priority: 'High',
    kam: 'John Smith',
    lob: 'Valero Energy',
    followUpDate: 'May 08, 2022',
    details: '',
  },
];

const profile_uri =
  'https://www.shareicon.net/data/512x512/2017/01/06/868320_people_512x512.png';
const listOfBusiness = [
  {name: 'Wateen Telecom Limited', id: 1, createdAt: '12 May, 2022'},
  {name: 'Waten Energy Solutions', id: 2, createdAt: '12 June, 2022'},
  {name: 'Wateen Solutions', id: 3, createdAt: '12 July, 2022'},
  {name: 'Wateen IT Services', id: 4, createdAt: '12 May, 2022'},
];
const funnel_data = [
  {
    label: 'Qualification',
    value: 575000,
    color: colors.bl4,
    amount: '575K',
  },
  {
    label: 'Analaysis',
    value: 324000,
    color: colors.bl3,
    amount: '324K',
  },
  {
    label: 'Negotiation',
    value: 410000,
    color: colors.bl5,
    amount: '410K',
  },
  {
    label: 'Close Won',
    value: 989000,
    color: colors.bl2,
    amount: '989K',
  },
];
const line_chart_data = {
  labels: ['North', 'South', 'Central'],

  datasets: [
    {
      data: [5643000, 7185300, 4859000],
    },
  ],
};

const pie_data = [
  {id: 0, value: 97, color: colors.b1, text: '79%', badgText: 'T-1'},
  {id: 1, value: 25, color: colors.bl4, text: '20%', badgText: 'T-2'},
  {id: 2, value: 1, color: colors.bl2, text: '1%', badgText: 'T-3'},
];
const pie_data_solarSysType = [
  {value: 97, color: colors.b1, text: '79%', badgText: 'T-1'},
  {value: 25, color: colors.bl4, text: '20%', badgText: 'T-2'},
  {value: 1, color: colors.bl2, text: '1%', badgText: 'T-3'},
];
const pie_data_winChancStage = [
  {value: 750000000, color: colors.b1, text: '26%'},
  {value: 450000000, color: colors.bl4, text: '16%'},
  {value: 140000000, color: colors.bl2, text: '5%'},
  {value: 635000000, color: colors.bl3, text: '22%'},
  {value: 726000000, color: colors.bl5, text: '25%'},
  {value: 165000000, color: colors.g1, text: '6%'},
  {value: 165000000, color: colors.g1, text: '6%'},
];
const pie_data_oppCountLOB = [
  {value: 32, color: colors.b1, text: '54%', badgText: 'G-B'},
  {value: 2, color: colors.bl4, text: '2%', badgText: 'G-A'},
  {value: 6, color: colors.bl2, text: '5%', badgText: 'G-B'},
  {value: 10, color: colors.bl3, text: '39%', badgText: 'G-C'},
];
const pie_data_sourcWise = [
  {value: 9, color: colors.b1, text: '60%'},
  {value: 1, color: colors.bl4, text: '7%'},
  {value: 1, color: colors.bl2, text: '7%'},
  {value: 2, color: colors.bl3, text: '26%'},
];
const pie_data_LOBWise = [
  {value: 12, color: colors.b1, text: '80%', badgText: 'G-D'},
  {value: 1, color: colors.bl4, text: '7%', badgText: 'G-C'},
  {value: 1, color: colors.bl2, text: '7%', badgText: 'G-B'},
  {value: 1, color: colors.bl3, text: '7%', badgText: 'G-A'},
];
const scrWidth = Dimensions.get('screen').width;
const scrHeight = Dimensions.get('screen').height;
const chartConfig = {
  backgroundColor: '#e26a00',
  backgroundGradientFrom: '#fb8c00',
  backgroundGradientTo: '#ffa726',
  color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
  labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
};

const lineChartConfig = {
  backgroundColor: colors.b1,
  backgroundGradientFrom: colors.b1,
  backgroundGradientTo: colors.b1,
  color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
  labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
  propsForDots: {
    r: '6',
    strokeWidth: '2',
    stroke: colors.b1,
  },
  decimalPlaces: 0,
};
const barConfig = {
  backgroundColor: colors.o1,
  backgroundGradientFrom: colors.o2,
  backgroundGradientTo: colors.o3,
  color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
  labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
  decimalPlaces: 0,
  barPercentage: 0.3,
};
const teams = [
  {name: 'Software Team', organization: 'Software', createdAt: '12 May, 2022'},
  {name: 'IT Team', organization: 'Software', createdAt: '12 May, 2022'},
  {name: 'HR Team', organization: 'Software', createdAt: '12 May, 2022'},
];
const networkText = 'Check Internet Connectivity!';

const bar_data = [
  {
    stacks: [
      {value: 1420, color: colors.bl5},
      {value: 567, color: colors.bl3, marginBottom: 1},
    ],
    label: '2018',
    labelTextStyle: {color: colors.drakBlack},
  },
  {
    stacks: [
      {value: 1721, color: colors.bl5, marginBottom: 1},
      {value: 823, color: colors.bl3, marginBottom: 1},
    ],
    label: '2019',
    labelTextStyle: {color: colors.drakBlack},
  },
  {
    stacks: [
      {value: 1221, color: colors.bl5, marginBottom: 1},
      {value: 741, color: colors.bl3, marginBottom: 1},
    ],
    label: '2020',
    labelTextStyle: {color: colors.drakBlack},
    yAxisTextStyle: {color: colors.drakBlack},
  },
  {
    stacks: [
      {value: 890, color: colors.bl5, marginBottom: 1},
      {value: 480, color: colors.bl3, marginBottom: 1},
    ],
    label: '2021',
    labelTextStyle: {color: colors.drakBlack},
    yAxisTextStyle: {color: colors.drakBlack},
  },
  {
    stacks: [
      {value: 1739, color: colors.bl5, marginBottom: 1},
      {value: 509, color: colors.bl3, marginBottom: 1},
    ],
    label: '2022',
    labelTextStyle: {color: colors.drakBlack},
    yAxisTextStyle: {color: colors.drakBlack},
  },
];

const bar_data_LOBWise = [
  {
    stacks: [
      {value: 600, color: colors.bl3},
      {value: 1877, color: colors.bl5, marginBottom: 1},
    ],

    label: 'G-A',
    labelTextStyle: {color: colors.drakBlack},
  },
  {
    stacks: [{value: 100, color: colors.bl5, marginBottom: 1}],
    label: 'G-B',
    labelTextStyle: {color: colors.drakBlack},
  },
  {
    stacks: [{value: 2557, color: colors.bl5, marginBottom: 1}],
    label: 'G-C',
    labelTextStyle: {color: colors.drakBlack},
    yAxisTextStyle: {color: colors.drakBlack},
  },
  {
    stacks: [{value: 2000, color: colors.bl5, marginBottom: 1}],
    label: 'G-D',
    labelTextStyle: {color: colors.drakBlack},
    yAxisTextStyle: {color: colors.drakBlack},
  },
];

const bar_data_regionWise = [
  {
    value: 33,
    frontColor: colors.bl5,

    marginBottom: 1,
    label: 'North',
    labelTextStyle: {color: colors.drakBlack},
  },
  {
    value: 54,
    frontColor: colors.bl5,
    marginBottom: 1,
    label: 'South',
    labelTextStyle: {color: colors.drakBlack},
  },
  {
    value: 36,
    frontColor: colors.bl5,
    marginBottom: 1,
    label: 'Central',
    labelTextStyle: {color: colors.drakBlack},
    yAxisTextStyle: {color: colors.drakBlack},
  },
];
const bar_data_winProb = [
  {
    value: 69,
    frontColor: colors.bl5,

    marginBottom: 1,
    label: 'Lost',
    labelTextStyle: {color: colors.drakBlack},
  },
  {
    value: 469,
    frontColor: colors.bl5,
    marginBottom: 1,
    label: 'Won',
    labelTextStyle: {color: colors.drakBlack},
  },
  {
    value: 489,
    frontColor: colors.bl5,
    marginBottom: 1,
    label: 'Dead',
    labelTextStyle: {color: colors.drakBlack},
    yAxisTextStyle: {color: colors.drakBlack},
  },
  {
    value: 564,
    frontColor: colors.bl5,
    marginBottom: 1,
    label: 'HWP',
    labelTextStyle: {color: colors.drakBlack},
    yAxisTextStyle: {color: colors.drakBlack},
  },
  {
    value: 1755,
    frontColor: colors.bl5,
    marginBottom: 1,
    label: 'ECW',
    labelTextStyle: {color: colors.drakBlack},
    yAxisTextStyle: {color: colors.drakBlack},
  },
  {
    value: 4118,
    frontColor: colors.bl5,
    marginBottom: 1,
    label: 'CWP',
    labelTextStyle: {color: colors.drakBlack},
    yAxisTextStyle: {color: colors.drakBlack},
  },
];

const bar_data_totalBooking = [
  {
    value: 19,
    frontColor: colors.bl5,

    marginBottom: 1,
    label: 'Q1FY22-23',
    labelTextStyle: {color: colors.drakBlack},
  },
  {
    value: 450,
    frontColor: colors.bl3,
    marginBottom: 1,
    label: 'Q2FY22-23',
    labelTextStyle: {color: colors.drakBlack},
  },
];
const bar_data_taach = [
  {
    value: 1000,
    frontColor: colors.bl5,

    marginBottom: 1,
    label: 'Target',
    labelTextStyle: {color: colors.drakBlack},
  },
  {
    value: 476,
    frontColor: colors.bl3,
    marginBottom: 1,
    label: 'Achieved',
    labelTextStyle: {color: colors.drakBlack},
  },
];
const bar_data_talob = [
  {
    value: 300,
    label: 'G-A',
    spacing: 2,
    labelWidth: 300,
    labelTextStyle: {color: 'gray'},
    frontColor: colors.bl5,
  },
  {value: 7, frontColor: colors.bl3},
  {
    value: 100,
    label: 'G-B',
    spacing: 2,
    labelWidth: 300,
    labelTextStyle: {color: 'gray'},
    frontColor: colors.bl5,
  },
  {value: 5, frontColor: colors.bl3},
  {
    value: 500,
    label: 'G-C',
    spacing: 2,
    labelWidth: 300,
    labelTextStyle: {color: 'gray'},
    frontColor: colors.bl5,
  },
  {value: 490, frontColor: colors.bl3},
  {
    value: 100,
    label: 'G-D',
    spacing: 2,
    labelWidth: 300,
    labelTextStyle: {color: 'gray'},
    frontColor: colors.bl5,
  },
  {value: 5, frontColor: colors.bl3},
];

const sort_oppo = [
  {id: '1', currentStage: 'Planning', selected: false, tick: false},
  {id: '2', currentStage: 'Analysis', selected: false, tick: false},
  {id: '3', currentStage: 'Design', selected: false, tick: false},
  {id: '4', currentStage: 'Development', selected: false, tick: false},
  {id: '5', currentStage: 'Testing', selected: false, tick: false},
  {id: '6', currentStage: 'Monitoring', selected: false, tick: false},
  {id: '7', currentStage: 'Closing', selected: false, tick: false},
];
const account_menu_list = [{id: 0, title: 'Edit'}];
const account_side_list = [
  {id: 0, title: 'Leads'},
  {id: 1, title: 'Opportunities'},
];

const menu_list = [{id: '0', title: 'Edit'}];

const meter_list = [
  {
    labelColor: '#ff2900',
    activeBarColor: '#ff2900',
  },
  {
    labelColor: '#ff2900',
    activeBarColor: '#ff2900',
  },
  {
    labelColor: '#ff2900',
    activeBarColor: '#ff2900',
  },

  {
    labelColor: '#ff2900',
    activeBarColor: '#ff2900',
  },

  {
    labelColor: '#f4ab44',
    activeBarColor: '#f4ab44',
  },

  {
    labelColor: '#f2cf1f',
    activeBarColor: '#f2cf1f',
  },
  {
    labelColor: '#00ff6b',
    activeBarColor: '#00ff6b',
  },
];

const oppStage = {
  opportunityStatus: [
    {
      id: 0,
      // name: 'Qualification',
      // label: 'Qualification',\
      name: 'Prospect',
      label: 'Prospect',
      isCompleted: false,
      isCurrentStage: false,
    },
    {
      id: 1,
      // name: 'Analysis',
      // label: 'Analysis',
      name: 'Solution Designing',
      label: 'Solution Designing',
      isCompleted: false,
      isCurrentStage: false,
    },
    {
      id: 2,
      // name: 'Proposal',
      // label: 'Proposal',
      name: 'Initial / Budgetary Quote / On hold',
      label: 'Budgetary Quote',
      isCompleted: false,
      isCurrentStage: false,
    },
    {
      id: 3,
      // name: 'Negotiation',
      // label: 'Negotiation',
      name: 'Final Quote',
      label: 'Final Quote',
      isCompleted: false,
      isCurrentStage: false,
    },
    {
      id: 4,
      // name: 'Closed',
      // label: 'Closed',
      name: 'LOI / Order Confirmed',
      label: 'LOI / Order Confirmed',
      isCompleted: false,
      isCurrentStage: false,
    },
    {
      id: 5,
      name: 'VP Approval Pending',
      label: 'VP Approval Pending',
      isCompleted: false,
      isCurrentStage: false,
    },
  ],

  leadStatus: [
    {
      id: 0,
      // name: 'Unqualified',
      // label: 'Unqualified',
      name: 'New',
      label: 'New',
      isCompleted: false,
      isCurrentStage: false,
    },
    {
      id: 1,
      // name: 'New',
      // label: 'New',
      name: 'Ongoing',
      label: 'Ongoing',
      isCompleted: false,
      isCurrentStage: false,
    },
    // {
    //   id: 2,
    //   // name: 'Working',
    //   // label: 'Working',
    //   name: 'Disqualified',
    //   label: 'Disqualified',
    //   isCompleted: false,
    //   isCurrentStage: false,
    // },
    // {
    //   id: 3,
    //   // name: 'Nurturing',
    //   // label: 'Nurturing',
    //   name: 'Lost',
    //   label: 'Lost',
    //   isCompleted: false,
    //   isCurrentStage: false,
    // },
    // {
    //   id: 4,
    //   // name: 'Converted',
    //   // label: 'Converted',
    //   name: 'Dead',
    //   label: 'Dead',
    //   isCompleted: false,
    //   isCurrentStage: false,
    // },
  ],
};

const pie_desc = [
  {
    id: 0,
    title: '1. QLV (Qualified Leads Volume',
  },
  {
    id: 1,
    title: '2. UnQLV (Unqualified Leads Volume',
  },
  {
    id: 2,
    title: '3. QLV (Qualified Leads Volume',
  },
  {
    id: 3,
    title: '4. QLV (Qualified Leads Volume',
  },
];

const accountDetails = [
  {
    name: 'Valero Energy',
    pocName: 'John Smith',
    phone: '(210) 345-2000',
    website: 'www.valero.com',
    region: 'North',
    keyAccount: '',
    industry: 'Energy',
    defaultKam: 'Joseph stalin',
    description:
      'Requires reliable, affordable and sustainable energy solution',
  },
  {
    name: 'Meta Platforms',
    pocName: 'Maria Gardner',
    phone: '(210) 165-1060',
    website: 'investor.fb.com',
    region: 'South',
    keyAccount: '',
    industry: 'Technology',
    defaultKam: 'John Elan',
    description:
      'Requires reliable, affordable and sustainable energy solution',
  },
  {
    name: 'Bank of America',
    pocName: 'David Adelson',
    phone: '(210) 908-2180',
    website: 'www.bankofamerica.com',
    region: 'Central',
    keyAccount: '',
    industry: 'Financials',
    defaultKam: 'Kresley Cole',
    description: 'Effective business management with IT programs',
  },
  {
    name: 'RazorPay',
    pocName: 'John Steele',
    phone: '(210) 393-2098',
    website: 'https://razorpay.com',
    region: 'North',
    keyAccount: '',
    industry: 'IT',
    defaultKam: 'Kresley Cole',
    description: 'Effective business management with IT programs',
  },
];

const opportunityDetails = [
  {
    name: 'Solar Installation',
    accountName: 'Valero Energy',
    startDate: 'May 08, 2022',
    closeDate: 'June 15, 2023',
    amount: '1000000',
    currentStage: 'Qualification',
    isFavourite: false,
    stageStatus: '10%',
    use: 'Existing Account',
    probability: '10%',
    salesKam: '',
    lob: 'Solar Energy',
    customer: 'Smith',
    winChance: '',
    vp: '',
    otc: '',
    mrc: '',
    noOfLinks: '',
    contractMonths: '',
    tcv: '',
    currency: 'PKR',
    closingDate: '',
    description: '',
  },
  {
    name: 'Account Setup',
    accountName: 'Bank of America',
    startDate: 'June 01, 2021',
    closeDate: 'Sept 03, 2022',
    amount: '5000000',
    currentStage: 'Closed',
    isFavourite: true,
  },
  {
    name: 'Plateform Intergation',
    accountName: 'Meta Platforms',
    startDate: 'Jan 20, 2021',
    closeDate: 'Oct 22, 2021',
    amount: '6000000',
    currentStage: 'Analysis',
    isFavourite: false,
  },
  {
    name: 'Account Setup',
    accountName: 'RazorPay',
    startDate: 'Aug 19, 2022',
    closeDate: 'Nov 25, 2022',
    amount: '700000',
    currentStage: 'Negotiation',
    isFavourite: false,
  },
  {
    name: 'System Integration',
    accountName: 'GTM',
    startDate: 'Aug 19, 2022',
    closeDate: 'Nov 25, 2022',
    amount: '1400000',
    currentStage: 'Closed Won',
    isFavourite: false,
  },
];

//ADD ACCOUNT DROPDOWNS
const accRegion = [
  {id: 1, label: 'North'},

  {id: 2, label: 'South'},

  {
    id: 3,
    label: 'Central',
  },
];

const keyAcc = [
  {id: 1, label: 'Yes'},

  {id: 2, label: 'No'},
];

const accIndustry = [
  {id: 1, label: 'Energy'},
  {id: 2, label: 'Technology'},
  {id: 3, label: 'Financials'},
  {id: 4, label: 'IT'},
];

//ADD LEADS DROPDOWNS
const leadSource = [
  {id: 1, label: 'Website'},
  {id: 2, label: 'Seminar'},
  {id: 3, label: 'Social Media'},
  {id: 4, label: 'Newspaper'},
];

const leadCustomer = [{id: 1, label: 'Customer'}];
const leadLOB = [{id: 1, label: 'LOB'}];
const leadRequester = [{id: 1, label: 'Lead Requester'}];
const leadKAM = [{id: 1, label: 'Lead KAM'}];
const leadPriority = [
  {id: 1, label: 'High'},
  {id: 2, label: 'Low'},
];

//ADD OPP DROPDOWNS
const oppLOB = [{id: 1, label: 'LOB'}];
const oppCurrency = [
  {id: 1, label: 'PKR'},
  {id: 2, label: 'USD'},
];
const oppKAM = [{id: 1, label: 'KAM'}];
const oppVP = [{id: 1, label: 'VP'}];
const oppUse = [{id: 1, label: 'Use'}];
const oppStageStatus = [
  {id: '1', label: 'Qualification', selected: false, tick: false},
  {id: '2', label: 'Analysis', selected: false, tick: false},
  {id: '3', label: 'Proposal', selected: false, tick: false},
  {id: '4', label: 'Negotiation', selected: false, tick: false},
  {id: '5', label: 'Closed', selected: false, tick: false},
];

//All Filter Arrays

const sortOppAccName = [
  {
    id: 0,
    label: 'None',
    selected: false,
    tick: false,
  },
  {id: 1, label: 'Bank of America', selected: false, tick: false},
  {id: 2, label: 'Meta Platforms', selected: false, tick: false},
  {id: 3, label: 'Valero Energy', selected: false, tick: false},
  {id: 4, label: 'Snergy', selected: false, tick: false},
];
const sortOppStage = [
  {id: '0', label: 'None', selected: false, tick: false},
  {id: '1', label: 'Qualification', selected: false, tick: false},
  {id: '2', label: 'Analysis', selected: false, tick: false},
  {id: '3', label: 'Proposal', selected: false, tick: false},
  {id: '4', label: 'Negotiation', selected: false, tick: false},
  {id: '5', label: 'Closed', selected: false, tick: false},
];

const sortContAccName = [
  {
    id: 0,
    label: 'None',
    selected: false,
    tick: false,
  },
  {id: 1, label: 'Bank of America', selected: false, tick: false},
  {id: 2, label: 'Meta Platforms', selected: false, tick: false},
  {id: 3, label: 'Snergy', selected: false, tick: false},
  {id: 4, label: 'Valero Energy', selected: false, tick: false},
];

const sortAccIndustry = [
  {id: 0, label: 'None'},
  {id: 1, label: 'Energy'},
  {id: 2, label: 'Technology'},
  {id: 3, label: 'Financials'},
  {id: 4, label: 'IT'},
];

const sortLeadStatus = [
  {id: 0, label: 'None'},
  {id: 1, label: 'Converted'},

  {id: 2, label: 'Nurturing'},

  {id: 3, label: 'Working'},

  {id: 4, label: 'New'},

  {id: 5, label: 'Unqualified'},
];

const sortRegion = [
  {
    id: 0,
    label: 'None',
  },
  {id: 1, label: 'North'},

  {id: 2, label: 'South'},

  {
    id: 3,
    label: 'Central',
  },
];

//Chevron Menu List
const chevAccList = [
  {id: '0', title: 'All'},
  {id: '1', title: 'Recent'},
];
const chevOppList = [
  {id: '0', title: 'All'},
  {id: '1', title: 'Recent'},
  {id: '2', title: 'Favourite'},
  {id: '3', title: 'Top Open'},
  {id: '4', title: 'Top High'},
  {id: '5', title: 'For Approval'},
];
const chevContactList = [
  {id: '0', title: 'All'},
  {id: '1', title: 'Recent'},
];
const chevLeadList = [
  {id: '0', title: 'All'},
  {id: '1', title: 'Recent'},
  {id: '2', title: 'Favourite'},
];
const chevNotiList = [
  {id: '0', title: 'All'},
  {id: '1', title: 'Recent'},
];

//Sort Menu List
const sortList = [
  {id: '0', title: 'Sort By Ascending'},
  {id: '1', title: 'Sort By Descending'},
];

//Array for Head Home Details
const headHomDetList = [
  {
    id: 0,
    name: 'Leads',
  },
  {
    id: 1,
    name: 'Opportunities',
  },
  {
    id: 0,
    name: 'Revenue',
  },
];

// Notification Screen List
const notifi_list = [
  {
    id: '0',
    title: 'First Item',
    text: 'Mark the head',
  },
  {
    id: '1',
    title: 'Second Item',
    text: 'Mark the head',
  },
  {
    id: '2',
    title: 'Third Item',
    text: 'Mark the head',
  },
  {
    id: '3',
    title: 'Fourth Item',
    text: 'Mark the head',
  },
  {
    id: '4',
    title: 'Fifth Item',
    text: 'Mark the head',
  },
  {
    id: '5',
    title: 'Fifth Item',
    text: 'Mark the head',
  },
  {
    id: '6',
    title: 'Fifth Item',
    text: 'Mark the head',
  },
  {
    id: '7',
    title: 'Fifth Item',
    text: 'Mark the head',
  },
  {
    id: '8',
    title: 'Fifth Item',
    text: 'Mark the head',
  },
  {
    id: '9',
    title: 'Fifth Item',
    text: 'Mark the head',
  },
  {
    id: '10',
    title: 'Fifth Item',
    text: 'Mark the head',
  },
  {
    id: '11',
    title: 'Fifth Item',
    text: 'Mark the head',
  },
  {
    id: '12',
    title: 'Fifth Item',
    text: 'Mark the head',
  },
  {
    id: '13',
    title: 'Fifth Item',
    text: 'Mark the head',
  },
  {
    id: '14',
    title: 'Fifth Item',
    text: 'Mark the head',
  },
  {
    id: '15',
    title: 'Fifth Item',
    text: 'Mark the head',
  },
  {
    id: '16',
    title: 'Fifth Item',
    text: 'Mark the head',
  },
  {
    id: '17',
    title: 'Fifth Item',
    text: 'Mark the head',
  },
  {
    id: '18',
    title: 'Fifth Item',
    text: 'Mark the head',
  },
  {
    id: '19',
    title: 'Fifth Item',
    text: 'Mark the head',
  },
  {
    id: '20',
    title: 'Fifth Item',
    text: 'Mark the head',
  },
];

const sortBoxData = [
  {id: 0, title: 'Probability', isSelected: false},
  {id: 1, title: 'Amount', isSelected: false},
  {id: 2, title: 'Close Date', isSelected: false},
];

const pie_data_colors = [
  colors.b1,
  colors.bl4,
  colors.bl2,
  colors.bl3,
  colors.bl5,
  colors.bl6,
  colors.bl7,
  colors.bl8,
  colors.bl9,
  colors.bl10,
];

const bar_data_colors = [colors.bl5];

const funnel_data_colors = [
  colors.bl4,
  colors.bl3,
  colors.bl5,
  colors.bl2,
  colors.b1,
  colors.bl6,
  colors.bl7,
  colors.bl8,
  colors.bl9,
  colors.bl10,
];

export {
  profile_uri,
  listOfBusiness,
  // Charts
  funnel_data,
  line_chart_data,
  pie_data,
  pie_data_solarSysType,
  pie_data_oppCountLOB,
  pie_data_winChancStage,
  lineChartConfig,
  bar_data_winProb,
  bar_data,
  bar_data_regionWise,
  bar_data_LOBWise,
  pie_data_sourcWise,
  pie_data_LOBWise,
  bar_data_totalBooking,
  bar_data_talob,
  bar_data_taach,

  // Accounts
  scrHeight,
  scrWidth,
  chartConfig,
  listData,
  teams,
  sort_oppo,
  barConfig,
  account_menu_list,
  account_side_list,
  menu_list,
  networkText,
  meter_list,
  pie_desc,
  accountDetails,
  opportunityDetails,

  //add account dropdown
  accRegion,
  oppStage,
  keyAcc,
  accIndustry,

  //add lead dropdown
  leadSource,
  leadCustomer,
  leadRequester,
  leadLOB,
  leadKAM,
  leadPriority,

  //add opportunity dropdown
  oppUse,
  oppStageStatus,
  oppKAM,
  oppLOB,
  oppVP,
  oppCurrency,

  //Chevron Menu List
  chevAccList,
  chevOppList,
  chevLeadList,
  chevContactList,
  chevNotiList,

  //Filtering
  sortOppAccName,
  sortOppStage,
  sortContAccName,
  sortAccIndustry,
  sortRegion,
  sortLeadStatus,
  headHomDetList,

  //Notification
  notifi_list,

  // chart colors
  pie_data_colors,
  bar_data_colors,
  funnel_data_colors,
  //Sorting List
  sortList,

  //Filter Modal Sort Box Data
  sortBoxData,
};
