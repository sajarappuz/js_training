var data = [
  { "firstname": " Ann", "lastname": " Wilson ", "phone": "29378245", "zip": "2 0 00 1 ", "age": 160, "id": " 12345 " },
  { "firstname": "Chris ", "lastname": "Morgan", "phone": "729378245", "zip": " 65 00 1", "age": 70, "id": " 123453543636 " },
  { "firstname": " Andrew ", "lastname": " Storm", "phone": "543729378245", "zip": " 7001 4", "age": 32, "id": "5 648" }
];

const valid = ( record ) =>{
   record.firstname = record.firstname.trim();
   record.lastname = record.lastname.trim();
   record.phone = record.phone.trim();
   record.zip = record.zip.split(' ').join('');
   record.id = record.id.split(' ').join('');

   const name = `Name : ${record.firstname} ${record.lastname}` ;
   const phone = `Phone : ${record.phone.slice(0,10).padStart(10,'0')}` ;
   const zip = `Zip : ${record.zip}`;
   const age = record.age > 0 && record.age < 150 ? `Age : ${record.age}`: "Age : Nil" ;
   const id = `Id : ###${record.id.slice(3)}`

   console.log(`${name} \n ${phone} \n ${zip} \n ${age} \n ${id}`);
}
data.forEach(valid);