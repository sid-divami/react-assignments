import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { mockData } from "./data/MOCK_DATA";
import UserData from "./components/UserData";
function App() {
  const [searchValue, setSearchValue] = useState("");

  const [filteredData, setFilteredData] = useState([]);
  // input field change
  const handleInputChange = (e) => {
    setSearchValue(e.target.value);
  };
  // Mock Data gets rendered
  useEffect(() => {
    setFilteredData(mockData);
  }, []);
  // When there is a change in inputvalue
  useEffect(() => {
    const newData = mockData.filter((item) =>
      item.first_name.toLowerCase().includes(searchValue)
    );
    console.log(newData);
    setFilteredData([...newData]);
  }, [searchValue]);

  return (
    <>
      <div className="App">
        <input type="text" value={searchValue} onChange={handleInputChange} />
      </div>
      {/* <h3>Data User is searchin for {searchValue}</h3> */}
      <UserData userData={filteredData} />
    </>
  );
}

export default App;
