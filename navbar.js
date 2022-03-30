const navbar= ()=>{
    return` 
    
    <div id="navbar">
        <div id="shopbox">
            <p >shop <i class="material-icons" style="font-size: 18px;">expand_more</i></p>
            <p> learn  <i class="material-icons" style="font-size: 18px;">expand_more</i> </p>
            <p>grow</p>
        </div>
        <div id="navkimaye">
            <img src="https://cdn.shopify.com/s/files/1/0449/5225/6667/files/website-logo_400x.png?v=1596288204">
        </div>
        <div id="rhfunction">
            <i class="material-icons" style="font-size: 36px;" >search</i>
            <i class="material-icons" style="font-size: 30px;">person</i>
            <i class="material-icons" style="font-size: 30px;">shopping_bag</i>
        </div>

    </div>`
}
export default navbar;

const footer=()=>{
    return ` <div id="footer">
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
  </div>`
} 

export {footer};