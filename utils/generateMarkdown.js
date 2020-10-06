// function to generate markdown for README

function generateMarkdown(data) {
  const licenseChoices = [
    "1. PUBLIC DOMAIN: The most permissive.  Anyone can modify and use without any restrictions.",
    "2. PERMISSIVE: Contains minimal requirements about how the software can be modified or redistributed.  AKA 'Apache Style' or 'BSD Style'.",
    "3. LGPL: The 'GNU Lesser General Public License'.  Allows links to open source libraries.",
    "4. COPYLEFT: Reciprocal or restrictive licenses.  Allows modification of licensed code as long as the software is distributed under the same software license.",
    "5. PROPRIETARY: The most restrictive.  All rights reserved.  The software may not be modified or redistributed under any circumstances."
  ]
  const licenseLinks = [
    "https://opendatacommons.org/licenses/odbl/",
    "https://www.apache.org/licenses/LICENSE-2.0",
    "https://www.gnu.org/licenses/lgpl-3.0.en.html",
    "https://www.mit.edu/~amini/LICENSE.md",
    "https://www.gnu.org/licenses/agpl-3.0.en.html"
  ]
  const badgeImages = [
    "[![License: ODbL](https://img.shields.io/badge/License-ODbL-brightgreen.svg)](https://opendatacommons.org/licenses/odbl/)",
    "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)",
    "[![License: LGPL v3](https://img.shields.io/badge/License-LGPL%20v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)",
    "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)",
    "[![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)"
  ]
  return ` 
  # ${data.title}
  ${data.license === licenseChoices[0] ? badgeImages[0] : 
    data.license === licenseChoices[1] ? badgeImages[1] : 
    data.license === licenseChoices[2] ? badgeImages[2] : 
    data.license === licenseChoices[3] ? badgeImages[3] : 
    data.license === licenseChoices[4] ? badgeImages[4] : ""}

  ## Table of Contents
  
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing Guidelines](#contributing)
  * [Tests](#tests)
  * [FAQ](#questions)  

  ## Description 
  ${data.description}
  
  ## Installation
  
  ${data.installation}
  
  ## Usage 
  
  ${data.usage}

  ## License
  
  ${data.license  === licenseChoices[0] ? licenseLinks[0] : 
    data.license === licenseChoices[1] ? licenseLinks[1] :
    data.license === licenseChoices[2] ? licenseLinks[2] :
    data.license === licenseChoices[3] ? licenseLinks[3] :
    data.license === licenseChoices[4] ? licenseLinks[4] : ""}
  
  ## Contributing Guidelines
  
  ${data.contributing}
  
  ## Tests
  
  ${data.tests}

  ## FAQ

  ${data.questions}
  `;
}
  
module.exports = generateMarkdown;