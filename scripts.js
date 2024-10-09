// Initialize the charts using Chart.js
const ctx1 = document.getElementById('chart-1').getContext('2d');
const ctx2 = document.getElementById('chart-2').getContext('2d');

// Chart for widget 1
const chart1 = new Chart(ctx1, {
  type: 'line',
  data: {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [{
      label: 'Sales',
      data: [30, 20, 50, 40, 60, 70],
      backgroundColor: 'rgba(75, 192, 192, 0.2)',
      borderColor: 'rgba(75, 192, 192, 1)',
      borderWidth: 2
    }]
  },
  options: {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});

// Chart for widget 2
const chart2 = new Chart(ctx2, {
  type: 'bar',
  data: {
    labels: ['Product A', 'Product B', 'Product C'],
    datasets: [{
      label: 'Quantity Sold',
      data: [120, 90, 140],
      backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
      borderColor: ['#FF6384', '#36A2EB', '#FFCE56'],
      borderWidth: 2
    }]
  },
  options: {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});

// Dragging functionality for the widgets
const widgets = document.querySelectorAll('.widget');

widgets.forEach(widget => {
  widget.addEventListener('mousedown', (e) => {
    const rect = widget.getBoundingClientRect();
    const offsetX = e.clientX - rect.left;
    const offsetY = e.clientY - rect.top;

    function moveAt(mouseEvent) {
      widget.style.position = 'absolute';
      widget.style.left = `${mouseEvent.clientX - offsetX}px`;
      widget.style.top = `${mouseEvent.clientY - offsetY}px`;
    }

    document.addEventListener('mousemove', moveAt);

    document.addEventListener('mouseup', () => {
      document.removeEventListener('mousemove', moveAt);
    });
  });
});
