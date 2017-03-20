const log = (statement) => console.log(statement),
      nameInput = document.getElementById('name'),
      titleSelection = document.getElementById('title'),
      colorSelect = document.getElementById('color'),
      designSelect = document.getElementById('design'),
      colors = colorSelect.children;


// Sets the focus to the first input when the page first loads
nameInput.focus();


// If 'Other' is selected for the job role, an 'other title' text fiels is revealed
titleSelection.addEventListener('change', ()=> {
    const firstFieldset = document.getElementsByTagName('FIELDSET')[0];
    if(titleSelection.value.toLowerCase() === 'other') {
        const otherJobRoleInput = document.createElement('input'),
              otherJobRoleLabel = document.createElement('label');
        otherJobRoleInput.type = 'text';
        otherJobRoleInput.id = 'other-title';
        otherJobRoleInput.name = 'other-title';
        otherJobRoleInput.placeholder = 'Your Job Role';
        otherJobRoleLabel.innerText = 'Your Job Role:';
        otherJobRoleLabel.htmlFor = 'other-title'; 
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
colorSelect.insertBefore(colorOption, colorSelect.firstElementChild)

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
