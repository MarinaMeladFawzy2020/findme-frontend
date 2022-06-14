import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { HomepageService } from 'src/app/services/homepage.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
[x:string]:any
ConnectForm!:FormGroup
checkData : boolean = false;
Alldata :any = {};
// Alldatasocial =[
//   {
//       "social_id": 1,
//       "social_name": "Facebook",
//       "social_url": "https://www.facebook.com/Find-ME-100770805946518",
//       "social_icon": "fab fa-facebook-f"
//   },
//   {
//       "social_id": 2,
//       "social_name": "Twitter",
//       "social_url": "https://twitter.com/FindMe_KeepSafe/",
//       "social_icon": "fa fa-twitter"
//   },
//   {
//       "social_id": 3,
//       "social_name": "LinkedIn",
//       "social_url": "",
//       "social_icon": "fa fa-linkedin"
//   },
//   {
//       "social_id": 6,
//       "social_name": "YouTube",
//       "social_url": "https://www.youtube.com/channel/UCmrbOd_f6Iue_nsOtTQ-FxA/featured",
//       "social_icon": "fa fa-youtube"
//   },
//   {
//       "social_id": 7,
//       "social_name": "Instagram",
//       "social_url": "https://www.instagram.com/FindMe.KeepThemSafe/",
//       "social_icon": "fa fa-instagram"
//   },
//   {
//       "social_id": 11,
//       "social_name": "Snapchat",
//       "social_url": "",
//       "social_icon": "fa fa-snapchat"
//   },
//   {
//       "social_id": 12,
//       "social_name": "WhatsApp",
//       "social_url": "",
//       "social_icon": "fab fa-whatsapp"
//   }
// ]

