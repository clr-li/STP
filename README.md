# Seattle Tutoring Partners

A website for a tutoring company. Hosted demo: [https://seattletutoringpartners.web.app/](https://seattletutoringpartners.web.app/)
![image](https://github.com/clr-li/STP/assets/97496861/2a9dfaff-c317-499c-a60f-ef5b33735df7)


## How to edit

On the front-end,

- Edit the static html files (plus CSS and Javascript) in the `public/` folder
- Drag in `assets`, like images or music, to add them to your project

On the back-end,

- The website is hosted using Firebase which is linked to this Glitch project (automatically serves on [`seattletutoringpartners.glitch.me`](seattletutoringpartners.glitch.me) so you can preview changes live)
- Type `node deploy.js` in the terminal (found in footer) to deploy to Firebase project (hosted on [`seattletutoringpartners.web.app`](seattletutoringpartners.web.app) and any other domains added).
- Safely store app secrets in `.env` (nobody can see this but you and people you invite)

Click `Preview` in the footer to see your app live. Updates to your code will instantly deploy.

## Tutor portal micro
The micro lives in .deta/portal-micro. The server file (index.js) uses express. Use `deta deploy` to upload changes to the endpoint url. Use `deta auth disable` to make the endpoint public (i.e. not just browsers can access)
```
{
        "name": "portal-micro",
        "id": "89589a78-6185-4c0f-ad3b-7111073c9c99",
        "project": "b0o5hv7v",
        "runtime": "nodejs14.x",
        "endpoint": "https://b4xr04.deta.dev",
        "region": "us-west-1",
        "visor": "disabled",
        "http_auth": "disabled"
}
```
For editing purposes, a copy of index.js exists in the main glitch root directory which can be edited and then copied to deta cp index.js .deta/portal-micro/index.js
