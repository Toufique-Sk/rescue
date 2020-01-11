import React from 'react'


export default class Dashboard extends React.Component{
    // $(document).ready(function(){
    //     var placeholder = null;
    //     $('input[type=text]').focus(function(){
    //       placeholder = $(this).attr("placeholder");
    //       $(this).attr("placeholder","");
    //     });
    //     $('input[type=text]').blur(function(){
    //       $(this).attr("placeholder", placeholder);
    //     });
    //   });
    render(){
        return(
            // <nav className="nav-wrapper blue darken-3">
            // <div className="container">
            //     <div className="brand-logo left" class="left">Laptop Rent</div>
            // </div>
            <div class="main">
            <div class="one">
                <div class="register">
                <h3>Lend</h3>
                <form id="reg-form">
                    <div>
                    <label for="laptopname">Laptop Name</label>
                    <input type="text" id="laptop_name" spellcheck="false" placeholder="Lenovo"/>
                    </div>
                    <div>
                    <label for="serialNumber">Serial Number</label>
                    <input type="text" id="serial_no" spellcheck="false" placeholder="Serial Number"/>
                    </div>
                    <div>
                    <label for="ram">RAM</label>
                    <input type="number" id="ram" spellcheck="false" placeholder="4" />
                    </div>
                    <div>
                    <label for="hdd">HDD</label>
                    <input type="number" id="hdd" spellcheck="false" placeholder="0"/>
                    </div>
                    <div>
                    <label for="sdd">SDD</label>
                    <input type="number" id="sdd" spellcheck="false" placeholder="0"/>
                    </div>
                    <div>
                    <label for="processor">Processor</label>
                    <input type="text" id="processor" spellcheck="false" placeholder="i5 5th generation "/>
                    </div>
                    <div>
                    <label for="image">Laptop Image</label>
                    <input type="file" id="image" spellcheck="false"/>
                    </div>
                    <div>
                    <label for="image2">Laptop Image(back side)</label>
                    <input type="file" id="image2" spellcheck="false"/>
                    </div>
                    <div>
                    <label></label>
                    <input type="submit" value="Lend Laptop" id="lend-laptop" class="button"/>
                    </div>
                </form>
                </div>
            </div>
            </div>
        //</nav>
        )
    }

}