// Alldata = {
//   "id": 1,
//   "logo": "logo.png",
//   "favicon": "favicon.png",
//   "footer_about": "<p></p>\r\n",
//   "footer_copyright": "Copyright HighCoderIT © 2022. All Rights Reserved. ", //
//   "contact_address": "Saudi Arabia,\r\nEgypt",  //
//   "contact_email": "FindMe@highcoder.com",   //
//   "contact_phone": "+966 54 080 5491",   //
//   "contact_fax": "",
//   "contact_map_iframe": "<iframe src=\"https://www.google.com/maps/embed\" width=\"600\" height=\"450\" frameborder=\"0\" style=\"border:0\" allowfullscreen></iframe>",
//   "receive_email": "findme@highcoder.com",
//   "receive_email_subject": "Visitor Email Message from FindMe",
//   "receive_email_thank_you_message": "Thank you for sending email. We will contact you shortly.", //
//   "forget_password_message": "A confirmation link is sent to your email address. You will get the password reset information in there.",
//   "total_recent_post_footer": "4",
//   "total_popular_post_footer": "4",
//   "total_recent_post_sidebar": "5",
//   "total_popular_post_sidebar": "5",
//   "total_featured_product_home": "4",
//   "total_latest_product_home": "4",
//   "total_popular_product_home": "4",
//   "meta_title_home": "Find Me - Keep Them Safe",  //
//   "meta_keyword_home": "findMe, Find Me",   //
//   "meta_description_home": "FindMe hepling you to keep your Family / Pets / Belongings safe.",  //
//   "banner_login": "banner_login.jpg",
//   "banner_registration": "banner_registration.jpg",
//   "banner_forget_password": "banner_forget_password.jpg",
//   "banner_reset_password": "banner_reset_password.jpg",
//   "banner_search": "banner_search.jpg",
//   "banner_cart": "banner_cart.jpg",
//   "banner_checkout": "banner_checkout.jpg",
//   "banner_product_category": "banner_product_category.jpg",
//   "banner_blog": "banner_blog.jpg",
//   "cta_title": "Welcome To Find Me Website",
//   "cta_content": "",
//   "cta_read_more_text": "Read More",
//   "cta_read_more_url": "#",
//   "cta_photo": "cta.jpg",
//   "featured_product_title": "Featured Products",
//   "featured_product_subtitle": "See all our featured products from here",
//   "latest_product_title": "Latest Products",
//   "latest_product_subtitle": "See all our latest products from here",
//   "popular_product_title": "Popular Products",
//   "popular_product_subtitle": "See all our popular products from here",
//   "testimonial_title": "Testimonials",
//   "testimonial_subtitle": "See what our clients tell about us",
//   "testimonial_photo": "testimonial.jpg",
//   "blog_title": "Latest Blog",
//   "blog_subtitle": "See all our latest articles and news from below",
//   "newsletter_text": "Sign-up to our newsletter for latest promotions and discounts.",
//   "paypal_email": "",
//   "stripe_public_key": "",
//   "stripe_secret_key": "",
//   "bank_detail": "Bank Name: ABC Bank\r\nAccount Number: 1222320234444\r\nBranch Name: NY Branch\r\nCountry: USA",
//   "before_head": "<!-- Google Analytics -->\r\n<!-- Global site tag (gtag.js) - Google Analytics -->\r\n<!-- Google Tag Manager -->\r\n<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':\r\nnew Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],\r\nj=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=\r\n'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);\r\n})(window,document,'script','dataLayer','GTM-WFCSGZR');</script>\r\n<!-- End Google Tag Manager -->\r\n\r\n",
//   "after_body": "<div id=\"fb-root\"></div>\r\n<script>(function(d, s, id) {\r\n  var js, fjs = d.getElementsByTagName(s)[0];\r\n  if (d.getElementById(id)) return;\r\n  js = d.createElement(s); js.id = id;\r\n  js.src = \"//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.10&appId=323620764400430\";\r\n  fjs.parentNode.insertBefore(js, fjs);\r\n}(document, 'script', 'facebook-jssdk'));</script>\r\n",
//   "before_body": "<!--<script type=\"text/javascript\">\r\nvar Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();\r\n(function(){\r\nvar s1=document.createElement(\"script\"),s0=document.getElementsByTagName(\"script\")[0];\r\ns1.async=true;\r\ns1.src='https://embed.tawk.to/5ae370d7227d3d7edc24cb96/default';\r\ns1.charset='UTF-8';\r\ns1.setAttribute('crossorigin','*');\r\ns0.parentNode.insertBefore(s1,s0);\r\n})();\r\n</script> -->\r\n\r\n<!-- Google Tag Manager (noscript) -->\r\n<noscript><iframe src=\"https://www.googletagmanager.com/ns.html?id=GTM-WFCSGZR\"\r\nheight=\"0\" width=\"0\" style=\"display:none;visibility:hidden\"></iframe></noscript>\r\n<!-- End Google Tag Manager (noscript) -->\r\n",
//   "home_service_on_off": "1",
//   "home_welcome_on_off": "1",
//   "home_featured_product_on_off": "0",
//   "home_latest_product_on_off": "1",
//   "home_popular_product_on_off": "1",
//   "home_testimonial_on_off": "1",
//   "home_blog_on_off": "1",
//   "newsletter_on_off": "0",
//   "ads_above_welcome_on_off": "1",
//   "ads_above_featured_product_on_off": "1",
//   "ads_above_latest_product_on_off": "1",
//   "ads_above_popular_product_on_off": "1",
//   "ads_above_testimonial_on_off": "1",
//   "ads_category_sidebar_on_off": "1",
//   "base_url": "https://findme.highcoder.com/Explore/",
//   "andorid_app_link": null,  //
//   "ios_app_link": null,     //
//   "web_services_url": "5.189.140.13",
//   "web_services_port": "8083",
//   "images_path": "https://findme.highcoder.com/Explore/assets/uploads/",
//   "setting_app": "WEB"
// }

  constructor( private dataApi: HomepageService , private messageService: MessageService) { }
  ngOnInit(): void {
    this.ConnectForm = new FormGroup({
      'fname':new FormControl('',[Validators.required]),
    })
  
   this.dataApi.getAllWebPage().subscribe(
    Response=>{
      console.log(Response)
      this.Alldata = Response;
         // getAllWebPage
   localStorage.setItem("meta_description_home" , this.Alldata.meta_description_home )
   localStorage.setItem("meta_keyword_home" ,  this.Alldata.meta_keyword_home )
   localStorage.setItem("meta_title_home" ,  this.Alldata.meta_title_home )

      
    },
      (error) => {
        console.log(error);
        // bootbox.alert({title: "<span style='color:#a33;font-weight: 500; font-size: 16px'>" + "Error message" + "</span>", message: "<span style='color:Black;font-weight: 500; font-size: 16px'>" +"" + "</span>"});
      }
   );


   this.dataApi.getAllWebsocial().subscribe(
    Response=>{
      console.log(Response)
      this.Alldatasocial = Response;
    });
  }

  onSubmit(){
   this.confirmMessage =  this.Alldata.receive_email_thank_you_message 
   this.messageService.add({severity:'success', summary: 'Success', detail: this.confirmMessage});

  }

}
