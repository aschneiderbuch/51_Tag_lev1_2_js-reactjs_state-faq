// * 1 useState import
import { useState } from "react";


// import css
import "./ToggleField.scss";






// * 3 sfc   html bauen
const ToggleField = () => {

    // * 2 hook bauen
    const [toggle, setToggle] = useState(true);     /* // !    true     true=anfangs eingeblendet    false=anfangs ausgeblendet */

    // * 4 function bauen
    function handleToggle() {
        setToggle(!toggle);             /* // !   wenn nicht wahr    durch !wird umgedreht   also wird true zu false */
    }



    return (

        /* // * 3.1 html bauen */
        <section>

            <article>
                <p>Why is React great?</p>
                {/* // * 5 onClick */}
                <button onClick={handleToggle} >+</button>
            </article>


            {/* // * 6   js mit { }  einfügen    if else    ?   :  */}
            <article>
                {toggle ?          /* // ! if toggle is true    then   alles nach dem    ?  */
                    <>
                        <p> </p>

                        <ul>
                            <li>Fast Learning Curve</li>
                            <li>test 2</li>
                            <li>test 3</li>
                        </ul>
                    </>
                    :               /* // !   else     alles nach dem   :    */
                    <></>

                }
            </article>
        </section>

    );
}

export default ToggleField;