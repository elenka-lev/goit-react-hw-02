import s from './Description.module.css'

const Description = ({ children }) => {
    return (
       <>
            <h1 className={s.title}>Sip Happens Café</h1>
            {children}
       </>
    )
}

export default Description;