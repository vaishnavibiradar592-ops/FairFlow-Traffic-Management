export const authorities = [
  {
    id: "A",
    name: "Authority A",
    load: 62,
    status: "Moderate"
  },
  {
    id: "B",
    name: "Authority B",
    load: 71,
    status: "Moderate"
  },
  {
    id: "C",
    name: "Authority C",
    load: 94,
    status: "Critical"
  }
];


export const junctions = [
  {
    id: 1,
    name: "Junction 1",
    load: 45,
    lat: 21.1458,
    lng: 79.0882
  },

  {
    id: 2,
    name: "Junction 2",
    load: 62,
    lat: 21.1500,
    lng: 79.1000
  },

  {
    id: 3,
    name: "Junction 3",
    load: 91,
    lat: 21.1350,
    lng: 79.1000
  },

  {
    id: 4,
    name: "Junction 4",
    load: 76,
    lat: 21.1400,
    lng: 79.1100
  },

  {
    id: 5,
    name: "Junction 5",
    load: 55,
    lat: 21.1550,
    lng: 79.1050
  },

  {
    id: 6,
    name: "Junction 6",
    load: 87,
    lat: 21.1320,
    lng: 79.1050
  }
];


export const roads = [
  {
    id: 1,
    name: "Road A",
    from: [21.1458, 79.0882],
    to: [21.1500, 79.1000],
    load: 45
  },

  {
    id: 2,
    name: "Road B",
    from: [21.1500, 79.1000],
    to: [21.1350, 79.1000],
    load: 91
  },

  {
    id: 3,
    name: "Road C",
    from: [21.1350, 79.1000],
    to: [21.1400, 79.1100],
    load: 76
  },

  {
    id: 4,
    name: "Road D",
    from: [21.1400, 79.1100],
    to: [21.1550, 79.1050],
    load: 55
  },

  {
    id: 5,
    name: "Road E",
    from: [21.1550, 79.1050],
    to: [21.1458, 79.0882],
    load: 45
  },

  {
    id: 6,
    name: "Road F",
    from: [21.1500, 79.1000],
    to: [21.1550, 79.1050],
    load: 62
  },

  {
    id: 7,
    name: "Road G",
    from: [21.1350, 79.1000],
    to: [21.1320, 79.1050],
    load: 87
  },

  {
    id: 8,
    name: "Road H",
    from: [21.1320, 79.1050],
    to: [21.1458, 79.0882],
    load: 50
  }
];


export const congestionData = [
  {
    time: "9 AM",
    congestion: 62,
    volume: 8200
  },

  {
    time: "10 AM",
    congestion: 78,
    volume: 10400
  },

  {
    time: "11 AM",
    congestion: 91,
    volume: 12450
  },

  {
    time: "12 PM",
    congestion: 72,
    volume: 9800
  },

  {
    time: "4 PM",
    congestion: 68,
    volume: 9100
  },

  {
    time: "5 PM",
    congestion: 94,
    volume: 13800
  },

  {
    time: "6 PM",
    congestion: 88,
    volume: 12900
  },

  {
    time: "7 PM",
    congestion: 65,
    volume: 8500
  }
];


export const ambulanceRoute = [
  [21.1458, 79.0882],
  [21.1500, 79.0950],
  [21.1500, 79.1000],
  [21.1400, 79.1100],
  [21.1320, 79.1050]
];