// * 1 useState import
import { useState } from "react";


// import css
import "./ToggleField.scss";






// * 3 sfc   html bauen
const ToggleField = () => {

    // * 2 hook bauen
    const [toggle, setToggle] = useState(true);     /* // !    true  */

    // * 4 function bauen
    function handleToggle() {
        setToggle(!toggle);             /* // !   wenn nicht wahr    durch !wird umgedreht   also wird true zu false */
    }



    return (

        /* // * 3.1 html bauen */
        <section>
            {/* // * 5 onClick */}
            <button onClick={handleToggle}> Toggle / wechseln </button>

            {/* // * 6   js mit { }  einfügen    if else    ?   :  */}

            {toggle ?          /* // ! if toggle is true    then   alles nach dem    ?  */
                <ul>
                    <li>test 1</li>
                    <li>test 2</li>
                    <li>test 3</li>
                </ul>

                :               /* // !   else     alles nach dem   :    */
                <></>

            }

        </section>

    );
}

export default ToggleField;