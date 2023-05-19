# WEB-jeffersonmaglentecortes

## Instructions

- This project was developed using XAMPP Version 8.2.0
- To enable the application on local environment the app's url should be registered to the host file and xampp's vhost
- Place this code into xampp's vhost file registry (path: "\xampp\apache\conf\extra\httpd-vhosts.conf")

```
<VirtualHost *:443>
  DocumentRoot "D:\github-repositories\WEB-jeffersonmaglentecortes\public"
  ServerName pet-appointments.local.com
  ServerAlias pet-appointments.local.com
  SSLEngine On
  SSLCertificateFile "D:\Development Files\xampp\apache\crt\pet-appointments.local.com\server.crt"
  SSLCertificateKeyFile "D:\Development Files\xampp\apache\crt\pet-appointments.local.com\server.key"
  <Directory "D:\github-repositories\WEB-jeffersonmaglentecortes\public">
    Options Indexes FollowSymLinks
    AllowOverride All
    Order Allow,Deny
    Allow from all
    Require all granted

    RewriteEngine On

    # Handle Authorization Header
    RewriteCond %{HTTP:Authorization} .
    RewriteRule .* - [E=HTTP_AUTHORIZATION:%{HTTP:Authorization}]

    # Redirect Trailing Slashes If Not A Folder...
    RewriteCond %{REQUEST_FILENAME} !-d
    RewriteCond %{REQUEST_URI} (.+)/$
    RewriteRule ^ %1 [L,R=301]

    # Handle Front Controller...
    RewriteCond %{REQUEST_FILENAME} !-d
    RewriteCond %{REQUEST_FILENAME} !-f
    RewriteRule ^ index.php [L]
  </Directory>
</VirtualHost>
```
- Add app's url into hosts files of windows (path: "C:\Windows\System32\drivers\etc")

```
  127.0.0.1 pet-appointments.local.com
```

- Run XAMPP as administrator and then Start Apache and MySQL
- Configure local SQL database in `.env` file
- Create database with name `pet_appointments`
- Navigate to project path (example: "D:\github-repositories\WEB-jeffersonmaglentecortes") using CMD
- Input `php artisan migrate` into CLI
- Input `npm run dev` into CLI
- Verify if application is running by opening the app's local url (ex: "https://pet-appointments.local.com")
