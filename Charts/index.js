const ctx = document.getElementById('monthlyChart').getContext('2d');
const data = {
  labels: ['Contact', 'Qualify', 'Proposal', 'Negotiation'],
  datasets: [{
    data: [1, 4, 3, 3], // The data values (matching the ones from your image)
    backgroundColor: ['#3EB0A0', '#D551A8 ', '#AD76E1', '#498EEA'], // Colors for each section
    // hoverBackgroundColor: ['#36a2eb', '#ffcd56', '#ff6384', '#4bc0c0'],
    // borderColor: '#fff', 
    // borderWidth: 2
  }]
};

const options = {
  cutout: '80%', // Creates the hole in the center for doughnut
  plugins: {
    legend: { display: false }, // Hides the legend
  }
};

const myDoughnutChart = new Chart(ctx, {
  type: 'doughnut',
  data: data,
  options: options
});
const engagementCtx = document.getElementById('engagementChart').getContext('2d');
    const engagementData = {
      labels: ['Total','Won','Contact','Qualify','Proposal','Lost'],
      datasets: [{
        data: [4,4,4,3,2,5],
        backgroundColor: [
          '#009D19','#344BFD','#C084FC','#D14FA5','#FF0000','#F68D2B'
        ],
        borderColor: '#fff',
        borderWidth: 2
      }]
    };

    const engagementOptions = {
      cutout: '75%',
      plugins: {
        legend: {
          display: false,
        //   position: 'right'
        }
      }
    };

    const engagementChart = new Chart(engagementCtx, {
      type: 'doughnut',
      data: engagementData,
      options: engagementOptions
    });


    const piectx = document.getElementById('salesPieChart').getContext('2d');

    // Data for the pie chart
    const piedata = {
      labels: ['Referance','Cold Call','Facebook Ads','Instagram','linkdine','Email','Others'],
      datasets: [{
        data: [27 ,22,13,25,18,27,36], // Values for each section
        backgroundColor: [
         
          '#F4A79D',  //pich for linkdin
          '#FF0000',//red email  
           ' #344BFD',//blue cold call 
         '#009D19',//green facebook 
         '#7C1CF5',//purple others 
           '#FFD200',//yellow inst
          
        '#F68D2B',//orange for ref

        ],
        borderColor: '#fff', // White border between sections
        borderWidth: 2
      }]
    };

    // Chart options
    const pieoptions = {
      plugins: {
        legend: {
          display: false, // Show the legend
          position: 'right' // Position the legend at the right
        },
        tooltip: {
          callbacks: {
            label: function(tooltipItem) {
              return tooltipItem.label + ': ' + tooltipItem.raw;
            }
          }
        }
      }
    };

    // Create the pie chart
    const salesPieChart = new Chart(piectx, {
      type: 'pie', // Type of chart
      data: piedata,
      options: pieoptions
    });