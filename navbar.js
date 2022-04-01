const navbar= (count)=>{
    return` 
    
    <div id="navbar">
        <div id="shopbox">
           


        <div class="dropdown">
  <button class="dropbtn"> <p >shop <i class="material-icons" style="font-size: 18px;">expand_more</i></p></button>
  <div class="dropdown-content">
    <a href="products.html">All fruits</a>
    <a href="products.html">fresh cuts</a>
    <a href="products.html">fruit combo</a>
    <a href="products.html">gifts by kimaye</a>
    <a href="#">grape famil by kimaye</a>
    <a href="#">community byuing</a>

  </div>
</div>

        <div class="dropdown">
  <button class="dropbtn"> <p> learn  <i class="material-icons" style="font-size: 18px;">expand_more</i> </p></button>
  <div class="dropdown-content">
    <a href="#">our stories</a>
    <a href="#">why kimaye</a>
    <a href="#">tracebility</a>
      <a href="#">betod fruits</a>
  </div>
</div>




           
           
            <p>grow</p>
        </div>
        <div id="navkimaye">
            <a href="home.html"><img src="https://cdn.shopify.com/s/files/1/0449/5225/6667/files/website-logo_400x.png?v=1596288204"></a>
        </div>
        <div id="rhfunction">
            <div><i class="material-icons" style="font-size: 36px;" >search</i></div>
         <a href="login.html">   <div><i class="material-icons" style="font-size: 30px;">person</i></div></a>
         <div> <a  href="cart.html"> <i  class="material-icons" style="font-size: 30px;">shopping_bag</i><p id="count">${count}</p></a></div>
        </div>

    </div>`
}
export default navbar;

const footer=()=>{
    return ` 

    <div id="footer">
      <div id="footerbox">
          <ul>
              <li>FAQ's</li>
              <li>Contact Us</li>
              <li>Shipping & Return Policy</li>
              <li>Terms & Conditions</li>
              <li>Privacy Policy</li>
          </ul>
           <div id="facebook">
               <p>Follow us on</p>
               <img src="https://cdn.shopify.com/s/files/1/0449/5225/6667/files/fb-icon.png?v=1599571756">
               <img src="https://cdn.shopify.com/s/files/1/0449/5225/6667/files/insta-icon.png?v=1599571756">
               <img src="https://cdn.shopify.com/s/files/1/0449/5225/6667/files/twitter-icon.png?v=1599571756">
           </div>
           
      </div>
     
     <div id="footerbottom">
         <p>Copyright©2020. All Rights Reserved</p>
         <img src="https://cdn.shopify.com/s/files/1/0449/5225/6667/files/ting.png?v=1599565040">
     </div>
  </div>
  
  `
} 

export {footer};


 
