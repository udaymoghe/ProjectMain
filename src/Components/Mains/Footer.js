import React from 'react';
import '../../CSS/styles.css';
import '../../CSS/footer.css';

export default function Footer() {
  return (
    <section className="footer mt-5" style={{background:"#FFCDD2"}}>
    <div className="container">
        <div className="row">
            <div className="col text-center">
                <div className="copy-right">
                    <p>© <span id="copy-year">2022</span> TechHacks Private Limited. All rights reserved</p>
                    <script>
                        var d = new Date();
                        var year = d.getFullYear();
                        document.getElementById("copy-year").innerHTML = year;
                    </script>
                </div>
            </div>
        </div>
    {/* </div>
    <div className="container"> */}   
    <div className='col-md-13 text-center mt-3'>   
      <a href='/#/'>Privacy Policy</a>      
      <a href='/#/'>FAQ</a>
      <a href='/#/Contact'>Contact Info</a>
      <a href='/#/'>Support</a>
    </div>
    </div>
    </section>
  )
}
