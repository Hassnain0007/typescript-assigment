let personName : String = '';
personName  =prompt('What is your name') || '';
if(personName !== null && personName !== ''){
    alert('Hello ${personName}, would you like to leran some python toda?')
}
else{
    alert('You have to fill Your name !')
}