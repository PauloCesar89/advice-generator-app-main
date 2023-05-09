const adviceId = document.getElementById('adviceId');
const adviced = document.getElementById('advice');
const generateAdvice = document.getElementById('generateAdvice');

// button.addEventListener("click", getAdvice);
    window.onload = () => {
    getAdvice();
    };
        function getAdvice() {
        fetch("https://api.adviceslip.com/advice")
            .then((response) => {
            return response.json();
            })
            .then((data) => {
            const advice = data.slip;

            adviceId.innerHTML = `${advice.id}`;
            adviced.innerHTML = `"${advice.advice}"`;
            
        });

        generateAdvice.addEventListener("click", getAdvice);
}