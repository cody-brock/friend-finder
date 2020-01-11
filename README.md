# friend-finder

Friend Finder is a full-stack application that uses Node, Express, jQuery, and SweetAlert2 to find your closest friend match via a highly non-rigorous and unscientific psychological survey.  

The user provides their name, a link to their photo, and their responses to a survey.  Then, the app compares their responses to other users' responses, finally returning back the name and photo of the person whose answers were most similar to theirs.

## Getting Started

A deployed version of this project is available at:
https://friend-finder-cody.herokuapp.com/

Should you prefer to download and run a version from your local machine, these instructions will help you do so.

### Prerequisites

In order to get this project running on your local, you will need:
* Node.js
* A GitHub account
* Terminal


### Installing

Clone the repo to your machine.  From your terminal, navigate to the root of the folder and run an npm install to get the mySQL and Express packages:

```
npm i
```

### How to Use

Once your packages are installed, you should be ready to use and edit Friend Finder as you please.

### How it works

The majority of the logic lives within the post request.  The app parses the user's responses, then compares them to all the other users' responses.  It tallies the value of the differences in answers for each question, for each user.  Then, it returns the name and photo of the most similar other user in a modal.


## Author

* **Cody Brock** - *Full project* - [github](https://github.com/cody-brock)


## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* Thank you to tinder for the inspiration
