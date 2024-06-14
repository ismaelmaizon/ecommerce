import sendEmail from "../mailer/mailer.js"

export const sendMail = async (req, res) => {

    const id = req.params.vid
    const user = req.body
    console.log('email:');
    console.log(user.email);
    console.log('id:');
    console.log(id);
    
    try{
        await sendEmail(user.email, 'codigo de venta', `
        <!DOCTYPE HTML PUBLIC "-//W3C//DTD XHTML 1.0 Transitional //EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
<head>
<!--[if gte mso 9]>
<xml>
  <o:OfficeDocumentSettings>
    <o:AllowPNG/>
    <o:PixelsPerInch>96</o:PixelsPerInch>
  </o:OfficeDocumentSettings>
</xml>
<![endif]-->
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="x-apple-disable-message-reformatting">
  <!--[if !mso]><!--><meta http-equiv="X-UA-Compatible" content="IE=edge"><!--<![endif]-->
  <title></title>
  
    <style type="text/css">
      @media only screen and (min-width: 620px) {
  .u-row {
    width: 600px !important;
  }
  .u-row .u-col {
    vertical-align: top;
  }

  .u-row .u-col-18 {
    width: 108px !important;
  }

  .u-row .u-col-18p34 {
    width: 110.04px !important;
  }

  .u-row .u-col-63p66 {
    width: 381.96px !important;
  }

  .u-row .u-col-100 {
    width: 600px !important;
  }

}

@media (max-width: 620px) {
  .u-row-container {
    max-width: 100% !important;
    padding-left: 0px !important;
    padding-right: 0px !important;
  }
  .u-row .u-col {
    min-width: 320px !important;
    max-width: 100% !important;
    display: block !important;
  }
  .u-row {
    width: 100% !important;
  }
  .u-col {
    width: 100% !important;
  }
  .u-col > div {
    margin: 0 auto;
  }
}
body {
  margin: 0;
  padding: 0;
}

table,
tr,
td {
  vertical-align: top;
  border-collapse: collapse;
}

p {
  margin: 0;
}

.ie-container table,
.mso-container table {
  table-layout: fixed;
}

* {
  line-height: inherit;
}

a[x-apple-data-detectors='true'] {
  color: inherit !important;
  text-decoration: none !important;
}

table, td { color: #000000; } #u_body a { color: #cca250; text-decoration: none; } @media (max-width: 480px) { #u_content_image_3 .v-container-padding-padding { padding: 46px 10px 10px !important; } #u_content_image_3 .v-src-width { width: auto !important; } #u_content_image_3 .v-src-max-width { max-width: 29% !important; } #u_content_heading_3 .v-container-padding-padding { padding: 10px 20px !important; } #u_content_heading_3 .v-font-size { font-size: 28px !important; } #u_content_text_3 .v-container-padding-padding { padding: 10px 22px 26px !important; } #u_content_heading_2 .v-container-padding-padding { padding: 22px 22px 10px !important; } #u_content_heading_2 .v-font-size { font-size: 24px !important; } }
    </style>
  
  

<!--[if !mso]><!--><link href="https://fonts.googleapis.com/css?family=Montserrat:400,700&display=swap" rel="stylesheet" type="text/css"><!--<![endif]-->

</head>

<body class="clean-body u_body" style="margin: 0;padding: 0;-webkit-text-size-adjust: 100%;background-color: #f9f9f9;color: #000000">
  <!--[if IE]><div class="ie-container"><![endif]-->
  <!--[if mso]><div class="mso-container"><![endif]-->
  <table id="u_body" style="border-collapse: collapse;table-layout: fixed;border-spacing: 0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;vertical-align: top;min-width: 320px;Margin: 0 auto;background-color: #f9f9f9;width:100%" cellpadding="0" cellspacing="0">
  <tbody>
  <tr style="vertical-align: top">
    <td style="word-break: break-word;border-collapse: collapse !important;vertical-align: top">
    <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td align="center" style="background-color: #f9f9f9;"><![endif]-->
    
  
  
<div class="u-row-container" style="padding: 0px;background-color: transparent">
  <div class="u-row" style="margin: 0 auto;min-width: 320px;max-width: 600px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: #111114;">
    <div style="border-collapse: collapse;display: table;width: 100%;height: 100%;background-color: transparent;">
      <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:600px;"><tr style="background-color: #111114;"><![endif]-->
      
<!--[if (mso)|(IE)]><td align="center" width="600" style="width: 600px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;" valign="top"><![endif]-->
<div class="u-col u-col-100" style="max-width: 320px;min-width: 600px;display: table-cell;vertical-align: top;">
  <div style="height: 100%;width: 100% !important;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;">
  <!--[if (!mso)&(!IE)]><!--><div style="box-sizing: border-box; height: 100%; padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;"><!--<![endif]-->
  
<table style="font-family:'Montserrat',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
  <tbody>
    <tr>
      <td class="v-container-padding-padding" style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:'Montserrat',sans-serif;" align="left">
        
  <div class="v-font-size" style="font-size: 25px; line-height: 350%; text-align: center; word-wrap: break-word;">
    <p style="line-height: 350%;"><span style="color: #ffffff; line-height: 49px;">                Artelier Bodereau            </span></p>
  </div>

      </td>
    </tr>
  </tbody>
</table>

  <!--[if (!mso)&(!IE)]><!--></div><!--<![endif]-->
  </div>
</div>
<!--[if (mso)|(IE)]></td><![endif]-->
      <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
    </div>
  </div>
  </div>
  


  
  
<div class="u-row-container" style="padding: 0px;background-color: transparent">
  <div class="u-row" style="margin: 0 auto;min-width: 320px;max-width: 600px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: transparent;">
    <div style="border-collapse: collapse;display: table;width: 100%;height: 100%;background-color: transparent;">
      <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:600px;"><tr style="background-color: transparent;"><![endif]-->
      
<!--[if (mso)|(IE)]><td align="center" width="600" style="background-color: #fffefe;width: 600px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;" valign="top"><![endif]-->
<div class="u-col u-col-100" style="max-width: 320px;min-width: 600px;display: table-cell;vertical-align: top;">
  <div style="background-color: #fffefe;height: 100%;width: 100% !important;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;">
  <!--[if (!mso)&(!IE)]><!--><div style="box-sizing: border-box; height: 100%; padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;"><!--<![endif]-->
  
<table id="u_content_image_3" style="font-family:'Montserrat',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
  <tbody>
    <tr>
      <td class="v-container-padding-padding" style="overflow-wrap:break-word;word-break:break-word;padding:55px 10px 10px;font-family:'Montserrat',sans-serif;" align="left">
        
<table width="100%" cellpadding="0" cellspacing="0" border="0">
  <tr>
    <td style="padding-right: 0px;padding-left: 0px;" align="center">
      
      <img align="center" border="0" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAnYAAAJ1CAYAAABUwL1XAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6N0E3MjU4MDI0NTFBMTFFQzk1MzdCODcyQjg1MDBDQzMiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6N0E3MjU4MDM0NTFBMTFFQzk1MzdCODcyQjg1MDBDQzMiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo3QTcyNTgwMDQ1MUExMUVDOTUzN0I4NzJCODUwMENDMyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo3QTcyNTgwMTQ1MUExMUVDOTUzN0I4NzJCODUwMENDMyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PvllrRYAAFR3SURBVHja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" alt="Tick Icon" title="Tick Icon" style="outline: none;text-decoration: none;-ms-interpolation-mode: bicubic;clear: both;display: inline-block !important;border: none;height: auto;float: none;width: 14%;max-width: 81.2px;" width="81.2" class="v-src-width v-src-max-width"/>
      
    </td>
  </tr>
</table>

      </td>
    </tr>
  </tbody>
</table>

<table id="u_content_heading_3" style="font-family:'Montserrat',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
  <tbody>
    <tr>
      <td class="v-container-padding-padding" style="overflow-wrap:break-word;word-break:break-word;padding:10px 55px;font-family:'Montserrat',sans-serif;" align="left">
        
  <!--[if mso]><table width="100%"><tr><td><![endif]-->
    <h1 class="v-font-size" style="margin: 0px; line-height: 160%; text-align: center; word-wrap: break-word; font-family: 'Montserrat',sans-serif; font-size: 33px; font-weight: 400;"><span><strong>Muchas gracias por confiar en nosotros</strong></span></h1>
  <!--[if mso]></td></tr></table><![endif]-->

      </td>
    </tr>
  </tbody>
</table>

<table id="u_content_text_3" style="font-family:'Montserrat',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
  <tbody>
    <tr>
      <td class="v-container-padding-padding" style="overflow-wrap:break-word;word-break:break-word;padding:10px 60px 50px;font-family:'Montserrat',sans-serif;" align="left">
        
  <div class="v-font-size" style="font-size: 14px; color: #444444; line-height: 170%; text-align: center; word-wrap: break-word;">
    <p style="font-size: 14px; line-height: 170%;"><span style="font-size: 16px; line-height: 27.2px;">con el siguiente <strong>codigo</strong> podras pasar a retirar tu producto por nuestos locales</span></p>
  </div>

      </td>
    </tr>
  </tbody>
</table>

  <!--[if (!mso)&(!IE)]><!--></div><!--<![endif]-->
  </div>
</div>
<!--[if (mso)|(IE)]></td><![endif]-->
      <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
    </div>
  </div>
  </div>
  


  
  
<div class="u-row-container" style="padding: 0px;background-color: transparent">
  <div class="u-row" style="margin: 0 auto;min-width: 320px;max-width: 600px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: #ffffff;">
    <div style="border-collapse: collapse;display: table;width: 100%;height: 100%;background-color: transparent;">
      <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:600px;"><tr style="background-color: #ffffff;"><![endif]-->
      
<!--[if (mso)|(IE)]><td align="center" width="108" style="width: 108px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;" valign="top"><![endif]-->
<div class="u-col u-col-18" style="max-width: 320px;min-width: 108px;display: table-cell;vertical-align: top;">
  <div style="height: 100%;width: 100% !important;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;">
  <!--[if (!mso)&(!IE)]><!--><div style="box-sizing: border-box; height: 100%; padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;"><!--<![endif]-->
  
<table style="font-family:'Montserrat',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
  <tbody>
    <tr>
      <td class="v-container-padding-padding" style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:'Montserrat',sans-serif;" align="left">
        
  <table height="0px" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="border-collapse: collapse;table-layout: fixed;border-spacing: 0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;vertical-align: top;border-top: 0px solid #ffffff;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%">
    <tbody>
      <tr style="vertical-align: top">
        <td style="word-break: break-word;border-collapse: collapse !important;vertical-align: top;font-size: 0px;line-height: 0px;mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%">
          <span>&#160;</span>
        </td>
      </tr>
    </tbody>
  </table>

      </td>
    </tr>
  </tbody>
</table>

  <!--[if (!mso)&(!IE)]><!--></div><!--<![endif]-->
  </div>
</div>
<!--[if (mso)|(IE)]></td><![endif]-->
<!--[if (mso)|(IE)]><td align="center" width="379" style="background-color: #cca250;width: 379px;padding: 20px;border-top: 1px solid #CCC;border-left: 1px solid #CCC;border-right: 1px solid #CCC;border-bottom: 1px solid #CCC;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;" valign="top"><![endif]-->
<div class="u-col u-col-63p66" style="max-width: 320px;min-width: 381.96px;display: table-cell;vertical-align: top;">
  <div style="background-color: #cca250;height: 100%;width: 100% !important;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;">
  <!--[if (!mso)&(!IE)]><!--><div style="box-sizing: border-box; height: 100%; padding: 20px;border-top: 1px solid #CCC;border-left: 1px solid #CCC;border-right: 1px solid #CCC;border-bottom: 1px solid #CCC;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;"><!--<![endif]-->
  
<table style="font-family:'Montserrat',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
  <tbody>
    <tr>
      <td class="v-container-padding-padding" style="overflow-wrap:break-word;word-break:break-word;padding:0px;font-family:'Montserrat',sans-serif;" align="left">
        
  <!--[if mso]><table width="100%"><tr><td><![endif]-->
    <h1 class="v-font-size" style="margin: 0px; color: #ffffff; line-height: 160%; text-align: center; word-wrap: break-word; font-family: 'Montserrat',sans-serif; font-size: 20px; font-weight: 400;"><span><strong>Locales:</strong></span></h1>
  <!--[if mso]></td></tr></table><![endif]-->

      </td>
    </tr>
  </tbody>
</table>

<table style="font-family:'Montserrat',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
  <tbody>
    <tr>
      <td class="v-container-padding-padding" style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:'Montserrat',sans-serif;" align="left">
        
  <div class="v-font-size" style="font-size: 14px; color: #f1f8f5; line-height: 200%; text-align: left; word-wrap: break-word;">
    <p style="font-size: 14px; line-height: 200%;"><span style="color: #f7e1b5; font-size: 14px; line-height: 28px;"><strong><span style="font-size: 14px; line-height: 28px;">✓</span></strong> </span> Recta martinonlli 1253</p>
<p style="font-size: 14px; line-height: 200%;"><span style="color: #f7e1b5; font-size: 14px; line-height: 28px;"><strong>✓</strong></span>  Ricardo rojas 3596</p>
<p style="font-size: 14px; line-height: 200%;"><span style="color: #f7e1b5; font-size: 14px; line-height: 28px;">✓</span>  Donato Alvares 9513</p>
  </div>

      </td>
    </tr>
  </tbody>
</table>

  <!--[if (!mso)&(!IE)]><!--></div><!--<![endif]-->
  </div>
</div>
<!--[if (mso)|(IE)]></td><![endif]-->
<!--[if (mso)|(IE)]><td align="center" width="110" style="width: 110px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;" valign="top"><![endif]-->
<div class="u-col u-col-18p34" style="max-width: 320px;min-width: 110.04px;display: table-cell;vertical-align: top;">
  <div style="height: 100%;width: 100% !important;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;">
  <!--[if (!mso)&(!IE)]><!--><div style="box-sizing: border-box; height: 100%; padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;"><!--<![endif]-->
  
<table style="font-family:'Montserrat',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
  <tbody>
    <tr>
      <td class="v-container-padding-padding" style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:'Montserrat',sans-serif;" align="left">
        
  <table height="0px" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="border-collapse: collapse;table-layout: fixed;border-spacing: 0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;vertical-align: top;border-top: 0px solid #ffffff;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%">
    <tbody>
      <tr style="vertical-align: top">
        <td style="word-break: break-word;border-collapse: collapse !important;vertical-align: top;font-size: 0px;line-height: 0px;mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%">
          <span>&#160;</span>
        </td>
      </tr>
    </tbody>
  </table>

      </td>
    </tr>
  </tbody>
</table>

  <!--[if (!mso)&(!IE)]><!--></div><!--<![endif]-->
  </div>
</div>
<!--[if (mso)|(IE)]></td><![endif]-->
      <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
    </div>
  </div>
  </div>
  


  
  
<div class="u-row-container" style="padding: 0px;background-color: transparent">
  <div class="u-row" style="margin: 0 auto;min-width: 320px;max-width: 600px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: #ffffff;">
    <div style="border-collapse: collapse;display: table;width: 100%;height: 100%;background-color: transparent;">
      <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:600px;"><tr style="background-color: #ffffff;"><![endif]-->
      
<!--[if (mso)|(IE)]><td align="center" width="600" style="width: 600px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;" valign="top"><![endif]-->
<div class="u-col u-col-100" style="max-width: 320px;min-width: 600px;display: table-cell;vertical-align: top;">
  <div style="height: 100%;width: 100% !important;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;">
  <!--[if (!mso)&(!IE)]><!--><div style="box-sizing: border-box; height: 100%; padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;"><!--<![endif]-->
  
<table id="u_content_heading_2" style="font-family:'Montserrat',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
  <tbody>
    <tr>
      <td class="v-container-padding-padding" style="overflow-wrap:break-word;word-break:break-word;padding:40px 55px 10px;font-family:'Montserrat',sans-serif;" align="left">
        
  <!--[if mso]><table width="100%"><tr><td><![endif]-->
    <h1 class="v-font-size" style="margin: 0px; line-height: 160%; text-align: center; word-wrap: break-word; font-family: 'Montserrat',sans-serif; font-size: 26px; font-weight: 400;"><span><strong>${id}</strong></span></h1>
  <!--[if mso]></td></tr></table><![endif]-->

      </td>
    </tr>
  </tbody>
</table>

<table style="font-family:'Montserrat',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
  <tbody>
    <tr>
      <td class="v-container-padding-padding" style="overflow-wrap:break-word;word-break:break-word;padding:10px 10px 50px;font-family:'Montserrat',sans-serif;" align="left">
        
  <!--[if mso]><style>.v-button {background: transparent !important;}</style><![endif]-->
<div align="center">
  <!--[if mso]><v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" href="https://www.google.com" style="height:47px; v-text-anchor:middle; width:193px;" arcsize="8.5%"  stroke="f" fillcolor="#cca250"><w:anchorlock/><center style="color:#FFFFFF;"><![endif]-->
    <a href="https://www.google.com" target="_blank" class="v-button v-font-size" style="box-sizing: border-box;display: inline-block;text-decoration: none;-webkit-text-size-adjust: none;text-align: center;color: #FFFFFF; background-color: #cca250; border-radius: 4px;-webkit-border-radius: 4px; -moz-border-radius: 4px; width:auto; max-width:100%; overflow-wrap: break-word; word-break: break-word; word-wrap:break-word; mso-border-alt: none;font-size: 14px;">
      <span style="display:block;padding:14px 33px;line-height:120%;"><strong><span style="font-size: 16px; line-height: 19.2px;">ir a sitio web →</span></strong></span>
    </a>
    <!--[if mso]></center></v:roundrect><![endif]-->
</div>

      </td>
    </tr>
  </tbody>
</table>

  <!--[if (!mso)&(!IE)]><!--></div><!--<![endif]-->
  </div>
</div>
<!--[if (mso)|(IE)]></td><![endif]-->
      <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
    </div>
  </div>
  </div>
  


  
  
<div class="u-row-container" style="padding: 0px;background-color: transparent">
  <div class="u-row" style="margin: 0 auto;min-width: 320px;max-width: 600px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: #111114;">
    <div style="border-collapse: collapse;display: table;width: 100%;height: 100%;background-color: transparent;">
      <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:600px;"><tr style="background-color: #111114;"><![endif]-->
      
<!--[if (mso)|(IE)]><td align="center" width="600" style="width: 600px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;" valign="top"><![endif]-->
<div class="u-col u-col-100" style="max-width: 320px;min-width: 600px;display: table-cell;vertical-align: top;">
  <div style="height: 100%;width: 100% !important;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;">
  <!--[if (!mso)&(!IE)]><!--><div style="box-sizing: border-box; height: 100%; padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;"><!--<![endif]-->
  
<table style="font-family:'Montserrat',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
  <tbody>
    <tr>
      <td class="v-container-padding-padding" style="overflow-wrap:break-word;word-break:break-word;padding:32px 10px 0px;font-family:'Montserrat',sans-serif;" align="left">
        
  <div class="v-font-size" style="font-size: 14px; color: #ffffff; line-height: 140%; text-align: center; word-wrap: break-word;">
    <p style="font-size: 14px; line-height: 140%;"><span style="font-size: 18px; line-height: 25.2px;"><strong>Company Name</strong></span></p>
  </div>

      </td>
    </tr>
  </tbody>
</table>

<table style="font-family:'Montserrat',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
  <tbody>
    <tr>
      <td class="v-container-padding-padding" style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:'Montserrat',sans-serif;" align="left">
        
  <div class="v-font-size" style="font-size: 14px; color: #b0b1b4; line-height: 180%; text-align: center; word-wrap: break-word;">
    <p style="font-size: 14px; line-height: 180%;">123 San Francisco, CA. United States</p>
<p style="font-size: 14px; line-height: 180%;">123-456-7890</p>
  </div>

      </td>
    </tr>
  </tbody>
</table>

<table style="font-family:'Montserrat',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
  <tbody>
    <tr>
      <td class="v-container-padding-padding" style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:'Montserrat',sans-serif;" align="left">
        
<div align="center">
  <div style="display: table; max-width:211px;">
  <!--[if (mso)|(IE)]><table width="211" cellpadding="0" cellspacing="0" border="0"><tr><td style="border-collapse:collapse;" align="center"><table width="100%" cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse; mso-table-lspace: 0pt;mso-table-rspace: 0pt; width:211px;"><tr><![endif]-->
  
    
    <!--[if (mso)|(IE)]><td width="32" style="width:32px; padding-right: 21px;" valign="top"><![endif]-->
    <table align="left" border="0" cellspacing="0" cellpadding="0" width="32" height="32" style="width: 32px !important;height: 32px !important;display: inline-block;border-collapse: collapse;table-layout: fixed;border-spacing: 0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;vertical-align: top;margin-right: 21px">
      <tbody><tr style="vertical-align: top"><td align="left" valign="middle" style="word-break: break-word;border-collapse: collapse !important;vertical-align: top">
        <a href="https://facebook.com/" title="Facebook" target="_blank">
          <img src="data:image/png;base64,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" alt="Facebook" title="Facebook" width="32" style="outline: none;text-decoration: none;-ms-interpolation-mode: bicubic;clear: both;display: block !important;border: none;height: auto;float: none;max-width: 32px !important">
        </a>
      </td></tr>
    </tbody></table>
    <!--[if (mso)|(IE)]></td><![endif]-->
    
    <!--[if (mso)|(IE)]><td width="32" style="width:32px; padding-right: 21px;" valign="top"><![endif]-->
    <table align="left" border="0" cellspacing="0" cellpadding="0" width="32" height="32" style="width: 32px !important;height: 32px !important;display: inline-block;border-collapse: collapse;table-layout: fixed;border-spacing: 0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;vertical-align: top;margin-right: 21px">
      <tbody><tr style="vertical-align: top"><td align="left" valign="middle" style="word-break: break-word;border-collapse: collapse !important;vertical-align: top">
        <a href="https://twitter.com/" title="Twitter" target="_blank">
          <img src="data:image/png;base64,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" alt="Twitter" title="Twitter" width="32" style="outline: none;text-decoration: none;-ms-interpolation-mode: bicubic;clear: both;display: block !important;border: none;height: auto;float: none;max-width: 32px !important">
        </a>
      </td></tr>
    </tbody></table>
    <!--[if (mso)|(IE)]></td><![endif]-->
    
    <!--[if (mso)|(IE)]><td width="32" style="width:32px; padding-right: 21px;" valign="top"><![endif]-->
    <table align="left" border="0" cellspacing="0" cellpadding="0" width="32" height="32" style="width: 32px !important;height: 32px !important;display: inline-block;border-collapse: collapse;table-layout: fixed;border-spacing: 0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;vertical-align: top;margin-right: 21px">
      <tbody><tr style="vertical-align: top"><td align="left" valign="middle" style="word-break: break-word;border-collapse: collapse !important;vertical-align: top">
        <a href="https://instagram.com/" title="Instagram" target="_blank">
          <img src="data:image/png;base64,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" alt="Instagram" title="Instagram" width="32" style="outline: none;text-decoration: none;-ms-interpolation-mode: bicubic;clear: both;display: block !important;border: none;height: auto;float: none;max-width: 32px !important">
        </a>
      </td></tr>
    </tbody></table>
    <!--[if (mso)|(IE)]></td><![endif]-->
    
    <!--[if (mso)|(IE)]><td width="32" style="width:32px; padding-right: 0px;" valign="top"><![endif]-->
    <table align="left" border="0" cellspacing="0" cellpadding="0" width="32" height="32" style="width: 32px !important;height: 32px !important;display: inline-block;border-collapse: collapse;table-layout: fixed;border-spacing: 0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;vertical-align: top;margin-right: 0px">
      <tbody><tr style="vertical-align: top"><td align="left" valign="middle" style="word-break: break-word;border-collapse: collapse !important;vertical-align: top">
        <a href="https://linkedin.com/" title="LinkedIn" target="_blank">
          <img src="data:image/png;base64,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" alt="LinkedIn" title="LinkedIn" width="32" style="outline: none;text-decoration: none;-ms-interpolation-mode: bicubic;clear: both;display: block !important;border: none;height: auto;float: none;max-width: 32px !important">
        </a>
      </td></tr>
    </tbody></table>
    <!--[if (mso)|(IE)]></td><![endif]-->
    
    
    <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
  </div>
</div>

      </td>
    </tr>
  </tbody>
</table>

<table style="font-family:'Montserrat',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
  <tbody>
    <tr>
      <td class="v-container-padding-padding" style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:'Montserrat',sans-serif;" align="left">
        
  <table height="0px" align="center" border="0" cellpadding="0" cellspacing="0" width="82%" style="border-collapse: collapse;table-layout: fixed;border-spacing: 0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;vertical-align: top;border-top: 1px solid #9495a7;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%">
    <tbody>
      <tr style="vertical-align: top">
        <td style="word-break: break-word;border-collapse: collapse !important;vertical-align: top;font-size: 0px;line-height: 0px;mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%">
          <span>&#160;</span>
        </td>
      </tr>
    </tbody>
  </table>

      </td>
    </tr>
  </tbody>
</table>

<table style="font-family:'Montserrat',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
  <tbody>
    <tr>
      <td class="v-container-padding-padding" style="overflow-wrap:break-word;word-break:break-word;padding:0px 10px 13px;font-family:'Montserrat',sans-serif;" align="left">
        
  <div class="v-font-size" style="font-size: 14px; color: #b0b1b4; line-height: 180%; text-align: center; word-wrap: break-word;">
    <p style="font-size: 14px; line-height: 180%;">&copy; 20XX All Rights Reserved</p>
  </div>

      </td>
    </tr>
  </tbody>
</table>

  <!--[if (!mso)&(!IE)]><!--></div><!--<![endif]-->
  </div>
</div>
<!--[if (mso)|(IE)]></td><![endif]-->
      <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
    </div>
  </div>
  </div>
  


    <!--[if (mso)|(IE)]></td></tr></table><![endif]-->
    </td>
  </tr>
  </tbody>
  </table>
  <!--[if mso]></div><![endif]-->
  <!--[if IE]></div><![endif]-->
</body>

</html>

                `)
        res.send({status: 200, message: 'email enviado'})
    }catch(err){
        res.send({status: 400, message: 'problemas el enviar email', response: err})
    }
    
}