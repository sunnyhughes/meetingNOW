// DataStorage.js

const saveDataToFile = (data) => {
    localStorage.setItem('attendanceData', JSON.stringify(data));
  };
  
  export default saveDataToFile;
  