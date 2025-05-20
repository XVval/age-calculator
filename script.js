//function calculateAge()

function calculateAge(){
    const birthDateInput = document.getElementById('birthdate').value;
    const resultDIV = document.getElementById('result');

    //get the imput date and adjust for timezone
    const birthDate = new Date(birthDateInput + 'T00:00:00');
    console.log(birthDate);
    const today = new Date();
    console.log(today);


    //calculate age 
    let age = today.getFullYear() - birthDate.getFullYear();
    console.log(age);
    const monthDiff = today.getMonth() - birthDate.getMonth();
    console.log(monthDiff);

    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())){
        age--;
        console.log('age ' + age);
    }

    // Calculate month and days 
    let months = monthDiff;
    if (months < 0){
        months += 12;
        console.log(months);
    }

    // calculate days 
    let days = today.getDate() - birthDate.getDate();
    console.log(days);

    if(days < 0){
        const lastMonth = new Date(today.getFullYear(), today.getMonth()-1, birthDate.getDate());
        console.log("Last Month " + lastMonth);

        let d = today - lastMonth;
        console.log(d) //will return into milliseconds
        //convert milliseconds into days
        days = Math.floor((today - lastMonth)/(1000 * 60 * 60 * 24));

        console.log(days);
    }


    //format birthday
    const formattedBirthDate = birthDate.toLocaleDateString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });

    //Display result

    resultDIV.innerHTML = `
    <p>Your birthdate <strong> ${formattedBirthDate} </strong></p>
    <p>Your age is :</p>
    <p><strong>${age} years, ${months} months, and ${days} days</p>
    `;

}