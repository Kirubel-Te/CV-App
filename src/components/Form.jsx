import React from 'react'
import '../styles/Form.css'
import Label from './Label'

export default function Form(){

    const[cv,setcv] = React.useState(false)
    const[form,setform] = React.useState({
        fname:'',
        lname:'',
        email:'',
        phonenumber:'',

        sName:'',
        study:'',
        date:'',

        cname:'',
        position:'',
        role:''
    })

    function submittion(formData){
        const formInfo = Object.fromEntries(formData)
        setform(formInfo)
        setcv(prev => !prev)
    }
    function clickhandle(){
        setcv(prev => !prev)
    }

    function handleChange(e) {
        const { name, value } = e.target;
        setform(prevForm => ({
            ...prevForm,
            [name]: value
        }));
    }

    function handleReset(e) {
        e.preventDefault(); // prevent default reset behavior
        setform({
        fname: '',
        lname: '',
        email: '',
        phonenumber: '',
        sName: '',
        study: '',
        date: '',
        cname: '',
        position: '',
        role: ''
        });
    }
    

    return(
        <>
            {cv ? 
            <section className='section'>
                <h1>{form.fname +" "+form.lname}</h1>
                <div className='maincv'>
                    <h2>Personal Information</h2>
                    <hr/>
                    <h4>Name: {form.fname +" "+form.lname}</h4>
                    <h4>E-mail: {form.email}</h4>
                    <h4>Phone Number: {form.phonenumber}</h4>
                    <h2>Education</h2>
                    <hr/>
                    <h4>School Name: {form.sName}</h4>
                    <h4>Field of Study: {form.study}</h4>
                    <h4>Expected Graduation: {form.date}</h4>
                    <h2>Experience</h2>
                    <hr/>
                    <h4>Company Name: {form.cname}</h4>
                    <h4>Position: {form.position}</h4>
                    <h4>Role: {form.role}</h4>
                </div>
                <div>
                    <button onClick={clickhandle}>Edit</button>
                </div>
            </section> : 
            <form action={submittion} id="myForm">
                <h1>Generate your CV</h1>
                <section className='personal'>
                    <div className="pr">
                        <h3>Personal Information</h3>
                        <hr/>
                    </div>
                    <div className="name">
                        <Label htmlFor='f-name' name='fname' desc='First Name: ' type='text' value={form.fname} onChange={handleChange} />
                        <Label htmlFor='l-name' name='lname' desc='Last Name: ' type='text' value={form.lname} onChange={handleChange} />
                    </div>
                    <div className="tele">
                        <Label htmlFor='email' name='email' desc='E-mail: ' type='email' value={form.email} onChange={handleChange} />
                        <Label htmlFor='phonenumber' name='phonenumber' desc='Phone Number: ' type='tel' value={form.phonenumber} onChange={handleChange} />
                    </div>
                </section>
                <section className="education">
                    <div className="pr">
                        <h3>Educational Experience</h3>
                        <hr/>
                    </div>
                    <div className="school">
                        <Label htmlFor="sName" name='sName' desc='School Name: ' type='text' value={form.sName} onChange={handleChange}/>
                    </div>
                    <div className="study">
                        <Label htmlFor='study' name='study' desc='Title of Study: ' type='text' value={form.study} onChange={handleChange}/>
                    </div>
                    <div className="date">
                        <Label htmlFor='date' name='date' desc='Expected Graduation: ' type='date' value={form.date} onChange={handleChange}/>
                    </div>
                </section>
                <section className="practical">
                    <div className="pr">
                        <h3>Practical Experience</h3>
                        <hr/>
                    </div>
                    <div className="CName">
                        <Label htmlFor='cname' name='cname' desc='Company Name: ' type='text' value={form.cname} onChange={handleChange}/>
                    </div>
                    <div className="position">
                        <Label htmlFor='position' name='position' desc='Position: ' type='text' value={form.position} onChange={handleChange}/>
                    </div>
                    <div className="role">
                        <Label htmlFor='role' name ='role' desc='Responsiblity: ' type='text' value={form.role} onChange={handleChange}/>
                    </div>
                </section>
                <section className="submit">
                    <button>Generate CV</button>
                    <button onClick={handleReset}>Clear Form</button>
                    

                </section>
            </form>}
        </>
    )
}