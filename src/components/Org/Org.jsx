import "./Org-Styles/Org.css";

const Org = (props) => {
    const {show} = props;
    return(
        <section className="org">
            <h3 className="org__title">Mi Organizacion</h3>
            <img src="/img/add.png" alt="add" onClick={show}/>
        </section>
    )
}

export default Org