export const prepareChartData = (shipments) => {
    const originPortData = shipments.reduce((acc, booking) => {
      const port = booking.recipt;
      acc[port] = acc[port] ? acc[port] + 1 : 1;
      return acc;
    }, {});
  
    const originPortChartData = {
      labels: Object.keys(originPortData),
      values: Object.values(originPortData),
    };
  
    const destinationPortData = shipments.reduce((acc, booking) => {
      const port = booking.discharge;
      acc[port] = acc[port] ? acc[port] + 1 : 1;
      return acc;
    }, {});
  
    const destinationPortChartData = {
      labels: Object.keys(destinationPortData),
      values: Object.values(destinationPortData),
    };
  
    const carrierData = shipments.reduce((acc, booking) => {
      const carrier = booking.carrier;
      acc[carrier] = acc[carrier] ? acc[carrier] + 1 : 1;
      return acc;
    }, {});
  
    const carrierChartData = {
      labels: Object.keys(carrierData),
      values: Object.values(carrierData),
    };
  
    const consigneeOrShipperData = shipments.reduce((acc, booking) => {
      const consignee = booking.consignee;
      acc[consignee] = acc[consignee] ? acc[consignee] + 1 : 1;
      return acc;
    }, {});
  
    const consigneeOrShipperChartData = {
      labels: Object.keys(consigneeOrShipperData),
      values: Object.values(consigneeOrShipperData),
    };
  
    const milestonesData = shipments.reduce((acc, booking) => {
      const milestone = booking.milestone;
      acc[milestone] = acc[milestone] ? acc[milestone] + 1 : 1;
      return acc;
    }, {});
  
    const milestonesChartData = {
      labels: Object.keys(milestonesData),
      values: Object.values(milestonesData),
    };
  
    return {
      originPortChartData,
      destinationPortChartData,
      carrierChartData,
      consigneeOrShipperChartData,
      milestonesChartData,
    };
  };
  