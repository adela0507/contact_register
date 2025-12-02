import React, { useState } from "react";

function ContactList({contact}){
    const[filterText,setFilterText]=useState("");
    const filterData = contact.filter((item) => {
  return Object.keys(item).some((key) =>
    item[key]
      .toString()
      .toLowerCase()
      .includes(filterText.toLowerCase())
  );
});

    return(
        <div>
            <h2>Contact List</h2>
            <input type="text" name="" id="" placeholder="search" onChange={e=>setFilterText(e.target.value)}  />
            <ul id="list">
                {filterData.map((item,key)=>
                <li key={key}>
                    <span>
                        {item.full_name}
                    </span>
                    <span>
                        {item.phone_number}
                    </span>
                </li>
                )}
            </ul>
                    <span id="totalCount">
                        Total Contact {filterData.length}
                    </span>

        </div>
    )
}

export default ContactList;