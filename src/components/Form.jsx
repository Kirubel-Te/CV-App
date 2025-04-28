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

    return(
        <>
            {cv ? 
            <button onClick={clickhandle}>click</button> : 
            <form action={submittion}>
                <section className='personal'>
                    <div className="pr">
                        <h3>Personal Information</h3>
                        <hr/>
                    </div>
                    <div className="name">
                        <Label htmlFor='f-name' name='fname' desc='First Name: ' type='text' value={form.fname} />
                        <Label htmlFor='l-name' name='lname' desc='Last Name: ' type='text' value={form.lname} />
                    </div>
                    <div className="tele">
                        <Label htmlFor='email' name='email' desc='E-mail: ' type='email' value={form.email} />
                        <Label htmlFor='phonenumber' name='phonenumber' desc='Phone Number: ' type='tel' value={form.phonenumber} />
                    </div>
                </section>
                <section className="education">
                    <div className="pr">
                        <h3>Educational Experience</h3>
                        <hr/>
                    </div>
                    <div className="school">
                        <Label htmlFor="sName" name='sName' desc='School Name: ' type='text' value={form.sName} />
                    </div>
                    <div className="study">
                        <Label htmlFor='study' name='study' desc='Title of Study: ' type='text' value={form.study} />
                    </div>
                    <div className="date">
                        <Label htmlFor='date' name='date' desc='Expected Graduation: ' type='date' value={form.date} />
                    </div>
                </section>
                <section className="practical">
                    <div className="pr">
                        <h3>Practical Experience</h3>
                        <hr/>
                    </div>
                    <div className="CName">
                        <Label htmlFor='cname' name='cname' desc='Company Name: ' type='text' value={form.cname} />
                    </div>
                    <div className="position">
                        <Label htmlFor='position' name='position' desc='Position: ' type='text' value={form.position} />
                    </div>
                    <div className="role">
                        <Label htmlFor='role' name ='role' desc='Responsiblity: ' type='text' value={form.role} />
                    </div>
                </section>
                <section className="submit">
                    <button>Generate CV</button>
                </section>
            </form>}
        </>
    )
}