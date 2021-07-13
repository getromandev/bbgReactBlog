import { useState } from "react";

const Create = () => {
    const [title, setTitle] = useState('');
    const [bodyText, setBodyText] = useState('');
    const [selectValue, setSelectValue] = useState('mario');

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('The Event', event)

        const blog = {title, bodyText, selectValue};
        console.log(blog);
    }

    return ( 
        <div className='create'>
            <h2>Add a New Blog</h2>
            <p>Deatails go here</p>
            <form onSubmit={handleSubmit}>
                <label>Blog Title:</label>
                <input 
                    type='text'
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required 
                />
                <label>Blog Body:</label>
                <textarea 
                    value={bodyText}
                    onChange={(e) => setBodyText(e.target.value)}
                    required                
                >
                </textarea>
                <label>Blog Author</label>
                <select 
                    value={selectValue} 
                    onChange={(e) => setSelectValue(e.target.value)}
                >
                    <option value='mario'>mario</option>
                    <option value='yoshi'>yoshi</option>
                </select>
                <button>Add Blog</button>
                <p>{title}</p>
                <p>{bodyText}</p>
                <p>{selectValue}</p>
            </form>
        </div>
     );
}
 
export default Create;