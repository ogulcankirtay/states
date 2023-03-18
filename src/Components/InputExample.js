import {useState} from 'react'

function InputExample() {
    const [form,setForm]=useState({name:'',surname:''})
    
    const ChangeForm=(e)=>{
        console.log(e.target.name)
        setForm({...form, [e.target.name]:e.target.value})
    }
    return (
    <div>
    Name <br /> <br />       
     <input name="name"  value={form.name} onChange={ChangeForm} /><br />
     Surname <br /> <br />   
     <input name="surname"  value={form.surname} onChange={ChangeForm} />
     <br />{form.name}
     <br />
        {form.surname}
    </div>
  )
}

export default InputExample
