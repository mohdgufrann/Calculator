document.addEventListener('DOMContentLoaded', function() {
    const resultInput = document.getElementById('result');
    const buttons = document.querySelectorAll('.btn');

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const buttonText = this.innerText;

            if (buttonText === 'AC') {
                // Clear the display
                resultInput.value = '';
            } else if (buttonText === '=') {
                try {
                    // Replace special functions for evaluation
                    let expression = resultInput.value
                        .replace(/%/g, '/100')
                        .replace(/π/g, 'Math.PI')
                        .replace(/e/g, 'Math.E')
                        .replace(/sqrt\(([^)]+)\)/g, 'Math.sqrt($1)')
                        .replace(/sin\(([^)]+)\)/g, 'Math.sin($1)')
                        .replace(/cos\(([^)]+)\)/g, 'Math.cos($1)')
                        .replace(/tan\(([^)]+)\)/g, 'Math.tan($1)')
                        .replace(/log\(([^)]+)\)/g, 'Math.log10($1)');
                    
                    // Use a more secure way to evaluate math expressions.
                    // For a simple calculator, `eval` is okay, but for production,
                    // use a library like Math.js. Here, we'll keep it simple.
                    resultInput.value = eval(expression);
                } catch (e) {
                    resultInput.value = 'Error';
                }
            } else {
                resultInput.value += buttonText;
            }
        });
    });
});