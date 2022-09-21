import React, { useState } from 'react'

const TodoList = () => {
   const [activity, setActivity] = useState('')
   const [listData, setListData] = useState([]) 

   function addActivity() {
    // setListData([...listData, activity])
    // console.log(listData)
    setListData((listData)=>{
        const updataedList = [...listData, activity]
        console.log(updataedList)
        setActivity('');    
        return updataedList
    })
   }
   function removeActivity(id) {
        const updataedListData = listData.filter((elem, idx)=>{
            return idx !==id;
        })
        setListData(updataedListData);
   }
   function removeAll(){
    setListData([]);
   }
  return (
    <>
        <div className='container'>
            <div className='header'>TODO LIST</div>
            <input type='text' placeholder='Add Activity' value={activity} onChange={e =>setActivity(e.target.value)}/>
            <br />
            <button onClick={addActivity}>Add</button>
            <p className='list_heading'>Here is your List :{')'}</p>
            {listData !==[] && listData.map((data, id)=>{
                return <>
                    <div key={id}>
                        <h2 className='listData'>{data}</h2>
                        <button className='btn-position' onClick={_=>removeActivity(id)}>Remove(-)</button>
                    </div>
                </>
            })}
            {listData.length >=1 && <button onClick={removeAll}>Remove All</button>}
            
        </div>  
    </>
  )
}

export default TodoList