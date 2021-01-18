import React,{useState,useEffect,useCallback} from 'react'

export default function DataTable() {

    const GET_PEOPLE_URL = `https://o91snh.herokuapp.com/api/Persons`;

    const [peopleData, setPeopleData] = useState([]);
    const [peopleData1, setPeopleData1] = useState(peopleData);
    const [sortingOrder, setSortingOrder] = useState('ASC');
    const [refreshCount, setRefreshCount] = useState(0);
  
    useEffect(()=>{
      const fetchData = async () => {
          const fetchedData = await fetch(GET_PEOPLE_URL);
          const data = await fetchedData.json();    
          setPeopleData(data)
          setPeopleData1(data)
        
      }
      fetchData();
     
      
  },[])

   
  

    const refresh = () => setRefreshCount(refreshCount + 1);

    function sortByName() {
        setSortingOrder(sortingOrder === "ASC" ? "DESC" :"ASC" );
        const tempArray = peopleData1;
        if (sortingOrder === "ASC") { //Ascending order
            tempArray.sort((a, b)=>(a.name > b.name) ? 1:-1);
        } else { //Descending order
            tempArray.sort((a, b)=>(a.name > b.name) ? -1:-1);
        }

        setPeopleData1(tempArray)
        refresh()       
    }

    function sortByAge() {
        setSortingOrder(sortingOrder === "ASC" ? "DESC" :"ASC" );
        const tempArray = peopleData1;
        if (sortingOrder === "ASC") { //Ascending order
            tempArray.sort((a, b)=>(a.age > b.age) ? 1:-1);
        } else { //Descending order
            tempArray.sort((a, b)=>(a.age > b.age) ? -1:-1);
        }

        setPeopleData1(tempArray);       
        refresh()       
    }

    function sortByStatus() {
        setSortingOrder(sortingOrder === "ASC" ? "DESC" :"ASC" );
        const tempArray = peopleData1;
        if (sortingOrder === "ASC") { //Ascending order
            tempArray.sort((a, b)=>(a.relationshipStatus > b.relationshipStatus) ? 1:-1);
        } else { //Descending order
            tempArray.sort((a, b)=>(a.relationshipStatus > b.relationshipStatus) ? -1:-1);
        }

        setPeopleData1(tempArray);       
        refresh()       
    }
    
     
    
    return (
        <div>
            <table className="data-table">
                <tr>
                    <th><button onClick={sortByName}>Name</button></th>
                    <th><button onClick={sortByAge}>Age</button></th>
                    <th><button onClick={sortByStatus}>Status</button></th>
                </tr>
                {peopleData1.map((item)=>{
                return (<tr key={item.id}>
                            <td>{item.name}</td>
                            <td>{item.age}</td>
                            <td>{item.relationshipStatus}</td>
                        </tr>)
                })}
            </table>
        </div>
    )
}
