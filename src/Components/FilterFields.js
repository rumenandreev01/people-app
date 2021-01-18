import React from 'react'

export default function FilterFields() {
    return (
        <div className="filter-fields">
            <form>
                <div>
                    <label for="name">Name:</label>
                    <input type="text" id="name" name="name" />
                </div>
                <div> 
                    <label for="ageFrom">Age from</label>
                    <input type="text" id="ageFrom" name="ageFrom" />
                </div>
                <div>
                    <label for="ageTo">Age from</label>
                    <input type="text" id="ageTo" name="ageTo" />
                    <select id="status" name="status">
                        <option value="relationship">In a relationship</option>
                        <option value="single">Single</option>
                        <option value="married">Married</option>
                    </select>
                </div> 
            </form>    
        </div>
    )
}
