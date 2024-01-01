function validate(configdata, segmentdata){
      for(let key in configdata){
        const config = configdata[key];
        const value = segmentdata[key];
        
        if(config.type === "REQUIRED" && ( value === undefined || value === null || value === "")){
            return false
        }
        if(value & value.length > key.length){
            return false
        }
        
      }
      return true
}

const configdata = {
    'CO': { type: 'REQUIRED' },
    'MAJ': { type: 'NORMAL' },
    'SET': { type: 'NORMAL' },
    'MIN': { type: 'REQUIRED' },
  };
  const passingSegments = {
    'CO': '01',
    'MAJ': '111',
    'SET': '111',
    'MIN': '000',
  };
  
  const failingSegments = {
    'CO': '',
    'MAJ': '222',
    'SET': '222',
    'MIN': '111',
  };

  const keySegments = {
    'CO': '345',
    'MAJ': '222',
    'SET': '222',
    'MIN': '111',
  };

  const result = validate(configdata,passingSegments)

  if(result){
    console.log("validation successfull")
  }else{
    console.log("not successfull")
  }