import React, {useState} from 'react';
import Menu from './menuApi.js';
import MenuCard from './MenuCard';
import Navbar5 from '../Components/Navbar5';
import menuApi from './menuApi.js';





const uniqueList = [
  //here we used spread operator ... (3 dots)
  ...new Set(
    Menu.map((curElem) => {
      return curElem.category;
      })
    ),
    "All", //All is for to display all items in All category
  ];
  // console.log(uniqueList);




const JobListing = () => {

  const [menuData , setMenuData] = useState(Menu);
  const [menuList , setmenuList] = useState(uniqueList)



  const filterItem = (category) => {

    if(category === "All" ){
      setMenuData(Menu);
      return
    }

    const updatedList = Menu.filter((curElem) => {
      return curElem.category ===  category;
    });
    
    setMenuData(updatedList);
};
    

  return (
    <>
      {/* we can also work on same components by using two pops as follows */}
      {/* < Navbar5 filterItem = {filterItem} menuList={menuList}/> */}

      {/* We have to pass the pops as mentioned below */}
      < MenuCard menuData = {menuData} />
    </>
  )
}

export default JobListing;


