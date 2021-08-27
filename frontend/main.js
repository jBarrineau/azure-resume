window.addEventListener('DOMContentLoaded', (event) => {
    getVisitCount();
})

const functionApiURL = 'https://jrbgetresumecounter.azurewebsites.net/api/GetResumeCounter?code=3TijUuCDodAcEKhP8xa8RNyv9h2kIPTEbut2qn7f60Z7Q0T1MOMPNQ==';


const getVisitCount = () => {
    let count = 30;
    fetch(functionApiURL).then(response => {
        return response.json()
    }).then(response => {
        console.log("Website called function API.");
        count = response.count;
        document.getElementById("counter").innerText = count;
    }).catch(function (error) {
        console.log(error);
    });

    return count;
}