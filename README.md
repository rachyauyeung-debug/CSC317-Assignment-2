## CSC-317 - Assignment 2 - HTML (Individual Assignment)

This is an individual assignment. You may work with others to research how to do the assignment, but each person should code their own version and make their own submission.

Create a website entirely in valid HTML5 on any *class appropriate* topic -- I intend to show these in class.

This can be vanity page about yourself, a fan page about another person or band, or a hobby site showcasing your hobbies and interests. The focus is to get the skeleton of an HTML page and learn how to link between them and managing multiple files. You may add minimal CSS if you would like, but avoid adding Javascript yet.

The site must be coded by hand. i.e. No using HTML generators, AI, templates, frameworks, or anything other than your own typing of code, for now. We will have more opportunity to use AI later, but for this assignmnet I want you get experience creating your own site from scratch, "*by hand*".

The site must have a *Home* page (***usually index.html because it is the default entry page that most web servers will serve by default***), an *About* page, and a *Contact* page. 

You should be able to *navigate* from any page on the site to any other page of the site. *Layout* and *navigation* should be consistent from page to page.

**_The home page:_**  has to have a nice look and at least 3 images on it. Change the background color and font to something appealing. Use a color scheme picker! 

**_The about page:_**  should have the same navigation to the home page and information about the site (or about you, hobbies, interests...).

**_The contact page:_**  should have an HTML `<form></form>` in it, but it will not do anything yet (no submission), but it should have at least the following fields:
> 		First Name
> 		Last Name
> 		Email Address
> 		Street Address
> 		City
> 		State (drop down)
> 		ZipCode
> 		Password
		
Then it should have at **_least 4 more fields_** you decide.

The fields should be laid out in a user friendly fashion and be appropriate type fields with appropriate HTML error checking (basic HTML5 form validation constraints is enough for now). Note the State field should have *all states*. One trick to do this is search Google for "html select input for all 50 states", then copy and paste that blob. This is allowed.

**_Extra Credit:_**	Add additional relevant pages to your site that contain unique elements (such as an FAQ page), and add them to the navigation.

Submission:  
- Push your code to the github repoository
- Submit the PDF writeup (use the template) in Canvas

To push your code:
- `git add -A .`
- `git commit -m "some message"`
- `git push`

### **Rubric**

| Grade Item        | Grade Points                                |
|:------------------|--------------------------------------------:|
| Proper name, ID, and GitHub ID in writeup  | 3                                           |
| Layout of Site | 15                                          |
| Correctness of HTML     | 15                                           |
| Home Page     | 10                                           |
| About Page     | 5                                           |
| Contact Page Page     | 20                                           |
| Extra Credit     | 5                                           |
| Writeup           | 12 (Description, Sample Output) |
