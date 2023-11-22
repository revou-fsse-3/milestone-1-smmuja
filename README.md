# Moo Beauty
A Company Profile Website Template
- My first company profile website template
- Free of use (educational, commercial, other purposes), please continue reading 

## Deployed here:
https://moo-beauty.smmuja.com/
![Website Preview](assets/img/deploy/website-preview.png)


## This documentation include
- About the project
    - Feature
    - Design consideration
    - Site audit
    - How to clone
- Deployment
    - Netlify Deploy
    - Custom domain
- The Author

## About the Project
### Feature
- Home/main  
    Where your audience can get to know if your offer/services best suit their needs
- Promo/Offer Section  
To demonstrate ongoing promotional campaign
- Team Section  
To show credibility by showing the persons behind the scenes
- Blog/Article Section  
To show expertise in your industry
- Membership section  
To invite your audience to register and become a  member

### Design Consideration
- Dark Mode  
To accommodate people with different preferences and needs
![Light Mode](assets/img/deploy/website-light.png)  
![Light Mode](assets/img/deploy/website-light-1.png)  

![Dark Mode](assets/img/deploy/website-dark.png)  
![Dark Mode](assets/img/deploy/website-dark-1.png)  

- Mobile Responsiveness  
Adjust layout and visibility across multiple devices and screen sizes to ensure consistent layout and design, targeting mobile users
![Mobile](assets/img/deploy/website-mobile.png)  
- External dependencies and resources  
    - Icon : https://fontawesome.com/ 
    - Color Palette : https://colorhunt.co/ 
    - Image/illustration : https://www.pexels.com/ & https://www.canva.com/

### Site Audit 
![Lighthouse](assets/img/deploy/lighthouse.png)
- This site is audited using lighthouse to measure below benchmark
    - Performance  
    Mostly about following coding rules and resource optimization
    - Accessibility  
    Correct use of html tags so that site can be easily read by both bot and human
    - Best Practices  
     Measure things such as text visibility and correct image sizing to be displayed to audience
    - SEO  
    To make your website better crawlable by Search Engine and achieve better visibility
### How to Clone

You are free to use and edit the design according to your needs, and even deploy to your own hosting/server and custom domain  
Here's how :  
    1. Fork this project to your own directory  
    ![Fork](assets/img/deploy/git-fork.png)  
    2. Git clone to your local computer using https url from your own repository  
    ![Clone](assets/img/deploy/git-clone-url.png)  
    ![Clone 2](assets/img/deploy/git-clone-terminal.png)  
    ![Clone](assets/img/deploy/git-clone-vs-code.png)  
    3. Edit using VS Code or any application convenient to you  
    4. Push to your own repository  
        Use the following commands in your VS Code terminal  
        `git add .`  // To add/track all changes  
        `git commit -m "your-message"`  //To stage and compile all changes  
        `git push`  //To push and update to remote git repository  
    ![Push](assets/img/deploy/git-push.png)  
    ![Push](assets/img/deploy/git-push-1.png)  
    You can also use `git status` between those 3 commands to check your current git state, it doesn't change anything
    ![Push status](assets/img/deploy/git-push-status.png)

    5. Deploy (Elaborated more on the following section)  

Link : https://moo-beauty.smmuja.com/  


## Deployment

### Netlify Deploy
This project is deployed and hosted on Netlify.  Here's how
1. Create a Netlify account on https://www.netlify.com/
2. After account is created you will see the home dashboard here, go to "Add new site" section
![Netlify Add Site](assets/img/deploy/netlify-add-site.png)
3. We will use Github autodeploy, so let's choose Github
![Netlify Github](assets/img/deploy/netlify-github.png)
4. Choose the organization and repository you want to deploy
![Netlify Github Organization](assets/img/deploy/netlify-github-organisation.png)
5. Here we will use the default settings, so just go on and click "Deploy"
![Netlify Repository Deploy](assets/img/deploy/netlify-repository-deploy.png)
6. Yor site is accessible via Netlify subdomain
![Netlify Subdomain](assets/img/deploy/netlify-subdomain.png)


### Custom Domain 
1. Buy your own domain via https://niagahoster.co.id/
![Niagahoster Domain](assets/img/deploy/niagahoster-domain.png)
2. Go to Netlify > Domain Management > Input your custom domain
![Netlify Custom Domain](assets/img/deploy/netlify-custom-domain.png)
![Netlify Custom Domain](assets/img/deploy/netlify-custom-domain-add.png)
3. Get the DNS records from Netlify
![Netlify DNS](assets/img/deploy/netlify-dns-1.png)
![Netlify DNS](assets/img/deploy/netlify-dns-2.png)
4. Go to Niagahoster > DNS Management. Delete default DNS for A record and WWW CNAME record
![Niagahoster Delete DNS](assets/img/deploy/niagahoster-delete-dns-1.png)
![Niagahoster Delete DNS](assets/img/deploy/niagahoster-delete-dns-2.png)
5. Add the DNS record from Netlify
![Niagahoster Add DNS](assets/img/deploy/niagahoster-add-dns.png)
> And it's done actually. But you can also use CloudFlare DNS Management
6. Go to CloudFlare from https://cloudflare.com/
![Cloudflare Sign up](assets/img/deploy/cloudflare-signup.png)
7. Add your domain to CloudFlare
![Cloudflare domain  ](assets/img/deploy/cloudflare-add-domain.png)
![Cloudflare domain  ](assets/img/deploy/cloudflare-add-domain-2.png)
![Cloudflare domain  ](assets/img/deploy/cloudflare-add-domain-3.png)
8. Get CloudFlare name server
![Cloudflare domain  ](assets/img/deploy/cloudflare-nameserver.png)
9. Change the name server from Niagahoster DNS Management
![Niagahoster name server Cloudflare  ](assets/img/deploy/niagahoster-nameserver-cloudflare.png)
10. Add DNS record from Netlify to Cloudflare
![Cloudflare DNS Add  ](assets/img/deploy/cloudflare-dns-add.png)

11. Website is acessible using your own domain
![Netlify Website Custom Domain](assets/img/deploy/netlify-website-custom-domain.png)






# About the Author
> Get to know me better 👋🌸
## My Bio
```
Hi, Im Muja, an aspiring Software Engineer
Having interest in digital things from product to marketing, currently learning the technical side of the industry
```
## My Technical Skills :
1. Blogger :woman_mechanic:
2. Wordpress :globe_with_meridians:
3. cPanel :penguin:

## My Links
- Website: 
    - [zayanamuja.com](https://www.zayanamuja.com) : Personal Blog
    - [deardeadliner.com](https://www.deardeadliner.com) : Passion Project
- Github: [smmuja](https://github.com/smmuja)
- LinkedIn: [Muja S.](https://www.linkedin.com/in/smmuja/)

Basically I'm into many things, let's be friends 🌸
```
