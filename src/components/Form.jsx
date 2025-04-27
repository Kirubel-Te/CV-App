import '../styles/Form.css'
import Label from './Label'

export default function Form(){
    return(
        <>
            <form>
                <section className='personal'>
                    <div className="pr">
                        <h3>Personal Information</h3>
                        <hr/>
                    </div>
                    <div className="name">
                        <Label htmlFor='f-name' name='f-name' desc='First Name: ' type='text'  />
                        <Label htmlFor='l-name' name='l-name' desc='Last Name: ' type='text' />
                    </div>
                    <div className="tele">
                        <Label htmlFor='email' name='email' desc='E-mail: ' type='email' />
                        <Label htmlFor='phonenumber' name='phonenumber' desc='Phone Number: ' type='tel' />
                    </div>
                </section>
                <section className="education">
                    <div className="pr">
                        <h3>Educational Experience</h3>
                        <hr/>
                    </div>
                    <div className="school">
                        <Label htmlFor="sName" name='sName' desc='School Name: ' type='text' />
                    </div>
                    <div className="study">
                        <Label htmlFor='study' name='study' desc='Title of Study: ' type='text' />
                    </div>
                    <div className="date">
                        <Label htmlFor='date' name='date' desc='Expected Graduation: ' type='date' />
                    </div>
                </section>
                <section className="practical">
                    <div className="pr">
                        <h3>Practical Experience</h3>
                        <hr/>
                    </div>
                    <div className="CName">
                        <Label htmlFor='cname' name='cname' desc='Company Name: ' type='text' />
                    </div>
                    <div className="position">
                        <Label htmlFor='position' name='position' desc='Position: ' type='text' />
                    </div>
                    <div className="role">
                        <Label htmlFor='role' name ='role' desc='Responsiblity: ' type='text' />
                    </div>
                </section>
                <section className="submit">
                    <button>Generate CV</button>
                </section>
            </form>
        </>
    )
}