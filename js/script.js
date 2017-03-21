const log = (statement) => console.log(statement),
      paymentForm = document.getElementsByTagName('FORM')[0],
      nameInput = document.getElementById('name'),
      emailInput = document.getElementById('mail'),
      titleSelection = document.getElementById('title'),
      colorSelect = document.getElementById('color'),
      designSelect = document.getElementById('design'),
      colors = colorSelect.children,
      paymentSection = document.getElementsByTagName('FIELDSET')[3],
      ccNumberInput = document.getElementById('cc-num'),
      ccZip = document.getElementById('zip'),
      cvv = document.getElementById('cvv'),
      noJsLabel = document.querySelector('label[for=other-title]'),
      noJsInput = document.querySelector('input#other-title'),
      creditCardDiv = document.getElementById('credit-card');



noJsLabel.classList.add('hide');
noJsInput.classList.add('hide');

// Sets the focus to the first input when the page first loads
nameInput.focus();




// If 'Other' is selected for the job role, an 'other title' text fiels is revealed
titleSelection.addEventListener('change', ()=> {
    const firstFieldset = document.getElementsByTagName('FIELDSET')[0];
    if(titleSelection.value.toLowerCase() === 'other') {
        const otherJobRoleInput = document.createElement('input'),
              otherJobRoleLabel = document.createElement('label');
        otherJobRoleInput.type = 'text';
        otherJobRoleInput.id = 'other-title-js';
        otherJobRoleInput.name = 'other-title-js';
        otherJobRoleInput.placeholder = 'Your Job Role';
        otherJobRoleLabel.innerText = 'Your Job Role:';
        otherJobRoleLabel.htmlFor = 'other-title-js';
        firstFieldset.appendChild(otherJobRoleLabel);
        firstFieldset.appendChild(otherJobRoleInput);
    }
});





// 
log('this works');
const colorOption = document.createElement('option');
colorOption.value = 'default';
colorOption.innerText = '-- Select a color --';
colorOption.selected = true;
// log(colorOption);
// log(colorSelect.firstElementChild);
colorSelect.style.visibility = 'hidden';
colorSelect.previousElementSibling.style.visibility = 'hidden';
colorSelect.insertBefore(colorOption, colorSelect.firstElementChild);

designSelect.addEventListener('change', ()=> {
    let dynamicSelect = '';
   if(designSelect.value !== 'js puns'){
       colorOption.selected = true;
        for(let color of colors) {
            color.style.display = 'block';
            if(color.innerText.includes('Puns')) {
                color.style.display = 'none';
                // log(color);
            }
        }
        
        
   } else if (designSelect.value !== 'heart js') {
       colorOption.selected = true;
    for(let color of colors) {
            color.style.display = 'block';
            if(color.innerText.includes('I')) {
                // log('puns');
                color.style.display = 'none';
                // log(color);
            }
            
        }

    
   }
        
        
    
  colorSelect.style.visibility = 'visible';
colorSelect.previousElementSibling.style.visibility = 'visible';



        
    
});

// Register for an activity
const activitySection = document.querySelector('.activities');
log(activitySection);

const conferenceTotal = document.createElement('div');
let conferencePrice = 0;
conferenceTotal.classList = 'conference-total';

activitySection.addEventListener('change', (e)=> {
    if(e.target.type === 'checkbox') {
        let val = e.target.value;
        if(e.target.checked === true) {
            log('checked');
            conferencePrice += parseInt(e.target.value);
            log('Total Price: ' + conferencePrice);
            conferenceTotal.innerText = 'Total price: ' + conferencePrice;
            activitySection.appendChild(conferenceTotal);
        } else {
            log('unchecked');
            conferencePrice -= e.target.value;
            log('Total Price: ' + conferencePrice);
            conferenceTotal.innerText = 'Total price: ' + conferencePrice;
        }
    }
});

paymentSection.lastElementChild.classList.add('hide');
paymentSection.lastElementChild.previousElementSibling.classList.add('hide');
paymentSection.addEventListener('change', (e)=> {
   if(e.target.value === 'credit card') {
       // log(e.target.value);
       creditCardDiv.classList.remove('hide');
       paymentSection.lastElementChild.classList.add('hide');
       paymentSection.lastElementChild.previousElementSibling.classList.add('hide');
   } else if (e.target.value === 'paypal') {
       creditCardDiv.classList.add('hide');
       paymentSection.lastElementChild.classList.add('hide');
       paymentSection.lastElementChild.previousElementSibling.classList.remove('hide');
   } else if (e.target.value === 'bitcoin') {
       creditCardDiv.classList.add('hide');
       paymentSection.lastElementChild.previousElementSibling.classList.add('hide');
       paymentSection.lastElementChild.classList.remove('hide');
   }
});


log(paymentSection);

paymentForm.addEventListener('submit', (e)=>{
    if(nameInput.value === '') {
        e.preventDefault();
        log('name can\'t be blank');
        nameInput.classList.add('error');
    }
    if(!emailInput.value.includes('@') || !emailInput.value.includes('.')) {
        e.preventDefault();
        log('email is not properly formatted');
        emailInput.classList.add('error');
    }

    if(conferencePrice === 0) {
        e.preventDefault();
        log('no activities selected');
        activitySection.firstElementChild.classList.add('error-text');
    }

    if(ccNumberInput.value.length < 13) {
        e.preventDefault();
        log('number must not be less than 13 characters');
        ccNumberInput.classList.add('error');
    } else if (ccNumberInput.value.length > 16) {
        e.preventDefault();
        log('number must not be more than 16 characters');
        ccNumberInput.classList.add('error');
    }

    if(ccZip.value.length !== 5) {
        e.preventDefault();
        log('number can only be 5 characters');
        ccZip.classList.add('error');
    }

    if(cvv.value.length !== 3) {
        e.preventDefault();
        log('cvv can only be 3 numbers');
        cvv.classList.add('error');
    }

});

