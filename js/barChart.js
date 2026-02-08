
import { Chart } from 'https://cdn.jsdelivr.net/npm/chart.js@4.4.1/auto/+esm';



const ctx = document.getElementById('chart-result');
new Chart(ctx , {
    type: 'bar', 
    data: {
        labels: ['Basilar Tip','Anterior Communicating Arter', "Left Supraclinoid Internal Carotid Artery" , 'Right Supraclinoid Internal Carotid Artery' , 'Left Middle Cerebral Artery' ] ,
        datasets: [{
            label : 'Confidence (%)',
            data : [85,68, 45, 38 , 28],
            backgroundColor: [
                'rgba(255, 193, 7, 0.8)',
                'rgba(255, 152,0,0.8)',
                'rgba(76, 175, 80, 0.8)',   
                'rgba(76, 175, 80, 0.8)',
                'rgba(76, 175, 80, 0.8)'
            ],
            borderColor:[
                'rgba(255, 193, 7, 1)',
                'rgba(255, 152, 0, 1)',
                'rgba(76, 175, 80, 1)',
                'rgba(76, 175, 80, 1)',
                'rgba(76, 175, 80, 1)'    
            ],
            borderWidth: 1
        }]
    },
    options:{
        indexAxis: 'y',
        scales: {
            x:{
                beginAtZero: true,
                max:100,
                ticks: {
                    font: {
                        size: 14 
                    }
                }
            },
            y:{
                ticks: {
                    autoSkip: false,
                    font: {
                        size: 16, 
                        weight: 'bold' 
                    }
                }
            }
            
        },
        plugins:{
            legend:{
                display:false,
            },
        
        },
    
    }
});