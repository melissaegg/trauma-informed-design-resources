# Design Resources Template

[Ethical Design Resources](https://www.ethicaldesignresources.com/) was created by [Lexi Namer](https://lexinamer.com/) using HTML, CSS, and JS and Google Sheets as a JSON database. It is hosted on Github Pages using a Google Domains URL. This template and guide was set up after multiple requests from people wanting to create a resource website of their own. This is an open access project and duplications and modifications are encouraged and allowed.  

*If you find this site helpful and create something, I'd love to [hear about it](mailto:lexinamer@gmail.com)!* 

<img src="https://raw.githubusercontent.com/lexinamer/design-resources-template/main/assets/instruction-screenshots/edr.gif" width="500px" align="center">

# Step-By-Step Instructions
## What You Need
Setting up a site does require editing code but screenshots and step-by-step instructions are included to make it easier to set  up. The beauty of this format is that once the initial site is set up and working, you don't have to touch the code again. Adding new resources or categories on the Google Sheet will automatically update the website. 

- Github.com account
- Google.com account
- Custom domain name (optional)

## Setting Up the Google Files
**1** • Go to `File` and `Make a Copy` of the [Design Resources Template Google Sheet](https://docs.google.com/spreadsheets/d/1Omi_Ldrad5sl8Cb6f63MzrztJYZEEHuSaDw6r10FQH0/edit#gid=491768717)

<img src="https://raw.githubusercontent.com/lexinamer/design-resources-template/main/assets/instruction-screenshots/1-googlesheet.png" width="400px">

**2** • Change the document title but **DO NOT CHANGE THE COLUMN NAMES**

**3** • Create a Google Form for additional submissions ([here is ours for inspo](https://docs.google.com/forms/d/e/1FAIpQLSd-2SAtuNmLysyr_SS41rxinLnzGHSnVZqLqWAVg9HCSg-_jw/viewform))

**4** • Click `Share` and change so that `Anyone with the Link` can view on both files

<img src="https://raw.githubusercontent.com/lexinamer/design-resources-template/main/assets/instruction-screenshots/2-share.png" width="400px">

**5** • Copy the Google Sheet Page ID from the URL

<img src="https://raw.githubusercontent.com/lexinamer/design-resources-template/main/assets/instruction-screenshots/8.5-sheeturl.png" width="400px">

## Get an API key from Google
You need to get an API key from Google in order to make the Google Sheet be accessible in the data format needed to be read by the website. Here is some additional information on [API Keys](https://raw.githubusercontent.com/lexinamer/design-resources-template/main/assets/instruction-screenshots/2-share.png). 

**1** • Sign into Google and go to your account [credentials page](https://console.cloud.google.com/project/_/google/maps-apis/credentials?_ga=2.43855205.1104558936.1664542722-399411363.1664542722)

**2** • Create a `New Project` and give it any name you want

<img src="https://raw.githubusercontent.com/lexinamer/design-resources-template/main/assets/instruction-screenshots/3-createproject.png" width="400px">

**3** • Click on `Create Credentials` and select `API Key`

<img src="https://raw.githubusercontent.com/lexinamer/design-resources-template/main/assets/instruction-screenshots/4-createapi.png" width="400px">

**4** • Once the API is created, `copy to clipboard` and save it somewhere for later use

<img src="https://raw.githubusercontent.com/lexinamer/design-resources-template/main/assets/instruction-screenshots/5-getapikey.png" width="400px">

## Duplicate the Github repo from the template
Github is a website and cloud-based service that helps developers and others store and manage their code, as well as track and control changes to their code. A repository is a place that contains all of your project's files and each file's revision history.

**1** • Go to the Github Template and select `Use this Template`

<img src="https://raw.githubusercontent.com/lexinamer/design-resources-template/main/assets/instruction-screenshots/6-duperepo.png" width="400px">

**2** • Give your project a name and click `Create repository from template` 

<img src="https://raw.githubusercontent.com/lexinamer/design-resources-template/main/assets/instruction-screenshots/7-newrepo.png" width="400px">

## Set up the Files
In order to make your website work, you must edit some of the files and replace the placeholder data with your project information. All of these edits can be made directly on your Github repo.
 
**1** • From the root of your repo, click the `Scripts` folder and select the `script.js` file

<img src="https://raw.githubusercontent.com/lexinamer/design-resources-template/main/assets/instruction-screenshots/8-selectfiles.png" width="400px">
 
**2** • Select the pencil icon to edit the file 

<img src="https://raw.githubusercontent.com/lexinamer/design-resources-template/main/assets/instruction-screenshots/9-editfile.png" width="400px">

**3** • Change the placeholder ID [Google Sheet URL] and KEY [API Key] on lines 7 and 8 to the your copied information. Make sure to only edit the copy between the `' '` and leave no spaces.

<img src="https://raw.githubusercontent.com/lexinamer/design-resources-template/main/assets/instruction-screenshots/10-makechanges.png" width="400px">

**4** • Save your changes by clicking `Commit`

<img src="https://raw.githubusercontent.com/lexinamer/design-resources-template/main/assets/instruction-screenshots/11-commit.png" width="400px">

**5** • Repeat steps 1-3 for the `index.html` file on slides 5, 16, 18, and 29.

**6** • If using a custom domain name, repeat steps 1-3 for the `CNAME` file with your custom url (must purchase separately).

## Set Up A More Viewer Friendly URL 
Github pages is a free hosting service that takes your files straight from a repository on GitHub and publishes a website. It allows your website to be viewed by anyone using a domain name. Once you complete steps 1-2, your website should be viewable at: `yourusername.github.io/repo-name`. Note that is might take a while to go live.


**1** • On your repository, go to `Settings` and select the `Pages` tab

<img src="https://raw.githubusercontent.com/lexinamer/design-resources-template/main/assets/instruction-screenshots/12-pages.png" width="400px">

**2** • Set the `branch` to main and click `save`

<img src="https://raw.githubusercontent.com/lexinamer/design-resources-template/main/assets/instruction-screenshots/13-setbranch.png" width="400px">

**3** • OPTIONAL: If you are using a custom domain, add it here and click `save`

<img src="https://raw.githubusercontent.com/lexinamer/design-resources-template/main/assets/instruction-screenshots/14-customurl.png" width="400px">

## Set Up Custom Domain (Optional)
A custom domain or URL  is what appears on the browser and represents the unique name of the website you are visiting. In order to set up a custom domain such as www.ethicaldesignresources.com you must purchase one from a domain provider. If you are having trouble with this section, refer to this [troubleshooting guide.](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/troubleshooting-custom-domains-and-github-pages) 

**1** • Purchase a custom domain (we recommend [Google Domains](https://domains.google/))

**2** • Point `A` records to the following Github names so that it connects your domain. 
`185.199.108.153`
`185.199.109.153`
`185.199.110.153`
`185.199.111.153`

**3** • Watch the magic happen! 
