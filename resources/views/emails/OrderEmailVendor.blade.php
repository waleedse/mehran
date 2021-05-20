<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" lang="en-GB">
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
  <title>{{$title}}</title>
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>

  <style type="text/css">
    a[x-apple-data-detectors] {color: inherit !important;}
  </style>

</head>
<body style="margin: 0; padding: 0;">
  <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%">
    <tr>
      <td style="padding: 20px 0 30px 0;">

<table align="center" border="0" cellpadding="0" cellspacing="0" width="600" style="border-collapse: collapse; border: 1px solid #cccccc;">
  <tr>
    <td align="center" bgcolor="#f7f7f7" style="padding: 40px 0 30px 0;">
    
      <img src="http://mehran.firstfitness.org/images/site_logo.png" alt="Creating Email Magic." width="200" height="200" style="display: block;" />
    </td>
  </tr>
  <tr>
    <td bgcolor="#ffffff" style="padding: 40px 30px 40px 30px;">
      <table border="0" cellpadding="0" cellspacing="0" width="100%" style="border-collapse: collapse;">
        <tr>
          <td style="color: #153643; font-family: Arial, sans-serif;">
            <h1 style="font-size: 24px; margin: 0;">{{$title}}</h1>
          </td>
        </tr>
        <!-- <tr>
            <td>
            <h1 style="font-size: 24px; margin: 0;">Forgot Your Password ?</h1>
                
            </td>
        </tr> -->
        <tr>
          <td style="color: #153643; font-family: Arial, sans-serif;">
            <h4 style="font-size: 20px; margin: 0;">Order Details</h4>
          </td>
        </tr>
        <tr>
            <td style="color: #153643; font-family: Arial, sans-serif;">
            <h4 style="font-size: 16px; margin: 0;">Order Id: {{$order['id']}}</h4>
            </td>
          </tr>
        <tr>
          <td style="color: #153643; font-family: Arial, sans-serif;">
          <h4 style="font-size: 16px; margin: 0;"> Id: {{$order['cus_id']}}</h4>
          </td>
        </tr>
        <tr>
            <td style="color: #153643; font-family: Arial, sans-serif;">
            <h4 style="font-size: 16px; margin: 0;">Name: {{$order['fname']}} {{$order['lname']}}</h4>
            </td>
          </tr>
          <tr>
            <td style="color: #153643; font-family: Arial, sans-serif;">
            <h4 style="font-size: 16px; margin: 0;">Address: {{$order['address']}}</h4>
            </td>
          </tr>
          {{-- <tr>
            <td style="color: #153643; font-family: Arial, sans-serif;">
            <h4 style="font-size: 16px; margin: 0;">City: {{$order['city']}}</h4>
            </td>
          </tr> --}}
          <tr>
            <td style="color: #153643; font-family: Arial, sans-serif;">
            <h4 style="font-size: 16px; margin: 0;">Order Totals: {{$order['totals']}}</h4>
            </td>
          </tr>
      </table>
    </td>
  </tr>
</table>

      </td>
    </tr>
  </table>
</body>
</html>