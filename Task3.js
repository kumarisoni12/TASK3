
      
        document.getElementById('convert-btn').addEventListener('click', function() {
            const temperatureInput = document.getElementById('temperature');
            const errorElement = document.getElementById('temperature-error');
            const resultElement = document.getElementById('result');
            
            // Validate input
            if (temperatureInput.value === '' || isNaN(temperatureInput.value)) {
                errorElement.style.display = 'block';
                resultElement.style.display = 'none';
                return;
            } else {
                errorElement.style.display = 'none';
            }
            
            const temperature = parseFloat(temperatureInput.value);
            const fromUnit = document.querySelector('input[name="from-unit"]:checked').value;
            const toUnit = document.querySelector('input[name="to-unit"]:checked').value;
            
            // Convert temperature
            let convertedTemp;
            let unitSymbol;
            
            if (fromUnit === toUnit) {
                // Same unit - no conversion needed
                convertedTemp = temperature;
            } else if (fromUnit === 'celsius' && toUnit === 'fahrenheit') {
                convertedTemp = (temperature * 9/5) + 32;
            } else if (fromUnit === 'fahrenheit' && toUnit === 'celsius') {
                convertedTemp = (temperature - 32) * 5/9;
            } else if (fromUnit === 'celsius' && toUnit === 'kelvin') {
                convertedTemp = temperature + 273.15;
            } else if (fromUnit === 'kelvin' && toUnit === 'celsius') {
                convertedTemp = temperature - 273.15;
            } else if (fromUnit === 'fahrenheit' && toUnit === 'kelvin') {
                convertedTemp = (temperature - 32) * 5/9 + 273.15;
            } else if (fromUnit === 'kelvin' && toUnit === 'fahrenheit') {
                convertedTemp = (temperature - 273.15) * 9/5 + 32;
            }
            
            // Round to 2 decimal places
            convertedTemp = Math.round(convertedTemp * 100) / 100;
            
            // Determine unit symbol
            switch(toUnit) {
                case 'celsius':
                    unitSymbol = '°C';
                    break;
                case 'fahrenheit':
                    unitSymbol = '°F';
                    break;
                case 'kelvin':
                    unitSymbol = 'K';
                    break;
            }
            
            // Display result
            resultElement.textContent = `Converted Temperature: ${convertedTemp} ${unitSymbol}`;
            resultElement.style.display = 'block';
        });
    