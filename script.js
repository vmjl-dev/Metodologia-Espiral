        // Configuración de gráficos
        document.addEventListener('DOMContentLoaded', function() {
            // Gráfico de modelo en espiral
            const spiralCtx = document.getElementById('spiralModelChart').getContext('2d');
            new Chart(spiralCtx, {
                type: 'radar',
                data: {
                    labels: ['Planificación', 'Análisis de Riesgos', 'Desarrollo', 'Evaluación', 'Prototipado', 'Pruebas'],
                    datasets: [{
                        label: 'Metodología en Espiral',
                        data: [90, 85, 80, 85, 75, 90],
                        fill: true,
                        backgroundColor: 'rgba(67, 97, 238, 0.2)',
                        borderColor: 'rgb(67, 97, 238)',
                        pointBackgroundColor: 'rgb(67, 97, 238)',
                        pointBorderColor: '#fff',
                        pointHoverBackgroundColor: '#fff',
                        pointHoverBorderColor: 'rgb(67, 97, 238)'
                    }]
                },
                options: {
                    elements: {
                        line: {
                            borderWidth: 3
                        }
                    },
                    scales: {
                        r: {
                            angleLines: {
                                display: true
                            },
                            suggestedMin: 0,
                            suggestedMax: 100
                        }
                    }
                }
            });
            
            // Gráfico de evolución de riesgos
            const riskCtx = document.getElementById('riskEvolutionChart').getContext('2d');
            new Chart(riskCtx, {
                type: 'line',
                data: {
                    labels: ['Iteración 1', 'Iteración 2', 'Iteración 3', 'Iteración 4', 'Iteración 5', 'Iteración 6'],
                    datasets: [{
                        label: 'Nivel de Riesgo',
                        data: [8, 7, 6, 7, 8, 9],
                        borderColor: '#f72585',
                        backgroundColor: 'rgba(247, 37, 133, 0.1)',
                        borderWidth: 3,
                        tension: 0.2,
                        fill: true
                    }]
                },
                options: {
                    scales: {
                        y: {
                            beginAtZero: true,
                            max: 10
                        }
                    }
                }
            });
            
            // Gráfico de avance
            const progressCtx = document.getElementById('progressChart').getContext('2d');
            new Chart(progressCtx, {
                type: 'bar',
                data: {
                    labels: ['Iteración 1', 'Iteración 2', 'Iteración 3', 'Iteración 4', 'Iteración 5', 'Iteración 6'],
                    datasets: [{
                        label: 'Porcentaje de Avance',
                        data: [15, 35, 55, 75, 95, 100],
                        backgroundColor: [
                            'rgba(67, 97, 238, 0.7)',
                            'rgba(67, 97, 238, 0.7)',
                            'rgba(67, 97, 238, 0.7)',
                            'rgba(67, 97, 238, 0.7)',
                            'rgba(67, 97, 238, 0.7)',
                            'rgba(46, 204, 113, 0.7)'
                        ],
                        borderColor: [
                            'rgb(67, 97, 238)',
                            'rgb(67, 97, 238)',
                            'rgb(67, 97, 238)',
                            'rgb(67, 97, 238)',
                            'rgb(67, 97, 238)',
                            'rgb(46, 204, 113)'
                        ],
                        borderWidth: 1
                    }]
                },
                options: {
                    scales: {
                        y: {
                            beginAtZero: true,
                            max: 100
                        }
                    }
                }
            });
            
            // Animación de espiral interactiva
            const spiralContainer = document.getElementById('spiralAnimation');
            const iterations = [
                "Iteración 1: Requisitos y Análisis",
                "Iteración 2: Diseño Backend",
                "Iteración 3: Prototipado Frontend",
                "Iteración 4: Refinamiento",
                "Iteración 5: Pruebas",
                "Iteración 6: Despliegue"
            ];
            
            const radius = 180;
            const centerX = 250;
            const centerY = 250;
            
            for (let i = 0; i < 6; i++) {
                const angle = (i * 60) * (Math.PI / 180);
                const distance = radius * (1 - i * 0.12);
                
                const x = centerX + Math.cos(angle) * distance;
                const y = centerY + Math.sin(angle) * distance;
                
                const point = document.createElement('div');
                point.className = 'spiral-point';
                point.style.left = `${x}px`;
                point.style.top = `${y}px`;
                point.textContent = i + 1;
                point.dataset.index = i;
                
                point.addEventListener('mouseover', function() {
                    const info = document.createElement('div');
                    info.className = 'spiral-info';
                    info.textContent = iterations[i];
                    info.style.left = `${x + 30}px`;
                    info.style.top = `${y - 30}px`;
                    info.id = `info-${i}`;
                    spiralContainer.appendChild(info);
                    info.style.display = 'block';
                });
                
                point.addEventListener('mouseout', function() {
                    const info = document.getElementById(`info-${i}`);
                    if (info) info.remove();
                });
                
                spiralContainer.appendChild(point);
            }
        });
